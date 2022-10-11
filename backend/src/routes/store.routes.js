const express = require('express');
const { verifyToken } = require('../middlewares/verifyToken.middleware');
const { isRentalDateValid } = require('../middlewares/isRentalDateValid.middleware');
const storeController = require('../controllers/store.controller');

const router = express.Router();

router.use(verifyToken);

router.get('/bikes', storeController.getAllBikes);
router.post('/bike/rent', isRentalDateValid, storeController.rentBike);
router.post('/bike/available', isRentalDateValid, storeController.isBikeAvailable);
router.post('/bikes/filter', storeController.getAllFilteredBikes);
router.get('/bike/:id', storeController.getBikeById);
router.get('/filters', storeController.getAllFilters);

module.exports = router;
