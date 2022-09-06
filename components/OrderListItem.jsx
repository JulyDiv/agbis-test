import React from "react";
import { CountItem } from "./CountItem";
import { useCount } from "../hooks/useCount";

export const OrderListItem = ({ listItem, setListItem, orders, setOrders }) => {
  const counter = useCount();
    const deleteOrder = (id) => {
      let newOrder = [...orders].filter((item) => item.id != id);
      setListItem(newOrder);
    };
  return (
    <>
      <div className="bascket-bag__block">
        <span className="bascket-bag__name">{listItem.title}</span>
        <button onClick={() => deleteOrder(listItem.id)} className="bascket-bag__button">
          <b>DELETE</b>
        </button>
        <div className="bascket-bag__price">{listItem.price}</div>
        <CountItem {...counter} />
      </div>
    </>
  );
};
