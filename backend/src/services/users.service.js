const { users: userModel } = require('../database/models');

const getUsers = async () => {
  const result = await userModel.findAll({
    attributes: { exclude: ['password'] },
  });
  return result;
};

const getUserById = async (id) => {
  const result = await userModel.findByPk(id, {
    attributes: { exclude: ['password'] },
  });
  return result;
};

const createUser = async (user) => {
  const result = await userModel.create(user);
  return result;
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
  getUsers,
  getUserById,
  createUser,
  loginUser,
};
