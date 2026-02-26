import * as tf from '@tensorflow/tfjs';
import { standardizeInt8Array } from '../utils';

export class StackedObservations {
  current: Uint8Array;
  previous: Uint8Array;

  constructor(first: Uint8Array) {
    this.current = first;
    this.previous = first;
  }

  rollObservation(newOne: Uint8Array) {
    this.previous = this.current;
    this.current = newOne;
  }

  sample() {
    const cur_x = standardizeInt8Array(new Int8Array(this.current))
    const prev_x = standardizeInt8Array(new Int8Array(this.previous))
    const combined = new Int8Array(cur_x.length + prev_x.length);
    combined.set(cur_x, 0);
    combined.set(prev_x, cur_x.length);
    return combined;
  }

  static readonly EMPTY = new StackedObservations(new Uint8Array(0));
}

export class TfModel {
  model: tf.LayersModel

  constructor() {
    const model: tf.Sequential = tf.sequential()
    this.model = model
    // C 32 8 4
    // C 64 4 2
    // C 64 3 1
    // D 512
    model.add(tf.layers.conv2d({
      inputShape: [80, 80, 2],
      kernelSize: 8,
      filters: 32,
      strides: 4,
      useBias: false,
      activation: 'relu',
    }));
    model.add(tf.layers.conv2d({
      kernelSize: 4,
      filters: 64,
      strides: 2,
      useBias: false,
      activation: 'relu',
    }));
    model.add(tf.layers.conv2d({
      kernelSize: 3,
      filters: 64,
      strides: 1,
      useBias: false,
      activation: 'relu',
    }));

    model.add(tf.layers.flatten())
    model.add(tf.layers.dense({
      units: 512, activation: "relu"
    }))

    model.add(tf.layers.dense({ units: this.actionCount, activation: "softmax", }))
  }

  setModel(model: tf.LayersModel) {
    this.model = model
  }

  forward(observations: number[][] | Int8Array[]): tf.Tensor2D {
    let numericObservations: number[][];
    if (observations[0] instanceof Int8Array) {
      // Convert Int8Array[] -> number[][]
      numericObservations = (observations as Int8Array[])
        .map(row => Array.from(row));
    } else {
      // Already number[][]
      numericObservations = observations as number[][];
    }
    return tf.tidy(() => {
      const x: tf.Tensor1D = tf.tensor(numericObservations).reshape([observations.length, 80, 80, 2])
      const tf_action_probs = this.model.predict(x);
      const action_probs = (tf_action_probs as tf.Tensor2D)
      return action_probs
    })
  }

  readonly sampleShape = [80, 80, 2]
  readonly actionCount = 2
}

