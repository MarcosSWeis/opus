import { GET_IMAGES_CARRUSEL_HOME, GET_APARTAMENTS_ONSALE } from "./actions";
export const initialState = {
  imgCarrusel: [],
  departFilter: [],
};

export function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_IMAGES_CARRUSEL_HOME:
      return {
        ...state,
        imgCarrusel: action.payload,
      };
    case GET_APARTAMENTS_ONSALE:
      return {
        ...state,
        departFilter: action.payload,
      };
    default:
      return state;
  }
}
