const express = require("express");
const productRouter = express.Router();
const {
  getAllProducts,
  addProduct,
  getProduct,
  getProductByCategory,
} = require("./product.controller");

productRouter.get("/", getAllProducts);
productRouter.get("/:id", getProduct);
productRouter.get("/byCategory/:id", getProductByCategory);
productRouter.post("/", addProduct);

module.exports = { productRouter };
