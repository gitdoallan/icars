const storeService = require('../services/store.service');

const getAllCars = async (_req, res) => {
  const result = await storeService.getAllCars();
  res.status(200).json(result);
};

const isCarAvailable = async (req, res) => {
  const { id, startDate, endDate } = req.body;
  const result = await storeService.isCarAvailable({ id, startDate, endDate });
  res.status(200).json(result);
};

const rentCar = async (req, res) => {
  const {
    id, orderTotal, startDate, endDate,
  } = req.body;
  const result = await storeService.rentCar({
    carId: id, userId: req.user.id, orderTotal, startDate, endDate,
  });
  res.status(200).json(result);
};

const getCarById = async (req, res) => {
  const { id } = req.params;
  const result = await storeService.getCarById(id);
  res.status(200).json(result);
};

const getAllFilteredCars = async (req, res) => {
  const {
    storeLocation, carModel, carColor, rating, startDate, endDate,
  } = req.body;
  const result = await storeService.getAllFilteredCars({
    storeLocation, carModel, carColor, rating, startDate, endDate,
  });
  res.status(200).json(result);
};

const getAllFilters = async (_req, res) => {
  const result = await storeService.getAllFilters();
  res.status(200).json(result);
};

module.exports = {
  getAllCars,
  isCarAvailable,
  rentCar,
  getCarById,
  getAllFilteredCars,
  getAllFilters,
};
