const express = require("express");
const categoryRouter = express.Router();
const { addCategory } = require("./category.controller");

categoryRouter.post("/", addCategory);

module.exports = { categoryRouter };
