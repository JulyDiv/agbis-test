import React, { useCallback } from "react";
import { useCount } from "../hooks/useCount";

export const IsCount = ({ addOrder, count }) => {
  const { setCount, onChange } = useCount();

  const onClick = useCallback(
    ({type}) => {
      addOrder({ type: "ADD" });
      setCount(count + 1);
    },
    [addOrder, count, setCount]
  );

  return (
    <div className="counter">
      <button
        className="counter__button"
        onClick={() => onClick("DELETE")}
      >
        -
      </button>
      <input
        className="counter__input"
        type="number"
        value={count < 1 ? 1 : count}
        onChange={onChange}
      />
      <button className="counter__button" onClick={() => onClick("ADD")}>
        +
      </button>
    </div>
  );
};
