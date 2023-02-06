// ----- Imports mongoose

const { Schema, model, models } = require("mongoose");

// ----- Schema to create categories

const categorySchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
}, { versionKey: false });

// ----- Checks if "Category" model exist in DB, if not, it creates it

const CategoryModel = models.category || model("category", categorySchema);

// ----- Exports model to controller

module.exports = { CategoryModel };