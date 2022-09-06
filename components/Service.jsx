import React from "react";
import { Accor } from "./Accor";
import { ServiceItem } from "./ServiceItem";

export const Service = () => {
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
      <p className="service__text">
        Из-за ежедневного использования повседневная одежда быстро изнашивается
        и нуждается в профессиональном уходе. То, что чаще носится, должно и
        чаще чиститься! Подбирать для повседневной одежды правильные программы
        обработки – это задача профессионалов.
      </p>
      <div className="service-block">
        {/* <AllCollapseExample /> */}
        <Accor />
        <ServiceItem />
      </div>
    </div>
  );
};
