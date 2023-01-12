const { ProductModel } = require("./product.model");
const ServerError = require("../serverError");

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

async function getProduct(req, res, next) {
  try {
    const product = await ProductModel.findOne({ _id: req.params.id });

    if (!product) {
      throw new ServerError(
        404,
        `Product with id ${req.params.id} was not found`
      );
    }
    res.status(200).json(product);
  } catch (error) {
    next(error);
  }
}

async function getProductByCategory(req, res, next) {
  try {
    const products = await ProductModel.find({ categories: req.params.id });
    res.status(200).json(products);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  getAllProducts,
  addProduct,
  getProduct,
  getProductByCategory,
};
