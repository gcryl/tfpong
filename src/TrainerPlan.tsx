import { useEffect, useRef, useState } from "react";
import MainWorker from './workers/worker?worker';
import type { WorkerStatusPayload } from "./workers/worker";
import { ALEConsole } from "./ALEConsole";
import { PongActor } from "./models/PongActor";
import * as tf from '@tensorflow/tfjs';
import { ScoreChart } from "./components/ScoreChart";

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
                    loadFromStorage (m.data.modelSavePath!).then ( () =>setModelSaved(true));
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

    function chooseAction(screen: Uint8Array): number {
        if (pongTrainActorRef.current) {
            return pongTrainActorRef.current.predict(screen);
        }
        return 0;
    }

    useEffect(() => {
        (async () => {
            const models = await tf.io.listModels()
            const isAModelSaved = TRAIN_DB_URL in models;
            setModelSaved(isAModelSaved);
            if (isAModelSaved) {
               await loadFromStorage (TRAIN_DB_URL);
            }
        })();
    }, [])

    function stopTrain(): void {
        if (!trainWorker.current)
            return
        trainWorker.current.postMessage({ "stopTrain": true });
    }

    return (
        <div>
            <p>Train</p>
            <button onClick={() => train(false)} disabled={workerStarted}>
                {workerStarted ? "train started" : "train from scratch"}
            </button>
            <button onClick={() => train(true)} disabled={workerStarted || !modelSaved}>
                {workerStarted ? "retrain started" : "retrain"}
            </button>
            <button onClick={() => stopTrain()} disabled={!workerStarted}>
                stop training
            </button>
            <ALEConsole running={false} chooseAction={(obs) => chooseAction(obs)}
                repeatActionProbability={stickyAction ? REPEAT_ACTION_PROBABILITY : 0} />
            <input type="checkbox" disabled={workerStarted} checked={stickyAction}
                onChange={(e) => {
                    setStickyAction(e.target.checked)
                }
                }
            ></input>Sticky Action
            <div>
                <p>Training score history </p>
                <ScoreChart width={400} height={150} data={scores} title="(ai score) - (cpu score)" />
            </div>
            <p>{statusText}</p>
        </div>
    )
}

export default TrainerPlan
