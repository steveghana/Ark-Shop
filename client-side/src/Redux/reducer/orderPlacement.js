import { ORDERPLACEMENT } from "../constants/constantsl";
export const orderPlacement = (state = { order: null }, action) => {
  switch (action.type) {
    case ORDERPLACEMENT:
      return { ...state, order: action.payload };
    default:
      return state;
  }
};
