import { productsreducer } from "./reducer/reducer";
import { userReducer } from "./reducer/user";
import { cartReducer } from "./reducer/cartreducer";
import { Allproductsreducer } from "./reducer/allproducts";
import { shippingMethod } from "./reducer/paymentinfo";
import { ShippingInformation } from "./reducer/shippingInfo";
import { orderPlacement } from "./reducer/orderPlacement";
import thunk from "redux-thunk";
import { compose, createStore, applyMiddleware, combineReducers } from "redux";
const reducers = combineReducers({
  products: productsreducer,
  Allproducts: Allproductsreducer,
  cart: cartReducer,
  user: userReducer,
  shipping: ShippingInformation,
  shippingMethod,
  PlacedOrder: orderPlacement,
});

// const cartItemsInlocalStorage= localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
// const INITIAL_STATE = {
//     cart :{
// cartItems : cartItemsInlocalStorage
//         }
// }
const middleware = [thunk];
const Store = createStore(reducers, compose(applyMiddleware(...middleware)));

export default Store;
