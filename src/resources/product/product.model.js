const { string } = require("joi");

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
        ref: 'categories',
        required: true
    }
});

const ProductModel = models.product || model("product", productSchema);

module.exports = { ProductModel };