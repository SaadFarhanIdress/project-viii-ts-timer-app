import React, { useEffect, useState } from "react";
import "./Timer.css";
import TimerButton from "../TimerButton/TimerButton";

const Timer = () => {
  const [[hrs, mins, secs], setTime] = useState([0, 25, 0]);
  const [on, isOn] = useState(false);

  const interval = () => {
    if (hrs === 0 && mins === 0 && secs === 0) {
      resetTimer();
    } else if (mins === 0 && secs === 0) {
      setTime([hrs - 1, 59, 59]);
    } else if (secs === 0) {
      setTime([hrs, mins - 1, 59]);
    } else {
      setTime([hrs, mins, secs - 1]);
    }
  };

  const startTimer = () => {
    isOn(true);
  };

  const stopTimer = () => {
    isOn(false);
  };

  const resetTimer = () => {
    setTime([0, 25, 0]);
  };

  useEffect(() => {
    if (on) {
      const timerId = setInterval(() => interval(), 1000);
      return () => {
        clearInterval(timerId);
      };
    }
  });

  return (
    <div className="timer-container">
      <div className="time-display">
        {mins}:{secs < 10 ? `0${secs}` : secs}
      </div>
      <div className="timer-button-container">
        <TimerButton
          className="start-timer"
          buttonAction={startTimer}
          buttonValue={"Start"}
        />
        <TimerButton
          className="stop-timer"
          buttonAction={stopTimer}
          buttonValue={"Stop"}
        />
        <TimerButton
          className="reset-timer"
          buttonAction={resetTimer}
          buttonValue={"Reset"}
        />
      </div>
    </div>
  );
};

export default Timer;
