import React, { useRef, useState } from "react";
import ResultModal from "./ResultModal";

const TimeChallenge = ({ title, targetTime }) => {
  const timer = useRef();
  const [timerExpired, setTimerExpired] = useState(false);
  const [start, setStart] = useState(false);

  const handleStart = () => {
    setTimerExpired(false);
    setStart(true);
    timer.current = setTimeout(() => {
      setTimerExpired(true);
      setStart(false);
    }, targetTime * 1000);
  };
  const handleStop = () => {
    clearTimeout(timer.current);
    setStart(false);
    setTimerExpired(false);
  };
  return (
    <>
      {timerExpired && <ResultModal result="lost!" targetTime={targetTime} />}
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} seconds{targetTime > 1 ? "" : "s"}
        </p>

        <p>
          <button onClick={start ? handleStop : handleStart}>
            {start ? "Stop" : "Start Challenge"}
          </button>
        </p>
        <p className={start ? "active" : ""}>
          {start ? "Timer is running..." : ""}
        </p>
      </section>
    </>
  );
};

export default TimeChallenge;
