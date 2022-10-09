const express = require('express');
const { verifyAdminToken } = require('../middlewares/verifyAdminToken.middleware');
const adminController = require('../controllers/admin.controller');

const router = express.Router();

router.use(verifyAdminToken);

router.get('/', adminController.listAllReservations);

module.exports = router;
