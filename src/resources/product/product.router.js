const express = require("express");
const { getProducts, getProductID, getProductByCat, createProduct, editProduct, deleteProduct } = require("./product.controller");
const { isAdmin, isLoggedIn, validate } = require("../middleware/middleware");
const { productJoiSchema } = require("../validation/validation.js")
const productRouter = express.Router();



productRouter.get("/", getProducts);

productRouter.get("/:id", getProductID);

productRouter.get("/byCategory/:id", getProductByCat);

productRouter.post("/", isLoggedIn, isAdmin, validate(productJoiSchema), createProduct);

productRouter.put("/", isLoggedIn, isAdmin, editProduct);

productRouter.delete("/:id", isLoggedIn, isAdmin, deleteProduct);

module.exports = { productRouter };

