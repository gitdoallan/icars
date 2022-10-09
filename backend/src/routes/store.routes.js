const express = require('express');
const { verifyToken } = require('../middlewares/verifyToken.middleware');
const storeController = require('../controllers/store.controller');

const router = express.Router();

router.use(verifyToken);

router.get('/bikes', storeController.getAllBikes);
router.post('/bike/reserve/:id', storeController.isBikeAvailable);
router.post('/bike/available/:id', storeController.isBikeAvailable);
router.get('/bike/:id', storeController.getBikeById);

module.exports = router;
