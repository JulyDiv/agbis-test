import React from "react";

export const CountItem = ({ count, setCount, onChange }) => {

  return (
    <div className="counter">
      <button
        className="counter__button"
        disabled={count <= 1}
        onClick={() => setCount(count - 1)}
      >
        -
      </button>
      <input
        className="counter__input"
        type="number"
        min="1"
        value={count < 1 ? 1 : count}
        onChange={onChange}
      />
      <button
        className="counter__button"
        onClick={() => setCount(count + 1)}
      >+</button>
    </div>
  );
};
