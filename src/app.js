const express = require("express");
const app = express();

app.use(express.json())

const { productRouter } = require("./resources/product/product.router");
const { orderRouter } = require('./resources/order/order.router');

app.use("/api/products", productRouter);
app.use('/api/order', orderRouter);

module.exports = { app };
