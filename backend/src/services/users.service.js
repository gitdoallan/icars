const { users } = require('../database/models');

const getUsers = async () => {
  const result = await users.findAndCountAll({
    attributes: { exclude: ['password'] },
  });
  return result;
};

module.exports = {
  getUsers,
};
