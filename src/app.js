const express = require("express");
const app = express();
const { productRouter } = require("./resources/product/product.router");
const { categoryRouter } = require("./resources/category/category.router");
// Här är ett bra ställe att lägga till routers och andra middlewares.

app.use(express.json());

app.use("/api/products", productRouter);
app.use("/api/categories", categoryRouter);

module.exports = { app };
