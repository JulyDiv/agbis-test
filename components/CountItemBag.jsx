import React from "react";

export const CountItemBag = ({ countBag, setCountBag, onChange, setIsCount }) => {
  return (
    <div className="counter-bag">
      <button
        className="counter-bag__button counter-bag__button-minus"
        // disabled={count <= 1}
        onClick={() => {
          countBag < 1 ? setIsCount(false) : setCountBag(countBag - 1);
        }}
      ></button>
      <input
        className="counter-bag__input"
        type="number"
        min="1"
        value={countBag}
        onChange={onChange}
      />
      <button
        className="counter-bag__button counter-bag__button-plus"
        onClick={() => setCountBag(countBag + 1)}
      ></button>
    </div>
  );
};
