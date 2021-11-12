import Product from "../model/model.js";
import mongoose from "mongoose"
import { productInfo } from "../data/productInfo.js";


(async (req, res)=>{
    try {
      Product.remove({})
      await  Product.insertMany(productInfo)

    } catch (error) {
        console.log(error);
    }
    
})();


export const getProducts = async (req, res)=>{
try {
  const productinformation =  await Product.find({})
  res.json(productinformation)
} catch (error) {
    console.log(error);
    res.status(404).send("Server Error")
}
}


export const getProductById = async (req, res)=>{
const {id : _id} = req.params
try {
  const data = await Product.findById(_id)
  res.status(200).json(data)
  
} catch (error) {
  console.log(error)
  res.status(404)
}
}