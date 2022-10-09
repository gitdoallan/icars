const { users: userModel } = require('../database/models');
const { hashPassword, comparePassword } = require('../utils/bcrypt');
const { createToken } = require('../utils/jwt');
const { ErrorHandler } = require('../utils/errorHandler');

const createUser = async ({ name, email, password }) => {
  const userAlreadyExists = await userModel.findOne({ where: { email } });
  if (userAlreadyExists) throw new ErrorHandler(409, 'Email already registered');
  const hash = await hashPassword(password);
  const transaction = await userModel.sequelize.transaction();
  try {
    const { dataValues } = await userModel.create({ name, email, password: hash }, { transaction });
    await transaction.commit();
    const { password: _, ...userInfo } = dataValues;
    const token = createToken({ userInfo, role: 'user' });
    return {
      token, ...userInfo, role: 'user', isLogged: true,
    };
  } catch (error) {
    await transaction.rollback();
    throw new ErrorHandler(500, 'Something went wrong');
  }
};

const loginUser = async ({ email, password }) => {
  const { dataValues } = await userModel.findOne({ where: { email } });
  if (!dataValues) throw new ErrorHandler(401, 'Invalid email or password');
  const { password: hash, ...userInfo } = dataValues;
  await comparePassword(password, hash);
  const token = createToken(userInfo);
  return { token, ...userInfo, isLogged: true };
};

module.exports = {
  createUser,
  loginUser,
};
