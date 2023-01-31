const Joi = require("joi");

const { Schema, model, models } = require("mongoose");


const productSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    inStock: {
        type: Number,
        required: true
    }
    ,
    categories: {
        type: [Schema.Types.ObjectId],
        ref: 'category',
        required: true
    }
}, { versionKey: false });

const ProductModel = models.product || model("product", productSchema);

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

module.exports = { ProductModel, productJoiSchema };