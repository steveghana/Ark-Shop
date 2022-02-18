import * as constants from "../constants/constantsl";
const { FETCH } = constants;
export const productsreducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case FETCH:
      return action.payload;
    default:
      return state;
  }
};
