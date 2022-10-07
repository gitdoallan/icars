const Joi = require('joi');
const { ErrorHandler } = require('../utils/ErrorHandler');

const createUserMiddleware = (req, _res, next) => {
  const { name, email, password } = req.body;

  const { error } = Joi.object({
    name: Joi.string().min(3).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
  }).validate({ name, email, password });

  if (error) throw new ErrorHandler(400, error.details[0].message);

  return next();
};

module.exports = { createUserMiddleware };
