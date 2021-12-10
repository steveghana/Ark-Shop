import * as constants from "../constants/constantsl";
const { FETCHALL } = constants;
export const Allproductsreducer = (state = { allproducts: [] }, action) => {
  switch (action.type) {
    case FETCHALL:
      return action.payload;
    default:
      return state;
  }
};
