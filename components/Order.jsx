import React from "react";
import { CountItem } from "./CountItem";
import { IsCount } from "./isCount";
import { OrderItem } from "./OrderItem";
import { useCount } from "../hooks/useCount";
import { useState } from "react";

export const Order = ({ orders, setOrders, setIsCount, isCount }) => {
  const [bascketBody, setBascketBody] = useState(false);
  const deleteOrder = (id) => {
    let newOrder = [...orders.values()].filter((item) => item.id != id);
    setOrders(newOrder);
  };
  const counter = useCount();
  const openBascket = () => {
    setBascketBody(true);
    if (bascketBody) {
      setBascketBody(false);
    }
  };
  const totalPrice = (order) => order.price * order.count;
  const total = [...orders.values()].reduce(
    (result, order) => totalPrice(order) + result,
    0
  );
  const totalCounter = [...orders.values()].reduce(
    (result, order) => order.count + result,
    0
  );
  return (
    <div className="bascket">
      <div className="bascket-wrapper">
        <h2 className="bascket__title">Корзина</h2>
        <input
          onClick={() => openBascket()}
          type="checkbox"
          name="input"
          id="input1"
        />
        <label htmlFor="input1"></label>

        <div>
          <div className="bascket-order">
            <span className="bascket-order__text">
              Количество услуг в корзине
            </span>
            <span className="bascket-order__total">{totalCounter}</span>
          </div>
          <div className="bascket-total">
            <span className="bascket-total__text">Сумма заказа</span>
            <span className="bascket-total__total">{total} ₽</span>
          </div>
        </div>
        {bascketBody && (
          <>
            {[...orders.values()].map(({ id, title, price, name, count }) => (
              <div key={id + new Date()} className="bascket-bag__block">
                <OrderItem
                  id={id}
                  title={title}
                  price={price}
                  name={name}
                  count={count}
                  deleteOrder={deleteOrder}
                  setIsCount={setIsCount}
                  isCount={isCount}
                />
                {/* <CountItem {...counter} /> */}
                {/* <IsCount count={orders ? orders.get(id).count : 0} /> */}
              </div>
            ))}
            <button className="bascket__button">Оформить заказ</button>
          </>
        )}
      </div>
    </div>
  );
};
