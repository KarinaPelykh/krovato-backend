const { Schema, model } = require("mongoose");

const reviewSchema = new Schema(
  {
    reviews: String,
    user: String,
    mark: String,
    date: String,
    product: String,
  },
  { versionKey: false }
);

const Review = model("review", reviewSchema);
module.exports = Review;
