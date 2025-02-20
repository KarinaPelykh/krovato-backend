const { Schema, model } = require("mongoose");

const categoriesSchema = new Schema({
  quantity: String,
  product: Array,
  image: String,
  title: String,
});

const Categories = model("category", categoriesSchema);
module.exports = Categories;
