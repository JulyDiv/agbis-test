import React from "react";

export const ServiceItem = () => {
  return (
    <>
      <div className="service-list">
        <div className="service-item">
          <div className="service-info">
            <h3 className="service-title">Title</h3>
            <button className="service-button-link">
              Подробнее
              <img alt="arrow-right" src="img/arrow-right.svg" />
            </button>
          </div>

          <div className="service-block-buy">
            <span className="service-price">1000 Р</span>
            <button className="service-button-bag">
              <img alt="bag" src="img/bag.svg" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
