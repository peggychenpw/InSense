import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import "./cartIcon.scss";
// import "../CartItem/cartItem";

import { createStructuredSelector } from "reselect";

import { selectCartItemsCount } from "../../Redux/cart/cartSelectors";
import { connect } from "react-redux";

const CartIcon = ({ toggleCartHidden = () => { }, itemCount }) => (
  <a className="cart-icon" onClick={toggleCartHidden}>
    <FiShoppingCart className="shopping-icon" />
    <span className="item-count">{itemCount}</span>
  </a>
);

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
});

export default connect(mapStateToProps)(CartIcon);
