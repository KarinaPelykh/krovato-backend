const { ctrlWrapper } = require("../decorator");
const { HttpError } = require("../helper");

const Categories = require("../models/categories");

const getAll = async (req, res) => {
  const result = await Categories.find();

  res.json(result);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const result = await Categories.findById(id);

  if (!result) {
    throw HttpError("Not found", 404);
  }

  res.json(result);
};

module.exports = {
  getAll: ctrlWrapper(getAll),
  getById: ctrlWrapper(getById),
};
