const express = require('express');
const { verifyAdminToken } = require('../middlewares/verifyAdminToken.middleware');
const adminController = require('../controllers/admin.controller');

const router = express.Router();

router.use(verifyAdminToken);

router.get('/', adminController.listAllReservations);
router.get('/users', adminController.listAllUsers);
router.post('/user/new', adminController.createNewAccount);
router.get('/user/:id', adminController.getAllReservationsByUserId);
router.delete('/user/:id', adminController.deleteUserById);
router.get('/bikes', adminController.listAllBikes);
router.post('/bike/upload', adminController.bikeImageUploader);
router.post('/bike/create', adminController.createNewBike);
router.delete('/bike/:id', adminController.deleteBikeById);
router.put('/bike/:id', adminController.updateBikeById);

module.exports = router;
