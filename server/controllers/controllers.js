import Product from "../model/model.js";
import bcrypt from "bcryptjs";
import AllProduct from "../model/allproductsmodel.js";
import jwt from "jsonwebtoken";
import { generateToken } from "./generatetoken.js";
import express from "express";
import userSchema from "../model/usermodel.js";
import { productInfo, allProducts } from "../data/productInfo.js";
import orderItems from "../model/ordermodel.js";
import e from "cors";
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
    const Alldata = await AllProduct.findById(_id);
    if (data) res.status(200).json(data);
    else if (Alldata) res.status(200).json(Alldata);
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
    if (!isPassword) {
      res.json({ err: "invalid credentials" });
    }
    const hashedPassword = await bcrypt.hash(password, 12);
    const token = await jwt.sign(
      { email: existinguser.email, password: hashedPassword },
      process.env.JWT_SECRET,
      {
        expiresIn: "30d",
      }
    );
    res.status(200).json({
      result: existinguser,
      token,
    });
  } catch (error) {
    console.log(error.message);
    res
      .status(400)
      .json({ message: "Something went wrong, please try again later" });
  }
};

export const order = async (req, res) => {
  const { _id: user } = req.body;
  // console.log(req.body, user);
  try {
    const existingorder = await orderItems.find({ user });
    // console.log(req.body.orderItems);
    if (req.body.orderItems.length === 0) {
      res.status(400).send({ message: "Your cart is empty" });
    } else {
      // if (existingorder) return;
      const newOrder = new orderItems({
        orderItems: req.body.orderItems,
        shippingAddress: req.body.shippingInfo,
        paymentMethod: req.body.paymentMethod,
        itemsPrice: req.body.itemsPrice,
        shippingPrice: req.body.shipping,
        taxprice: req.body.tax,
        totalPrice: req.body.total,
        user: req.body._id,
      });
      const newsavedOrder = await newOrder.save();
      res.status(200).send({ message: "New order placed", newsavedOrder });
    }
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const paypalConfig = async (req, res) => {
  try {
    res.send("paypal route now active");
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getPlacedOrder = async (req, res) => {
  const { id: _id } = req.params;
  try {
    const existingorder = await orderItems.findById(_id);
    if (existingorder) {
      res.send({ existingorder });
    } else {
      res.status(400).send({ message: "No order found" });
    }
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
