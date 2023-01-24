const express = require("express");
const app = express();

app.use(express.json())

const { productRouter } = require("./resources/product/product.router");

app.use("/api/products", productRouter);

module.exports = { app };
