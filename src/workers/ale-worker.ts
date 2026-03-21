
import { ALEEnv } from "../models/ale-env"
import { preprocess } from "../utils"

export interface EnvState {
  observation: Uint8Array
  done: boolean
  reward: number
}

export interface OnActionEnd {
    state : EnvState
}

export interface ALEOrder { 
    envId : number;
    loadROM? : boolean
    resetEnv? : boolean
    actionToPlay? : number
    loadROMParams? : LoadRomParams
    contextRoot?  : string
    pongMode? : boolean;
}
export interface LoadRomParams {
    romPath : string
    repeatActionProbability : number
    frameSkip: number
}

export interface OnReset {
    observation : Uint8Array
}

export class WorkerJob {

    private aleEnv? : ALEEnv;
    private envId : number;
    private contextRoot : string;
    private pongMode : boolean;
    
    constructor (envId : number, contextRoot : string, pongMode : boolean) {
         this.envId = envId;
         this.contextRoot = contextRoot;
         this.pongMode = pongMode;
    }
    
    async loadROM (romPath="/roms/pong.bin",frameSkip = 4, repeatActionProbability=0.){
        if (this.pongMode) 
             this.aleEnv = await ALEEnv.createPong(this.contextRoot);
        else 
             this.aleEnv = await ALEEnv.createBreakOut(this.contextRoot);
    
        this.aleEnv.setFrameSkip(frameSkip);
        this.aleEnv.setRepeatActionProbability(repeatActionProbability);
        this.aleEnv.setRandomSeed(this.envId);
        this.aleEnv.loadROM(romPath);
    }

    resetEpisode () : Uint8Array{
        this.aleEnv!.resetGame()
        const o = preprocess(this.aleEnv!.getScreenGrayscale(), this.pongMode);
        return o;
    }

    playAction (action : number) : EnvState {
        const reward = this.aleEnv!.act(action);
       // const ram = this.aleEnv!.getRAM();
        //const cpuScore = ram[13];
        //const aiScore = ram[14];
       
      //  const done = cpuScore==21 || aiScore==21
        const done = this.aleEnv!.gameOver();
      //   console.log (cpuScore, aiScore, done, reward, action);
        const observation = preprocess(this.aleEnv!.getScreenGrayscale(), this.pongMode)
        const stepResult = {
                    observation: observation,
                    done: done,
                    reward : reward}
        return stepResult;
    }
} 

let job : WorkerJob ;

interface Answer {
  envId: number;
  payload? :  boolean | EnvState| Uint8Array;
}

onmessage = async function (event : MessageEvent<ALEOrder>) {
    let answer  : Answer = {"envId" : event.data.envId};
    let observation : Uint8Array|undefined = undefined;
    
    if (event.data.loadROM) {
        job = new WorkerJob(event.data.envId, event.data.contextRoot!, event.data.pongMode!);
        if (event.data.loadROMParams)
            await job.loadROM(event.data.loadROMParams.romPath, 
                    event.data.loadROMParams.frameSkip,
                    event.data.loadROMParams.repeatActionProbability);
        else 
            await job.loadROM();   
        answer.payload = true ;
    } else if (event.data.resetEnv) {
        observation =  job.resetEpisode();
        answer.payload = observation;
    } else if (event.data.actionToPlay != undefined) {
        const stepResult = job.playAction (event.data.actionToPlay)
        answer.payload = stepResult;
        observation = stepResult.observation
    }else {
        console.log("Bad order " + event);
    }
    if (observation) 
        // buffer as parameter = transferable optimisation
        event.ports[0].postMessage(answer, [observation.buffer]); 
    else 
        event.ports[0].postMessage(answer);

};


