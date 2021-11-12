import axios from 'axios'
const EndPoint = `http://localhost:5000/productsinfo`
export const getProducts = ()=> axios.get(EndPoint)
 export const getProductsById = (id)=> axios.get(`${EndPoint}/${id}`)