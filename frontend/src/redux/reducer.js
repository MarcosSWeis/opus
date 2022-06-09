import {
  GET_APARTAMENTS_ONSALE,
  GET_IMAGE_CARROUSEL,
  GET_BOOKINGS_FOR_THIS_DAY,
  GET_SOCIAL_SPACES,
} from "./actions";

export const initialState = {
  imgCarrusel: [],
  departFilter: [],
  bookingDate: {},
  socialsSpace: {},
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
    default:
      return state;
  }
}
