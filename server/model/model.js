import mongoose from "mongoose";
const productSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    header: String,
    sizes: [String],
    sub: String,
    description: {
      type: String,
      required: true,
    },
    sizes: [String],
    image: String,
    relatedImages: [String],
    price: {
      type: Number,
      required: true,
    },
    numOfReviews: Number,
    rating: Number,
    countInStock: {
      type: Number,
      required: true,
    },
    color: String,
    ProductColor: String,

    ProductCode: String,
    specifications: [String],
    background: String,
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("ProductsInfo", productSchema);
export default Product;
