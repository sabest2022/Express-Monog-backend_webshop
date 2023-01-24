const express = require("express");
const { createProduct, getProducts } = require("./product.controller");
const productRouter = express.Router();


productRouter.post("/", createProduct);

productRouter.get("/", getProducts)

module.exports = { productRouter };



