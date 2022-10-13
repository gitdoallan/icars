const Model = require('../database/models');
const { hashPassword, comparePassword } = require('../utils/bcrypt');
const { createToken } = require('../utils/jwt');
const { ErrorHandler } = require('../utils/errorHandler');

const createUser = async ({ name, email, password }) => {
  const hash = await hashPassword(password);
  const transaction = await Model.users.sequelize.transaction();
  try {
    const result = await Model.users
      .create({ name, email, password: hash }, { transaction });
    await transaction.commit();
    const { password: _, ...userInfo } = result;
    userInfo.role = 'user';
    const token = createToken(userInfo);
    return {
      token, ...userInfo, isLogged: true,
    };
  } catch (error) {
    await transaction.rollback();
    throw new ErrorHandler(500, 'Something went wrong');
  }
};

const loginUser = async ({ email, password }) => {
  const result = await Model.users.findOne({ where: { email } });
  if (!result) throw new ErrorHandler(401, 'Invalid email or password');
  const { password: hash, ...userInfo } = result;
  await comparePassword(password, hash);
  const token = createToken(userInfo);
  return { token, ...userInfo, isLogged: true };
};

module.exports = {
  createUser,
  loginUser,
};
