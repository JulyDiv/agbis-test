import React from "react";
import { CountItem } from "./CountItem";

export const OrderItem = ({ title, id, price, deleteOrder, name, count, setIsCount, isCount }) => {
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
          <div className="bascket-bag__count">
            {/* {isCount ? ( */}
              {/* <>
                <button onClick={() => setCount(count - 1)}>-</button>
                <input
                  className="counter__input"
                  type="number"
                  onChange={onChange}
                  value={count}
                />
                <button onClick={() => setCount(count + 1)}>+</button>
              </>
            ) : ( */}
              <span>{count}</span>
            {/* )} */}
          </div>
          {/* <CountItem {...counter} setIsCount={setIsCount}></CountItem> */}
        </div>
      </div>
      <div className="bascket-bag__line-bottom"></div>
    </>
  );
};
