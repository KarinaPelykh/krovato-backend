const { HttpError } = require("../helper");
const Categories = require("../models/categories");

const getAll = async (req, res) => {
  try {
    const result = await Categories.find();

    res.json(result);
  } catch (error) {
    next(error);
  }
};

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Categories.findById(id);

    if (!result) {
      throw HttpError("Not found", 404);
    }

    res.json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAll,
  getById,
};
