import React from "react";

export const OrderItem = ({
  title,
  id,
  price,
  deleteOrder,
  name,
  count
}) => {
  return (
    <>
      <span className="bascket-bag__name">{name}</span>
      <div className="bascket-bag__line-top"></div>
      <div className="bascket-bag__wrapper">
        <span className="bascket-bag__title">{title}</span>
        <div className="bascket-bag__total-block">
          <button
            onClick={() => deleteOrder(id)}
            className="bascket-bag__button"
          ></button>
          <div className="bascket-bag__price">{price} ₽</div>
          <span className="bascket-bag__count">{count}</span>
        </div>
      </div>
      <div className="bascket-bag__line-bottom"></div>
    </>
  );
};
