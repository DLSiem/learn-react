import React from "react";

const ResultModal = ({ result, targetTime }) => {
  return (
    <dialog className="result-modal" open>
      <h1>You {result}</h1>
      <p>Your target time was {targetTime} seconds.</p>
      <p>
        You stopped the time witj{" "}
        <strong>{targetTime} seconds remaining.</strong>{" "}
      </p>
      <form action="dialog">
        <button>Close</button>
      </form>
    </dialog>
  );
};

export default ResultModal;
