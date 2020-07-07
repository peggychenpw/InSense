//Base reducer object that represents all of the state of our application so this root reducer will end up
//being the actual code that combine all of our other states together. All reducers are going to go into this root reducer
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import testReducer from "./test/testReducer";
import userReducer from "./user/userReducer";
import cartReducer from "./cart/cartReducer";
import navReducer from "./nav/navReducer";
import cancelOrderReducer from "./order/orderReducer";

const persistConfig = {
  key: "root",
  storage,
  // whitelist: ["cart"],
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  test: testReducer,
  nav: navReducer,
  cancelOrder: cancelOrderReducer
});

export default persistReducer(persistConfig, rootReducer);

//imported in store.js
