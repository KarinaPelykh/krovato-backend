const Review = require("../models/reviews");

const getAllReviews = async (req, res) => {
  const result = await Review.find();

  res.json(result);
};

const addReview = async (req, res) => {
  const result = await Review.create(req.body);
  console.log(result);
  res.status(201).json(result);
};

module.exports = {
  getAllReviews,
  addReview,
};
