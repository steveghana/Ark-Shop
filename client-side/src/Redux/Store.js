import { productsreducer } from "./reducer/reducer";
import { cartReducer } from "./reducer/cartreducer";
import thunk from 'redux-thunk'
import { compose, createStore, applyMiddleware, combineReducers } from "redux";
const reducers = combineReducers ({
    products: productsreducer,
    cart : cartReducer,
})

// const cartItemsInLocalStorage= localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
// const INITIAL_STATE = {
//     cart :{
// cartItems : cartItemsInLocalStorage
//         }
// }
const middleware = [thunk]
const Store = createStore(reducers,  compose(applyMiddleware(...middleware)))

export default Store;
