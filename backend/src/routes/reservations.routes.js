const express = require('express');
const { verifyToken } = require('../middlewares/verifyToken.middleware');
const reservationsController = require('../controllers/reservations.controller');

const router = express.Router();

router.use(verifyToken);

router.get('/', reservationsController.listAllUserReservations);
router.get('/:orderId', reservationsController.getReservationById);

module.exports = router;