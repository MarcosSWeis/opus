import axios from "axios";
export const GET_APARTAMENTS_ONSALE = "GET_APARTAMENTS_ONSALE";
export const GET_IMAGE_CARROUSEL= "GET_IMAGE_CARROUSEL";
export const  GET_IMAGE_BODY = 'GET_IMAGE_BODY';
export const  REGISTER_USER= 'REGISTER_USER '



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
}

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
}


