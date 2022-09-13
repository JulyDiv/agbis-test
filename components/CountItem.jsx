import React from "react";

export const CountItem = ({ count, setCount, onChange, setIsCount }) => {
  return (
    <div className="counter">
      <button
        className="counter__button counter__button-minus"
        // disabled={count <= 1}
        onClick={() => {
          count < 1 ? setIsCount(false) : setCount(count - 1);
        }}
      ></button>
      <input
        className="counter__input"
        type="number"
        min="1"
        value={count < 1 ? 1 : count}
        onChange={onChange}
      />
      <button
        className="counter__button counter__button-plus"
        onClick={() => setCount(count + 1)}
      ></button>
    </div>
  );
};
