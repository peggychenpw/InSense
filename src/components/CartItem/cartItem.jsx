import React from "react";

import "./cartItem.scss";

const CartItem = ({ cartItem: { itemimg, itemName, itemPrice, quantity } }) => {
  return (
    <div className="cart-item">
      <img src={itemimg} alt="item" />
      <div className="item-details">
        <span className="name">{itemName}</span>
        <span className="price">
          {quantity} x ${itemPrice}
        </span>
      </div>
    </div>
  );
};

export default CartItem;