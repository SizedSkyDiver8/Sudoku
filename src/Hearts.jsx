import heart from "../src/assets/red-heart-pixel.png";

export default function Hearts({ mistakeCounter }) {
  const hearts = Array.from(
    { length: 3 },
    (_, index) => index < mistakeCounter
  );

  return (
    <div className="heartDiv">
      {hearts.map((isFull, index) => (
        <img
          key={index}
          src={heart}
          alt="Heart"
          className={index < mistakeCounter ? "heartFull" : "grayImg"}
          />
      ))}
    </div>
  );
}
