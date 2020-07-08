//memorized selector

import { createSelector } from "reselect";

const selectCart = (state) => state.cart;
const selectUser = (state) => state.user;

export const selectUserInfo = createSelector(
  [selectUser],
  (user) => user.userInfo
);

export const selectUserLogin = createSelector(
  [selectUser],
  (user) => user.logInStatus
);

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCartHidden = createSelector(
  [selectCart],
  (cart) => cart.hidden
);

export const selectCouponCode = createSelector(
  [selectCart],
  (cart) => cart.couponCode
)

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce(
      (accumalatedQuantity, cartItem) =>
        accumalatedQuantity + cartItem.quantity,
      0
    )
);

export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce(
    (accumalatedQuantity, cartItem) =>
      accumalatedQuantity + cartItem.quantity * cartItem.itemPrice,
    0
  )
);
