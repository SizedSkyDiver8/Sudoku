import React, { useState } from "react";
import pencilIcon from "./assets/pencil.png";
import cancelPencil from "./assets/cancel-pencil.png";
import eraser from "./assets/eraser.png";
import lightBulb from "./assets/light-bulb.png";

export default function SideBar({ pencilValue, pencilChange }) {
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
        <img src={eraser} />
        <span>eraser</span>
      </div>
      <div>
        <img src={lightBulb} />
        <span>hint</span>
      </div>
      <div>
        <img src={pencilIcon} />
        <span>pencil</span>
      </div>
    </div>
  );
}
