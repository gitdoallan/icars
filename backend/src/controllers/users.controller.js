const userService = require('../services/users.service');

const createUser = async (req, res) => {
  const { name, email, password } = req.body;
  const result = await userService.createUser({ name, email, password });
  res.status(201).json(result);
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  const result = await userService.loginUser({ email, password });
  res.status(200).json(result);
};

module.exports = {
  createUser,
  loginUser,
};
