const { CategoryModel } = require("./category.model");

async function addCategory(req, res, next) {
  try {
    const category = await CategoryModel.create(req.body);
    res.status(201).json(category);
  } catch (error) {
    next(err);
  }
}

async function getCategories(req, res, next) {
  try {
    const categories = await CategoryModel.find({});

    res.status(200).json(categories);
  } catch (error) {
    next(error);
  }
}

async function getCategory(req, res, next) {
  try {
    const category = await CategoryModel.findById(req.params.id);

    res.status(200).json(category);
  } catch (error) {
    next(error);
  }
}

module.exports = { addCategory, getCategories, getCategory };
