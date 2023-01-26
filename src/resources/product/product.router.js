const express = require("express");
const { createProduct, getProducts, getProductID, getProductByCat } = require("./product.controller");
const { isAdmin } = require("../middleware/middleware");
const productRouter = express.Router();

productRouter.post("/", isAdmin,  createProduct);

productRouter.get("/", getProducts);

productRouter.get("/:id", getProductID);

productRouter.get("/byCategory/:id", getProductByCat);

productRouter.get("/:id", getProductID);

productRouter.get("/byCategory/", getProductByCat);


module.exports = { productRouter };

