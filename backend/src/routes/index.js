const express = require('express');
const userRouter = require('./user.routes');

const router = express.Router();

router.use('/images', express.static('./src/images'));

router.use('/users', userRouter);

module.exports = router;
