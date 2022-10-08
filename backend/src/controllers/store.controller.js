const storeService = require('../services/store.service');

const getAllBikes = async (_req, res) => {
  const result = await storeService.getAllBikes();
  res.status(200).json(result);
};

const findBike = async (req, res) => {
  const { filter, type } = req.body;
  const result = await storeService.findBike({ filter, type });
  res.status(200).json(result);
};

const getBikeById = async (req, res) => {
  const { id } = req.params;
  const result = await storeService.getBikeById(id);
  res.status(200).json(result);
};

const createBike = async (req, res) => {
  const {
    model, color, location, rating, image, price,
  } = req.body;
  const result = await storeService.createBike({
    model, color, location, rating, image, price,
  });
  res.status(201).json(result);
};

const updateBike = async (req, res) => {
  const { id } = req.params;
  const {
    model, color, location, rating, image, price,
  } = req.body;
  const result = await storeService.updateBike(id, {
    model, color, location, rating, image, price,
  });
  res.status(200).json(result);
};

const deleteBike = async (req, res) => {
  const { id } = req.params;
  const result = await storeService.deleteBike(id);
  res.status(200).json(result);
};

module.exports = {
  getAllBikes,
  findBike,
  getBikeById,
  createBike,
  updateBike,
  deleteBike,
};
