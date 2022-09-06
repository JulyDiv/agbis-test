import React from "react";
import AllCollapseExample from "./Accordion";
import { ServiceItem } from "./ServiceItem";

export const Service = () => {
  return (
    <div className="service-wrapper">
      <div className="service-head">
        <h1 className="service-title-main">Услуги</h1>
        <form action="#" className="service-form">
          <input type="text" placeholder="Поиск" className="service-input" />
          <button className="service-button">
            <img alt="search" src="img/input-search.svg" />
          </button>
        </form>
      </div>
      <p className="service-text">
        Из-за ежедневного использования повседневная одежда быстро изнашивается
        и нуждается в профессиональном уходе. То, что чаще носится, должно и
        чаще чиститься! Подбирать для повседневной одежды правильные программы
        обработки – это задача профессионалов.
      </p>
      <div className="service-block">
        <AllCollapseExample />
        <ServiceItem />
      </div>
    </div>
  );
};
