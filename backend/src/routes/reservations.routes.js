const express = require('express');
const { verifyToken } = require('../middlewares/verifyToken.middleware');
const reservationsController = require('../controllers/reservations.controller');

const router = express.Router();

router.use(verifyToken);

router.get('/', reservationsController.listAllUserReservations);
router.post('/rate/:orderId', reservationsController.rateOrderByReservationId);
router.post('/cancel', reservationsController.cancelReservation);
router.get('/:orderId', reservationsController.getReservationById);

module.exports = router;
