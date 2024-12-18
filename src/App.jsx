import { useEffect, useState, useRef } from "react";
import BIRDS from "vanta/src/vanta.birds";
import Game from "./Game";
import * as THREE from "three";
import HomePage from "./HomePage";
import CheckAPI from "./CheckAPI"
window.THREE = THREE; // Make THREE available globally for Vanta.js

function App() {
  const [vantaEffect, setVantaEffect] = useState(null);
  const vantaRef = useRef(null);
  const [level, setLevel] = useState(0);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        BIRDS({
          el: vantaRef.current,
          color1: 0x1e2749,
          color2: 0xd1ff,
          backgroundColor: 0x1e2749,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div style={{ height: "100vh", width: "100vw", overflow: "hidden" }}>
      <div
        ref={vantaRef}
        id="vanta"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          height: "100vh",
          width: "100vw",
          zIndex: -1,
        }}
      ></div>

      <div
        className="main-content"
        style={{
          position: "relative",
          zIndex: 1,
          height: "100%",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* <CheckAPI/> */}
        {level == 0 ? <HomePage level={setLevel} /> : <Game level={level} />}
      </div>
    </div>
  );
}

export default App;
