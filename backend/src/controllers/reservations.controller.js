const reservationsService = require('../services/reservations.service');

const listAllUserReservations = async (req, res) => {
  const result = await reservationsService.listAllUserReservations({ userId: req.user.id });
  res.status(200).json(result);
};

const getReservationById = async (req, res) => {
  const { orderId } = req.params;
  const { id, role } = req.user;
  const result = await reservationsService.getAllReservations({
    orderId, userId: id, role,
  });
  res.status(200).json(result);
};

module.exports = {
  getReservationById,
  listAllUserReservations,
};
