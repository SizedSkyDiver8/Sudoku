import React, { useState } from "react";
import puzzleIcon from "./assets/puzzle.png";

export default function HomePage() {
  const [expand, setExpand] = useState(null);
  return (
    <div className="homePageDiv">
      <div className="headerImg">
        <h1>The Ultimate Sudoku Challenge </h1>
        <img src={puzzleIcon} />
      </div>
      <span>
        Challenge your problem-solving skills with multiple difficulty levels,
        sleek design, and intuitive gameplay. Perfect for beginners and experts
        alike—test your strategy and conquer the grid!
      </span>
      <div className="detailsInstruction">
        <h2 className="headerInstruction">Instruction</h2>
        <details>
          <summary>Objective</summary>
          <p>
            Fill the grid so that every row, every column, and each 3x3 subgrid
            (or smaller regions for different grid sizes) contains the numbers 1
            through 9 without repetition.
          </p>
        </details>
        <details>
          <summary>Basic Rules</summary>
          <ul>
            <li>Each number must appear only once in each row.</li>
            <li>Each number must appear only once in each column.</li>
            <li>Each number must appear only once in each 3x3 subgrid.</li>
          </ul>
        </details>
        <details>
          <summary>Getting Started</summary>
          <ul>
            <li>Some numbers are already placed in the grid as clues.</li>
            <li>
              Use these clues to logically deduce where other numbers should go.
            </li>
          </ul>
        </details>
        <details>
          <summary>How to Play</summary>
          <ul>
            <li>Select a cell on the grid.</li>
            <li>Choose or type a number from 1 to 9.</li>
            <li>Adjust incorrect placements until all rules are satisfied.</li>
          </ul>
        </details>
        <details>
          <summary>Winning</summary>
          <p>
            The puzzle is complete when every cell is correctly filled and no
            rules are violated.
          </p>
        </details>
      </div>
    </div>
  );
}
