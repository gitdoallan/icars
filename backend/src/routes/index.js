const express = require('express');
const userRouter = require('./user.routes');
const storeRouter = require('./store.routes');

const router = express.Router();

router.use('/images', express.static('./src/images'));

router.use('/users', userRouter);

router.use('/store', storeRouter);

module.exports = router;
