import React from "react";
import "./accountSideBar.scss";
import { FiChevronRight } from "react-icons/fi";
import { Link, NavLink } from "react-router-dom";
import Button from "@material-ui/core/Button";

const AccountSideBar = () => {
  return (
    <div className="side-bar-wrapper">
      <h2>我的帳戶</h2>
      <ul className="accountMenu">
        <li className="d-flex align-item-center">
          <Link
            to="/account"
            className="d-flex align-item-center account-link"
          >
            <FiChevronRight className="icon" />
            <p>帳戶資訊</p>
          </Link>
        </li>
        <li className="d-flex align-item-center">
          <Link
            to="/account/classpage"
            className="d-flex align-item-center account-link"
          >
            <FiChevronRight className="icon" />
            <p>我的課程</p>
          </Link>
        </li>
        <li className="d-flex align-item-center">
          <Link
            to="/account/creditcard"
            className="d-flex align-item-center account-link"
          >
            <FiChevronRight className="icon" />
            <p>付款資訊</p>
          </Link>
        </li>
        <li className="d-flex align-item-center">
          <Link
            to="/account/orderhistory"
            className="d-flex align-item-center account-link"
          >
            <FiChevronRight className="icon" />
            <p>訂單記錄</p>
          </Link>
        </li>
        <li className="d-flex align-item-center">
          <Link
            to="/account/wishlist"
            className="d-flex align-item-center account-link"
          >
            <FiChevronRight className="icon" />
            <p>願望清單</p>
          </Link>
        </li>
        <li className="d-flex align-item-center">
          <Link
            to="/account/modify"
            className="d-flex align-item-center account-link"
          >
            <FiChevronRight className="icon" />
            <p>會員資料更改</p>
          </Link>
        </li>
        <li className="d-flex align-item-center">
          <Link to="/FaqAccordion" className="d-flex align-item-center account-link">
            <FiChevronRight className="icon" />
            <p>FAQ</p>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default AccountSideBar;
