const express = require("express");
const { createCategory, getCategories } = require("./category.controller");
const categoryRouter = express.Router();

categoryRouter.get("/getAll", getCategories)
categoryRouter.post("/createCategory", createCategory)

module.exports = { categoryRouter }