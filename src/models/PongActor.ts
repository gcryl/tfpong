
import * as tf from '@tensorflow/tfjs';
import { predToAction } from '../utils';
import { StackedObservations } from './tfModel';


export class PongActor {
  model: tf.LayersModel;
  stackObs?: StackedObservations;

  constructor(model: tf.LayersModel) {
    this.model = model
  }
  static async fromURL (path : string ) : Promise<PongActor>{
     const m = await tf.loadLayersModel(tf.io.http(path));
     return new PongActor(m);
  }

  predict(observation: Uint8Array): number {
    if (!this.stackObs) {
        this.stackObs =  new StackedObservations(observation);
    }
    this.stackObs.rollObservation(observation);
    const observations = this.stackObs.sample()
    const aprob = tf.tidy(() => {
      const x: tf.Tensor1D = tf.tensor(Array.from(observations)).reshape([1, 80, 80, 2])
      const tf_action_probs = this.model.predict(x);
      const action_probs = (tf_action_probs as tf.Tensor2D)
      return action_probs.arraySync()[0];
    })
    const aprobValue = aprob;
    const [_, action] = predToAction(aprobValue)

    return action
  }

  
}

