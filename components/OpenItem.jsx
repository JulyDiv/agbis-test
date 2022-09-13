/* eslint-disable @next/next/no-img-element */
import React from "react";
import { useState } from "react";
import { CountItem } from "./CountItem";
import { useCount } from "../hooks/useCount";

export const OpenItem = ({
  item,
  setOrders,
  orders
}) => {
  const [isCount, setIsCount] = useState(false);
  const counter = useCount();

  const order = {
    ...orders,
    name: item.name,
    id: item.id,
    title: item.title,
    price: item.price,
    count: counter.count,
  };
  const addOrder = () => {
    const list = new Map(orders);
    if (list.get(item.id)) {
      list.set(item.id, {
        ...item,
        count: counter.count,
        // count: ++orders.get(item.id).count,
      });
    } else {
      list.set(item.id, order);
    }
    setOrders(list);
    console.log(list);
    setIsCount(false);
  };

  return (
    <div key={item.id}>
      <div className="service-item">
        <div className="service-info">
          <h3 className="service-info__title">{item.title}</h3>
          <button className="service-info__button">
            Подробнее
            <img alt="next" src="img/arrow-right.svg" />
          </button>
        </div>
        <div className="service-shop">
          <span className="service-shop__price">{item.price} ₽</span>
          {isCount ? (
            <>
              <CountItem {...counter} setIsCount={setIsCount} />
              <button
                className="service-shop__button-count"
                onClick={() => addOrder()}
              >
              </button>
            </>
          ) : (
            <button
              onClick={() => setIsCount(true)}
              className="service-shop__button"
            ></button>
          )}
        </div>
      </div>
    </div>
  );
};
