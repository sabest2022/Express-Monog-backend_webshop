const express = require("express");
const categoryRouter = express.Router();
const {
  addCategory,
  getCategories,
  getCategory,
} = require("./category.controller");

categoryRouter.post("/", addCategory);
categoryRouter.get("/", getCategories);
categoryRouter.get("/:id", getCategory);

module.exports = { categoryRouter };
