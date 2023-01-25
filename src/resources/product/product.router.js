const express = require("express");
const { createProduct, getProducts, getProductID, getProductByCat } = require("./product.controller");
const productRouter = express.Router();


productRouter.post("/newProduct", createProduct);

productRouter.get("/", getProducts);

productRouter.get("/:id", getProductID);

productRouter.get("/byCategory/", getProductByCat);


module.exports = { productRouter };



