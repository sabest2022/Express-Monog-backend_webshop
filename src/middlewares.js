const Joi = require("joi");

function validate(schema) {
  return function (req, res, next) {
    const { error } = schema.validate(req.body);
    if (!error) return next(error);
    res.status(400).json(error.message);
  };
}

function authorize(req, res, next) {
  if (req.session._id) {
    return next();
  }

  res.status(401).json("Not authorized");
}

module.exports = { validate, authorize };
