const storeService = require('../services/store.service');

const getAllBikes = async (_req, res) => {
  const result = await storeService.getAllBikes();
  res.status(200).json(result);
};

const isBikeAvailable = async (req, res) => {
  const { id, startDate, endDate } = req.body;
  const result = await storeService.isBikeAvailable({ id, startDate, endDate });
  res.status(200).json(result);
};

const rentBike = async (req, res) => {
  const {
    id, orderTotal, startDate, endDate,
  } = req.body;
  const { userInfo } = req.user;
  const result = await storeService.rentBike({
    bikeId: id, userId: userInfo.id, orderTotal, startDate, endDate,
  });
  res.status(200).json(result);
};

const getBikeById = async (req, res) => {
  const { id } = req.params;
  const result = await storeService.getBikeById(id);
  res.status(200).json(result);
};

module.exports = {
  getAllBikes,
  isBikeAvailable,
  rentBike,
  getBikeById,
};
