import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import paypalRoute from "./routes/paypalroutes.js";
import router from "./routes/routes.js";
import path from "path";
import fs from "fs";

import orderRouter from "./routes/orderRoutes.js";
import { Low, JSONFileSync } from "lowdb";
import cors from "cors";
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;
const monogoURL = process.env.MONGO_URL;
const file = new JSONFileSync("./data/productinfo.json");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// const adapter = new JSONFile(file);
export const db = new Low(file);
await db.read();

app.use("/productsinfo", router);
app.use("/order", orderRouter);
app.use("/api/", paypalRoute);
app.get("/", (req, res) => {
  res.send("welcome heroky");
});
// mongoose
//   .connect(monogoURL, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => {
app.listen(PORT, () => {
  console.log(`server running at localhost ${PORT}`);
});
//   })
//   .catch((error) => {
//     console.log(error.message);
//   });
// mongoose.set("useFindAndModify", false);
