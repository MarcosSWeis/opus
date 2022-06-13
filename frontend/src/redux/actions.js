import axios from "axios";
import authServices from "../services/auth.services";

//actions
export const GET_APARTAMENTS_ONSALE = "GET_APARTAMENTS_ONSALE";
export const GET_IMAGE_CARROUSEL = "GET_IMAGE_CARROUSEL";
export const GET_IMAGE_BODY = "GET_IMAGE_BODY";
export const  REGISTER_USER= 'REGISTER_USER '

export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAIL = "REGISTER_FAIL";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";
export const LOGOUT = "LOGOUT";
export const SET_MESSAGE = "SET_MESSGE";
export const CLEAR_MESSGE = "CLEAR_MESSGE";

export const getApartament = (payload) => {
  try {
    // console.log(payload);
    return async function (dispatch) {
      const departa = await axios.get("http://localhost:5040/departs/filter", {
        params: payload,
      });
      dispatch({
        type: GET_APARTAMENTS_ONSALE,
        payload: departa.data,
      });
    };
  } catch (err) {
    console.log(err);
  }
};

export const register = (payload) => {
  try {
    // console.log(payload);
    return async function (dispatch) {
      const user = await axios.get("http://localhost:5040/users/create_user", {
        params: payload,
      });
      dispatch({
        type: REGISTER_USER,
        payload: user.data,
      });
    };
  } catch (err) {
    console.log(err);
  }
};

export const getImageCarrusel = (payload) => {
  try {
    return async function (dispatch) {
      const image = await axios.get("http://localhost:5040/carrousel");
      dispatch({
        type: GET_IMAGE_CARROUSEL,
        payload: image.data,
      });
    };
  } catch (err) {
    console.log(err);
  }
};

export const getImageBody = (payload) => {
  try {
    return async function (dispatch) {
      const image = await axios.get("http://localhost:5040/carrousel/body");
      dispatch({
        type: GET_IMAGE_BODY,
        payload: image.data,
      });
    };
  } catch (err) {
    console.log(err);
  }
};

//

export const setMessage = (message) => ({
  type: SET_MESSAGE,
  payload: message,
});

export const clearMessage = () => ({
  type: CLEAR_MESSGE,
});

export const login = (email, password) => (dispatch) => {
  return authServices.login(email, password).then(
    (data) => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: { user: data },
      });

      return Promise.resolve();
    },
    (error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: LOGIN_FAIL,
      });
      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });

      return Promise.reject(error);
    }
  );
};

export const logout = () => (dispatch) => {
  authServices.logout();
  dispatch({
    type: LOGOUT,
  });
};
