const { Product } = require("./product.model");

async function createProduct(req, res, next) {
    const product = await Product.create(req.body);
    res.status(201).json(product);
};

module.exports = { createProduct };