import * as tf from '@tensorflow/tfjs';
import aleWorker from './ale-worker?worker'
import type { EnvState } from './ale-worker';
import { PPOTrainer } from './ppotrain-multienv';
import { sleep } from '../utils';


export interface OnEpisodeEnd {
  (model: tf.LayersModel, episodeNum: number, reward_sum: number, elapsedTimeInMs: number): Promise<void>
}

export interface OnStatusTextUpdate {
  (statusText: string): void
}

export type TrainParams = {
  repeatActionProbability: number;
  epochs: number;
  romPath: string;
  learningRate: number;
  minLearningRate : number;
  pongMode : boolean;
  trainEpochInterval : number;
};

const defaultParams: TrainParams = {
  repeatActionProbability: 0,
  epochs: 80,
  romPath: "",
  learningRate: 2.5e-4,
  minLearningRate :  1.e-7,
  pongMode : true,
  trainEpochInterval : 1
};

export class WorkerOrchestrator {
  readonly ENV_COUNT = 16;

  private envWorkers: Worker[] = [];
  private running: boolean = false;
  private ppoTrainer: PPOTrainer;
  private episodeNumber: number = 0;
  private trainParams: TrainParams = defaultParams;

  onEpisodeEnd?: OnEpisodeEnd;
  onEndTraining?: () => void;
  onStatusTextUpdate?: OnStatusTextUpdate;

  private eStartTime: number = 0;
  private contextRoot: string;

  constructor(ppoTrainer: PPOTrainer, contextRoot: string) {
    this.ppoTrainer = ppoTrainer;
    this.contextRoot = contextRoot;
  }

  async startEnvWorker() {
    const workerToStartCount = this.ENV_COUNT - this.envWorkers.length;
    if (workerToStartCount == 0) {
      return new Promise<void>((res, _) => res());
    }
    this.updateStatusText(`Starting ${workerToStartCount} ALE env, wait ...`);

    const loadedPromises: Promise<void>[] = [];
    for (let i = this.envWorkers.length; i < this.ENV_COUNT; i++) {
      const w = new aleWorker();
      this.envWorkers.push(w);
      loadedPromises.push(new Promise((resolve, _) => {
        const romLoadedChannel = new MessageChannel();
        romLoadedChannel.port1.onmessage = () => resolve();
        w.postMessage({
          "envId": i, "loadROM": true,
          "loadROMParams": {
            romPath: this.trainParams.romPath,
            repeatActionProbability: this.trainParams.repeatActionProbability,
            frameSkip: 4,
            pongMode : this.trainParams.pongMode
          },
          "contextRoot": this.contextRoot
        }, [romLoadedChannel.port2])

      }));
    }
    return Promise.all(loadedPromises)
  }


  private async postWaitResponse<M, A, R>(envId: number, msgToPostBuilder: () => M, reply: (envId: number, a: A) => R) {
    type withEnv = { envId: number, payload: A };

    const w: Worker = this.envWorkers[envId];
    const p = new Promise<withEnv>((resolve, _) => {
      const channel = new MessageChannel();
      channel.port1.onmessage = (event: MessageEvent<withEnv>) => resolve(event.data);
      w.postMessage(msgToPostBuilder(), [channel.port2]);
    });
    return p.then(r => {
      return reply(r.envId, r.payload);
    });
  }

  private postAndWaitForAllEnv<M, A, R>(msgToPostBuilder: (envId: number) => M, reply: (envId: number, a: A) => R) {
    type withEnv = { envId: number, payload: A };
    const promises: Promise<R>[] = [];
    this.envWorkers.forEach((w, envId) => {
      const p = new Promise<withEnv>((resolve, _) => {
        const channel = new MessageChannel();
        channel.port1.onmessage = (event: MessageEvent<withEnv>) => resolve(event.data),
          w.postMessage(msgToPostBuilder(envId), [channel.port2]);
      });
      promises.push(p.then(r => reply(r.envId, r.payload)));
    });
    return Promise.all(promises);
  }

  private updateStatusText(statusText: string) {
    if (this.onStatusTextUpdate) this.onStatusTextUpdate(statusText);
  }

  async train(params: Partial<TrainParams> = {}) {
    if (params)
      this.trainParams = { ...defaultParams, ...params }
    this.running = true;
    await this.startEnvWorker();
    this.episodeNumber = 0;
    while (this.running && this.episodeNumber <= this.trainParams.epochs) {
      this.updateStatusText(`Collecting train data ...`);
      this.eStartTime = Date.now()
      this.ppoTrainer.startEpisode();
      await this.postAndWaitForAllEnv((x) => { return { "envId": x, "resetEnv": true } },
        (envId: number, observation: Uint8Array) => this.ppoTrainer.onResetEnv(envId, observation)
      );

      let runningCount = this.ppoTrainer.countEnvsRunning();
      while (!this.ppoTrainer.areAllEnvsDone() && this.running) {
        const actionForEachRuningEnv = await this.ppoTrainer.chooseAction();
        const envStates = await
          Promise.all(
            Array.from(actionForEachRuningEnv.entries(), async ([_, { envId, action }]) => {
              return this.postWaitResponse(envId, () => { return { "envId": envId, "actionToPlay": action } },
                (x: number, state: EnvState) => { this.ppoTrainer.onStateEnv(x, state); return state });
            })
          );

        if (envStates.length != runningCount) {
          runningCount = envStates.length;
          this.updateStatusText(`Collecting train data ... ${runningCount} envs running`);
        }

        if (this.ppoTrainer.areAllEnvsDone() && this.running) {
          if (this.onEpisodeEnd) {
            const duration = (Date.now() - this.eStartTime) / this.ENV_COUNT
            this.onEpisodeEnd(this.ppoTrainer.brain.model, this.episodeNumber,
              this.ppoTrainer.meanReward(), duration)
          }
          if ((this.episodeNumber % this.trainParams.trainEpochInterval) == 0) {
            this.updateStatusText(`Fitting ... (could freeze UI)`);
            let curr_lr = this.trainParams.learningRate * ((this.trainParams.epochs - this.episodeNumber) / this.trainParams.epochs)
            curr_lr = Math.max(curr_lr, this.trainParams.minLearningRate)
            await this.ppoTrainer.fitEnvs(curr_lr);
            this.updateStatusText("Fitting done ");
          }
        }

      }
      this.episodeNumber += 1;
      await sleep(100);
    }
    if (this.episodeNumber == this.trainParams.epochs)
      this.updateStatusText(`Training done, ${this.trainParams.epochs} epochs`);
    else
      this.updateStatusText("Training aborted");
    if (this.onEndTraining) this.onEndTraining();
    this.ppoTrainer.clear();
  }

  stopTrain() {
    this.running = false;
  }
}
