import React from "react";
import { CountItem } from "./CountItem";
import { useCount } from "../hooks/useCount";

export const IsCount = () => {
  const counter = useCount();
  return (
    <>
      <CountItem {...counter}></CountItem>
    </>
  );
};
