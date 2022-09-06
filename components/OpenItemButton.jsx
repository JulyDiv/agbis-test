import React from "react";
import { Test } from "./test";

export const OpenItemButton =({ addOrder, item }) => {
    return (
      <>
        <Test addOrder={addOrder} item={item} />
      </>
    );
}