import { useState, useRef } from "react";
import ResultModal from "./ResultModal";

export default function TimerChallenge({ title, targetTime }) {
  const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);

  const timer = useRef();
  const dialog = useRef();

  const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

  if (timeRemaining <= 0) {
    clearInterval(timer.current);
    dialog.current.open();
  }

  function handleStart() {
    timer.current = setInterval(() => {
      setTimeRemaining((prevTimeRemaining) => prevTimeRemaining - 10);
    }, 10);
  }

  function handleReset() {
    setTimeRemaining(targetTime * 1000);
  }

  function handleStop() {
    clearInterval(timer.current);
    dialog.current.open();
  }

  return (
    <>
      <ResultModal
        targetTime={targetTime}
        remainingTime={timeRemaining}
        onReset={handleReset}
        ref={dialog}
      />
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} {targetTime > 1 ? "seconds" : "second"}
        </p>
        <p>
          <button onClick={timerIsActive ? handleStop : handleStart}>{timerIsActive ? "Stop" : "Start"} Challenge </button>
        </p>
        <p className={timerIsActive ? "active" : undefined}>{timerIsActive ? "Time is running..." : "Timer inactive"}</p>
      </section>
    </>
  );
}
