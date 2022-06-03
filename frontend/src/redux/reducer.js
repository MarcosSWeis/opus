import { GET_APARTAMENTS_ONSALE, GET_IMAGE_CARROUSEL } from "./actions";

export const initialState = {
  imgCarrusel: [],
  departFilter: [],
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
      }
    default:
      return state;
  }
}
