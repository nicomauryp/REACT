import { useState, useRef} from "react";
import ResultModal from "./ResultModal";

//let timer;

export default function TimerChallenge({title, targetTime}) {
    const timer = useRef();
    const dialog = useRef();

    const [timeRemain, setTimerRemain] = useState(targetTime * 1000);

    const timeIsActive = timeRemain > 0 && timeRemain < targetTime * 1000;

    if (timeRemain <= 0) {
        clearInterval(timer.current);
        dialog.current.open();
    }

    function handleReset() {
        setTimerRemain(targetTime * 1000);
    }

    function hanldeStart () {
        timer.current = setInterval(() => {
           setTimerRemain(prevTimeRemain => prevTimeRemain - 10); 
        }, 10);
    }
    
    function handleStop() {
        dialog.current.open();
        clearInterval(timer.current);
    }

    return (
        <>
        <ResultModal ref={dialog} 
        targetTime={targetTime}
        remainingTime={timeRemain}
        onReset={handleReset}
        result="lost" 
        />
        <section className="challenge">
            <h2>{title}</h2>
            <p className="challenge-time">
            {targetTime} second{targetTime > 1 ? "s" : ""}
            </p>
            <p>
                <button onClick={timeIsActive ? handleStop : hanldeStart}>
                {timeIsActive ? "Stop" : "Start"} Challenge
                </button>
            </p>
            <p className={timeIsActive ? "active" : undefined}>
            {timeIsActive ? "Time is running..." : "Timer inactive"}
            </p>
        </section>
        </>
    )};