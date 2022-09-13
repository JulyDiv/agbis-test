/* eslint-disable @next/next/no-img-element */
import React from "react";
import { OpenItem } from "./OpenItem";
import { Order } from "./Order";
import { useState } from "react";

export const OpenItems = ({
  openItem,
  orders,
  setOrders
}) => {
  const [isCount, setIsCount] = useState(false);
  return (
    <>
      {openItem.map((item) => (
        <OpenItem
          item={item}
          key={item.id}
          setOrders={setOrders}
          orders={orders}
          setIsCount={setIsCount}
          isCount={isCount}
        />
      ))}
      {[...orders.values()].length ? (
        <Order orders={orders} setOrders={setOrders} setIsCount={setIsCount} isCount={isCount} />
      ) : (
        ""
      )}
    </>
  );
};
