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
    next(error);
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

async function updateProduct(req, res) {
  const exists = await ProductModel.findById(req.params.id);
  if (!exists)
    return res.status(404).json(`Product with id ${req.params.id} not found`);

  const product = await ProductModel.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  if (!product) {
    return res.status(400).json("Did not find any product with that id");
  }

  res.status(200).json(product);
}

async function deleteProduct(req, res) {
  const exists = await ProductModel.findById(req.params.id);
  if (!exists) {
    return res.status(404).json(`Product with id ${req.params.id} not found`);
  }

  await ProductModel.findByIdAndDelete(req.params.id);
  res.status(204).json("Product deleted");
}

module.exports = {
  getAllProducts,
  addProduct,
  getProduct,
  getProductByCategory,
  updateProduct,
  deleteProduct,
};
