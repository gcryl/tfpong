import { useEffect, useId, useRef } from "react";
import { ALEEnv } from "../models/ale-env";



interface ConsoleProps extends React.ComponentPropsWithoutRef<"div"> {
  chooseAction: (screen: Uint8ClampedArray) => number;
  romPath?: string;
  frameSkip?: number;
  repeatActionProbability?: number;
  running?: boolean;
  onEndOfGame?: (cpu: number, ai: number) => void;
  breakoutMode?: boolean;
}

export const ALEConsole = ({ chooseAction,
  romPath = "roms/pong.bin", frameSkip = 4, repeatActionProbability = 0.,
  running = true, onEndOfGame, breakoutMode = false, ...divProps }: ConsoleProps) => {
  const aleCanvasId = useId()

  const aleRef = useRef<ALEEnv>(null);
  const endOfGameEmitted = useRef<boolean>(false);
  const runningRef = useRef(running);

  function restartIfRunning() {
    if (!runningRef.current)
      return;
    if (aleRef.current!.gameOver()) {
      endOfGameEmitted.current = false;
      aleRef.current!.resetGame();
    }
    loop();
  }

  function loop() {
    if (!aleRef.current)
      return;
    const ale = aleRef.current;
    ale.renderToCanvas(aleCanvasId!);
    if (!runningRef.current) {
      const canvas = document.getElementById(aleCanvasId) as HTMLCanvasElement;
      const ctx = canvas.getContext("2d")!;

      ctx.fillStyle = "white";
      ctx.font = "bold 10px Arial";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";

      ctx.fillText("PAUSED", canvas.width / 2, canvas.height / 2);
    } else {
      if (!ale.gameOver()) {
        const action = chooseAction(ale.getScreenGrayscale());
        ale.act(action);
        if (runningRef.current)
          requestAnimationFrame(() => loop());
      } else {
        if (onEndOfGame && !endOfGameEmitted.current) {
          endOfGameEmitted.current = true;
          const scores = aleRef.current!.scores();
          onEndOfGame(scores.cpu, scores.ai);
        }
        setTimeout(() => restartIfRunning(), 10);
      }
    }

  }

  async function load() {
    const ale = breakoutMode ? await ALEEnv.createBreakOut() : await ALEEnv.createBreakOut();
    aleRef.current = ale;
    ale.setFrameSkip(frameSkip);
    ale.setRepeatActionProbability(repeatActionProbability);
    ale.loadROM(romPath);
  }

  useEffect(() => {
    load().then(loop);
  }, [])

  useEffect(() => {
    load().then(loop);
  }, [breakoutMode])
  
  useEffect(() => {
    if (aleRef.current) {
      load()
    }
  }, [repeatActionProbability])

  function toggleRunning() {
    runningRef.current = !runningRef.current;
    restartIfRunning();
  }

  return (
    <div {...divProps}>
      <canvas id={aleCanvasId} width="160" height="210" onClick={toggleRunning} />
    </div>
  );

}
