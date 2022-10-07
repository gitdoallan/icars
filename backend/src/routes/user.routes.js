const express = require('express');
const usersController = require('../controllers/users.controller');

const router = express.Router();

router.get('/all', usersController.getUsers);
router.post('/create', usersController.createUser);
router.post('/login', usersController.loginUser);

module.exports = router;