// ----- Imports express

const express = require('express');

// ----- Imports function from controller and middlewere

const { createOrder, getAllOrders, getOrderId, isShipped } = require('./order.controller');
const { isAdmin, isLoggedIn } = require("../middleware/middleware");

// ----- Creates router

const orderRouter = express.Router();

// ----- Creates endpoints

orderRouter.get('/', isLoggedIn, getAllOrders);
orderRouter.get('/:id', isLoggedIn, getOrderId);
orderRouter.post('/', isLoggedIn, createOrder);
orderRouter.put('/:id', isAdmin, isShipped);

// ----- Exports router

module.exports = { orderRouter };