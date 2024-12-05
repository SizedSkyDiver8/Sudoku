import React, { useState } from "react";
import pencilIcon from "./assets/pencil.png";
import cancelPencil from "./assets/cancel-pencil.png";
import eraser from "./assets/eraser.png";
import lightBulb from "./assets/light-bulb.png";
import eraserOn from "./assets/eraserON.png";
import fastPecil from "./assets/fast-pencil.png";

export default function SideBar({
  pencilValue,
  pencilChange,
  eraserValue,
  eraserChange,
  changeHint,
  hintValue,
  changeHintCount,
  changeFastPencil,
}) {
  const hintFunc = () => {
    if (hintValue > 0) {
      changeHintCount((prev) => prev - 1);
      changeHint(true);
    }
  };

  return (
    <div className="sideBar">
      <div>
        <img
          src={!pencilValue ? cancelPencil : pencilIcon}
          onClick={() => pencilChange((prev) => !prev)}
        />
        <span>pencil</span>
      </div>
      <div>
        <img
          src={eraserValue ? eraserOn : eraser}
          onClick={() => eraserChange((prev) => !prev)}
        />
        <span>{eraserValue ? "eraser (ON)" : "eraser (OFF)"}</span>
      </div>
      <div>
        <img src={lightBulb} onClick={() => hintFunc()} />
        <span>{`hint (${hintValue})`}</span>
      </div>
      <div>
        <img
          src={fastPecil}
          onClick={() => changeFastPencil((prev) => !prev)}
        />
        <span>fast pencil</span>
      </div>
    </div>
  );
}
