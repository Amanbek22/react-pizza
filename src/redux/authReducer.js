
import { AUTH_SUCCESS } from './actionTypes';


const initialState = {
  data: JSON.parse(localStorage.getItem("auth")),
}

export const authReducer = (state = initialState, action) => {
  switch(action.type) {
    case AUTH_SUCCESS:
        return {...state, data: action.payload}
    default:
      return state
  }
}