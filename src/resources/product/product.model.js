// ----- Imports joi (validation)

const Joi = require("joi");

// ----- Imports mongoose

const { Schema, model, models } = require("mongoose");

// ----- Schema to create products

const productSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true },
    inStock: { type: Number, required: true },
    categories: { type: [Schema.Types.ObjectId], ref: 'category', required: true }
}, { versionKey: false });

// ----- Validates data before creating product

const productJoiSchema = Joi.object(
    {
        _id: Joi.string(),
        title: Joi.string().required(),
        description: Joi.string().required(),
        price: Joi.number().required(),
        image: Joi.string().required(),
        inStock: Joi.number().required(),
        categories: Joi.array().required()
    }
);

// ----- Checks if "Product" model exist in DB, if not, it creates it

const ProductModel = models.product || model("product", productSchema);

// ----- Exports model to controller and Joi Schema to router

module.exports = { ProductModel, productJoiSchema };