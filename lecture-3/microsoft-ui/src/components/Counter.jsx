import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const handleUp = () => {
    setCount(count + 1);
  };

  const handleDown = () => {
    setCount(count - 1);
  };

  return (
    <div style={{ fontSize: "24px", padding: "20px" }}>
      <h2>Counter: {count}</h2>

      <button onClick={handleUp}>Up</button>
      <button onClick={handleDown}>Down</button>
    </div>
  );
}

export default Counter;
