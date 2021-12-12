import mongoose from "mongoose";
const order = mongoose.Schema(
  {
    orderItems: [
      {
        name: { type: String, required: true },
        price: { type: Number, required: true },
        productColor: { type: String, required: true },
        qty: { type: Number, required: true },
        image: { type: String, required: true },
        id: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "AllProductsInfo",
          required: true,
        },
      },
    ],
    shippingAddress: {
      fullname: { type: String, required: true },
      Address: { type: String, required: true },
      postal: { type: String, required: true },
      City: { type: String, required: true },
      country: { type: String, required: true },
    },
    paymentMethod: { type: String, required: true },
    itemsPrice: { type: Number, required: true },
    shippingPrice: { type: Number, required: true },
    taxprice: { type: Number, required: true },
    totalPrice: { type: Number, required: true },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "userschema",
      required: true,
    },
    isPaid: { type: Boolean, default: false },
    paidAt: { type: Date },
    isDelivered: { type: Boolean, default: false },
    deliveredAt: { type: Date },
  },
  {
    timeStamps: true,
  }
);

const orderItems = mongoose.model("orederItems", order);
export default orderItems;
