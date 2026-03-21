import createALEModule, { type ALEInterface } from '../../public/ale';



export class ALEEnv {

    private readonly ale: ALEInterface;

    private readonly fireAfterReset: boolean = false;
    private readonly resetOnLives: boolean = false;
    private lives: number = 0;
    private done: boolean = false;

    private constructor(ale: ALEInterface, breakoutMode: boolean = false) {
        this.ale = ale;
        this.fireAfterReset = breakoutMode;
        this.resetOnLives = breakoutMode;
    }

    static async createPong(contextRoot?: string) {
        // without override, download failed  (relative url in ale.js)
        function locateFile(path: any, prefix: any) {
            if (path.endsWith(".data") || path.endsWith(".wasm")) return contextRoot + path
            return prefix + path
        }
        let opts = {};
        if (contextRoot) opts = { 'locateFile': locateFile };
        const ALE = await createALEModule(opts);
        return new ALEEnv(new ALE.ALEInterface());
    }

    static async createBreakOut(contextRoot?: string) {
        // without override, download failed  (relative url in ale.js)
        function locateFile(path: any, prefix: any) {
            if (path.endsWith(".data") || path.endsWith(".wasm")) return contextRoot + path
            return prefix + path
        }
        let opts = {};
        if (contextRoot) opts = { 'locateFile': locateFile };
        const ALE = await createALEModule(opts);
        return new ALEEnv(new ALE.ALEInterface(), true);
    }

    act(action: number) {
        const r=this.ale.act(action);
        return Math.max(-1, Math.min(1,r));
    }

    setRepeatActionProbability(p: number) {
        this.ale.setFloat("repeat_action_probability", p);
    }

    setRandomSeed(seed: number) {
        this.ale.setInt("random_seed", seed);
    }

    loadROM(romPath: string) {
        this.ale.loadROM(romPath);
        this.resetGame();
    }

    setFrameSkip(fs: number) {
        this.ale.setInt("frame_skip", fs);
    }

    private _reset() {
        if (!this.resetOnLives) {
            this.ale.resetGame();
        } else {
            if (this.done) {
                this.ale.resetGame();
                this.done = false;
            } 
            this.ale.act(0);
        }
    }

    resetGame() {
        this._reset();
        this.lives = this.ale.lives();
        if (this.fireAfterReset) {
            this.ale.act(1);
        }
    }

    gameOver() {
        this.done = this.ale.gameOver();
        if (this.resetOnLives && !this.done) {
            const nlives = this.ale.lives();
            if (nlives < this.lives) {
                return true
            }
        }
        return this.done;
    }

    getScreenGrayscale(): Uint8ClampedArray {
        return this.ale.getScreenGrayscale();
    }

    renderToCanvas(canvasId: string) {
        return this.ale.renderToCanvas(canvasId)
    }

    scores() {
        const ram = this.ale.getRAM();
        const cpuScore = ram[13];
        const aiScore = ram[14];
        return { "ai": aiScore, "cpu": cpuScore };
    }

}