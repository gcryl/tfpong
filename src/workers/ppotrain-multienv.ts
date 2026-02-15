import * as tf from '@tensorflow/tfjs';
import { TfModel } from '../models/tfModel';
import { diffObs, predToAction, standardizeNumberArray } from '../utils';
import type { EnvState } from './ale-worker';


function shuffle_bs(xs: number[][], ys: number[], yprobs: number[], ep: number[]): [number[][], number[], number[], number[]] {
  {
    const MINI_BATCH_SIZE = 1 //this.BATCH_EPISODE_SIZE;

    let currentIndex = Math.floor(xs.length / MINI_BATCH_SIZE)
    // While there remain elements to shuffle...
    while (currentIndex != 0) {

      // Pick a remaining element...
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      for (let i = 0; i < MINI_BATCH_SIZE; i++) {
        let ci = currentIndex * MINI_BATCH_SIZE + i;
        let ri = randomIndex * MINI_BATCH_SIZE + i;

        [xs[ci], xs[ri]] = [xs[ri], xs[ci]];

        [ys, yprobs, ep].forEach(a => {
          [a[ci], a[ri]] = [a[ri], a[ci]];
        });
      }
    }

  }
  return [xs, ys, yprobs, ep]
}

class AdamWithSchedule extends tf.AdamOptimizer {
  public setLearningRate(lr: number) {
    this.learningRate = lr;
  }
}

function ppoLoss(yTrue: number[], advantages: number[], yGtOnehot: number[][], yPred: tf.Tensor): tf.Scalar {
  const LOSS_CLIPPING = 0.2;
  return tf.tidy(() => {
    const probs = tf.sum(tf.mul(yPred, yGtOnehot), 1);
    const r = tf.div(probs, tf.add(yTrue, 1e-6));
    const clippedR = tf.clipByValue(r, 1 - LOSS_CLIPPING, 1 + LOSS_CLIPPING);
    const loss1 = tf.mean(tf.minimum(tf.mul(r, advantages), tf.mul(clippedR, advantages)));
    const entropy = tf.neg(tf.mean(tf.mul(probs, tf.log(tf.add(probs, 1e-10)))));
    const loss = tf.neg(tf.add(loss1, tf.mul(1e-6, entropy)));
    return loss as tf.Scalar;
  });
}


/*
 avoid memory leak with tfjs by having always same number of samples.
 tfjs keeps webgl/webgpu structs in cache even if there were disposed, and tfjs reuse if size equals.
*/
function fixSizeAvoidMemoryLeak<T>(arr: T[], TRAIN_LEN = 4000): T[] {
  const last_index = arr.length
  let current_index = 0

  // fill by repeating last value
  while (arr.length < TRAIN_LEN) {
    current_index -= 1
    if (current_index == -1) {
      current_index = last_index - 1
    }
    arr.push(arr[current_index])

  }
  // truncate beginning
  if (arr.length > TRAIN_LEN) {
    arr = arr.slice(-TRAIN_LEN)
  }
  return arr
}

class TrainFitData {
  readonly discountedRewards: number[] = [];
  readonly xs: number[][] = [];
  readonly yprobs: number[] = [];
  readonly ys: number[] = [];

  readonly gamma: number;

  constructor(gamma: number) {
    this.gamma = gamma;
  }

  clear() {
    this.discountedRewards.length = 0;
    this.xs.length = 0;
    this.yprobs.length = 0;
    this.ys.length = 0;
  }

  private rewardToDiscountRewards(episodeRewards: number[] = []) {
    const discounted: number[] = new Array(episodeRewards.length).fill(0);
    let running_add = 0;
    for (let t = episodeRewards.length - 1; t >= 0; t--) {
      if (episodeRewards[t] !== 0) running_add = 0;
      running_add = running_add * this.gamma + episodeRewards[t];
      discounted[t] = running_add;
    }
    return discounted
  }

  add(collectedData: EnvTrainData) {
    collectedData.xs.forEach(v => this.xs.push(v));
    collectedData.yprobs.forEach(v => this.yprobs.push(v));
    collectedData.ys.forEach(v => this.ys.push(v));
    const discounted_rewards = this.rewardToDiscountRewards(collectedData.rewards)
    discounted_rewards.forEach(v => this.discountedRewards.push(v));
  }
}

class EnvTrainData {
  readonly rewards: number[] = [];
  readonly xs: number[][] = [];
  readonly yprobs: number[] = [];
  readonly ys: number[] = [];

  clear() {
    this.yprobs.length = 0;
    this.ys.length = 0;
    this.rewards.length = 0;
    this.xs.length = 0;
  }

  pushInput (obs : number[], yprob : number, ya : number) {
    this.xs.push(obs);
    this.yprobs.push(yprob);
    this.ys.push(ya);
  }

  pushReward(r : number) {
    this.rewards.push(r);
  }
}

class StackedObservations {
  current : Uint8Array;
  previous : Uint8Array;

  constructor (first : Uint8Array) {
    this.current = first;
    this.previous = first;
  }

  rollObservation (newOne : Uint8Array) {
    this.previous = this.current;
    this.current = newOne;
  }

  diff () {
    return diffObs(this.current, this.previous);
  }

  static readonly EMPTY = new StackedObservations(new Uint8Array(0));
}


// inspiration by https://github.com/s-gv/pong-keras/blob/master/pong-ppo.py
export class PPOTrainer {
  private readonly gamma: number = 0.99;
  private readonly ENV_COUNT = 16;
  private readonly BATCH_EPISODE_SIZE = 8;
  private readonly BATCH_SIZE = this.BATCH_EPISODE_SIZE * this.ENV_COUNT;

