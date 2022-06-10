import {
  GET_APARTAMENTS_ONSALE,
  GET_IMAGE_CARROUSEL,
  GET_IMAGE_BODY,
  SET_MESSAGE,
  CLEAR_MESSGE,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
} from "./actions";

const user = JSON.parse(localStorage.getItem("user"));

export const initialState = {
  user: user
    ? { isLoggedIn: true, ...user }
    : { isLoggedIn: false, user: null },
  imgCarrusel: [],
  departFilter: [],
  imgBody: [],
};

export function rootReducer(state = initialState, action) {
  switch ((action.type, action.payload)) {
    case GET_APARTAMENTS_ONSALE:
      return {
        ...state,
        departFilter: action.payload,
      };
    case GET_IMAGE_CARROUSEL:
      return {
        ...state,
        imgCarrusel: action.payload,
      };
    case GET_IMAGE_BODY:
      return {
        ...state,
        imgBody: action.payload,
      };

    case SET_MESSAGE:
      return {
        message: action.payload,
      };
    case CLEAR_MESSGE:
      return {
        message: "",
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        user: action.payload.user,
      };

    case LOGIN_FAIL:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      };

    case LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      };

    default:
      return state;
  }
}
