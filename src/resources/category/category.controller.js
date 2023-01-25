const { CategoryModel } = require("./category.model");

async function createCategory (req, res, next) {
    const category = await CategoryModel.create(req.body)
    res.status(201).json(category)
};