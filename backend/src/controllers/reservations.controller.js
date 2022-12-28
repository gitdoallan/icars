const reservationsService = require('../services/reservations.service');

const listAllUserReservations = async (req, res) => {
  const result = await reservationsService.listAllUserReservations({ userId: req.user.id });
  res.status(200).json(result);
};

const rateOrderByReservationId = async (req, res) => {
  const { orderId } = req.params;
  const { carId, rate } = req.body;
  const { id: userId } = req.user;
  const result = await reservationsService.rateOrderByReservationId({
    orderId: Number(orderId), carId, userId, rate,
  });
  res.status(200).json(result);
};

const cancelReservation = async (req, res) => {
  const { orderId } = req.body;
  const { id } = req.user;
  const result = await reservationsService.cancelReservation({ orderId, userId: id });
  res.status(200).json(result);
};

const getReservationById = async (req, res) => {
  const { orderId } = req.params;
  const { id, role } = req.user;
  const result = await reservationsService.getReservationById({
    orderId, userId: id, role,
  });
  res.status(200).json(result);
};

module.exports = {
  getReservationById,
  rateOrderByReservationId,
  listAllUserReservations,
  cancelReservation,
};
