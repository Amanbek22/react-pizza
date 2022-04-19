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