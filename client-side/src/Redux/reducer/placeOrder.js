import {
  ORDER_DETAILS_RESET,
  ORDER_DETAILS_FAIL,
  ORDER_DETAILS_SUCCESS,
  ORDER_DETAILS_REQUEST,
} from "../constants/orderconstants";
export const placedOrder = (state = { loading: true, order: {} }, action) => {
  switch (action.type) {
    case ORDER_DETAILS_REQUEST:
      return { isloading: true };
    case ORDER_DETAILS_SUCCESS:
      return { loading: false, success: true, order: action.payload };
    case ORDER_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    case ORDER_DETAILS_RESET:
      return {};
    default:
      return state;
  }
};
