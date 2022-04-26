import axios from "axios";
import { baseUrl, pizzaApi } from "../constants/api.js";

const http = axios.create({
  baseURL: baseUrl
})

const api = axios.create({
  baseURL: "http://solid.lol/"
})


export default {
  getPizzas: () => http.get(pizzaApi),
  createPizza: (data) => http.post(pizzaApi, data),
  auth: (data) => api.post("admin", data),
}
