import { useState } from 'react'
import { useEffect, useId, useRef } from "react";

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import createALEModule from '../public/ale';

function App() {
  const [playing, setPlaying] = useState(false);
  const aleCanvasId = useId();
  const canvasRef = useRef<HTMLCanvasElement>(null);


  async function playAGame () {
    const ALE = await createALEModule();
    const ale = new ALE.ALEInterface();

    ale.loadROM('roms/pong.bin');
    ale.resetGame();

    let animationId : number;

    function loop() {
      if (!ale.gameOver()) {
        const actions = ale.getMinimalActionSet();
        const action = actions[Math.floor(Math.random() * actions.length)];
        ale.renderToCanvas (aleCanvasId)
        ale.act(action); 
        animationId = requestAnimationFrame(loop);
      } else {
        cancelAnimationFrame(animationId);
        setPlaying(false)
      }
    }
    loop()
  } 
 useEffect(() => {
   if (playing) 
      playAGame();
  }, [playing]);
  

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">

         <button onClick={() => setPlaying(true)} disabled={playing}>
        Click to play
        </button>

        <canvas id={aleCanvasId} ref={canvasRef} 
        width="200"
        height="100"
        style={{ border: "1px solid #d3d3d3" }}
      ></canvas>

        <p>
          Click <a href="/example.html"> here </a> for ale js demo from 
          <a href="https://github.com/Farama-Foundation/Arcade-Learning-Environment"> Arcade-Learning-Environment.
         </a>
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
