import Product from "../model/model.js";
import bcrypt from "bcryptjs";
import AllProduct from "../model/allproductsmodel.js";
import { generateToken } from "./generatetoken.js";
import express from "express";
import userSchema from "../model/usermodel.js";
import { productInfo, allProducts } from "../data/productInfo.js";
(async () => {
  try {
    const existingdata = await Product.find({});
    const existingalldata = await AllProduct.find({});
    if (!existingdata.length) {
      await Product.insertMany(productInfo);
    }
    if (!existingalldata.length) {
      await AllProduct.insertMany(allProducts);
    }
  } catch (error) {
    console.log(error);
  }
})();
export const getAllproducts = async (req, res) => {
  try {
    const Allproductinformation = await AllProduct.find({});
    res.status(200).json(Allproductinformation);
  } catch (error) {
    console.log(error);
    res.status(404).send("Server Error");
  }
};
export const getProducts = async (req, res) => {
  try {
    const productinformation = await Product.find({});
    res.status(200).json(productinformation);
  } catch (error) {
    console.log(error);
    res.status(404).send("Server Error");
  }
};
export const getProductById = async (req, res) => {
  const { id: _id } = req.params;
  try {
    const data = await Product.findById(_id);
    if (data) res.status(200).json(data);
    else res.status(400).json("no user with id found");
  } catch (error) {
    console.log(error);
    res.status(404);
  }
};
export const getAllProductById = async (req, res) => {
  const { id: _id } = req.params;
  try {
    const data = await AllProduct.findById(_id);
    if (data) res.status(200).json(data);
    else res.status(400).json("no user with id found");
  } catch (error) {
    console.log(error);
    res.status(404);
  }
};

export const signupUser = async (req, res) => {
  try {
    const { firstName, secondName, email, password } = req.body;
    const existinguser = await userSchema.findOne({ firstName });
    if (existinguser) {
      res.json({ err: "user already exist" });
    }
    const hashedPassword = await bcrypt.hash(password, 12);
    const newuser = await userSchema.create({
      firstName,
      secondName,
      password: hashedPassword,
      email,
    });
    res.status(200).json({
      firstName,
      secondName,
      password: hashedPassword,
      email,
      token: generateToken(newuser),
    });
  } catch (error) {
    console.log(error.message);
    res
      .status(400)
      .json({ message: "Something went wrong, please try again later" });
  }
};
export const siginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const existinguser = await userSchema.findOne({ email });
    if (!existinguser) {
      res.json({ err: "user doesn't exist try signing up" });
    }
    const isPassword = await bcrypt.compare(password, existinguser.password);
    console.log(isPassword);
    if (!isPassword) {
      res.json({ err: "invalid credentials" });
    }

    res.status(200).json({
      existinguser,
      token: generateToken(existinguser),
    });
  } catch (error) {
    console.log(error.message);
    res
      .status(400)
      .json({ message: "Something went wrong, please try again later" });
  }
};
