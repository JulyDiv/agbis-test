import React from "react";
import { CountItem } from "./CountItem";
import { useCount } from "../hooks/useCount";
import { useState } from "react";
import { CountItemBag } from "./CountItemBag";

export const OrderItem = ({
  title,
  id,
  price,
  deleteOrder,
  name,
  count,
  setIsCount
}) => {
    const [countBag, setCountBag] = useState(count);
    const onChange = (e) => {
      setCountBag(e.target.value);
    };
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
          <div className="">
            <CountItemBag
              onChange={onChange}
              countBag={countBag}
              setCountBag={setCountBag}
              setIsCount={setIsCount}
            />
          </div>
        </div>
      </div>
      <div className="bascket-bag__line-bottom"></div>
    </>
  );
};
