const express = require('express');
const { createOrder, getAllOrders, getOrderId, isShipped } = require('./order.controller');
const { isAdmin, isLoggedIn } = require("../middleware/middleware");
const orderRouter = express.Router();

orderRouter.get('/', isLoggedIn, getAllOrders);
orderRouter.get('/:id', isLoggedIn, getOrderId);
orderRouter.post('/', isLoggedIn, createOrder);
orderRouter.put('/:id', isAdmin, isShipped);

module.exports = { orderRouter };