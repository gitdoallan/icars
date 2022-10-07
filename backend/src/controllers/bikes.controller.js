const bikesService = require('../services/bikes.service');

const getAllBikes = async (_req, res) => {
  const result = await bikesService.getAllBikes();
  res.status(200).json(result);
};

const getBikeById = async (req, res) => {
  const { id } = req.params;
  const result = await bikesService.getBikeById(id);
  res.status(200).json(result);
};

const createBike = async (req, res) => {
  const {
    model, color, location, rating, image, price,
  } = req.body;
  const result = await bikesService.createBike({
    model, color, location, rating, image, price,
  });
  res.status(201).json(result);
};

const updateBike = async (req, res) => {
  const { id } = req.params;
  const {
    model, color, location, rating, image, price,
  } = req.body;
  const result = await bikesService.updateBike(id, {
    model, color, location, rating, image, price,
  });
  res.status(200).json(result);
};

const deleteBike = async (req, res) => {
  const { id } = req.params;
  const result = await bikesService.deleteBike(id);
  res.status(200).json(result);
};

module.exports = {
  getAllBikes,
  getBikeById,
  createBike,
  updateBike,
  deleteBike,
};
