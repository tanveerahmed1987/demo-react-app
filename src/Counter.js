import { useState } from "react";
import "./Counter.css";

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="container">
      <button onClick={decrement}>-</button>
      <div>{count}</div>
      <button onClick={increment}>+</button>
    </div>
  );
}

export default Counter;
