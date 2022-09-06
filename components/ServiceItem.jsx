/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Order } from "./Order";
import { OpenItem } from "./OpenItem";

export const ServiceItem = ({ openItem, orders, setOrders, listItem, setListItem, isCount, setIsCount }) => {

  return (
    <div className="service-wrapper">
      <OpenItem
        openItem={openItem}
        orders={orders}
        setOrders={setOrders}
        isCount={isCount}
        setIsCount={setIsCount}
        listItem={listItem}
        setListItem={setListItem}
      />
      <Order orders={orders} listItem={listItem} setListItem={setListItem} />
    </div>
  );
};
