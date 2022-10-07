const bcrypt = require('bcrypt');
const { ErrorHandler } = require('./errorHandler');

const SALT_ROUNDS = 10;

const hashPassword = async (password) => {
  const salt = await bcrypt.genSalt(SALT_ROUNDS);
  const hash = await bcrypt.hash(password, salt);
  return hash;
};

const comparePassword = async (password, hash) => {
  const result = await bcrypt.compare(password, hash);
  if (!result) throw new ErrorHandler(401, 'Invalid email or password');
  return result;
};

module.exports = {
  hashPassword,
  comparePassword,
};
