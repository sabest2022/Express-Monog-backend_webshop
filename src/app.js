const express = require("express");
require("express-async-errors");
const app = express();
const cookieSession = require("cookie-session");

const { productRouter } = require("./resources/product/product.router");
const { categoryRouter } = require("./resources/category/category.router");
const { userRouter } = require("./resources/user/user.router");
const { orderRouter } = require("./resources/order/order.router");

app.use(express.json());
app.use(
    cookieSession({
        secret: "secret",
        httpOnly: true,
        secure: false,
        maxAge: 1000 * 60 * 60 * 24,
    })
);

app.use("/api/products", productRouter);
app.use("/api/categories", categoryRouter);
app.use("/api/users", userRouter);
app.use("/api/orders", orderRouter);

app.use((req, res) => {
    res.status(404).json("Not found");
});
app.use((err, req, res, next) => {
    const status = err.status || 500;
    res.status(status).json(err.message);
});

module.exports = { app };