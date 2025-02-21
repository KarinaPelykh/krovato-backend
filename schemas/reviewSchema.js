const Joi = require("joi");

const reviewSchema = Joi.object({
  reviews: Joi.string().required(),
  user: Joi.string().required(),
  mark: Joi.string().required(),
  date: Joi.string().required(),
  product: Joi.string().required(),
});

module.exports = reviewSchema;
