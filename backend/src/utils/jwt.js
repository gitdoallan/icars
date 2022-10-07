const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const { ErrorHandler } = require('./errorHandler');

dotenv.config();

const SECRET = process.env.JWT_SECRET;

const createToken = (payload) => jwt.sign(payload, SECRET, { expiresIn: '7d' });

const verifyToken = (token) => {
  const result = jwt.verify(token, SECRET);
  if (!result) throw new ErrorHandler(401, 'Invalid Token');
  return result;
};

module.exports = {
  createToken,
  verifyToken,
};
