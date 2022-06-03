import axios from "axios";
export const GET_IMAGES_CARRUSEL_HOME = "GET_IMAGES_CARRUSEL_HOME";
export const GET_APARTAMENTS_ONSALE = "GET_APARTAMENTS_ONSALE";

export const getImageCarruselHome = () => {
  try {
    return async function (dispatch) {
      const image = await axios.get("");
      dispatch({
        type: GET_IMAGES_CARRUSEL_HOME,
        payload: image.data,
      });
    };
  } catch (err) {
    console.log(err);
  }
};

export const getApartament = (payload) => {
  try {
    console.log(payload, "redux");
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
