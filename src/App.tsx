import { useState, type Dispatch, type ReactNode, type RefObject, type SetStateAction } from 'react'
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

interface ConsoleCardProps {
  infoText: string;
  smallInfo?: string;
  footer?: string;
  children: ReactNode;
}

function ConsoleCard({ infoText, smallInfo = "", footer = "", children }: ConsoleCardProps) {
  return (
    <div className="card">
      <div>
        <p>{infoText}</p>
        <small>{smallInfo}</small>
      </div>
      {children}
      <div>
        <p>{footer}</p>
      </div>
    </div>


  )
}

function App() {
  const pongActor1Ref = useRef<PongActor>(null);
  const pongActor2Ref = useRef<PongActor>(null);

  const [status1, setStatus1] = useState("loading model");
  const [status2, setStatus2] = useState("loading model");

  const statsRef1 = useRef(new Stats());
  const statsRef2 = useRef(new Stats());

  useEffect(() => {
    async function fetchModels() {
      pongActor1Ref.current = await PongActor.fromURL("/models/fs4-rp025.json")
      setStatus1("");
      await pongActor1Ref.current.model.save('indexeddb://temp-model');
      const clonedModel = await tf.loadLayersModel('indexeddb://temp-model');
      pongActor2Ref.current = new PongActor(clonedModel);
      setStatus2("");
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
    const won = ai > cpu;
   
    if (won)
      s.current.won()
    else
      s.current.loose();
    if (s.current.played==1) 
       statusSetter( (won? " won" : "lost")+ " the first game")
    else 
     statusSetter(`${s.current.played} games /  ${s.current.percentWin().toFixed(1)} % win`)
  }

  return (
    <div>
      <h1>AI Pong</h1>
      <p>A Pong-Playing Agent with TensorFlow Js using the Arcade Learning Environment.</p>
      <div className="container">
        <ConsoleCard infoText='deterministic'
          footer={status1}>
          <ALEConsole chooseAction={(obs) => chooseAction(pongActor1Ref, obs)}
            onEndOfGame={(c, a) => { updateStats(statsRef1, setStatus1, c, a) }} />
        </ConsoleCard>

        <ConsoleCard infoText='stochastic' smallInfo='(sticky action)'
          footer={status2}>
          <ALEConsole chooseAction={(obs) => chooseAction(pongActor2Ref, obs)}
            onEndOfGame={(c, a) => { updateStats(statsRef2, setStatus2, c, a) }}
            repeatActionProbability={0.25} />
        </ConsoleCard>
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
