import React, { useState } from "react";
import "./Counter.css";

export default function Counter() {
  const [count, setCount] = useState(0);

  const updateCount = () => setCount(count + 1);
  const decreaseCount = () => count > 0 && setCount(count - 1);
  const increaseCountBy5 = () => setCount(count + 5);
  const decreaseCountBy5 = () => setCount(prev => Math.max(0, prev - 5));
  const resetCount = () => setCount(0);

  return (
    <div className="counter-container">
      <div className="counter-card">
        <h1 className="counter-value">{count}</h1>
        <div className="btn-group">
          <button className="circle-btn blue" onClick={updateCount}>+1</button>
          <button className="circle-btn red" onClick={decreaseCount}>-1</button>
          <button className="circle-btn green" onClick={increaseCountBy5}>+5</button>
          <button className="circle-btn orange" onClick={decreaseCountBy5}>-5</button>
          <button className="circle-btn gray" onClick={resetCount}>⟳</button>
        </div>
      </div>
    </div>
  );
}
