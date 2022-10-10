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

const deleteUserById = async (req, res) => {
  const { id } = req.params;
  await adminService.deleteUserById(id);
  res.status(200).json({ message: 'User deleted' });
};

const createNewBike = async (req, res) => {
  const {
    modelId, colorId, locationId, image, price, imageUpload,
  } = req.body;
  const result = await adminService.createNewBike({
    modelId, colorId, locationId, image, price, imageUpload,
  });
  res.status(200).json(result);
};

module.exports = {
  listAllReservations, getAllReservationsByUserId, deleteUserById, createNewBike,
};
