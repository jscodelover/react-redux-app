import React from "react";

function HomeComponent({ currentCount, onIncrementClick, onDecrementClick }) {
  return (
    <div>
      <p>current count: {currentCount}</p>
      <button onClick={onIncrementClick}>Increment</button>
      <button onClick={onDecrementClick}>Decrement</button>
    </div>
  );
}

export default HomeComponent;
