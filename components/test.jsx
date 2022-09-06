import React from "react";

export const Test = ({ addOrder, item }) => {
  return (
    <>
      <button
        onClick={() => addOrder(item)}
        className="service-shop__button"
      ></button>
    </>
  );
};
