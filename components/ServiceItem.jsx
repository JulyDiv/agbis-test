import React from "react";

export const ServiceItem = () => {
  return (
    <>
      <div className="service-wrapper">
        <div className="service-item">
          <div className="service-info">
            <h3 className="service-info__title">Title</h3>
            <button className="service-info__button">
              Подробнее
              <img alt="next" src="img/arrow-right.svg" />
            </button>
          </div>

          <div className="service-shop">
            <span className="service-shop__price">1000 Р</span>
            <button className="service-shop__button"></button>
          </div>
        </div>
      </div>
    </>
  );
};
