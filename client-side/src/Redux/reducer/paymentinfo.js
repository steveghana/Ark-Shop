import { SHIPPINGMETHOD } from "../constants/constantsl";
export const shippingMethod = (state = { shippinValue: "" }, action) => {
  switch (action.type) {
    case SHIPPINGMETHOD:
      return { ...state, shippinValue: action.payload };
    default:
      return state;
  }
};
