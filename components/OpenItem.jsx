/* eslint-disable @next/next/no-img-element */
import React from "react";
import { IsCount } from "./isCount";
import { OpenItemButton } from "./OpenItemButton";

export const OpenItem = ({
  openItem,
  orders,
  setOrders,
  isCount,
  setIsCount,
  listItem,
  setListItem,
}) => {
  const addOrder = (item) => {
    console.log(item);
    setOrders([
      ...orders,
      {
        id: item.id,
        title: item.title,
        price: item.price,
      },
    ]);
    setIsCount(true);
  };
  return (
    <>
      {openItem.map((item) => (
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
              <span className="service-shop__price">{item.price} P</span>
              {isCount ? (
                <IsCount />
              ) : (
                <button
                  onClick={() => addOrder(item)}
                  className="service-shop__button"
                ></button>
              )}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
