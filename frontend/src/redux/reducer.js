import { GET_APARTAMENTS_ONSALE, GET_IMAGE_CARROUSEL , GET_IMAGE_BODY,REGISTER_USER } from "./actions";

export const initialState = {
  imgCarrusel: [],
  departFilter: [],
  imgBody: [],
  register_user: null
};

export function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_APARTAMENTS_ONSALE:
      return {
        ...state,
        departFilter: action.payload,
      };
      
      case REGISTER_USER: 
      return{
...state,
register_user: action.payload
      };
      
    case GET_IMAGE_CARROUSEL:  
      return {
        ...state,
        imgCarrusel: action.payload,
      }
    case GET_IMAGE_BODY:
      return {
        ...state,
        imgBody: action.payload,
      }  
    default:
      return state;
  }
}
