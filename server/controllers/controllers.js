import { db } from "../index.js";
export const getAllproducts = async (req, res) => {
  try {
    const Allproductinformation = await db.data.allProducts;
    res.status(200).json(Allproductinformation);
  } catch (error) {
    res.status(404).send("Server Error");
  }
};
export const getProducts = async (req, res) => {
  try {
    const productinformation = await db.data.productInfo;
    res.status(200).json(productinformation);
  } catch (error) {
    res.status(404).send("Server Error");
  }
};
export const getProductById = async (req, res) => {
  const { id } = req.params;
  try {
    const allproducts = await db.data.allProducts;
    const Alldata = allproducts.find((item) => item.id === Number(id));
    if (Alldata) {
      res.status(200).json(Alldata);
    } else res.status(400).json("no user with id found");
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
      await db.data?.orderItems?.push(newOrder);
      res.status(200).send({ message: "New order placed", newOrder });
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
  const { id } = req.params;
  try {
    const existingorder = await db.data.orderItems.find(
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
