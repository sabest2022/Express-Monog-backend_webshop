const express = require("express");
const { createProduct } = require("./product.controller");
const productRouter = express.Router();


productRouter.post("/", createProduct);

module.exports = { productRouter };



