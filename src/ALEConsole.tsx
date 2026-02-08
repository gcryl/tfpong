import { useEffect, useId, useRef } from "react";

import createALEModule, { type ALEInterface } from '../public/ale';


function preprocess(screen: Uint8ClampedArray): Uint8Array {
  const FACTOR = 2
  const IMG_SIZE = 160 / FACTOR
  let obs_index = 0
  const shift_line = 35
  const preprocessed = new Uint8Array(80 * 80);
  var screenC = new Uint8Array(screen);
  //   35:195
  for (let lineIndex = 0; lineIndex < IMG_SIZE * FACTOR; lineIndex += FACTOR) {
    obs_index = IMG_SIZE * lineIndex / FACTOR
    for (let index = 0; index < IMG_SIZE * FACTOR; index += FACTOR) {
      let element = screenC[(lineIndex + shift_line) * 160 + index];
      if (element == 87)
        element = 0
      else
        element = 1
      preprocessed[obs_index] = element;
      obs_index += 1
    }
  }
  return preprocessed;
}

interface ConsoleProps  extends React.ComponentPropsWithoutRef<"div">  {
  chooseAction: (screen: Uint8Array) => number;
  romPath?: string;
  frameSkip?: number;
  repeatActionProbability?: number;
  running? : boolean;
  onEndOfGame? : (cpu : number, ai : number) => void;
}


export const ALEConsole = ({ chooseAction,
  romPath = "roms/pong.bin", frameSkip = 4, repeatActionProbability = 0.,
  running = true, onEndOfGame, ... divProps }: ConsoleProps) => {
  const aleCanvasId = useId()
  const aleRef = useRef<ALEInterface>(null);
  const endOfGameEmitted = useRef<boolean>(false);
  const runningRef = useRef(running);

  function restartIfRunning () {
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
    if (!ale.gameOver()) {
      const action = chooseAction(preprocess(ale.getScreenGrayscale()));
      ale.act(action);
      if (runningRef.current)
         requestAnimationFrame(() => loop());
    } else {
      if (onEndOfGame && !endOfGameEmitted.current)  {
        endOfGameEmitted.current = true;
        const ram = aleRef.current!.getRAM();
        const cpuScore = ram[13];
        const aiScore = ram[14];
        onEndOfGame (cpuScore, aiScore);
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

  function toggleRunning () {
    runningRef.current = !runningRef.current;
    restartIfRunning();
  }

  return (
    <div {...divProps}>
      <canvas id={aleCanvasId} width="160" height="210" onClick={toggleRunning} />
    </div>
  );

}
