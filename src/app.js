const express = require("express");
const app = express();

const { productRouter } = require("./resources/product/product.router");

app.use("api/product", productRouter);
module.exports = { app };
