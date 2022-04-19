import { applyMiddleware, combineReducers, createStore } from 'redux';
import { pizzaReducer } from './pizzaReducer.js';
import { basketReducer } from './basketReducer.js';
import { composeWithDevTools } from 'redux-devtools-extension';
import reduxThunk from "redux-thunk";


const rootReducer = combineReducers({
  pizza: pizzaReducer,
  basket: basketReducer,
});

export const store = createStore(
  rootReducer, 
  composeWithDevTools( applyMiddleware(reduxThunk) )
);

store.subscribe(() => {
  const state = store.getState();
  localStorage.setItem("basket", JSON.stringify(state.basket.data))
})


window.store = store;