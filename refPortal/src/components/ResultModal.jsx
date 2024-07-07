import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

const ResultModal = forwardRef(function ResultModal(
  { targetTime, remainingTime, reset },
  ref
) {
  const dialog = useRef();
  useImperativeHandle(ref, () => ({
    open() {
      dialog.current.showModal();
    },
  }));

  const lost = remainingTime <= 0;
  const timeLeft = remainingTime / 1000;
  const score = Math.floor((timeLeft / targetTime) * 100);

  return createPortal(
    <dialog ref={dialog} className="result-modal" onClose={reset}>
      {lost ? <h2>You Lost!</h2> : <h3>You Won!</h3>}
      {!lost && <h2>Your score is {score}</h2>}
      <p>
        The target time was <strong>{targetTime} seconds.</strong>
      </p>
      <p>
        You stopped the timer with <strong>{timeLeft} seconds left.</strong>
      </p>
      <form method="dialog" onSubmit={reset}>
        <button>Close</button>
      </form>
    </dialog>,
    document.getElementById("root")
  );
});

export default ResultModal;
