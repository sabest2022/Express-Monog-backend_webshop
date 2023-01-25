const express = require("express");
const { createProduct, getProducts } = require("./product.controller");
const productRouter = express.Router();


productRouter.post("/newProduct", createProduct);

productRouter.get("/getAll", getProducts);

module.exports = { productRouter };



