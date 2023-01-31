

const { ProductModel } = require("./product.model");

async function getProducts(req, res, next) {
    try {
        const products = await ProductModel.find({});
        res.status(200).json(products);
    } catch (err) {
        res.status(404).json(err);
    }
}


async function getProductID(req, res, next) {
    try {
        const products = await ProductModel.findOne({ _id: req.params.id });
        if (products === null) {
            return res.status(404).json(req.params.id + " not found")
        }
        res.status(200).json(products);
    } catch (err) {
        res.status(404).json("not found");
    }
};

async function getProductByCat(req, res, next) {
    try {
        const products = await ProductModel.find({ categories: req.params.id });
        res.status(200).json(products);
    } catch (err) {
        res.status(404).json(err);
    }
};

async function createProduct(req, res, next) {
    try {
        const product = await ProductModel.create(req.body);
        res.status(201).json(product);
    } catch {
        res.status(403).json("not found");
    }
};

async function editProduct(req, res, next) {
    try {
        const updatedData = await ProductModel.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true });
        if (!updatedData) {
            return res.status(404).json(req.params.id + " not found")
        }
        res.status(200).json(updatedData);

    } catch {
        res.status(403).json(" something went wrong...");
    }
};

async function deleteProduct(req, res, next) {
    try {
        if ((await ProductModel.findOne({ _id: req.params.id })) === null) {
            return res.status(404).json(req.params.id + " not found")
        }
        await ProductModel.deleteOne({ _id: req.params.id });
        res.status(204).json(req.params.id + " is taken away...  :´-(");
    } catch {
        res.status(404).json(req.params.id + " not found");
    }
};




module.exports = { getProducts, getProductID, getProductByCat, createProduct, editProduct, deleteProduct };