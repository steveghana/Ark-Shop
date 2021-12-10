import express from "express";
import {
  getProducts,
  getProductById,
  getAllproducts,
  getAllProductById,
  signupUser,
  siginUser,
} from "../controllers/controllers.js";
const router = express.Router();
router.get("/", getProducts);
router.get("/all", getAllproducts);
router.get("/all:id", getAllProductById);
router.get("/:id", getProductById);
router.post("/signup", signupUser);
router.post("/signIn", siginUser);
export default router;
