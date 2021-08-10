import "./Skillbar.css";

// Object destructuring

function Skillbar({
  text = "Unknown",
  percentage = "50",
  color = "yellow",
  onTouch,
}) {
  const clickHandler = () => {
    // if (onTouch) {
    //   onTouch(text);
    // }

    onTouch && onTouch(text);
  };

  return (
    <>
      <p>{text}</p>
      <div className="skillbar" onClick={clickHandler}>
        <div className={`skill percent${percentage} ${color}`}>
          {percentage}%
        </div>
      </div>
    </>
  );
}

export default Skillbar;
