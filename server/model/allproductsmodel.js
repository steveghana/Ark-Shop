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
    pc1: String,
    pc2: String,
    ProductColor: String,
    ProductCode: String,
    specifications: [String],
    background: String,
  },
  {
    timestamps: true,
  }
);

const AllProduct = mongoose.model("AllProductsInfo", productSchema);
export default AllProduct;
