import React from "react";
import { Accor } from "./Accor";
import { ServiceItem } from "./ServiceItem";
import { useState } from "react";
import { useOrders } from "../hooks/useOrders";
import catalog from "./Catalog";

export const Service = () => {
  const order = useOrders();
  const [isOpenCleaner, setIsOpenCleaner] = useState(false);
  const [isOpenWaterСleaning, setIsOpenWaterСleaning] = useState(false);

  return (
    <div className="service">
      <div className="service-head">
        <h1 className="service-head__title">Услуги</h1>
        <form action="#" className="service-head__form">
          <input
            type="text"
            placeholder="Поиск"
            className="service-head__input"
          />
          <button className="service-head__button"></button>
        </form>
      </div>
      <div className="service-text">
        <p className="service__text">
          Из-за ежедневного использования повседневная одежда быстро
          изнашивается и нуждается в <br /> профессиональном уходе. То, что чаще
          носится, должно и чаще чиститься! Подбирать для повседневной <br />
          одежды правильные программы обработки – это задача профессионалов.
        </p>
      </div>
      <div className="service-block">
        <Accor
          setIsOpenWaterСleaning={setIsOpenWaterСleaning}
          setIsOpenCleaner={setIsOpenCleaner}
        />
        {isOpenCleaner && (
          <ServiceItem
            openItem={catalog.outerwear}
            isOpenCleaner={isOpenCleaner}
            {...order}
          />
        )}
      </div>
    </div>
  );
};
