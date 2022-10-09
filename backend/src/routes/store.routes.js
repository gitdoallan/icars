const express = require('express');
const { verifyToken } = require('../middlewares/verifyToken.middleware');
const storeController = require('../controllers/store.controller');

const router = express.Router();

router.use(verifyToken);

router.get('/bikes', storeController.getAllBikes);

module.exports = router;
