const express = require("express");
const { createOrder } = require("./order.controller");
const orderRouter = express.Router();
const { authorize } = require("../../middlewares");

orderRouter.post("/", authorize, createOrder);

module.exports = { orderRouter };
