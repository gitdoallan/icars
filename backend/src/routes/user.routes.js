const express = require('express');
const usersController = require('../controllers/users.controller');
const { createUserMiddleware } = require('../middlewares/createUser.middleware');
const { loginUserMiddleware } = require('../middlewares/loginUser.middleware');

const router = express.Router();

router.post('/create', createUserMiddleware, usersController.createUser);
router.post('/login', loginUserMiddleware, usersController.loginUser);
router.get('/logout', usersController.logoutUser);

module.exports = router;
