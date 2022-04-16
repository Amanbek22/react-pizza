import { combineReducers, createStore } from 'redux';
import { pizzaReducer } from './pizzaReducer.js';
import { basketReducer } from './basketReducer.js';


const rootReducer = combineReducers({
  pizza: pizzaReducer,
  basket: basketReducer,
});

export const store = createStore(rootReducer);

store.subscribe(() => {
  const state = store.getState();
  console.log(state);
  localStorage.setItem("basket", JSON.stringify(state.basket.data))
})


window.store = store;