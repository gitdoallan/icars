const reservationsService = require('../services/reservations.service');

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
};
