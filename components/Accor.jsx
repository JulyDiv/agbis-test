import React from "react";

export const Accor = ({
  setIsOpenCleaner,
  setIsOpenWaterСleaning
}) => {
  return (
    <div className="acor-container">
      <input type="checkbox" name="chacor" id="chacor1" />
      <label htmlFor="chacor1">Химчистка</label>
      <div className="acor-body">
        <button className="acor__button">Аксессуары</button>
        <button onClick={() => setIsOpenCleaner(true)} className="acor__button">
          Верхняя одежда
        </button>
        <button className="acor__button">Деловой костюм</button>
        <button className="acor__button">Джинса</button>
        <button className="acor__button">Куртка и пуховик</button>
        <button className="acor__button">Пальто и плащ</button>
      </div>

      <input type="checkbox" name="chacor" id="chacor2" />
      <label htmlFor="chacor2">Аквачистка</label>
      <div className="acor-body">
        <button className="acor__button">Аксессуары</button>
        <button className="acor__button">Верхняя одежда</button>
        <button
          onClick={() => setIsOpenWaterСleaning(true)}
          className="acor__button"
        >
          Деловой костюм
        </button>
        <button className="acor__button">Джинса</button>
        <button className="acor__button">Куртка и пуховик</button>
        <button className="acor__button">Пальто и плащ</button>
      </div>

      <input type="checkbox" name="chacor" id="chacor3" />
      <label htmlFor="chacor3">Ремонт одежды</label>
      <div className="acor-body">
        <button className="acor__button">Аксессуары</button>
        <button className="acor__button">Верхняя одежда</button>
        <button className="acor__button">Деловой костюм</button>
        <button className="acor__button">Джинса</button>
        <button className="acor__button">Куртка и пуховик</button>
        <button className="acor__button">Пальто и плащ</button>
      </div>
      <input type="checkbox" name="chacor" id="chacor3" />
      <label htmlFor="chacor4">Химчистка</label>
      <div className="acor-body"></div>
      <input type="checkbox" name="chacor" id="chacor3" />
      <label htmlFor="chacor5">Аквачистка</label>
      <div className="acor-body"></div>
      <input type="checkbox" name="chacor" id="chacor3" />
      <label htmlFor="chacor6">Ремонт одежды</label>
      <div className="acor-body"></div>
    </div>
  );
};
