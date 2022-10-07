const { bikes: bikesModel } = require('../database/models');

const getAllBikes = async () => {
  const bikes = await bikesModel.findAll();
  return bikes;
};

const getBikeById = async (id) => {
  const bike = await bikesModel.findOne({ where: { id } });
  return bike;
};

const createBike = async (bike) => {
  const newBike = await bikesModel.create(bike);
  return newBike;
};

const updateBike = async (id, bike) => {
  const updatedBike = await bikesModel.update(bike, { where: { id } });
  return updatedBike;
};

const deleteBike = async (id) => {
  const deletedBike = await bikesModel.destroy({ where: { id } });
  return deletedBike;
};

module.exports = {
  getAllBikes,
  getBikeById,
  createBike,
  updateBike,
  deleteBike,
};
