const { CategoryModel } = require("./category.model");

async function getCategories (req, res) {
    try {
        const categories = await CategoryModel.find({})
        res.status(200).json(categories)
    } catch(err) {
        res.status(404).json(err)
    }
}

async function createCategory (req, res) {
    const category = await CategoryModel.create(req.body)
    res.status(201).json(category)
};

module.exports = { createCategory, getCategories }