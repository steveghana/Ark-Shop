import * as constants from "../constants/constantsl";
const { CART, DELETECART, DELETE } = constants;
const CART_INITIAL_STATE = {
  cartItems: [],
};

export const cartReducer = (state = CART_INITIAL_STATE, action) => {
  switch (action.type) {
    case CART:
      const product = action.payload;
      const existingproduct = state.cartItems.find(
        (item) => item.id === product.id
      );
      if (existingproduct) {
        return {
          //    ...state,
          cartItems: state.cartItems.map((item) =>
            item.id === existingproduct.id ? product : item
          ),
        };
      } else {
        localStorage.removeItem("cart");
        localStorage.setItem("cart", JSON.stringify(product));
        return {
          ...state,
          cartItems: [...state.cartItems, product],
        };
      }
    case DELETE:
      let inlocalstorage = JSON.parse(localStorage.getItem("cart"));
      let filteredItem = inlocalstorage.filter(
        (item) => item.id !== action.payload
      );
      localStorage.removeItem("cart");
      localStorage.setItem("cart", JSON.stringify(filteredItem));

      return {
        cartItems: state.cartItems.filter((item) => item.id !== action.payload),
      };
    case DELETECART:
      localStorage.removeItem("cart");
      return {
        cartItems: [],
      };
    default:
      return state;
  }
};
