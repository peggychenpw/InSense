import React from "react";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import {
  selectCartItems,
  selectCartTotal,
  selectUserLogin,
} from "../../Redux/cart/cartSelectors";

import { userToggleFunc } from "../../Redux/nav/navAction";
import { bindActionCreators } from "redux";
import { toggleCartHidden } from "../../Redux/cart/cartAction";

import CheckoutItem from "../../components/CheckoutItem/checkoutItem";

import "./checkout.scss";
import Button from "@material-ui/core/Button";

const CheckoutPage = ({
  cartItems,
  total,
  handleChange,
  history,
  user,
  userToggleFunc,
  userSelect,
  clearCart,
}) => (
  <div className="checkout-page">
    <div className="title">購物車</div>
    <div className="checkout-header">
      <div className="header-block product-img">
        <span>商品</span>
      </div>
      <div className="header-block">
        <span>商品名稱</span>
      </div>
      <div className="header-block product-qty">
        <span>數量</span>
      </div>
      <div className="header-block product-price">
        <span>價格</span>
      </div>
      <div className="header-block product-subtotal">
        <span>小計</span>
      </div>
    </div>
    {cartItems.map((cartItem) => (
      <CheckoutItem key={cartItem.itemId} cartItem={cartItem} />
    ))}

    {/* 優惠卷欄位 */}
    {/* <div className="coupon">
      <FormInput
        type="text"
        name="coupon"
        value="4EVER5566"
        handleChange={handleChange}
        label="折扣碼"
        required
      />
    </div>
    <div className="sum">${total}</div>
    <div className="discount">折扣: -100</div> */}
    <div className="total">總計: NT${total}</div>
    <Button
      className="checkout-button"
      variant="outlined"
      inverted={true}
      onClick={(e) => {
        if (!userSelect) {
          console.log(userSelect);
          e.preventDefault();
          userToggleFunc();
        } else {
          history.push("/orders/orderDelivery");
        }
      }}
    >
      前往購買
    </Button>
  </div>
);
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ toggleCartHidden, userToggleFunc }, dispatch);
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
  userSelect: selectUserLogin,
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(CheckoutPage)
);
