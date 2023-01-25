const express = require('express');
const router = express.Router();
const { createOrder } = require('./order.controller');


// Order routes
router.post('/', createOrder);


module.exports = { orderRouter };