
import * as tf from '@tensorflow/tfjs';
import { randomChoice } from '../utils';
import { StackedObservations } from './tfModel';

export function predToAction(action_probs: number[]): [number, number] {
  const yprob = randomChoice(action_probs)
  // 0 NOOP ,1 FIRE ,3 RIGHT ,4 LEFT
  let action = 3;
  switch (yprob) {
    case 1: action = 4; break;
    case 2: action = 0; break;
  }
  return [yprob, action];
}


export class Actor {
  model: tf.LayersModel;
  stackObs?: StackedObservations;
  predToAction: (action_probs: number[]) => [number, number]

  constructor(model: tf.LayersModel) {
    this.model = model;
    
    this.predToAction = predToAction
    
  }

  static async fromURL(path: string): Promise<Actor> {
    tf.enableProdMode();
    await tf.ready();
    const m = await tf.loadLayersModel(tf.io.http(path));
    return new Actor(m);
  }

  predict(observation: Uint8Array): number {
    if (!this.stackObs) {
      this.stackObs = new StackedObservations(observation);
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
    const [_, action] = this.predToAction(aprobValue)
   
    return action
  }


}