  readonly ppoPong: TfModel;

  private optimizer: AdamWithSchedule;
  private sampleShape: number[];

  private oneHot: (i: number) => number[];

  private trainData: TrainFitData;
  private envTrainData: EnvTrainData[];

  private readonly envObservations : (StackedObservations)[] =  [];

  private rewardSums: number = 0 ;
  private eDones: boolean[] = [];


  constructor(learningRate: number) {
    this.ppoPong = new TfModel();
    this.optimizer = new AdamWithSchedule(learningRate, 0.9, 0.999, undefined);
    this.sampleShape = this.ppoPong.sampleShape;

    this.trainData = new TrainFitData(this.gamma);

    this.envTrainData = [];
    for (let i = 0; i < this.ENV_COUNT; i++) {
       this.envObservations.push(StackedObservations.EMPTY); 
       this.envTrainData.push(new EnvTrainData());
    }
   
    const eyeds: number[][] = [];
    const dim = this.ppoPong.actionCount
    for (let i = 0; i < dim; i++) {
      const length = dim
      const eyed = Array.from(
        { length }, (_, j) => (j === i ? 1 : 0)
      );
      eyeds.push(eyed);
    }
    this.oneHot = (i) => eyeds[i];
  }

  compute_y_eyed(ys: number[]) {
    const y_true: number[][] = [];
    for (let i = 0; i < ys.length; i++) {
      y_true.push(this.oneHot(ys[i]))
    }
    return y_true
  }

  fixSizeToAvoidMemoryLeak(xs: number[][], ys: number[], yprobs: number[], advantages: number[]): [number[][], number[], number[], number[]] {
    return [fixSizeAvoidMemoryLeak(xs, this.BATCH_SIZE),
    fixSizeAvoidMemoryLeak(ys, this.BATCH_SIZE),
    fixSizeAvoidMemoryLeak(yprobs, this.BATCH_SIZE),
    fixSizeAvoidMemoryLeak(advantages, this.BATCH_SIZE)]
  }

  async fit() {
    const [xs, ys, yprobs, discountedRewards]
      = shuffle_bs(this.trainData.xs, this.trainData.ys, this.trainData.yprobs, this.trainData.discountedRewards)
    for (let i = 0; i < xs.length; i += this.BATCH_SIZE) {
      let b_xs = xs.slice(i, i + this.BATCH_SIZE);
      let b_ys = ys.slice(i, i + this.BATCH_SIZE);
      let b_yprobs = yprobs.slice(i, i + this.BATCH_SIZE);
      let b_discounted_rewards = discountedRewards.slice(i, i + this.BATCH_SIZE);
      let b_advantages = standardizeNumberArray(b_discounted_rewards);

      [b_xs, b_ys, b_yprobs, b_advantages] = this.fixSizeToAvoidMemoryLeak(b_xs, b_ys, b_yprobs, b_advantages)

      const b_y_true = this.compute_y_eyed(b_ys)
      tf.tidy(() => {
        const tfX = tf.tensor(b_xs).reshape([-1, ... this.sampleShape])

        this.optimizer.minimize(() => {
          const preds = this.ppoPong.model.apply(tfX) as tf.Tensor;
          const loss = ppoLoss(b_yprobs, b_advantages, b_y_true, preds);
          return loss
        })
      })
      await Promise.resolve();  // be nice, try to limit freeze
    }
  }

  areAllEnvsDone() {
    return this.eDones.reduce((acc, v) => acc && v, true);
  }

  countEnvsRunning() {
    return this.eDones.reduce((acc, v) => v? acc: acc +=1, 0);
  }

  startEpisode() {
    for (let index = 0; index < this.ENV_COUNT; index++) {
      this.envTrainData[index].clear();
      this.rewardSums = 0
      this.eDones[index] = false;
    };
  }


  onResetEnv(envId: number, o: Uint8Array) {
    this.envObservations [envId] = new StackedObservations(o);
  }

  onStateEnv(envId: number, s: EnvState) {
    this.envTrainData[envId].pushReward(s.reward);
    this.rewardSums += s.reward;
    this.eDones[envId] = s.done;
    this.envObservations[envId].rollObservation(s.observation);
    if (s.done) {
      this.trainData.add(this.envTrainData[envId]);
      this.envTrainData[envId].clear();
    }
  }

  async fitEnvs(currLR: number) {
    this.optimizer.setLearningRate(currLR)
    await this.fit();
    this.trainData.clear();

    const r = this.rewardSums / this.ENV_COUNT;
  
    return { "meanReward": r}
  }

  chooseAction(): { envId: number, action: number }[] {
    const actionForRunningEnv: { envId: number, action: number }[] = [];
    tf.tidy(() => {
      const obs  = this.envObservations.map ( (o, _) => o.diff() );
   
      const tf_action_probs = this.ppoPong.forward(obs);
      const action_probs = tf_action_probs.arraySync();

      for (let index = 0; index < this.ENV_COUNT; index++) {
        if (!this.eDones[index]) {
          const [ya, action] = predToAction(action_probs[index])
          const yprob = action_probs[index][ya]

          this.envTrainData[index].pushInput(obs[index], yprob,ya);
          actionForRunningEnv.push({ "envId": index, "action": action });
        }
      }
    });
    return actionForRunningEnv;
  }

}
