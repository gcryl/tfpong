import * as tf from '@tensorflow/tfjs';
import aleWorker from './ale-worker?worker'
import type { EnvState } from './ale-worker';
import { PPOTrainer } from './ppotrain-multienv';


export interface OnEpisodeEnd {
  (model: tf.LayersModel, episodeNum: number, reward_sum: number, elapsedTimeInMs: number): Promise<void>
}

export interface OnStatusTextUpdate {
  (statusText: string): void
}

export class TrainParams {
  readonly repeatActionProbability: number;
  readonly epochs: number;
  readonly romPath: string;
  readonly learningRate: number;

  constructor(epochs: number = 80, repeatActionProbability: number = 0, learningRate: number = 2.5e-4) {
    this.repeatActionProbability = repeatActionProbability;
    this.epochs = epochs;
    this.learningRate = learningRate;
    this.romPath = "/roms/pong.bin";
  }
}


export class WorkerOrchestrator {
  readonly ENV_COUNT = 16;

  private envWorkers: Worker[] = [];
  private waitWorkerCounter: number = 0;
  private running: boolean = false;
  private ppoTrainer: PPOTrainer;
  private episodeNumber: number = 0;
  private trainParams: TrainParams = new TrainParams();

  onEpisodeEnd?: OnEpisodeEnd;
  onEndTraining?: () => void;
  onStatusTextUpdate?: OnStatusTextUpdate;

  private eStartTime: number = 0;

  constructor(ppoTrainer: PPOTrainer) {
    this.ppoTrainer = ppoTrainer;
  }

  startEnvWorker() {
    function bindAleWorkerEvent(w: Worker, me: WorkerOrchestrator) {
      w.onmessage = function (event) {
        if (event.data.ROMLoaded) {
          me.onROMLoaded(this, event.data.envId);
        } else if (event.data.observation) {
          me.onReset(this, event.data.envId, event.data.observation);
        } else if (event.data.state) {
          me.onState(this, event.data.envId, event.data.state);
        }
      }
    }
    this.waitWorkerCounter = this.ENV_COUNT - this.envWorkers.length;
    if (this.waitWorkerCounter == 0) {
      this.startEpisode();
      return;
    }
    this.updateStatusText(`Starting ${this.waitWorkerCounter} ALE env, wait ...`);
    for (let i = this.envWorkers.length; i < this.ENV_COUNT; i++) {
      const w = new aleWorker();
      bindAleWorkerEvent(w, this);
      this.envWorkers.push(w);
      w.postMessage({
        "envId": i, "loadROM": true,
        "loadROMParams": {
          romPath: this.trainParams.romPath,
          repeatActionProbability: this.trainParams.repeatActionProbability,
          frameSkip: 4
        }
      })
    }
  }

  private startEpisode() {
    this.updateStatusText(`Collecting train data ...`);
    this.ppoTrainer.startEpisode();
    this.waitWorkerCounter = this.ENV_COUNT;
    this.eStartTime = Date.now()
    this.envWorkers.forEach((env, _) => {
      env.postMessage({ "resetEnv": true })
    });
  }

  onROMLoaded(_worker: Worker, _: number) {
    this.waitWorkerCounter -= 1;
    if (this.waitWorkerCounter == 0) {
      this.startEpisode()
    }
  }

  onReset(_worker: Worker, envId: number, o: Uint8Array) {
    this.waitWorkerCounter -= 1;
    this.ppoTrainer.resetEnv(envId, o);
    if (this.waitWorkerCounter == 0) {
      setTimeout(() => this.chooseAction());
    }
  }

  chooseAction() {
    const actionByRuningEnv = this.ppoTrainer.chooseAction();
    this.waitWorkerCounter = actionByRuningEnv.length;
    actionByRuningEnv.forEach(({ envId, action }, _) => {
      this.envWorkers[envId].postMessage({ "actionToPlay": action })
    });
  }


  async onState(_worker: Worker, envId: number, s: EnvState) {
    this.waitWorkerCounter -= 1;
    this.ppoTrainer.onStateEnv(envId, s);
    if (s.done) {
      this.updateStatusText(`ALE ${envId} episode end, still ${this.waitWorkerCounter} running`);
    }
    if (this.waitWorkerCounter == 0) {
      if (!this.running) {
        if (this.onEndTraining) this.onEndTraining();
        this.updateStatusText("Training aborted");
        return;
      }
      if (this.ppoTrainer.areAllEnvsDone()) {
        this.updateStatusText(`Fitting ... (could freeze UI)`);
        const curr_lr = this.trainParams.learningRate * ((this.trainParams.epochs - this.episodeNumber) / this.trainParams.epochs)

        const stats = await this.ppoTrainer.fitEnvs(curr_lr);
        this.updateStatusText("Fitting done");
        if (this.onEpisodeEnd) {
          const duration = (Date.now() - this.eStartTime) / this.ENV_COUNT
          this.onEpisodeEnd(this.ppoTrainer.ppoPong.model, this.episodeNumber, stats.meanReward, duration)
        }

        this.episodeNumber += 1;
        if (this.episodeNumber < this.trainParams.epochs)
          this.startEpisode();
        else
          this.updateStatusText(`Training done, ${this.trainParams.epochs} epochs`);
      } else {
        this.chooseAction();
      }
    }
  }

  private updateStatusText(statusText: string) {
    if (this.onStatusTextUpdate) this.onStatusTextUpdate(statusText);
  }

  async train(trainParams?: TrainParams) {
    this.running = true;
    if (trainParams)
      this.trainParams = trainParams;
    this.startEnvWorker();
  }

  stopTrain() {
    this.running = false;
  }
}
