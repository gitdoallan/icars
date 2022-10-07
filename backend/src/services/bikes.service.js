const { bikes: bikesModel } = require('../database/models');

const getAllBikes = async () => {
  const result = await bikesModel.findAll();
  return result;
};

const getBikeById = async (id) => {
  const result = await bikesModel.findOne({ where: { id } });
  return result;
};

const createBike = async (bike) => {
  const result = await bikesModel.create(bike);
  return result;
};

const updateBike = async (id, bike) => {
  const result = await bikesModel.update(bike, { where: { id } });
  return result;
};

const deleteBike = async (id) => {
  const result = await bikesModel.destroy({ where: { id } });
  return result;
};

module.exports = {
  getAllBikes,
  getBikeById,
  createBike,
  updateBike,
  deleteBike,
};
