const { users: userModel } = require('../database/models');
const { hashPassword } = require('../utils/bcrypt');
const { createToken } = require('../utils/jwt');
const { ErrorHandler } = require('../utils/errorHandler');

const createUser = async ({ name, email, password }) => {
  const userAlreadyExists = await userModel.findOne({ where: { email } });
  if (userAlreadyExists) throw new ErrorHandler(409, 'Email already registered');
  const hash = await hashPassword(password);
  const { dataValues } = await userModel.create({ name, email, password: hash });
  const { password: _, ...userInfo } = dataValues;
  createToken(userInfo);
  return userInfo;
};

const loginUser = async (user) => {
  const result = await userModel.findOne({
    where: {
      email: user.email,
      password: user.password,
    },
  });
  return result;
};

module.exports = {
  createUser,
  loginUser,
};
