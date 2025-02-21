const { ctrlWrapper } = require("../decorator");

const Review = require("../models/reviews");

const getAllReviews = async (req, res) => {
  const result = await Review.find();

  res.json(result);
};

const addReview = async (req, res) => {
  const result = await Review.create(req.body);

  res.status(201).json(result);
};

module.exports = {
  getAllReviews: ctrlWrapper(getAllReviews),
  addReview: ctrlWrapper(addReview),
};
