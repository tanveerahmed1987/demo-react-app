import "./Button.css";

function Button(props) {
  return <button className={`btn ${props.varient}`}>{props.text}</button>;
}

export default Button;
