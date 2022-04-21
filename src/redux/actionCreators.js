import Api from "../api/Api.js"
import { SET_NEW_PIZZA, SET_PENDING, SET_PIZZAS } from "./actionTypes.js"

export const ACsetPizza = (data) => ({
  type: SET_PIZZAS,
  data: data
})

export const ACsetPending = () => ({
  type: SET_PENDING
})


export const ACsetNewPizza = (data) => ({
  type: SET_NEW_PIZZA,
  data: data
})


export const getPizzaAC = () => {
  return async (dispatch) => {
    const res = await Api.getPizzas()
    dispatch(ACsetPending())
    if (res.status === 200) {
      dispatch(ACsetPizza(res.data))
    }
    // .finally(() => {
    //   dispatch( ACsetPending() )
    // })
    // .then((res) => {
    //   dispatch( ACsetPizza(res.data) )
    // })
  }
}