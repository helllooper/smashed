import express from "express";
import products from "./data/products.js";
import merchProducts from "./data/merch.js";
const port = 5000;
const app = express();

app.get("/", (req, res) => {
  res.send("API is running ....");
})


app.get("/api/products", (req, res) => {
    res.json(products);
})

app.get("/api/merch", (req, res) => {
    res.json(merchProducts);
})

app.get("/api/products/:id", (req, res) => {
  const product = products.find(p => p._id === req.params.id);
  res.json(product);
})

app.get("/api/merch/:id", (req, res) => {
    const merchProduct = merchProducts.find(p => p._id === req.params.id);
    res.json(merchProduct);
  })

app.get("api/merch/:id", (req, res) => {

})

app.listen(port , () => {
    console.log(`Server is runnung on port ${port} , hehehehe`)
})
