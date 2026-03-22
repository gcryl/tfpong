import { useEffect, useRef, useState } from "react";
import MainWorker from './workers/worker?worker';
import { stopTrainMsg, trainMsg, type TrainArgsPayload, type WorkerStatusPayload } from "./workers/worker";
import { ALEConsole } from "./components/ALEConsole";
import { Actor } from "./models/actor";
import * as tf from '@tensorflow/tfjs';
import '@tensorflow/tfjs-core/dist/io/browser_files';
import { ScoreChart } from "./components/ScoreChart";
import './TrainerPlan.css';
import { preprocess } from "./utils";
// savehandlers are pruned by build => explicit import
import "@tensorflow/tfjs-core/dist/io/browser_files";

const TRAIN_DB_URL_BREAKOUT = "indexeddb://train-breakout"
const TRAIN_DB_URL_PONG = "indexeddb://train-pong"
const REPEAT_ACTION_PROBABILITY = 0.25
const ACTION_COUNT = 3
const BREAKOUT_EPISODE_EPOCH = 5
const PONG_EPISODE_EPOCH = 5

function TrainerPlan() {
    const [workerStarted, setWorkerStarted] = useState(false);
    const [infoAI, setInfoAI] = useState("no model");
    const [modelSaved, setModelSaved] = useState(false);
    const [stickyAction, setStickyAction] = useState(false);
    const [pongMode, setPongMode] = useState(true);
    const [epochs, setEpochs] = useState(100);
    const [learningRate, setLearningRate] = useState(2.5e-4);

    const [statusText, setStatusText] = useState("");
    const trainActorRef = useRef<Actor>(null);
    const scoresRef = useRef<number[]>([]);
    const [scores, setScores] = useState<number[]>([]);

    const trainWorker = useRef<Worker>(null);



    function addScore(score: number) {
        // code with hack for react : change array to change state
        if (pongMode) {
            setScores([...scoresRef.current, score]);
            scoresRef.current.push(score);
        } else {
            scoresRef.current.push(score);
            if (scoresRef.current.length % BREAKOUT_EPISODE_EPOCH == 0) {
                const episodeScores: number[] = []
                let epoch = 0;
                while (epoch < scoresRef.current.length) {
                    let score = 0;
                    for (let episode = 0; episode < BREAKOUT_EPISODE_EPOCH; episode++) {
                        score += scoresRef.current[epoch];
                        epoch++;
                    }
                    episodeScores.push(score);
                }
                setScores([...episodeScores]);
            }
        }
    }

    function postMessageToWorker(msg: TrainArgsPayload) {
        trainWorker.current!.postMessage(msg);
    }

    function repeatActionProbability(): number {
        return stickyAction ? REPEAT_ACTION_PROBABILITY : 0;
    }

    async function loadFromStorage(path: string) {
        return tf.loadLayersModel(path).then(m => {
            if (trainActorRef.current) {
                const oldm = trainActorRef.current.model;
                trainActorRef.current.model = m;
                oldm.dispose();
            } else {
                trainActorRef.current = new Actor(m);
            }
            return m;
        })
    }

    async function download() {
        if (trainActorRef.current)
            await trainActorRef.current.model.save('downloads://my-model')
    }

    function train(retrain: boolean) {
        if (!trainWorker.current) {
            trainWorker.current = new MainWorker()
            trainWorker.current.onerror = (event) => {
                console.log("There is an error with your worker!", event);
                setWorkerStarted(false);
            };
            trainWorker.current.onmessage = function (m: MessageEvent<WorkerStatusPayload>) {
                if (m.data.episodeStats) {
                    addScore(m.data.episodeStats.score);
                }
                if (m.data.modelSavePath) {
                    loadFromStorage(m.data.modelSavePath!).then(() => {
                        setInfoAI("Weights updated at epoch " + (m.data.episodeStats!.episodeNumber));
                        setModelSaved(true)
                    });
                }
                if (m.data.trainingDone) {
                    setWorkerStarted(false)
                }
                if (m.data.statusText) {
                    setStatusText(m.data.statusText);
                }
            };
        }
        if (!workerStarted) {
            setWorkerStarted(true)
            postMessageToWorker(
                trainMsg(pongMode ? epochs : epochs * BREAKOUT_EPISODE_EPOCH, ACTION_COUNT, dburl(),
                    rom(),
                    pongMode,
                    learningRate,
                    pongMode ? PONG_EPISODE_EPOCH : BREAKOUT_EPISODE_EPOCH,
                    retrain,
                    repeatActionProbability()));
            setWorkerStarted(true)
        }
    }

    function rom() {
        return pongMode ? "/roms/pong.bin" : "/roms/breakout.bin"
    }

    function dburl() {
        return pongMode ? TRAIN_DB_URL_PONG : TRAIN_DB_URL_BREAKOUT
    }

    function chooseAction(screen: Uint8ClampedArray): number {
        if (trainActorRef.current) {
            return trainActorRef.current.predict(preprocess(screen));
        }
        return 0;
    }

    useEffect(() => {
        (async () => {
            const models = await tf.io.listModels()
            const du = dburl();
            const isAModelSaved = du in models;
            if (isAModelSaved) {
                await loadFromStorage(du).then(() => {
                    setInfoAI("model loaded");
                });;
            }
            setModelSaved(isAModelSaved);
        })();
    }, [pongMode])

    function stopTrain(): void {
        if (!trainWorker.current)
            return
        postMessageToWorker(stopTrainMsg);
    }

    return (
        <div className="traincontainer">
            <div className="card">
                <div className="train-controls-grid">
                    <div>
                        <button onClick={() => train(false)} disabled={workerStarted}>
                            {workerStarted ? "train started" : "train from scratch"}
                        </button>

                        <button onClick={() => train(true)} disabled={workerStarted || !modelSaved}>
                            {workerStarted ? "retrain started" : "retrain"}
                        </button>
                    </div>
                    <div>
                        <p className="train-controls-grid-form-row">
                            <label htmlFor="epochs">Epochs:</label>
                            <input
                                type="number"
                                name="epochs"
                                value={epochs}
                                onChange={(e) => setEpochs(parseInt(e.target.value))}
                                step={100}
                                min={1}
                            />
                        </p>

                        <p className="train-controls-grid-form-row">
                            <label htmlFor="learningRate">Learning Rate:</label>
                            <input
                                type="number"
                                name="learningRate"
                                value={learningRate}
                                onChange={(e) => setLearningRate(parseFloat(e.target.value))}
                                step={1e-7}
                                min={0}
                            />
                        </p>
                    </div>
                    <div>
                        <button onClick={() => stopTrain()} disabled={!workerStarted}>
                            stop training
                        </button>
                        <button onClick={() => download()} disabled={!modelSaved}>
                            download
                        </button>
                    </div>
                    <div>
                        <p>
                            <input type="checkbox" disabled={workerStarted} checked={stickyAction}
                                id="trainSticky"
                                onChange={(e) => setStickyAction(e.target.checked)}
                            ></input><label htmlFor="trainSticky">Sticky Action</label>
                        </p>
                    </div>
                    <div>
                        {pongMode && !workerStarted &&
                            <button onClick={() => setPongMode(false)}>switch to breakout </button>
                        }
                        {!pongMode && !workerStarted &&
                            <button onClick={() => setPongMode(true)}>switch to pong </button>
                        }

                    </div>
                </div>
            </div>
            <div className="card">
                <ALEConsole running={false} chooseAction={(obs) => chooseAction(obs)}
                    repeatActionProbability={stickyAction ? REPEAT_ACTION_PROBABILITY : 0}
                    romPath={pongMode ? "/roms/pong.bin" : "/roms/breakout.bin"}
                    breakoutMode={!pongMode}
                />
                <small>{infoAI}</small>
            </div>
            <div>
                <div><p>{statusText}</p></div>
                {scores.length > 0 &&
                    <div><p>Training score history :</p>
                        {pongMode &&
                            <ScoreChart width={200} height={250} data={scores} title="(ai score) - (cpu score)" />
                        }
                        {!pongMode &&
                            <ScoreChart width={200} height={250} data={scores} title="ai score)"
                                domains={[0, Math.max(...scores) + 10]} tickValues={[0, 5, 10, 25, 50, 100, 150, 200, 250, 300, 350, 400, 500]} />
                        }
                    </div>
                }
            </div>
        </div>
    )
}

export default TrainerPlan
