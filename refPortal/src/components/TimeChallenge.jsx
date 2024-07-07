import React, { useRef, useState } from "react";

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
    <section className="challenge">
      <h2>{title}</h2>
      {timerExpired && <p>Time's up!</p>}
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
  );
};

export default TimeChallenge;
