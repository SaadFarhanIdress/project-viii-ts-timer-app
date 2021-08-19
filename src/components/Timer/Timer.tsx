import "./Timer.css";
import TimerButton from "../TimerButton/TimerButton";

const Timer = () => {
  return (
    <div className="timer-container">
      <div className="time-display">
      </div>
      <div className="timer-button-container">
        <TimerButton
          className="start-timer"
        />
        <TimerButton
          className="stop-timer"
        />
        <TimerButton
          className="reset-timer"
        />
      </div>
    </div>
  );
};

export default Timer;
