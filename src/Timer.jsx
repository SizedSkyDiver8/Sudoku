// import React, { useEffect, useState } from "react";
// import pause from "./assets/pause.png";

// export default function Timer(start) {
//   const [time, setTime] = useState(0);
//   const [intervalId, setIntervalId] = useState(null);

//   useEffect(() => {
//     if (!start) return;
//     if (intervalId) {
//       const interval = setInterval(() => {
//         setTime((prevTime) => prevTime + 1);
//       }, 1000);
//       setIntervalId(interval);
//     } else {
//       clearInterval(interval);
//       setIntervalId(null);
//     }

//   }, [start]);

//   const timeFunc = () => {
//     const minutes = Math.floor(time / 60)
//       .toString()
//       .padStart(2, "0");
//     const seconds = (time % 60).toString().padStart(2, "0");
//     return `${minutes}:${seconds}`;
//   };

//   const stopTimer = () => {
//     if (intervalId) {
//       clearInterval(intervalId);
//       setIntervalId(null);
//     }
//   };

//   return (
//     <>
//       <div className="timerDiv">
//         <div className="timer">{timeFunc()}</div>
//         {start ? (
//           <img
//             className="startPause"
//             src={pause}
//             alt="Pause Icon"
//             onClick={stopTimer}
//           />
//         ) : (
//           ""
//         )}
//       </div>
//     </>
//   );
// }

import React, { useEffect, useState } from "react";
import pause from "./assets/pause.png";
import play from "./assets/play.png";

export default function Timer() {
  const [startStop, setStartStop] = useState(true);
  const [time, setTime] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
    if (startStop) {
      const interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
      setIntervalId(interval);
    }

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, [startStop]);

  const timeFunc = () => {
    const minutes = Math.floor(time / 60)
      .toString()
      .padStart(2, "0");
    const seconds = (time % 60).toString().padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  const stopTimer = () => {
    if (intervalId) {
      setStartStop(false);
      clearInterval(intervalId); // Stops the interval
      setIntervalId(null); // Prevents future actions
    } else {
      setStartStop(true);
    }
  };

  return (
    <div className="timerDiv">
      <div className="timer">{timeFunc()}</div>
      <img
        className="startPause"
        src={startStop ? pause : play}
        alt="Pause Icon"
        onClick={stopTimer} // Stops the timer on click
      />
    </div>
  );
}
