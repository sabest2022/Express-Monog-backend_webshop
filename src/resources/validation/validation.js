const Joi = require("joi");

const productJoiSchema = Joi.object(
    {
        title: Joi.string().required(),
        description: Joi.string().required(),
        price: Joi.number().required(),
        image: Joi.string().required(),
        inStock: Joi.number().required(),
        categories: Joi.array().required()
    }
);

module.exports = { productJoiSchema };