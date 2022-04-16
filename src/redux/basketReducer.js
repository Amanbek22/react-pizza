import { SET_NEW_PIZZA } from "./actionTypes.js";

const initialState = {
  data: JSON.parse(localStorage.getItem("basket")) || []
}

export const basketReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_NEW_PIZZA:
      return { ...state, data: [...state.data, action.data] };
    default:
      return state
  }
}