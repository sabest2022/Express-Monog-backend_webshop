const express = require('express');
const { createOrder, getAllOrders, getOrderId } = require('./order.controller');
const { isAdmin, isLoggedIn, validate } = require("../middleware/middleware");
const orderRouter = express.Router();

// Order routes
orderRouter.get('/', isLoggedIn, getAllOrders);
orderRouter.get('/:id', isLoggedIn, getOrderId);
orderRouter.post('/', isLoggedIn, createOrder);


module.exports = { orderRouter };