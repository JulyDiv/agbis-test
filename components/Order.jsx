import React from "react";
import { IsCount } from "./isCount";

export const Order = ({ orders }) => {
  const deleteOrder = (id) => {
    // let newOrder = [...orders].filter((item) => item.id != id);
    // setListItem(newOrder);
  };
  // console.log(orders);

  return (
    <div className="bascket">
      <div className="bascket-wrapper">
        <h2 className="bascket__title">Корзина</h2>
        <div>
          <div className="bascket-order">
            <span className="bascket-order__text">
              Количество услуг в корзине
            </span>
            <span className="bascket-order__total"></span>
          </div>
          <div className="bascket-total">
            <span className="bascket-total__text">Сумма заказа</span>
            <span className="bascket-total__total"></span>
          </div>
        </div>
        <div>
        {orders.map(({ id, title, price }) => (
          <div key={id + new Date()} className="bascket-bag__block">
            <span className="bascket-bag__name">{title}</span>
            <button
              onClick={() => deleteOrder(id)}
              className="bascket-bag__button"
            >
              <b>DELETE</b>
            </button>
            <div className="bascket-bag__price">{price}</div>
            <IsCount />
          </div>
        ))}
      </div>
      </div>
    </div>
  );
};
