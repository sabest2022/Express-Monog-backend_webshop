// ----- Imports model

const { ProductModel } = require("./product.model");

// ----- Get all products from DB

async function getProducts(req, res, next) {
    try {
        const products = await ProductModel.find({});
        res.status(200).json(products);
    } catch (err) {
        res.status(404).json(err);
    };
};

// ----- Get a specific product by ID

async function getProductID(req, res, next) {
    try {
        const products = await ProductModel.findOne({ _id: req.params.id });
        if (products === null) {
            return res.status(404).json(req.params.id + " not found");
        };
        res.status(200).json(products);
    } catch (err) {
        res.status(404).json("not found");
    };
};

// ----- Get all products by the same category

async function getProductByCat(req, res, next) {
    try {
        const products = await ProductModel.find({ categories: req.params.id });
        res.status(200).json(products);
    } catch (err) {
        res.status(404).json(err);
    };
};

// ----- Create new product to DB

async function createProduct(req, res, next) {
    try {
        const product = await ProductModel.create(req.body);
        res.status(201).json(product);
    } catch {
        res.status(403).json("not found");
    };
};

// ----- Edit a product and save it in DB

async function editProduct(req, res, next) {
    try {
        const updatedData = await ProductModel.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true });
        if (!updatedData) { return res.status(404).json(req.params.id + " not found") };
        res.status(200).json(updatedData);
    } catch (err) {
        res.status(403).json(err);
    };
};

// ----- Delete a product 

async function deleteProduct(req, res, next) {
    try {
        if ((await ProductModel.findOne({ _id: req.params.id })) === null) {
            return res.status(404).json(req.params.id + " not found");
        };
        await ProductModel.deleteOne({ _id: req.params.id });
        res.status(204).json(req.params.id + " deleted");
    } catch {
        res.status(404).json(req.params.id + " not found");
    };
};

// ----- Exports functions to router

module.exports = { getProducts, getProductID, getProductByCat, createProduct, editProduct, deleteProduct };