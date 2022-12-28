const express = require('express');
const { verifyToken } = require('../middlewares/verifyToken.middleware');
const { isRentalDateValid } = require('../middlewares/isRentalDateValid.middleware');
const storeController = require('../controllers/store.controller');

const router = express.Router();

router.use(verifyToken);

router.get('/cars', storeController.getAllCars);
router.post('/car/rent', isRentalDateValid, storeController.rentCar);
router.post('/car/available', isRentalDateValid, storeController.isCarAvailable);
router.post('/cars/filter', storeController.getAllFilteredCars);
router.get('/car/:id', storeController.getCarById);
router.get('/filters', storeController.getAllFilters);

module.exports = router;
