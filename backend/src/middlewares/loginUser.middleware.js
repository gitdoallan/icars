const Joi = require('joi');
const { ErrorHandler } = require('../utils/errorHandler');

const loginUserMiddleware = (req, _res, next) => {
  const { email, password } = req.body;

  const { error } = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
  }).validate({ email, password });

  if (error) throw new ErrorHandler(400, error.details[0].message);

  return next();
};

module.exports = { loginUserMiddleware };
