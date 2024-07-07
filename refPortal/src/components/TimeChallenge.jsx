import React, { useRef, useState, useEffect } from "react";
import ResultModal from "./ResultModal";

const TimeChallenge = ({ title, targetTime }) => {
  const timer = useRef();
  const dialog = useRef();
  //   const [timerExpired, setTimerExpired] = useState(false);
  //   const [start, setStart] = useState(false);
  const [remainingTime, setRemainingTime] = useState(targetTime * 1000);
  const timeIsActive = remainingTime < targetTime * 1000 && remainingTime > 0;
  console.log("Start", timeIsActive);

  if (remainingTime <= 0) {
    clearInterval(timer.current);
    dialog.current.open();
  }

  const handleStart = () => {
    timer.current = setInterval(() => {
      setRemainingTime((prev) => prev - 10);
    }, 10);
  };

  const handleStop = () => {
    dialog.current.open();
    clearInterval(timer.current);
    setRemainingTime(targetTime * 1000);
  };

  //   useEffect(() => {
  //     if (timerExpired && dialog.current) {
  //       dialog.current.open();
  //     }
  //   }, [timerExpired]);

  return (
    <>
      <ResultModal ref={dialog} result="lost!" targetTime={targetTime} />
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>

        <p>
          <button onClick={timeIsActive ? handleStop : handleStart}>
            {timeIsActive ? "Stop" : "Start Challenge"}
          </button>
        </p>
        <p className={timeIsActive ? "active" : ""}>
          {timeIsActive ? "Timer is running..." : "Time Inactive"}
        </p>
      </section>
    </>
  );
};

export default TimeChallenge;
