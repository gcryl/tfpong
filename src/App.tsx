import { useState, type Dispatch, type ReactNode, type RefObject, type SetStateAction } from 'react'
import { useEffect, useRef } from "react";
import './App.css'
import { Actor } from './models/actor';
import { ALEConsole } from './components/ALEConsole';
import TrainerPlan from './TrainerPlan';
import { preprocess } from './utils';

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
  const pongActor1Ref = useRef<Actor>(null);
  const pongActor3Ref = useRef<Actor>(null);
  const [stickyAction, setStickyAction] = useState(false);

  const [status1, setStatus1] = useState("loading model");

  const [status3, setStatus3] = useState("loading model");
  // const [obs, setObs] = useState<Uint8Array>(new Uint8Array(80*80));

  const statsRef1 = useRef(new Stats());

  const [tzVisible, setTzVisible] = useState(false);

  useEffect(() => {
    async function fetchModels() {
      pongActor1Ref.current = await Actor.fromURL("models/2f-fs4-rp025.json")
      setStatus1("AI on right side");
      pongActor3Ref.current = await Actor.fromURL("models/breakout-2f-fs4-rp0.json")
      setStatus3("");
    }
    fetchModels();
  }, []);

  function chooseAction(actorRef: RefObject<Actor | null>, screen: Uint8ClampedArray): number {
    if (actorRef.current) {
      return actorRef.current.predict(preprocess(screen));
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
    if (s.current.played == 1)
      statusSetter((won ? " won" : "lost") + " the first game")
    else
      statusSetter(`${s.current.played} games /  ${s.current.percentWin().toFixed(1)} % win`)
  }

  return (
    <div>
      <h1>AI Pong & Breakout</h1>
      <p>An Atari Playing Agent with TensorFlow Js using the Arcade Learning Environment.</p>
      <p>
        Here are two neural networks running live in the browser that have learned to play autonomously using only screen input and reward signals.
      </p>
      <div className="container">
        <ConsoleCard infoText='Breakout'
          footer={status3}>
          <ALEConsole chooseAction={(x) => chooseAction(pongActor3Ref, x)}
            romPath='roms/breakout.bin'
            repeatActionProbability={stickyAction ? 0.25 : 0}  breakoutMode= {true}/>
        </ConsoleCard> 
        <ConsoleCard infoText='Pong'
          footer={status1}>
          <ALEConsole chooseAction={(obs) => chooseAction(pongActor1Ref, obs)}
            repeatActionProbability={stickyAction ? 0.25 : 0} breakoutMode={false}
            onEndOfGame={(c, a) => { updateStats(statsRef1, setStatus1, c, a) }} running={false} />
        </ConsoleCard>

      </div>
      <div>

        <p><small>click on console canvas to pause/start game</small></p></div>
      <p><small>
        <input type="checkbox" checked={stickyAction}
          onChange={(e) => setStickyAction(e.target.checked)}
        ></input>sticky Action (harder)
      </small>
      </p>
      <div>
        <p>Training Zone <button onClick={() => setTzVisible(!tzVisible)}>(hide/show)</button></p>
        {tzVisible && <div>
          <p>For Pong, AI ​​wins its first match around epoch 40 in deterministic mode,
            and around epoch 60 with sticky actions.
            Breakout need more epochs to have a good score.
          </p>
          <small>The training process is resource-intensive (CPU/GPU/RAM) and may cause temporary browser freezes and crash.</small>
          <TrainerPlan />
        </div>}
      </div>

    </div>
  )
}

export default App

