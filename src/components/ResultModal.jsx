import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

const ResultModal = forwardRef((props, ref) => {
  const dialogue = useRef();

  const userLost = props.timeRemaining <= 0;
  const formattedTime = (props.timeRemaining / 1000).toFixed(2);
  const score = Math.round((1 - props.timeRemaining / (props.targetTime * 1000)) * 100);

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialogue.current.showModal();
      },
    };
  });

  return createPortal(
    <dialog className="result-modal" ref={dialogue} onClose={props.onReset}>
      {userLost && <h2>you lost</h2>}
      {!userLost && <h2>you score:{score}</h2>}
      <p>
        The target time was <strong>{props.targetTime} seconds</strong>
      </p>
      <p>
        You stopped the timer with <strong>{formattedTime}seconds left</strong>
      </p>
      <form method="dialog" onSubmit={props.onReset}>
        <button>close</button>
      </form>
    </dialog>,
    document.getElementById("modal")
  );
});

export default ResultModal;
