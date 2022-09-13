/* eslint-disable @next/next/no-img-element */
import React from "react";
import { OpenItems } from "./OpenItems";

export const ServiceItem = ({ openItem, orders, setOrders }) => {

  return (
    <div className="service-wrapper">
      <OpenItems
        openItem={openItem}
        orders={orders}
        setOrders={setOrders}
      />
    </div>
  );
};
