
import * as tf from '@tensorflow/tfjs';

function standardizeInt8Array(arr: Int8Array) {
  const mean = arr.reduce((sum, val) => sum + val, 0) / arr.length;
  const stdDev = Math.sqrt(arr.reduce((sum, val) => sum + Math.pow(val - mean, 2), 0) / arr.length);
  if (stdDev === 0) {
    return arr.map(() => 0);
  }
  return arr.map(num => (num - mean) / stdDev);
}

function randomChoice(probs: number[]): number {
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

function diffObs(observation: Uint8Array, prev_obs: Uint8Array): number[] {
    const diffs: Int8Array = new Int8Array(observation.length);
    observation.forEach((v, index) => diffs[index] = (v - prev_obs[index]));
    const cur_x = standardizeInt8Array(diffs)

    const a: number[] = []
    cur_x.forEach(v => a.push(v))
    return a
}

export class PongActor {
  model: tf.LayersModel;
  prev?: Uint8Array;

  constructor(model: tf.LayersModel) {
    this.model = model
  }
  static async fromURL (path : string ) : Promise<PongActor>{
     const m = await tf.loadLayersModel(tf.io.http(path));
     return new PongActor(m);
  }

  predict(observation: Uint8Array): number {
    if (!this.prev)
      this.prev = new Uint8Array(observation)
    const observations = [diffObs(observation, this.prev)];

    this.prev = new Uint8Array(observation)
    const aprob = tf.tidy(() => {
      const x: tf.Tensor1D = tf.tensor(observations).reshape([observations.length, 80, 80, 1])
      const tf_action_probs = this.model.predict(x);
      const action_probs = (tf_action_probs as tf.Tensor2D)
      return action_probs
    })
    const aprobValue = aprob.arraySync()[0];
    aprob.dispose()
    const [_, action] = this.predToAction(aprobValue)

    return action
  }

  predToAction(action_probs: number[]): [number, number] {
    const yprob = randomChoice(action_probs)
    let action = 3 // RIGHT
    if (yprob == 1)
      action = 4 // LEFT
    else if (yprob == 2)
      action = 0 // NOOP
    return [yprob, action];
  }
}

