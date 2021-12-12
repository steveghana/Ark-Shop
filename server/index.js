import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import paypalRoute from "./routes/paypalroutes.js";
import router from "./routes/routes.js";
import orderRouter from "./routes/orderRoutes.js";
import cors from "cors";
const PORT = process.env.PORT || 5000;
const monogoURL = `mongodb://localhost:27017/products`;
dotenv.config();
const app = express();
app.use(cors());
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use("/productsinfo", router);
app.use("/order", orderRouter);
app.use("/api/", paypalRoute);
mongoose
  .connect(monogoURL, {
    useFindAndModify: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`server running at localhost ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
