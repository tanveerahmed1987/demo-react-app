import "./Skillbar.css";

// Object destructuring

function Skillbar({ text = "Unknown", percentage = "50", color = "yellow" }) {
  return (
    <>
      <p>{text}</p>
      <div className="skillbar">
        <div className={`skill percent${percentage} ${color}`}>
          {percentage}%
        </div>
      </div>
    </>
  );
}

export default Skillbar;
