import { useState, type Dispatch, type RefObject, type SetStateAction } from 'react'
import { useEffect, useRef } from "react";
import * as tf from '@tensorflow/tfjs';
import './App.css'
import { PongActor } from './models/PongActor';
import { ALEConsole } from './ALEConsole';

class Stats {
  played: number = 0;
  win: number = 0;

  public won() {
    this.win++;
    this.played++;
  }
  public loose() {
    this.played++;
  }

  public percentWin(): number {
    return this.played == 0 ? 0 : 100. * this.win / this.played;
  }
}

function App() {
  const pongActor1Ref = useRef<PongActor>(null);
  const pongActor2Ref = useRef<PongActor>(null);

  const [loadingModel1, setLoadingModel1] = useState(true);
  const [loadingModel2, setLoadingModel2] = useState(true);

  const [status1, setStatus1] = useState("");
  const [status2, setStatus2] = useState("");

  const statsRef1 = useRef(new Stats());
  const statsRef2 = useRef(new Stats());

  useEffect(() => {
    async function fetchModels() {
      pongActor1Ref.current = await PongActor.fromURL("/models/fs4-rp025.json")
      setLoadingModel1(false);
      await pongActor1Ref.current.model.save('indexeddb://temp-model');
      const clonedModel = await tf.loadLayersModel('indexeddb://temp-model');
      pongActor2Ref.current = new PongActor(clonedModel);
      setLoadingModel2(false);
    }
    fetchModels();
  }, []);

  function chooseAction(actorRef: RefObject<PongActor | null>, screen: Uint8Array): number {
    if (actorRef.current) {
      return actorRef.current.predict(screen);
    }
    return 0;
  }

  function updateStats(s: RefObject<Stats>, statusSetter: Dispatch<SetStateAction<string>>,
    cpu: number, ai: number) {
    if (ai > cpu)
      s.current.won()
    else
      s.current.loose();
    statusSetter(`${s.current.played} games /  ${s.current.percentWin()} % won`)
  }

  return (
    <div>
      <h1>AI Pong</h1>
      <p>A Pong-Playing Agent with TensorFlow Js using the Arcade Learning Environment.</p>
    <div className="container">
      <div className="card">
        <div>
        <p>deterministic</p>
         <small></small>
       </div>
        <ALEConsole chooseAction={(obs) => chooseAction(pongActor1Ref, obs)} 
          onEndOfGame={(c, a) => { updateStats(statsRef1, setStatus1, c, a) }} />
        <div>
        <p>{status1}</p>
        <p>{loadingModel1 ? "loading model ..." : ""}</p>
        </div>
      </div>
      <div className="card">
        <div>
        <p>stochastic</p>
        <small>(sticky action)</small>
        </div>
        <ALEConsole chooseAction={(obs) => chooseAction(pongActor2Ref, obs)} repeatActionProbability={0.25}
          onEndOfGame={(c, a) => { updateStats(statsRef2, setStatus2, c, a) }} />
        <div>
        <p>{status2}</p>
        <p>{loadingModel2 ? "loading model ..." : ""}</p>
        </div>
      </div>
    </div>
      <div>
        <p className="read-the-docs">
          Click <a href="/example.html"> here </a> for ale js demo from
          <a href="https://github.com/Farama-Foundation/Arcade-Learning-Environment"> Arcade-Learning-Environment.
          </a>
        </p>
      </div>
    </div>
  )
}

export default App
