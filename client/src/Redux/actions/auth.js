import { LOGOUT, AUTH, AUTHERROR } from "../constants/constantsl";
import * as api from "../../api/api";
export const signinAth = (formData, history, errhandle) => async (dispatch) => {
  try {
    const { data } = await api.sigInAuth(formData);
    const { err } = data;
    console.log(err, data);
    if (err) {
      errhandle(err);
    } else {
      dispatch({ type: AUTH, payload: data });
      history("/home");
    }
  } catch (error) {
    dispatch({ type: AUTHERROR, payload: error.message });
  }
};
export const signupAuth =
  (formData, history, errhandle) => async (dispatch) => {
    try {
      const { data } = await api.signupAuth(formData);
      const { err } = data;

      if (err) {
        errhandle(err);
      } else {
        dispatch({ type: AUTH, payload: data });
        localStorage.setItem("profile", JSON.stringify({ ...data }));
        history("/home");
      }
    } catch (error) {
      console.log(error);
    }
  };

export const logout = () => async (dispatch) => {
  try {
    dispatch({ type: LOGOUT });
  } catch (error) {
    console.log(error);
  }
};
