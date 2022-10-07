const userService = require('../services/users.service');

const getUsers = async (_req, res) => {
  const users = await userService.getUsers();
  res.json(users);
};

module.exports = {
  getUsers,
};
