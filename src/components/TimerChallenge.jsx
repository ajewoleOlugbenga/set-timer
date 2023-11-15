import { useState, useRef } from "react";
import ResultModal from "./ResultModal";

const TimerChallenge = (props) => {
  const timer = useRef();
  const dialog = useRef();

  const [timerRemaining, setTimerRemaining] = useState(props.targetTime * 1000);

  const timerIsActive =
    timerRemaining > 0 && timerRemaining < props.targetTime * 1000;

  if (timerRemaining <= 0) {
    clearInterval(timer.current);
    dialog.current.open();
  }

  const handleReset = () => {
    setTimerRemaining(props.targetTIme * 1000);
  };

  const HandleStart = () => {
    timer.current = setInterval(() => {
      setTimerRemaining((prevTimer) => prevTimer - 10);
    }, 10);
  };

  function HandleStop() {
    dialog.current.open();
    clearInterval(timer.current);
  }

  return (
    <>
      <ResultModal
        ref={dialog}
        timeRemaining={timerRemaining}
        targetTime={props.targetTime}
        onReset={handleReset}
      />
      <section className="challenge">
        <h2>{props.title}</h2>
        <p className="challenge-time">
          {props.targetTime} second {props.targetTIme > 1 ? "s" : " "}
        </p>
        <p>
          <button onClick={timerIsActive ? HandleStop : HandleStart}>
            {timerIsActive ? "stop" : "Start"} challenge
          </button>
        </p>
        <p className={timerIsActive ? "active" : undefined}>
          {timerIsActive ? "Timer is running" : "Timer inactive"}
        </p>
      </section>
    </>
  );
};

export default TimerChallenge;
