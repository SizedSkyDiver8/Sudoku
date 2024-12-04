import React, { useState } from "react";
import puzzleIcon from "./assets/puzzle.png";
import Levels from "./Levels";

export default function HomePage({ level }) {
  const [expand, setExpand] = useState(null);

  // Data for details sections
  const detailsData = [
    {
      key: "Objective",
      summary: "Objective",
      content: (
        <p>
          Fill the grid so that every row, every column, and each 3x3 subgrid
          (or smaller regions for different grid sizes) contains the numbers 1
          through 9 without repetition.
        </p>
      ),
    },
    {
      key: "Basic Rules",
      summary: "Basic Rules",
      content: (
        <ul>
          <li>Each number must appear only once in each row.</li>
          <li>Each number must appear only once in each column.</li>
          <li>Each number must appear only once in each 3x3 subgrid.</li>
        </ul>
      ),
    },
    {
      key: "Getting Started",
      summary: "Getting Started",
      content: (
        <ul>
          <li>Some numbers are already placed in the grid as clues.</li>
          <li>
            Use these clues to logically deduce where other numbers should go.
          </li>
        </ul>
      ),
    },
    {
      key: "How to Play",
      summary: "How to Play",
      content: (
        <ul>
          <li>Select a cell on the grid.</li>
          <li>Choose or type a number from 1 to 9.</li>
          <li>Adjust incorrect placements until all rules are satisfied.</li>
        </ul>
      ),
    },
    {
      key: "Winning",
      summary: "Winning",
      content: (
        <p>
          The puzzle is complete when every cell is correctly filled and no
          rules are violated.
        </p>
      ),
    },
  ];

  return (
    <div className="homePageDiv">
      <div className="headerImg">
        <h1>The Ultimate Sudoku Challenge</h1>
        <img src={puzzleIcon} alt="Puzzle Icon" />
      </div>
      <span>
        Challenge your problem-solving skills with multiple difficulty levels,
        sleek design, and intuitive gameplay. Perfect for beginners and experts
        alike—test your strategy and conquer the grid!
      </span>
      <div className="detailsInstruction">
        <h2 className="headerInstruction">Instruction</h2>
        {detailsData.map(({ key, summary, content }) => (
          <details
            key={key}
            open={expand === summary}
            onClick={(e) => {
              e.preventDefault();
              setExpand(expand === summary ? null : summary);
            }}
            aria-expanded={expand === summary}
          >
            <summary>{summary}</summary>
            <p className="detailsP">{content}</p>
          </details>
        ))}
      </div>
      <Levels level={level} />
    </div>
  );
}
