import * as api from "../../api/api";
import * as constants from "../constants/constantsl";
const {
  FETCHALL,
  FETCH,
  CART,
  DELETECART,
  DELETE,
  SHIPPING,
  SHIPPINGMETHOD,
  ORDERPLACEMENT,
} = constants;
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
export const addtoCart = (id, qty) => async (dispatch, getState) => {
  try {
    const { data } = await api.getProductsById(id);
    console.log(id);
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
        sizes: data.sizes,
        id,
        qty,
      },
    });
    //   localStorage.setItem('cart', JSON.stringify(getState().cart.cartItems))
  } catch (error) {
    console.log(error);
  }
};
export const shoppingdataAddToCart = (id, qty) => async (dispatch) => {
  try {
    const { data } = await api.getAllProductsById(id);
    console.log(id);
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
        sizes: data.sizes,
        id,
        qty,
      },
    });
    //   localStorage.setItem('cart', JSON.stringify(getState().cart.cartItems))
  } catch (error) {
    console.log(error);
  }
};
export const orderPlacement = (data) => (dispatch) => {
  dispatch({ type: ORDERPLACEMENT, payload: data });
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
