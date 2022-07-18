import express from "express";
import { middleware } from "../middleware/index.js";
import {
  getProducts,
  getProductById,
  getAllproducts,
} from "../controllers/controllers.js";
const router = express.Router();

router.get("/", getProducts);
router.get("/all", getAllproducts);
// router.get("/all:id", getProductById);
router.get("/:id", getProductById);
export default router;
