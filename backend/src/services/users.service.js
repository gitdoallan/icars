const { users: userModel } = require('../database/models');

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
  createUser,
  loginUser,
};
