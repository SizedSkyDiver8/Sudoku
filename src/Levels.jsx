import React from "react";

export default function Levels({ level }) {
  return (
    <div className="levels">
      <h2 className="headerLevels">Levels to start</h2>
      <div className="levelsDiv">
        <span onClick={() => level(44)}>Begginer</span>
        <span onClick={() => level(50)}>Intermediate</span>
        <span onClick={() => level(56)}>Advanced</span>
        <span onClick={() => level(62)}>Expert</span>
        <span onClick={() => level(66)}>Extreme</span>
      </div>
    </div>
  );
}
