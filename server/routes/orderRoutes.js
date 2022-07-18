import express from "express";
import { middleware } from "../middleware/index.js";
import { order, getPlacedOrder } from "../controllers/controllers.js";
const orderRouter = express.Router();
orderRouter.post("/placedorder", order);
orderRouter.get("/:id", getPlacedOrder);
export default orderRouter;
