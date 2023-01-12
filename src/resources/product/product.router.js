const express = require("express");
const productRouter = express.Router();
const { getAllProducts, addProduct } = require("./product.controller");

productRouter.get("/", getAllProducts);
productRouter.post("/", addProduct);

module.exports = { productRouter };
