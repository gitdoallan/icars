const storeService = require('../services/store.service');

const getAllBikes = async (_req, res) => {
  const result = await storeService.getAllBikes();
  res.status(200).json(result);
};

module.exports = {
  getAllBikes,
};
