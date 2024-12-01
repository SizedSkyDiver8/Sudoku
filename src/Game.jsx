import React, { useState, useEffect } from "react";
import heart from "../src/assets/red-heart-pixel.png";
import Hearts from "./Hearts";
import NumberCards from "./NumberCards";
import Timer from "./Timer";

export default function Game({ level }) {
  const [board, setBoard] = useState(
    Array.from({ length: 9 }, () => Array(9).fill(0))
  );
  const [highlightValue, setHighlightValue] = useState(null); // Currently highlighted value
  const [highlightedCells, setHighlightedCells] = useState([]); // List of cells to highlight
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]; // Possible numbers
  const [chosenNumber, setChosenNumber] = useState(null); // The number selected by the player
  const [arrayNumbers, setArrayNumbers] = useState([]); // Array to track numbers used
  const [wrongCells, setWrongCells] = useState([]); // List of cells with wrong moves
  const [mistakes, setMistakes] = useState(3);
  const [startTimer, setStartTimer] = useState(false);

  // Initializes the game board by filling it and removing numbers
  const initialize = () => {
    const newBoard = Array.from({ length: 9 }, () => Array(9).fill(0));
    fillBoard(newBoard);
    removeNumbers(newBoard);
    setBoard(newBoard);
  };

  // Fills the board with a complete valid Sudoku solution
  const fillBoard = (array) => {
    for (let row = 0; row < 9; row++) {
      for (let col = 0; col < 9; col++) {
        if (array[row][col] === 0) {
          const possibleValues = shuffleArray([1, 2, 3, 4, 5, 6, 7, 8, 9]);
          for (let value of possibleValues) {
            if (checkMove(array, row, col, value)) {
              array[row][col] = value;
              if (fillBoard(array)) {
                return true;
              }
              array[row][col] = 0;
            }
          }
          return false;
        }
      }
    }
    return true;
  };

  // Removes numbers from the filled board to create the puzzle
  const removeNumbers = (array) => {
    let count = 0;
    const arrayNumberCount = Array(9).fill(9); // Initial count for each number
    while (count <= level) {
      let row = Math.floor(Math.random() * 9);
      let col = Math.floor(Math.random() * 9);
      if (array[row][col] !== null) {
        arrayNumberCount[array[row][col] - 1]--;
        array[row][col] = null;
        count++;
      }
    }
    setArrayNumbers(arrayNumberCount);
  };

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  // Highlights cells that have the same value as `highlightValue`
  const highlightCell = () => {
    const cellsToHighlight = [];
    board.forEach((row, rowIndex) => {
      row.forEach((cellValue, colIndex) => {
        if (cellValue === highlightValue) {
          cellsToHighlight.push(`${rowIndex}-${colIndex}`);
        }
      });
    });
    setHighlightedCells(cellsToHighlight); // Update highlighted cells
  };

  // Checks if placing a number in the given cell is valid
  const checkMove = (array, row, col, number) => {
    for (let i = 0; i < 9; i++) {
      if (
        (!wrongCells.includes(`${row}-${i}`) &&
          array[row][i] === number &&
          i !== col) || // Check row
        (!wrongCells.includes(`${i}-${col}`) &&
          array[i][col] === number &&
          i !== row) // Check column
      ) {
        return false;
      }
    }
    const startRow = Math.floor(row / 3) * 3;
    const startCol = Math.floor(col / 3) * 3;
    for (let i = startRow; i < startRow + 3; i++) {
      for (let j = startCol; j < startCol + 3; j++) {
        if (
          !wrongCells.includes(`${i}-${j}`) &&
          array[i][j] === number &&
          !(i === row && j === col) // Exclude the current cell
        ) {
          return false;
        }
      }
    }
    return true;
  };

  // Handles cell clicks, updating highlights or placing a number
  const clickedCell = (...args) => {
    if (args.length === 1) {
      const [value] = args;
      if (value !== null) {
        setHighlightValue(value);
        highlightCell();
      } else {
        setHighlightedCells([]);
        setHighlightValue(null);
      }
    } else if (args.length === 2) {
      const [row, col] = args;
      const newArray = [...board.map((row) => [...row])];
      newArray[row][col] = chosenNumber;
      // Check if the move is valid or invalid
      if (checkMove(newArray, row, col, chosenNumber)) {
        const arrayNumberIncrease = [...arrayNumbers];
        arrayNumberIncrease[chosenNumber - 1]++;
        setArrayNumbers(arrayNumberIncrease);
        setBoard(newArray);
        // Remove cell from wrongCells if it exists
        if (wrongCells.includes(`${row}-${col}`)) {
          const updatedWrongCells = [...wrongCells];
          const index = updatedWrongCells.indexOf(`${row}-${col}`);
          updatedWrongCells.splice(index, 1);
          setWrongCells(updatedWrongCells);
        }
      } else {
        setBoard(newArray);
        // Add cell to wrongCells if not already present
        if (!wrongCells.includes(`${row}-${col}`)) {
          setWrongCells([...wrongCells, `${row}-${col}`]);
          setMistakes((prevMistake) => prevMistake - 1);
        }
      }
      setHighlightedCells([]);
      setHighlightValue(null);
      setChosenNumber(null);
    }
  };

  // Resets highlights and chosen number on outside clicks
  useEffect(() => {
    const handleDocumentClick = (event) => {
      const gameBoardElement = document.querySelector(".gameBoard");
      if (gameBoardElement && !gameBoardElement.contains(event.target)) {
        setHighlightedCells([]);
        setHighlightValue(null);
        setChosenNumber(null);
      }
    };
    document.addEventListener("click", handleDocumentClick);
    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  // Recalculates highlighted cells whenever `highlightValue` changes
  useEffect(() => {
    if (highlightValue != null) {
      highlightCell();
    }
  }, [highlightValue]);

  // Initializes the game board on component mount
  useEffect(() => {
    initialize();
  }, []);

  return (
    <>
      <h1 className="headerGame">Sudoku</h1>
      <Timer start={startTimer} />
      <Hearts mistakeCounter={mistakes} />
      <div className="gameBoard">
        {board.map((row, rowIndex) => (
          <div className={`row row${rowIndex}`} key={rowIndex}>
            {row.map((value, colIndex) => (
              <div
                className={`col col${colIndex}
              ${
                highlightedCells.includes(`${rowIndex}-${colIndex}`)
                  ? "highlight"
                  : ""
              } ${
                  wrongCells.includes(`${rowIndex}-${colIndex}`)
                    ? "wrongCell"
                    : ""
                }`}
                key={colIndex}
                onClick={() => {
                  if (
                    (value === null && chosenNumber !== null) ||
                    (chosenNumber !== null &&
                      wrongCells.includes(`${rowIndex}-${colIndex}`))
                  ) {
                    clickedCell(rowIndex, colIndex);
                  } else if (
                    value !== null &&
                    !wrongCells.includes(`${rowIndex}-${colIndex}`)
                  ) {
                    clickedCell(value);
                  } else {
                    clickedCell(null);
                  }
                }}
              >
                <span>{value}</span>
              </div>
            ))}
          </div>
        ))}
        <NumberCards
          usedNumbers={arrayNumbers}
          onNumberSelect={setChosenNumber}
          selectedNumber={chosenNumber}
        />
      </div>
    </>
  );
}
