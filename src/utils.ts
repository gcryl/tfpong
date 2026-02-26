
import * as tf from '@tensorflow/tfjs';


export async function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export function predToAction(action_probs: number[]): [number, number] {
  const yprob = randomChoice(action_probs)
  let action = 3 // RIGHT
  if (yprob == 1)
    action = 4 // LEFT
  else if (yprob == 2)
    action = 0 // NOOP
  return [yprob, action];
}

export function standardizeNumberArray(arr: number[]) {
  const mean = arr.reduce((sum, val) => sum + val, 0) / arr.length;
  const stdDev = Math.sqrt(arr.reduce((sum, val) => sum + Math.pow(val - mean, 2), 0) / arr.length);

  if (stdDev === 0) {
    return arr.map(() => 0);
  }

  return arr.map(num => (num - mean) / stdDev);
}

export function standardizeInt8Array(arr: Int8Array) {
  const mean = arr.reduce((sum, val) => sum + val, 0) / arr.length;
  const stdDev = Math.sqrt(arr.reduce((sum, val) => sum + Math.pow(val - mean, 2), 0) / arr.length);
  if (stdDev === 0) {
    return arr.map(() => 0);
  }
  return arr.map(num => (num - mean) / stdDev);
}

export function randomChoice(probs: number[]): number {
  const total = probs.reduce((a, b) => a + b, 0);
  const normalized = probs.map(p => p / total);

  const rand = Math.random();
  let cumulative = 0;

  for (let i = 0; i < normalized.length; i++) {
    cumulative += normalized[i];
    if (rand < cumulative) {
      return i;
    }
  }
  return normalized.length - 1;
}

/*
* From screen to 80x80x1 bw
**/
export function preprocess(screen: Uint8ClampedArray): Uint8Array {
  const FACTOR = 2
  const IMG_SIZE = 160 / FACTOR
  let obs_index = 0
  const shift_line = 35
  const preprocessed = new Uint8Array(80 * 80);
  var screenC = new Uint8Array(screen);
  //   35:195
  for (let lineIndex = 0; lineIndex < IMG_SIZE * FACTOR; lineIndex += FACTOR) {
    obs_index = IMG_SIZE * lineIndex / FACTOR
    for (let index = 0; index < IMG_SIZE * FACTOR; index += FACTOR) {
      let element = screenC[(lineIndex + shift_line) * 160 + index];
      if (element == 87)
        element = 0
      else
        element = 1
      preprocessed[obs_index] = element;
      obs_index += 1
    }
  }
  return preprocessed;
}


export async function saveModelToString(model: tf.LayersModel): Promise<string> {
  let modelString = '';

  return model.save(
    tf.io.withSaveHandler(async (artifacts) => {
      modelString = JSON.stringify({
        modelTopology: artifacts.modelTopology,
        weightSpecs: artifacts.weightSpecs,
        weightData: Array.from(new Uint8Array(artifacts.weightData as ArrayBuffer)),
      });
      return {
        modelArtifactsInfo: {
          dateSaved: new Date(),
          modelTopologyType: 'JSON',
        },
      };
    }), { includeOptimizer: false }
  ).then(() => modelString)
}

export async function loadModelFromString(modelString: string): Promise<tf.LayersModel> {
  const parsed = JSON.parse(modelString) as {
    modelTopology: any;
    weightSpecs: tf.io.WeightsManifestEntry[];
    weightData: number[];
  };

  const weightArray = new Uint8Array(parsed.weightData ?? []);
  const artifacts: tf.io.ModelArtifacts = {
    modelTopology: parsed.modelTopology,
    weightSpecs: parsed.weightSpecs,
    weightData: weightArray.buffer,
  };

  return tf.loadLayersModel(tf.io.fromMemory(artifacts))
}
