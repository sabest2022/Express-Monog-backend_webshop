const express = require("express");
const app = express();
const { productRouter } = require("./resources/product/product.router");
const { categoryRouter } = require("./resources/category/category.router");
// Här är ett bra ställe att lägga till routers och andra middlewares.

app.use(express.json());

app.use("/api/products", productRouter);
app.use("/api/categories", categoryRouter);

//404
app.use((req, res) => {
  res.status(404).json("Not found");
});

app.use((err, req, res, next) => {
  console.log(err);

  const status = err.statusCode || 500;

  res.status(status).json(err.message);
});

module.exports = { app };
