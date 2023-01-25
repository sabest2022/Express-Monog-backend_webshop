const express = require("express");
const app = express();

app.use(express.json())

const { productRouter } = require("./resources/product/product.router");

const { categoryRouter } = require("./resources/category/category.router");

app.use("/api/products", productRouter);
app.use("/api/categories", categoryRouter);

module.exports = { app };
