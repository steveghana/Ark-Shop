import { productsreducer } from "./reducer/reducer";
import { userReducer } from "./reducer/user";
import { cartReducer } from "./reducer/cartreducer";
import { Allproductsreducer } from "./reducer/allproducts";
import { shippingMethod } from "./reducer/paymentinfo";
import { ShippingInformation } from "./reducer/shippingInfo";
import { orderPlacement } from "./reducer/orderPlacement";
import { placedOrder } from "./reducer/placeOrder";
import thunk from "redux-thunk";
import { compose, createStore, applyMiddleware, combineReducers } from "redux";
const reducers = combineReducers({
  products: productsreducer,
  Allproducts: Allproductsreducer,
  cart: cartReducer,
  user: userReducer,
  shipping: ShippingInformation,
  shippingMethod,
  orderPlacement,
  Orderplaced: placedOrder,
});

const INITIAL_STATE = {
  user: {
    authData: localStorage.getItem("profile")
      ? JSON.parse(localStorage.getItem("profile"))
      : null,
  },
  cart: {
    cartItems: localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart"))
      : [],
  },
};
const middleware = [thunk];
const Store = createStore(
  reducers,
  INITIAL_STATE,
  compose(applyMiddleware(...middleware))
);

export default Store;
