const userService = require('../services/users.service');
const COOKIE_SETUP = require('../utils/cookieSetup');

const createUser = async (req, res) => {
  const { name, email, password } = req.body;
  const { token, ...userInfo } = await userService.createUser({ name, email, password });
  res.status(201).cookie('token', token, COOKIE_SETUP).json(userInfo);
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  const { token, ...userInfo } = await userService.loginUser({ email, password });
  res.status(200).cookie('token', token, COOKIE_SETUP).json(userInfo);
};

const logoutUser = async (_req, res) => {
  res.status(202).clearCookie('token').json({ message: 'Logout successful' });
};

module.exports = {
  createUser,
  loginUser,
  logoutUser,
};
