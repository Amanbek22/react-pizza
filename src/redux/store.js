import { applyMiddleware, combineReducers, createStore } from 'redux';
import { pizzaReducer } from './pizzaReducer.js';
import { basketReducer } from './basketReducer.js';
import { composeWithDevTools } from 'redux-devtools-extension';
import reduxThunk from "redux-thunk";
import { authReducer } from './authReducer';


const rootReducer = combineReducers({
  pizza: pizzaReducer,
  basket: basketReducer,
  auth: authReducer,
});

export const store = createStore(
  rootReducer, 
  composeWithDevTools( applyMiddleware(reduxThunk) )
);

store.subscribe(() => {
  const state = store.getState();
  localStorage.setItem("basket", JSON.stringify(state.basket.data))
  localStorage.setItem("auth", JSON.stringify( state.auth.data ))
})


window.store = store;