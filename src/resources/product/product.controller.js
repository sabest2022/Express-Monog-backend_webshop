const { ProductModel } = require("./product.model");

async function getAllProducts(req, res, next) {
  try {
    const products = await ProductModel.find({});
    res.status(200).json(products);
  } catch (error) {
    next(error);
  }
}

async function addProduct(req, res, next) {
  try {
    const product = await ProductModel.create(req.body);
    res.status(201).json(product);
  } catch (error) {
    next(err);
  }
}

module.exports = { getAllProducts, addProduct };
