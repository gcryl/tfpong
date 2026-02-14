import createALEModule, { type ALEInterface } from '../../public/ale';
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

    private aleEnv? : ALEInterface;
    private envId : number;
    private contextRoot : string;
    
    constructor (envId : number, contextRoot : string) {
         this.envId = envId;
         this.contextRoot = contextRoot;
    }
    
    async loadROM (romPath="/roms/pong.bin",frameSkip = 4, repeatActionProbability=0.){
        const contextRoot = this.contextRoot;
        // without override, download failed  (relative url to woker)
        function locateFile(path :any, prefix : any) {
            if (path.endsWith(".data") || path.endsWith(".wasm")) return  contextRoot+ path
            return prefix + path
        }
        const ALE = await createALEModule({'locateFile' : locateFile});
        const ale = new ALE.ALEInterface();
       
        this.aleEnv = ale;
        ale.setInt("frame_skip", frameSkip);
        ale.setFloat("repeat_action_probability", repeatActionProbability);
        ale.setInt ("random_seed", this.envId)
        ale.loadROM(romPath)
        postMessage({"envId" : this.envId, "ROMLoaded" : true})
    }

    resetEpisode (w :DedicatedWorkerGlobalScope) : Uint8Array{
        this.aleEnv!.resetGame()
        const o = preprocess(this.aleEnv!.getScreenGrayscale());

        const m = {"envId" : this.envId, "observation" : o}
        w.postMessage(m,  [o.buffer])
        return o;
    }

    playAction (w :DedicatedWorkerGlobalScope, action : number) : EnvState {
        const reward = this.aleEnv!.act(action);
        const ram = this.aleEnv!.getRAM();
        const cpuScore = ram[13];
        const aiScore = ram[14];
        const done = cpuScore==21 || aiScore==21
        const observation = preprocess(this.aleEnv!.getScreenGrayscale())
        const stepResult = {
                    observation: observation,
                    done: done,
                    reward : reward}
        const m = ({"envId" : this.envId, "state" : stepResult})
        w.postMessage(m,  [stepResult.observation.buffer])
        return stepResult;
    }
} 

let job : WorkerJob ;

onmessage = async function (event : MessageEvent<ALEOrder>) {
    if (event.data.loadROM) {
        job = new WorkerJob(event.data.envId, event.data.contextRoot!);
        if (event.data.loadROMParams)
            await job.loadROM(event.data.loadROMParams.romPath, 
                    event.data.loadROMParams.frameSkip,
                    event.data.loadROMParams.repeatActionProbability);
        else 
            await job.loadROM();   
    } else if (event.data.resetEnv) {
        job.resetEpisode(self as DedicatedWorkerGlobalScope );
    } else if (event.data.actionToPlay != undefined) {
        job.playAction (self as DedicatedWorkerGlobalScope , event.data.actionToPlay)
    }else {
        console.log("Bad order " + event)
    }
};


