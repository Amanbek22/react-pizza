import Api from "../api/Api.js"
import { SET_NEW_PIZZA, SET_PENDING, SET_PIZZA, SET_PIZZAS, AUTH_SUCCESS } from "./actionTypes.js"

export const ACsetPizzas = (data) => ({
  type: SET_PIZZAS,
  data: data
})

export const setPizzaAC = (data) => ({
  type: SET_PIZZA,
  payload: data
})

export const ACsetPending = () => ({
  type: SET_PENDING
})


export const ACsetNewPizza = (data) => ({
  type: SET_NEW_PIZZA,
  data: data
})

export const setAuthAC = (data) => ({
  type: AUTH_SUCCESS,
  payload: data
})

export const getPizzaAC = () => {
  return async (dispatch) => {
    const res = await Api.getPizzas()
    dispatch(ACsetPending())
    if (res.status === 200) {
      dispatch(ACsetPizzas(res.data.data.data))
    }
    // .finally(() => {
    //   dispatch( ACsetPending() )
    // })
    // .then((res) => {
    //   dispatch( ACsetPizza(res.data) )
    // })
  }
}

export const authAC = (data) => {
  return async (dispatch) => {
    Api.auth(data)
      .then((res) => {
        console.log(res.data);
        if (res.data?.token) {
          dispatch(setAuthAC(res.data))
        }
      })
  }
}

