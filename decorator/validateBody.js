const HttpError = require("../helper/HttpError");

const validateBody = (schema) => {
  const func = async (req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
      next(HttpError(error.message, 404));
    }
    next();
  };
  return func;
};

module.exports = validateBody;
