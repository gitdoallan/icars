const storeService = require('../services/store.service');

const getAllBikes = async (_req, res) => {
  const result = await storeService.getAllBikes();
  res.status(200).json(result);
};

const getBikeById = async (req, res) => {
  const { id } = req.params;
  const result = await storeService.getBikeById(id);
  res.status(200).json(result);
};

const isBikeAvailable = async (req, res) => {
  const { id } = req.params;
  const { startDate, endDate } = req.body;
  const result = await storeService.isBikeAvailable({ id, startDate, endDate });
  res.status(200).json(result);
};

module.exports = {
  getAllBikes,
  getBikeById,
  isBikeAvailable,
};
