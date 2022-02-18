import * as api from "../../api/api";
import {
  ORDER_CREATE_FAIL,
  ORDER_CREATE_REQUEST,
  ORDER_CREATE_SUCCESS,
  ORDER_DETAILS_FAIL,
  ORDER_DETAILS_REQUEST,
  ORDER_DETAILS_SUCCESS,
} from "../constants/orderconstants";
import * as constants from "../constants/constantsl";
const { FETCHALL, FETCH, CART, DELETECART, DELETE, SHIPPING, SHIPPINGMETHOD } =
  constants;
export const getProductinfo = () => async (dispatch) => {
  try {
    const { data } = await api.getProducts();
    dispatch({ type: FETCH, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const getallproducts = () => async (dispatch) => {
  const { data } = await api.getAllProducts();
  dispatch({ type: FETCHALL, payload: data });
};
export const addtoCart = (id, qty, sz) => async (dispatch, getState) => {
  try {
    const { data } = await api.getProductsById(id);
    dispatch({
      type: CART,
      payload: {
        name: data.name,
        sub: data.sub,
        color: data.color,
        image: data.image,
        productColor: data.ProductColor,
        countinstock: data.countInStock,
        price: data.price,
        sizes: sz || 5,
        id,
        qty,
      },
    });
    localStorage.removeItem("cart");
    localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems));
  } catch (error) {
    console.log(error);
  }
};

export const orderPlacement = (item) => async (dispatch, getState) => {
  dispatch({ type: ORDER_CREATE_REQUEST, payload: item });
  try {
    const { data } = await api.placeOrder(item);
    dispatch({ type: ORDER_CREATE_SUCCESS, payload: data });
    dispatch({ type: DELETECART });
  } catch (error) {
    dispatch({
      type: ORDER_CREATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const placeOrder = (id) => async (dispatch) => {
  dispatch({ type: ORDER_DETAILS_REQUEST, payload: id });
  try {
    const { data } = await api.orderPlaced(id);
    dispatch({ type: ORDER_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: ORDER_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const shippingMethod = (data) => (dispatch) => {
  dispatch({ type: SHIPPINGMETHOD, payload: data });
};
export const shippingInfo = (data) => (dispatch) => {
  dispatch({ type: SHIPPING, payload: data });
  localStorage.setItem("usershippingInfo", JSON.stringify(data));
};
export const deleteAllItemFromCart = () => (dispatch) => {
  dispatch({ type: DELETECART });
};

export const deletitems = (id) => (dispatch) => {
  dispatch({ type: DELETE, payload: id });
};
