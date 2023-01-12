const { Schema, model, models } = require("mongoose");

const CategorySchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
});

const CategoryModel = models.category || model("category", CategorySchema);

module.exports = { CategoryModel };
