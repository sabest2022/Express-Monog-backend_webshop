const express = require("express");
const app = express();
const cookieSession = require("cookie-session");
require("express-async-errors");

const { productRouter } = require("./resources/product/product.router");
const { categoryRouter } = require("./resources/category/category.router");
const { userRouter } = require("./resources/user/user.router");
// Här är ett bra ställe att lägga till routers och andra middlewares.

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

//404
app.use((req, res) => {
  res.status(404).json("Not found");
});

app.use((err, req, res, next) => {
  console.log(err);

  const status = err.status || 500;

  res.status(status).json(err.message);
});

module.exports = { app };
