const { EXPIRE_IN_7_DAYS } = require('./magicNumbers');

const COOKIE_SETUP = {
  httpOnly: true,
  sameSite: 'strict',
  path: '/',
  maxAge: EXPIRE_IN_7_DAYS,
};

module.exports = COOKIE_SETUP;
