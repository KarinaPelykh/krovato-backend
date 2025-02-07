const Categories = require("../models/categories");

const getAll = async (req, res) => {
  const result = await Categories.find();

  res.json(result);
};

module.exports = {
  getAll,
};
