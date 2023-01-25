const express = require('express');
const router = express.Router();
const { createOrder } = require('./order.controllers');


// Order routes
router.post('/', createOrder);


module.exports = { orderRouter };