import * as tf from '@tensorflow/tfjs';
import '@tensorflow/tfjs-backend-webgpu';
import { PPOTrainer } from './ppotrain-multienv';
import { type TrainParams, WorkerOrchestrator, type OnEpisodeEnd } from './worker-orchestrator';

export interface TrainArgsPayloadz {
  epochs: number
  modelPath: string,
  retrain?: boolean,
  repeatActionProbability?: number,
  stopTrain?: boolean,
  actionCount?: number
}

const MSG_TRAIN_TYPE = 0;
const MSG_STOP_TYPE = 1;

type TrainArgs = {
  type: number, modelPath: string, actionCount: number,  retrain?: boolean, 
  params: TrainParams
};

type StopArgs = { type: number, stopTrain: boolean };

export type TrainArgsPayload =
  | TrainArgs
  | StopArgs;

export const stopTrainMsg: TrainArgsPayload = { type: MSG_STOP_TYPE, stopTrain: true };

export function trainMsg(epochs: number, actionCount: number, modelPath: string, romPath: string,
  pongMode : boolean, learningRate:number, trainEpochInterval : number, retrain?: boolean, 
  repeatActionProbability: number = 0): TrainArgsPayload {
  return {
    type: MSG_TRAIN_TYPE,
    params: { epochs, repeatActionProbability, romPath, learningRate,minLearningRate : 1e-7, pongMode, trainEpochInterval},
    actionCount, modelPath, retrain
  };
}

export interface StopTrainArgsPayload {
  stopTrain: boolean,
}

export interface StopTrainArgsPayload {
  stopTrain: boolean,
}


export interface WorkerStatusPayload {
  episodeStats?: {
    episodeNumber: number,
    score: number,
    elapsedTimeInMs: number
  }
  modelSavePath?: string,
  trainingDone?: boolean,
  statusText?: string
}

let ppoTrainer: PPOTrainer;
let workerOrchestrator: WorkerOrchestrator;

onmessage = function (event: MessageEvent<TrainArgsPayload>) {
  const contextRoot = import.meta.env.BASE_URL;
  if (event.data.type == MSG_STOP_TYPE) {
    if (workerOrchestrator)
      workerOrchestrator.stopTrain();
  } else if (event.data.type == MSG_TRAIN_TYPE) {
    tf.enableProdMode();
    tf.ready().then(() => {
      train(event.data as TrainArgs, contextRoot);
    })
  }

};

async function train(args: TrainArgs, contextRoot: string) {

  if (ppoTrainer == null) {
    ppoTrainer = new PPOTrainer(args.params.learningRate, args.params.pongMode);
    workerOrchestrator = new WorkerOrchestrator(ppoTrainer, contextRoot);
  }

  const skipUpdateModel = 5;
  if (args.modelPath && args.retrain) {
    const model = await tf.loadLayersModel(args.modelPath);
    ppoTrainer.brain.setModel(model);
  }

  const updateStatus: OnEpisodeEnd = async (model, episodeNumber, reward_sum, elapsedTimeInMs) => {
    const stats = {
      "episodeNumber": episodeNumber,
      "score": reward_sum,
      "elapsedTimeInMs": elapsedTimeInMs
    };
    const toSave = (episodeNumber % skipUpdateModel == 0) || (episodeNumber == args.params.epochs-1) ;

    if (toSave) {
      await model.save(args.modelPath)
    }
    const m: WorkerStatusPayload = {
      episodeStats: stats,
      modelSavePath: toSave ? args.modelPath : undefined
    }
    postMessage(m)
  };
  workerOrchestrator.onEpisodeEnd = updateStatus;
  workerOrchestrator.onEndTraining = () => { postMessage({ "trainingDone": true }) };
  workerOrchestrator.onStatusTextUpdate = (statusText) => { postMessage({ "statusText": statusText }) };
  workerOrchestrator.train(args.params);
}


