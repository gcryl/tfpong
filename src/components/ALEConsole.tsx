import { useEffect, useId, useRef } from "react";

import createALEModule, { type ALEInterface } from '../../public/ale';



interface ConsoleProps extends React.ComponentPropsWithoutRef<"div"> {
  chooseAction: (screen: Uint8ClampedArray) => number;
  romPath?: string;
  frameSkip?: number;
  repeatActionProbability?: number;
  running?: boolean;
  onEndOfGame?: (cpu: number, ai: number) => void;

}

export const ALEConsole = ({ chooseAction,
  romPath = "roms/pong.bin", frameSkip = 4, repeatActionProbability = 0.,
  running = true, onEndOfGame, ...divProps }: ConsoleProps) => {
  const aleCanvasId = useId()
  
  const aleRef = useRef<ALEInterface>(null);
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
      }
    if (!ale.gameOver()) {
      const action = chooseAction(ale.getScreenGrayscale());
      ale.act(action);
      if (runningRef.current)
        requestAnimationFrame(() => loop());
    } else {
      if (onEndOfGame && !endOfGameEmitted.current) {
        endOfGameEmitted.current = true;
        const ram = aleRef.current!.getRAM();
        const cpuScore = ram[13];
        const aiScore = ram[14];
        onEndOfGame(cpuScore, aiScore);
      }
      setTimeout(() => restartIfRunning(), 2000);
    }
  }

  async function load() {
    const ALE = await createALEModule();
    const ale = new ALE.ALEInterface();
    aleRef.current = ale;
    ale.setInt("frame_skip", frameSkip);
    ale.setFloat("repeat_action_probability", repeatActionProbability);
    ale.loadROM(romPath);
  }

  useEffect(() => {
    load().then(loop);
  }, [])

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
