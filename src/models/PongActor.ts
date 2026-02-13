
import * as tf from '@tensorflow/tfjs';
import { diffObs, predToAction } from '../utils';


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
    const [_, action] = predToAction(aprobValue)

    return action
  }

  
}

