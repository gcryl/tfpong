import { useEffect, useRef, useState } from "react";
import MainWorker from './workers/worker?worker';
import type { WorkerStatusPayload } from "./workers/worker";
import { ALEConsole } from "./components/ALEConsole";
import { PongActor } from "./models/PongActor";
import * as tf from '@tensorflow/tfjs';
import '@tensorflow/tfjs-core/dist/io/browser_files';
import { ScoreChart } from "./components/ScoreChart";
import './TrainerPlan.css';
import { preprocess } from "./utils";
// savehandlers are pruned by build => explicit import
import  "@tensorflow/tfjs-core/dist/io/browser_files";

const TRAIN_DB_URL = "indexeddb://train"
const REPEAT_ACTION_PROBABILITY = 0.25

function TrainerPlan() {
    const [workerStarted, setWorkerStarted] = useState(false);
    const [modelSaved, setModelSaved] = useState(false);
    const [stickyAction, setStickyAction] = useState(false);
    const [statusText, setStatusText] = useState("");
    const pongTrainActorRef = useRef<PongActor>(null);
    const scoresRef = useRef<number[]>([]);
    const [scores, setScores] = useState<number[]>([]);

    const trainWorker = useRef<Worker>(null);

    function addScore(score: number) {
        // hack for react : change array to change state
        setScores([...scoresRef.current, score]);
        scoresRef.current.push(score)
    }

    function repeatActionProbability(): number {
        return stickyAction ? REPEAT_ACTION_PROBABILITY : 0;
    }

    async function loadFromStorage(path: string) {
        return tf.loadLayersModel(path).then(m => {
            if (pongTrainActorRef.current) {
                pongTrainActorRef.current.model = m;
            } else {
                pongTrainActorRef.current = new PongActor(m);
            }
            return m;
        })
    }

    async function download () {
        if (pongTrainActorRef.current)
            await pongTrainActorRef.current.model.save('downloads://my-model')
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
                    loadFromStorage(m.data.modelSavePath!).then(() => setModelSaved(true));
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
            trainWorker.current.postMessage(
                {
                    "retrain": retrain, "epochs": 100, "modelPath": TRAIN_DB_URL,
                    "repeatActionProbability": repeatActionProbability(),
                    "stopTrain": false
                });
            setWorkerStarted(true)
        }
    }

    function chooseAction(screen: Uint8ClampedArray): number {
        if (pongTrainActorRef.current) {
            return pongTrainActorRef.current.predict(preprocess(screen));
        }
        return 0;
    }

    useEffect(() => {
        (async () => {
            const models = await tf.io.listModels()
            const isAModelSaved = TRAIN_DB_URL in models;  
            if (isAModelSaved) {
                await loadFromStorage(TRAIN_DB_URL);
            }
            setModelSaved(isAModelSaved);
        })();
    }, [])

    function stopTrain(): void {
        if (!trainWorker.current)
            return
        trainWorker.current.postMessage({ "stopTrain": true });
    }

    return (
        <div className="container">
            <div className="card">
                <div className="button-grid">
                    <div>
                        <button onClick={() => train(false)} disabled={workerStarted}>
                            {workerStarted ? "train started" : "train from scratch"}
                        </button>
                    </div>
                    <div>
                        <button onClick={() => train(true)} disabled={workerStarted || !modelSaved}>
                            {workerStarted ? "retrain started" : "retrain"}
                        </button>
                    </div>
                    <div>
                        <button onClick={() => stopTrain()} disabled={!workerStarted}>
                            stop training
                        </button>
                    </div>
                    <div>
                        <button onClick={() => download()} disabled={!modelSaved}>
                           download
                        </button>
                    </div>
                    <p>
                        <input type="checkbox" disabled={workerStarted} checked={stickyAction}
                            onChange={(e) => setStickyAction(e.target.checked)}
                        ></input>Sticky Action
                    </p>
                </div>
            </div>
            <div className="card">
                <ALEConsole running={false} chooseAction={(obs) => chooseAction(obs)}
                    repeatActionProbability={stickyAction ? REPEAT_ACTION_PROBABILITY : 0} />

            </div>
            <div>
                <div><p>{statusText}</p></div>
                {scores.length > 0 &&
                    <div><p>Training score history :</p>
                        <ScoreChart width={200} height={250} data={scores} title="(ai score) - (cpu score)" />
                    </div>
                }
            </div>
        </div>
    )
}

export default TrainerPlan
