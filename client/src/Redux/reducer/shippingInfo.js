import * as constants from "../constants/constantsl";
export const ShippingInformation = (state = { shippingData: null }, action) => {
  const { SHIPPING } = constants;
  switch (action.type) {
    case SHIPPING:
      return { ...state, shippingData: action.payload };
    default:
      return state;
  }
};
