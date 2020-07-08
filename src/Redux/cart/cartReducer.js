import CartActionTypes from "./cartTypes";
import { addItemToCart, removeItemFromCart } from "./cartUtils";

const INITIAL_STATE = {
  hidden: false,
  cartItems: [],
  couponCode: '',
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.ADD_COUPONCODE:
      return {
        ...state,
        couponCode: action.payload
      }
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: false,
      };
    case CartActionTypes.TOGGLE_CART_SHOW:
      return {
        ...state,
        hidden: true,
      };
    case CartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };
    case CartActionTypes.REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload),
      };
    case CartActionTypes.ADD_QUANTITY:
      return {
        ...state,
        cartItems: addItemToCart(
          state.cartItems,
          action.payload,
          action.quantity
        ),
      };

    case CartActionTypes.CLEAR_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (cartItem) => cartItem.itemId !== action.payload.itemId
        ),
      };

    case CartActionTypes.CLEAR_CART:
      return {
        ...state,
        cartItems: [],
      };
    default:
      return state;
  }
};

export default cartReducer;
