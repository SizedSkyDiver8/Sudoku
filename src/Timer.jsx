import React, { useEffect, useState } from "react";
import pause from "./assets/pause.png";
import play from "./assets/play.png";

export default function Timer({ timerStarts, pauseStartTimer }) {
  const [time, setTime] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
    if (timerStarts) {
      const interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
      setIntervalId(interval);
    }

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, [timerStarts]);

  const timeFunc = () => {
    const minutes = Math.floor(time / 60)
      .toString()
      .padStart(2, "0");
    const seconds = (time % 60).toString().padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  const stopTimer = () => {
    if (intervalId) {
      pauseStartTimer(false);
      clearInterval(intervalId); // Stops the interval
      setIntervalId(null); // Prevents future actions
    } else {
      pauseStartTimer(true);
    }
  };

  return (
    <div className="timerDiv">
      <div className="timer">{timeFunc()}</div>
      <img
        className="startPause"
        src={timerStarts ? pause : play}
        alt="Pause Icon"
        onClick={stopTimer} // Stops the timer on click
      />
    </div>
  );
}
