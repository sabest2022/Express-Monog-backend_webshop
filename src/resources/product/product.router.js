const express = require("express");
const { getProducts, getProductID, getProductByCat, createProduct, editProduct, deleteProduct } = require("./product.controller");
const { isAdmin, isLoggedIn, validate } = require("../middleware/middleware");
const { productJoiSchema } = require("./product.model")
const productRouter = express.Router();



productRouter.get("/", getProducts);

productRouter.get("/:id", getProductID);

productRouter.get("/byCategory/:id", getProductByCat);

productRouter.post("/", isLoggedIn, isAdmin, validate(productJoiSchema), createProduct);

productRouter.put("/:id", isLoggedIn, isAdmin, validate(productJoiSchema), editProduct);

productRouter.delete("/:id", isLoggedIn, isAdmin, deleteProduct);

module.exports = { productRouter };

