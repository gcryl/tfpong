# Atari AI Agent with TensorFlow.js using The Arcade Learning Environment 
Play against an AI-powered Pong & Breakout agent directly in your browser.

Machine Learning powered by TensorFlow.js

Atari 2600 emulation via WebAssembly using the Arcade Learning Environment (ALE)

This application trains a Convolutional Neural Network (CNN) in-browser to learn how to play Pong autonomously.
On a MacBook Air M1 (16GB RAM) with Google chrome, the agent typically learns to outperform the built-in atari opponent in under 1 hour for Pong.

The training algorithm is Proximal Policy Optimization (PPO).

# Agent Model
## Input Processing

The model input is the pixel-wise difference between the two most recent frames, allowing the agent to capture motion information.

Each frame is:
- Converted to gray (0/255)
- Cropped to remove score headers and footers
- Resized to 80 × 80

## Action Space

Action space is reduced to two actions : up/down for Pong and left/right for Breakout.

## Network Architecture

The agent uses three convolutional layers as a feature extractor, followed by two fully connected layers. The final layer outputs action probabilities using softmax activation.

Conv2D (32 filters, 8×8 kernel, stride 4, ReLU)
→ Conv2D (64 filters, 4×4 kernel, stride 2, ReLU)
→ Conv2D (64 filters, 3×3 kernel, stride 1, ReLU)
→ Flatten
→ Dense (512, ReLU)
→ Dense (2, Softmax)

## Training

# Python PPO 

The PPO code is a adaptation of this [python version](https://github.com/s-gv/pong-keras/blob/master/pong-ppo.py)). 

# Changes between Pong & Breakout training

For Pong, each episode is a full game and ends when a player hits 21 points,
For Breakout, an episode ends when a live is lost, and train code emit a fire action after each lives lost to continue the game.
Fitting occurs at each game end, so each episode for Pong and each 5 episodes for Breakout.

| Parameter     | Pong    | Breakout |
|:--------------|--------:|---------:|
| learning rate | 2.5e-4  | 2.5e-3   |
| epochs        | 100     | 3000     |

# Performance Considerations

Running PPO with ALE in the browser introduces two primary performance bottlenecks:
- Neural network computation using TensorFlow.js
- Experience collection from environment simulations

To reduce training time, experience is collected in parallel using 16 independent environments, each running inside its own Web Worker. Neural network computations are then executed in batched passes, aggregating data from all environments to maximize computational efficiency.

The training pipeline relies heavily on event-based communication between Web Workers, which introduces additional complexity and makes the implementation relatively intricate.

TensorFlow.js memory and cache management introduces additional complexity. To prevent GPU memory saturation and excessive tensor allocations, the implementation relies on pre-allocated, fixed-size GPU tensors. This approach minimizes garbage collection overhead and stabilizes performance during training.

## Links
- [PPO Python code](https://github.com/s-gv/pong-keras/blob/master/pong-ppo.py)
- [Arcade Learning Environment](https://github.com/Farama-Foundation/Arcade-Learning-Environment)
- [Stella Atari 2600 emulator](https://stella-emu.github.io/)

