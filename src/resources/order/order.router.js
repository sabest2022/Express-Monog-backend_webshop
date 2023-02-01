const express = require('express');
const { createOrder } = require('./order.controller');
const { isAdmin, isLoggedIn, validate } = require("../middleware/middleware");
const orderRouter = express.Router();

// Order routes
orderRouter.post('/', isLoggedIn, createOrder);


module.exports = { orderRouter };