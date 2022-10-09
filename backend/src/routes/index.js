const express = require('express');
const userRouter = require('./user.routes');
const storeRouter = require('./store.routes');
const reservationsRouter = require('./reservations.routes');

const router = express.Router();

router.use('/images', express.static('./src/images'));

router.use('/users', userRouter);

router.use('/store', storeRouter);

router.use('/reservations', reservationsRouter);

module.exports = router;
