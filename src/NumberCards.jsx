export default function NumberCards({
  usedNumbers,
  selectedNumber,
  onNumberSelect,
}) {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <div className="divCards">
      {numbers.map((number, index) => (
        <div
          key={index}
          className={
            number === selectedNumber
              ? "numberHover"
              : usedNumbers[index] === 9
              ? "numberHoverDone"
              : ""
          }
          onClick={() => onNumberSelect(number)}
        >
          {number}
        </div>
      ))}
    </div>
  );
}
