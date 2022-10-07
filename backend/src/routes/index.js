const express = require('express');
const userRouter = require('./user.routes');
const bikesRouter = require('./bike.routes');

const router = express.Router();

router.use('/images', express.static('./src/images'));

router.use('/users', userRouter);

router.use('/bikes', bikesRouter);

module.exports = router;
