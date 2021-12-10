import { LOGOUT, AUTH } from "../constants/constantsl";
import * as api from "../../api/api";
export const signinAth =
  (formData, history, errorhandle) => async (dispatch) => {
    try {
      const { data } = await api.sigInAuth(formData);
      const { err } = data;
      if (err) {
        errorhandle(err);
      } else {
        dispatch({ type: AUTH, payload: data });

        history.push("/home");
        console.log(data);
      }
    } catch (error) {
      console.log(error);
    }
  };
export const signupAuth =
  (formData, history, errhandle) => async (dispatch) => {
    try {
      const { data } = await api.signupAuth(formData);
      const { err } = data;
      console.log(data);
      if (err) {
        errhandle(err);
      } else {
        dispatch({ type: AUTH, payload: data });
        localStorage.setItem("profile", JSON.stringify({ ...data }));
        history.push("/home");
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
