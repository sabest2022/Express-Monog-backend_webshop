const { ProductModel } = require("./product.model");

async function createProduct(req, res, next) {
    const product = await ProductModel.create(req.body);
    res.status(201).json(product);
};


async function getProducts(req, res, next) {
    ProductModel.find( (err, docs) => {
        if (err) return handleError(err);
        res.status(200).json(docs);
    });
}

module.exports = { createProduct, getProducts };