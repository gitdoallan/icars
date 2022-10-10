const express = require('express');
const { verifyAdminToken } = require('../middlewares/verifyAdminToken.middleware');
const adminController = require('../controllers/admin.controller');

const router = express.Router();

router.use(verifyAdminToken);

router.get('/', adminController.listAllReservations);
router.get('/user/:id', adminController.getAllReservationsByUserId);
router.delete('/user/:id', adminController.deleteUserById);

module.exports = router;
