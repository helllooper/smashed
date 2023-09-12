import express from "express";
import products from "./data/products.js";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import merchRoutes from "./routes/merchRoutes.js";
import userRoutes from "./routes/userRoutes.js"
import cookieParser from "cookie-parser";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
dotenv.config();
const port = process.env.PORT || 5000;
connectDB();
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
app.get("/", (req, res) => {
  res.send("API is running ....");
})

app.use("/api/merch", merchRoutes);
app.use("/api/users",userRoutes);



app.get("/api/products", (req, res) => {
    res.json(products);
})



app.get("/api/products/:id", (req, res) => {
  const product = products.find(p => p._id === req.params.id);
  res.json(product);
})

app.use(notFound);
app.use(errorHandler);



app.listen(port , () => {
    console.log(`Server is runnung on port ${port} , hehehehe`)
})
