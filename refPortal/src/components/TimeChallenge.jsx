import React, { useState } from "react";

const TimeChallenge = ({ title, targetTime }) => {
  const [timerExpired, setTimerExpired] = useState(false);
  const [start, setStart] = useState(false);

  const handleStart = () => {
    setStart(true);
    setTimeout(() => {
      setTimerExpired(true);
      setStart(false);
    }, targetTime * 1000);
  };
  return (
    <section className="challenge">
      <h2>{title}</h2>
      {timerExpired && <p>Time's up!</p>}
      <p className="challenge-time">
        {targetTime} seconds{targetTime > 1 ? "" : "s"}
      </p>

      <p>
        <button onClick={handleStart}>
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
