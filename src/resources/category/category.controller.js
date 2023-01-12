const { CategoryModel } = require("./category.model");

async function addCategory(req, res, next) {
  try {
    const category = await CategoryModel.create(req.body);
    res.status(201).json(category);
  } catch (error) {
    next(err);
  }
}

module.exports = { addCategory };
