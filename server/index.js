import express from "express";
import dotenv from "dotenv";
import paypalRoute from "./routes/paypalroutes.js";
import router from "./routes/routes.js";
import orderRouter from "./routes/orderRoutes.js";
import cors from "cors";
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("welcome heroku");
});
app.use("/productsinfo", router);
app.use("/order", orderRouter);
app.use("/api/", paypalRoute);
app.listen(PORT, () => {
  console.log(`server running at localhost ${PORT}`);
});
