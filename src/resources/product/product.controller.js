const { ProductModel } = require("./product.model");

async function createProduct(req, res, next) {
    const product = await ProductModel.create(req.body);
    res.status(201).json(product);
};


async function getProducts(req, res, next) {
    res.status(200).json("this works");
}

module.exports = { createProduct, getProducts };