const express = require("express");
const productRouter = express.Router();
const {
  getAllProducts,
  addProduct,
  getProduct,
  getProductByCategory,
  updateProduct,
  deleteProduct,
} = require("./product.controller");
const { authorize, admin, validate } = require("../../middlewares");
const {
  ProductJoiSchema,
  ProductUpdateValidationSchema,
} = require("./product.model");

productRouter.get("/", getAllProducts);
productRouter.get("/:id", getProduct);
productRouter.get("/byCategory/:id", getProductByCategory);
productRouter.post(
  "/",
  authorize,
  admin,
  validate(ProductJoiSchema),
  addProduct
);
productRouter.put(
  "/:id",
  authorize,
  admin,
  validate(ProductUpdateValidationSchema),
  updateProduct
);
productRouter.delete("/:id", authorize, admin, deleteProduct);

module.exports = { productRouter };
