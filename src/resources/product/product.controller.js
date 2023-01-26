const { ProductModel } = require("./product.model");

async function getProducts(req, res, next) {
    try {
        const products = await ProductModel.find({});
        res.status(200).json(products);
    } catch(err) {
        res.status(404).json(err);
    }
}

async function createProduct(req, res, next) {
    const product = await ProductModel.create(req.body);
    res.status(201).json(product);
};

async function getProductID(req, res, next) {
    try {
        const products = await ProductModel.findOne({_id: req.params.id});
        if(products === null) {
            return res.status(404).json(req.params.id + " not found" ) 
        }
        res.status(200).json(products);
    } catch(err) {
        res.status(404).json("not found");
    }
};

async function getProductByCat(req, res, next) {
    try {
        const products = await ProductModel.find({categories: req.params.id});
        res.status(200).json(products);
    } catch(err) {
        res.status(404).json(err);
    }
};


module.exports = { createProduct, getProducts, getProductID, getProductByCat };