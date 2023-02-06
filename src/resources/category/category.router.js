// ----- Imports express

const express = require("express");

// ----- Imports functions

const { createCategory, getCategories, getCategoryID } = require("./category.controller");

// ----- Creates router

const categoryRouter = express.Router();

// ----- Creates endpoints

categoryRouter.get("/", getCategories);
categoryRouter.get("/:id", getCategoryID);  
categoryRouter.post("/createCategory", createCategory);

// ----- Exports router to app.js

module.exports = { categoryRouter };