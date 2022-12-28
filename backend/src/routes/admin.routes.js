const express = require('express');
const { verifyAdminToken } = require('../middlewares/verifyAdminToken.middleware');
const adminController = require('../controllers/admin.controller');

const router = express.Router();

router.use(verifyAdminToken);

router.get('/', adminController.listAllReservations);
router.get('/users', adminController.listAllUsers);
router.post('/user/new', adminController.createNewAccount);
router.put('/user/:id', adminController.updateUserById);
router.get('/user/:id', adminController.getAllReservationsByUserId);
router.delete('/user/:id', adminController.deleteUserById);
router.get('/cars', adminController.listAllCars);
router.post('/car/upload', adminController.carImageUploader);
router.post('/car/create', adminController.createNewCar);
router.delete('/car/:id', adminController.deleteCarById);
router.put('/car/:id', adminController.updateCarById);

module.exports = router;
