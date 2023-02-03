const express = require("express");

const { createCategory, getCategories, getCategoryID } = require("./category.controller");
const categoryRouter = express.Router();

categoryRouter.get("/", getCategories);
categoryRouter.get("/:id", getCategoryID);  
categoryRouter.post("/createCategory", createCategory);

module.exports = { categoryRouter };