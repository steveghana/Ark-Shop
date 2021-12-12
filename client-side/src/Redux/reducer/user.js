import { LOGOUT, AUTH } from "../constants/constantsl";
const initialState = JSON.parse(localStorage.getItem("profile"));

export const userReducer = (
  state = { authData: initialState || null },
  action
) => {
  switch (action.type) {
    case AUTH:
      localStorage.setItem("profile", JSON.stringify({ ...action.payload }));
      // localStorage.clear()
      return { ...state, authData: action?.payload };
    case LOGOUT:
      localStorage.clear();
      return { ...state, authData: null };

    default:
      return state;
  }
};
