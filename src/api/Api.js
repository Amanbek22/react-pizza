import axios from "axios";
import { baseUrl, pizzaApi } from "../constants/api.js";

const http = axios.create({
  baseURL: baseUrl
})


export default {
  getPizzas: () => http.get(pizzaApi),
  createPizza: (data) => http.post(pizzaApi, data)
}
