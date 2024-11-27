import React, { useEffect, useState } from "react";

export default function Timer(start) {
  const [time, setTime] = useState(0);

  useEffect(() => {
    if (!start) return;

    const interval = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [start]);

  const timeFunc = () => {
    const minutes = Math.floor(time / 60)
      .toString()
      .padStart(2, "0");
    const seconds = (time % 60).toString().padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  return (
    <div className="timerDiv">
      <span>{timeFunc()}</span>
    </div>
  );
}
