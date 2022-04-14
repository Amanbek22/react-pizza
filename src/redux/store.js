import { combineReducers, createStore } from 'redux';



const pizzaReducer = (state = { 
  data: [],
  pending: true,
}, action) => {
  switch(action.type) {
    case "SET_PIZZAS":
      return { ...state, data: action.data}
    default:
      return state
  }
}

const initialState = {
  data: []
}
const basketReducer = (state = initialState, action) => {
  switch(action.type) {
    case "SET_NEW_PIZZA":
      return { ...state, data: [...state.data, action.data] };
    default:
      return state
  }
}

const rootReducer = combineReducers({
  pizza: pizzaReducer,
  basket: basketReducer,
})

export const store = createStore(rootReducer);


window.store = store;