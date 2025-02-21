const { Schema, model } = require("mongoose");

const productSchema = new Schema({
  image: String,
  size: String,
  title: String,
  isAvailable: Boolean,
  price: String,
  sale: String,
});

const Products = model("product", productSchema);
module.exports = Products;
