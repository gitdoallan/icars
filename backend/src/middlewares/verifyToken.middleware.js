const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const { ErrorHandler } = require('../utils/errorHandler');

dotenv.config();

const verifyToken = async (req, _res, next) => {
  const { token } = req.cookies;
  if (!token) throw new ErrorHandler(403, 'Token not found');
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
  } catch (error) {
    throw new ErrorHandler(401, 'Expired or invalid token');
  }
  return next();
};

module.exports = { verifyToken };
