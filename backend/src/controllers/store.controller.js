const storeService = require('../services/store.service');

const getAllBikes = async (req, res) => {
  console.log(req.user);
  const result = await storeService.getAllBikes();
  res.status(200).json(result);
};

module.exports = {
  getAllBikes,
};
