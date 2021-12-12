import axios from "axios";
const API = axios.create({ baseURL: "http://localhost:5000" });
API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.authorisation = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }
  return req;
});
export const getProducts = () => API.get("/productsinfo");
export const getAllProducts = () => API.get(`/productsinfo/all`);
export const getProductsById = (id) => API.get(`/productsinfo/${id}`);
export const getAllProductsById = (id) => API.get(`/productsinfo/all${id}`);
export const signupAuth = (data) => API.post(`/productsinfo/signup`, data);
export const sigInAuth = (data) => API.post(`/productsinfo/signin`, data);
export const placeOrder = (data) => API.post(`/order/placedorder`, data);
export const orderPlaced = (id) => API.get(`/order/${id}`);
