import {
  REGISTER_USER,
  SET_MESSAGE,
  CLEAR_MESSGE,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  GET_APARTAMENTS_ONSALE,
  GET_IMAGE_CARROUSEL,
  GET_BOOKINGS_FOR_THIS_DAY,
  GET_SOCIAL_SPACES,
  GET_IMAGE_BODY,
  GET_DEPARTAMENT_ID,
  GET_HABITANTSFLOOR,
  GET_SOCIAL,
  UPDATE_SOCIAL,
  GET_USERS_BY_FLOOR,
  GET_SEARCH,
  GET_TOWERS,
} from "./actions";

const user = JSON.parse(localStorage.getItem("user"));

export const initialState = {
  user: user
    ? { isLoggedIn: true, ...user }
    : { isLoggedIn: false, user: null },
  imgCarrusel: [],
  departFilter: [],
  bookingDate: {},
  socialsSpace: {},
  imgBody: [],
  register_user: null,
  departamentDetail: null,
  habitantsFloor: [],
  social: {},
  usersByFloor: {},
  search: {},
  towers: {},
};

export function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_APARTAMENTS_ONSALE:
      return {
        ...state,
        departFilter: action.payload,
      };
    case GET_USERS_BY_FLOOR:
      return {
        ...state,
        usersByFloor: action.payload,
      };
    case GET_SEARCH:
      return {
        ...state,
        search: action.payload,
      };

    case REGISTER_USER:
      return {
        ...state,
        register_user: action.payload,
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
    case GET_DEPARTAMENT_ID:
      return {
        ...state,
        departamentDetail: action.payload,
      };
    case GET_HABITANTSFLOOR:
      return {
        ...state,
        habitantsFloor: action.payload,
      };
    case GET_SOCIAL:
      return {
        ...state,
        social: action.payload,
      };
    case UPDATE_SOCIAL:
      return {
        ...state,
        social: action.payload,
      };
      case GET_TOWERS:
      return {
        ...state,
        towers: action.payload,
      };

    default:
      return state;
  }
}
