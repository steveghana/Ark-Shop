import express from "express";
import { middleware } from "../middleware/index.js";
import { order, getPlacedOrder } from "../controllers/controllers.js";
const orderRouter = express.Router();
orderRouter.post("/placedorder", middleware, order);
orderRouter.get("/:id", middleware, getPlacedOrder);
export default orderRouter;
