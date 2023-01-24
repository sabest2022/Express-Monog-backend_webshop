const { string } = require("joi");
const {Schema, model, models} = require("mongoose");


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
    image:{
        type: String,
        required: true
    },
    instock: {
        type: Number,
        required: true
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: 'CategorySchema'//,
        // required: true
    }
});

const Product = models.product || model("product", productSchema);

module.exports = { Product };