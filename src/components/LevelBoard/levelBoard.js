import React, { useState } from "react";

//react-icon
import { RiCakeLine } from "react-icons/ri";
import { AiOutlineGift } from "react-icons/ai";
import { FaLevelUpAlt } from "react-icons/fa";

//css
import "./levelBoard.scss";

const LevelBoard = (props) => {
  const { level } = props;
  const thisYear = new Date().getFullYear();
  return (
    <>
      <div className="level-container d-flex flex-direction-column align-items-center">
        <h1 className="level-title">您的優惠</h1>
        <h4 className="level-subtitle-title">12/31/{thisYear} 到期</h4>
        <div className="level-figure d-flex align-items-center justify-content-between">
          <div className="customer new-customer">
            <div className="customer-circle">
              <div className={`level-circle ${!level ? "active" : ""}`}></div>
            </div>
            <p className="text-center">新客</p>
          </div>
          <div className="horizantal-bar flex-grow"></div>
          <div className="customer senior-customer">
            <div className="customer-circle">
              <div className={`level-circle ${level ? "active" : ""}`}></div>
            </div>
            <p className="text-center">香客</p>
          </div>
        </div>
        <div className="discount-description">
          <div className="discount d-flex align-items-end justify-content-between">
            <FaLevelUpAlt />
            <p>滿五萬 升香客</p>
          </div>
          <div className="discount d-flex align-items-end justify-content-between">
            <RiCakeLine />
            <p>生日折價優惠券</p>
          </div>
          <div className="discount d-flex align-items-end justify-content-between">
            <AiOutlineGift />
            <p>晉升香客贈好禮</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default LevelBoard;
