// Task-19

import { useEffect, useState } from "react";
import "../../index.css";

const useTimer = (duration) => {
  const [running, setRunning] = useState(false);
  const [timer, setTimer] = useState(duration);

  useEffect(() => {
    if (running) {
      const timerId = setInterval(() => {
        if (timer < 0) {
          setRunning(false);
          return;
        }
        setTimer(timer - 1);
      }, 1000);
      return () => clearInterval(timerId);
    }
  }, [running, timer]);

  const startTimer = () => {
    setRunning(true);
  };

  const pauseTimer = () => {
    setRunning(false);
  };

  const resetTimer = () => {
    setRunning(false);
    setTimer(duration);
  };

  return [timer, startTimer, pauseTimer, resetTimer];
};

const TimerComponent = (props) => {
  const [timer, startTimer, pauseTimer, resetTimer] = useTimer(
    Number(props.time)
  );

  const formatTime = (time) => {
    const mn = Math.floor(time / 60);
    const sec = time % 60;

    return mn + " mn " + sec + " sec.";
  };

  return (
    <>
      <h2>{formatTime(timer)}</h2>
      <button className="button-style" onClick={startTimer}>
        Start
      </button>
      <button className="button-style" onClick={pauseTimer}>
        Pause
      </button>
      <button className="button-style" onClick={resetTimer}>
        Reset
      </button>
    </>
  );
};

export default TimerComponent;
