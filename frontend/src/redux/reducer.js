import {
  GET_APARTAMENTS_ONSALE,
  GET_IMAGE_CARROUSEL,
  GET_BOOKINGS_FOR_THIS_DAY,
  GET_SOCIAL_SPACES,
  GET_IMAGE_BODY,
  GET_DEPARTAMENT_ID,
  GET_HABITANTSFLOOR,
  GET_SOCIAL,
  UPDATE_SOCIAL,
} from "./actions";

export const initialState = {
  imgCarrusel: [],
  departFilter: [],
  bookingDate: {},
  socialsSpace: {},
  imgBody: [],
  departamentDetail: null,
  habitantsFloor: [],
  social: {},
};

export function rootReducer(state = initialState, action) {
  switch (action.type) {
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
    case GET_BOOKINGS_FOR_THIS_DAY:
      return {
        ...state,
        bookingDate: action.payload,
      };
    case GET_SOCIAL_SPACES:
      return {
        ...state,
        socialsSpace: action.payload,
      };
    case GET_IMAGE_BODY:
      return {
        ...state,
        imgBody: action.payload,
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

    default:
      return state;
  }
}
