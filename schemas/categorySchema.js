const Joi = require("joi");

const categorySchema = Joi.object({
  quantity: Joi.string().required(),
  product: Joi.array().required(),
  image: Joi.string().required(),
  title: Joi.string().required(),
});

module.exports = categorySchema;
