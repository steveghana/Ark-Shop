import axios from "axios";
const EndPoint = `http://localhost:5000/productsinfo`;
export const getProducts = () => axios.get(EndPoint);
export const getAllProducts = () => axios.get(`${EndPoint}/all`);
export const getProductsById = (id) => axios.get(`${EndPoint}/${id}`);
export const getAllProductsById = (id) => axios.get(`${EndPoint}/all${id}`);
export const signupAuth = (data) => axios.post(`${EndPoint}/signup`, data);
export const sigInAuth = (data) => axios.post(`${EndPoint}/signin`, data);
