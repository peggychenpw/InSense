import CartActionTypes from "./cartTypes";

export const toggleCartHidden = () => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN,
});
export const toggleCartShow = () => ({
  type: CartActionTypes.TOGGLE_CART_SHOW,
});
//數量加一
export const addItem = (item) => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item,
});

//數量減一
export const removeItem = (item) => ({
  type: CartActionTypes.REMOVE_ITEM,
  payload: item,
});

//itemDetails頁面增加指定數量進購物車按鈕
export const addQuantity = (item, quantity) => ({
  type: CartActionTypes.ADD_QUANTITY,
  payload: item,
  quantity,
});

////itemDetails頁面加入購物車
export const addItemToCart = (item) => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item,
});

//checkout page頁面刪除單筆物件
export const clearItemFromCart = (item) => ({
  type: CartActionTypes.CLEAR_ITEM_FROM_CART,
  payload: item,
});

//清掉整台購物車
export const clearCart = () => ({
  type: CartActionTypes.CLEAR_CART,
});
