import * as tf from '@tensorflow/tfjs';
import '@tensorflow/tfjs-backend-webgpu';
import { PPOTrainer } from './ppotrain-multienv';
import { TrainParams, WorkerOrchestrator, type OnEpisodeEnd } from './worker-orchestrator';

export interface TrainArgsPayload {
  epochs: number
  modelPath: string,
  retrain?: boolean,
  repeatActionProbability?: number,
  stopTrain?: boolean
}

export interface WorkerStatusPayload {
  episodeStats?: {
    episodeNumber: number,
    score: number,
    elapsedTimeInMs: number
  }
  modelSavePath?: string,
  trainingDone?: boolean,
  statusText? : string
}



let ppoTrainer: PPOTrainer;
let workerOrchestrator : WorkerOrchestrator;

onmessage = function (event: MessageEvent<TrainArgsPayload>) {
  if (event.data.stopTrain) {
    if (workerOrchestrator)
      workerOrchestrator.stopTrain();
  } else {
    tf.enableProdMode();
    tf.ready().then(() => {
      train(event.data);
    })
  }

};

async function train(params: TrainArgsPayload) {
  const TRAIN_PARAMS= new TrainParams(params.epochs,  params.repeatActionProbability)
     
  if (ppoTrainer == null) {
     ppoTrainer = new PPOTrainer(TRAIN_PARAMS.learningRate);
     workerOrchestrator = new WorkerOrchestrator(ppoTrainer);
  }
    
  const skipUpdateModel = 5;
  if (params.modelPath && params.retrain) {
    const model = await tf.loadLayersModel(params.modelPath);
    ppoTrainer.ppoPong.setModel(model);
  }

  const updateStatus: OnEpisodeEnd = async (model, episodeNumber, reward_sum, elapsedTimeInMs) => {
    const stats = {
      "episodeNumber": episodeNumber,
      "score": reward_sum,
      "elapsedTimeInMs": elapsedTimeInMs
    };
    const toSave = episodeNumber % skipUpdateModel == 0;

    if (toSave) {
      await model.save(params.modelPath)
    }
    const m: WorkerStatusPayload = {
      episodeStats: stats,
      modelSavePath: toSave ? params.modelPath : undefined
    }
    postMessage(m)
  };
  workerOrchestrator.onEpisodeEnd = updateStatus;
  workerOrchestrator.onEndTraining = () => { postMessage({"trainingDone" : true}) };
  workerOrchestrator.onStatusTextUpdate = (statusText) => { postMessage({"statusText" : statusText}) };

  workerOrchestrator.train(TRAIN_PARAMS);
}


