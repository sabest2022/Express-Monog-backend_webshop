// ----- Imports epress and express async errors

const express = require("express");
require("express-async-errors");

// ----- Creates express app

const app = express();

// ----- Creates cookie session

const cookieSession = require("cookie-session");

// ----- Imports all routers

const { productRouter } = require("./resources/product/product.router");
const { categoryRouter } = require("./resources/category/category.router");
const { userRouter } = require("./resources/user/user.router");
const { orderRouter } = require("./resources/order/order.router");

// ----- Json-fying incoming strings 

app.use(express.json());

// ----- Creates the cookies

app.use(
    cookieSession({
        secret: "secret",
        httpOnly: true,
        secure: false,
        maxAge: 1000 * 60 * 60 * 24,
    })
);

// ----- Defines starting endpoints

app.use("/api/products", productRouter);
app.use("/api/categories", categoryRouter);
app.use("/api/users", userRouter);
app.use("/api/orders", orderRouter);

// ----- Error handlers

app.use((req, res) => {
    res.status(404).json("Not found");
});
app.use((err, req, res, next) => {
    const status = err.status || 500;
    res.status(status).json(err.message);
});

// ----- Exports app to server

module.exports = { app };