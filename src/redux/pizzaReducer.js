import { SET_PENDING, SET_PIZZAS } from "./actionTypes.js"

const initialState = { 
  data: [],  
  pending: true
}

export const pizzaReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_PIZZAS:
      return { ...state, data: action.data}
    case SET_PENDING:
      return { ...state, pending: false }
    default:
      return state
  }
}
