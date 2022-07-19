import { db } from "../data/productInfo.js";

export const getAllproducts = (req, res) => {
  try {
    const Allproductinformation = db.allProducts;
    res.status(200).send(Allproductinformation);
  } catch (error) {
    res.status(404).send("Server Error");
  }
};
export const getProducts = (req, res) => {
  try {
    const productinformation = db.productInfo;
    res.status(200).send(productinformation);
  } catch (error) {
    res.status(404).send("Server Error");
  }
};
export const getProductById = async (req, res) => {
  const { id } = req.params;
  try {
    const allproducts = db.allProducts;
    const Alldata = allproducts.find((item) => item.id === Number(id));
    if (Alldata) {
      res.status(200).send(Alldata);
    } else res.status(400).send("no user with id found");
  } catch (error) {
    res.status(404);
  }
};

export const order = async (req, res) => {
  try {
    if (req.body.orderItems.length === 0) {
      res.status(400).send({ message: "Your cart is empty" });
    } else {
      const randomId = Math.floor(Math.random() * (100 - 1 + 1) + 1);
      const newOrder = {
        orderItems: req.body.orderItems,
        shippingAddress: req.body.shippingInfo,
        paymentMethod: req.body.paymentMethod,
        itemsPrice: req.body.itemsPrice,
        shippingPrice: req.body.shipping,
        taxprice: req.body.tax,
        totalPrice: req.body.total,
        user: randomId,
        counter: req.body?.counter,
      };
      db.orderItems?.push(newOrder);
      res.status(200).send({ message: "New order placed", newOrder });
    }
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const paypalConfig = (req, res) => {
  try {
    res.send("paypal route now active");
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getPlacedOrder = (req, res) => {
  const { id } = req.params;
  try {
    const existingorder = db.orderItems.find(
      (item) => item.user === Number(id)
    );
    if (existingorder) {
      res.send({ existingorder });
    } else {
      res.status(400).send({ message: "No order found" });
    }
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
