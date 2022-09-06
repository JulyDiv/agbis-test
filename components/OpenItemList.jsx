/* eslint-disable @next/next/no-img-element */
import React from "react";
import { CountItem } from "./CountItem";
import { useCount } from "../hooks/useCount";

export const OpenItemList = ({
  openItem,
  orders,
  setOrders,
  setListItem,
  isCount,
  setIsCount,
  setOpenItem,
  listItem,
  isOpenCleaner,
  item
}) => {
  const counter = useCount();

  const addOrder = () => {
    // setListItem(listItem);
    // console.log();
    // setOrders([
    //   ...orders,
    //   {
    //     id: item.id,
    //     title: item.title,
    //     price: item.price,
    //   },
    // ]);
    setIsCount(true);
  };
  console.log(listItem);
  return (
    <>
      <div>
        <div className="service-item">
          <div className="service-info">
            <h3 className="service-info__title">{listItem.title}</h3>
            <button className="service-info__button">
              Подробнее
              <img alt="next" src="img/arrow-right.svg" />
            </button>
          </div>
          <div className="service-shop">
            <span className="service-shop__price">{listItem.price} P</span>
            {isCount ? (
              <CountItem {...counter}></CountItem>
            ) : (
              <button
                onClick={() => addOrder()}
                className="service-shop__button"
              ></button>
            )}
          </div>
        </div>
      </div>

      {/* <div>
        <div className="service-item">
          <div className="service-info">
            <h3 className="service-info__title">{listItem.title}</h3>
            <button className="service-info__button">
              Подробнее
              <img alt="next" src="img/arrow-right.svg" />
            </button>
          </div>
          <div className="service-shop">
            <span className="service-shop__price">{listItem.price} P</span>
            {isCount ? (
              <CountItem {...counter}></CountItem>
            ) : (
              <button
                onClick={() => addOrder}
                className="service-shop__button"
              ></button>
            )}
          </div>
        </div>
      </div> */}
    </>
  );
};