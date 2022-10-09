const adminService = require('../services/admin.service');

const listAllReservations = async (_req, res) => {
  const result = await adminService.listAllReservations();
  res.status(200).json(result);
};

const getAllReservationsByUserId = async (req, res) => {
  const { id } = req.params;
  const result = await adminService.getAllReservationsByUserId(id);
  res.status(200).json(result);
};

module.exports = { listAllReservations, getAllReservationsByUserId };
