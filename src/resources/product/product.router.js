// ----- Imports express

const express = require("express");

// ----- Imports functions from controller and middlewere

const { getProducts, getProductID, getProductByCat, createProduct, editProduct, deleteProduct } = require("./product.controller");
const { isAdmin, isLoggedIn, validate } = require("../middleware/middleware");

// ----- Imports validation schema

const { productJoiSchema } = require("./product.model");

// ----- Creates router

const productRouter = express.Router();

// ----- Creates endpoints

productRouter.get("/", getProducts);
productRouter.get("/:id", getProductID);
productRouter.get("/byCategory/:id", getProductByCat);
productRouter.post("/", isLoggedIn, isAdmin, validate(productJoiSchema), createProduct);
productRouter.put("/:id", isLoggedIn, isAdmin, validate(productJoiSchema), editProduct);
productRouter.delete("/:id", isLoggedIn, isAdmin, deleteProduct);

// ----- Exports router

module.exports = { productRouter };