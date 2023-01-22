const { Schema, model, models } = require("mongoose");
const Joi = require("joi");

const ProductSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true },
    inStock: { type: Number, required: true },
    categories: {
      type: [Schema.Types.ObjectId],
      ref: "category",
      required: true,
    },
  },
  { versionKey: false }
);

const ProductJoiSchema = Joi.object({
  title: Joi.string().strict().required(),
  description: Joi.string().strict().required(),
  price: Joi.number().strict().required(),
  image: Joi.string().strict().required(),
  inStock: Joi.number().strict().required(),
  categories: Joi.array().min(1).required(),
});

const ProductUpdateValidationSchema = ProductJoiSchema.keys({
  _id: Joi.string().strict().required(),
});

const ProductModel = models.product || model("product", ProductSchema);

module.exports = {
  ProductModel,
  ProductJoiSchema,
  ProductUpdateValidationSchema,
};
