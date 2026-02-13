import * as tf from '@tensorflow/tfjs';



export class TfModel  {
    model: tf.LayersModel 
   
    constructor () {
        const model : tf.Sequential = tf.sequential()
        this.model = model
        // C 32 8 4
        // C 64 4 2
        // C 64 3 1
        // D 512
         model.add(tf.layers.conv2d({
                    inputShape: [80, 80, 1],
                    kernelSize: 8,
                    filters: 32,
                    strides: 4,
                    useBias : false,
                    activation: 'relu',
         }));
         model.add(tf.layers.conv2d({
                    kernelSize: 4,
                    filters: 64,
                    strides: 2,
                    useBias : false,
                    activation: 'relu',
          }));
         model.add(tf.layers.conv2d({
                    kernelSize: 3,
                    filters: 64,
                    strides: 1,
                    useBias : false,
                    activation: 'relu',
          }));
        
        model.add(tf.layers.flatten())
        model.add(tf.layers.dense({units:512 , activation:"relu"
         }))
     
        model.add(tf.layers.dense({units: this.actionCount, activation:"softmax",}))
    }
    
    setModel (model: tf.LayersModel) {
       this.model = model
    }

    forward(observations: number[][]) :tf.Tensor2D{
        return tf.tidy(() => {
            const x : tf.Tensor1D =  tf.tensor (observations).reshape([observations.length,80,80,1])
            
            const tf_action_probs = this.model.predict(x);
            const action_probs = (tf_action_probs as tf.Tensor2D)
            return action_probs
        })
    }

    readonly sampleShape =  [80,80,1]
    readonly actionCount = 2
}

