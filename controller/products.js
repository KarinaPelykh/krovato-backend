const Products = require("../models/products");

const { ctrlWrapper } = require("../decorator");

const getAllProduct = async (req, res) => {
  const result = await Products.find();

  res.json(result);
};

module.exports = {
  getAllProduct: ctrlWrapper(getAllProduct),
};
