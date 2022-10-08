const { Op } = require('sequelize');
const { bikes: bikesModel } = require('../database/models');

const getAllBikes = async () => {
  const result = await bikesModel.findAll();
  return result;
};

const findBike = async ({ filter, type }) => {
  const cases = {
    model: { model: filter },
    color: { color: filter },
    location: { location: filter },
    rating: { rating: { [Op.gte]: filter } },
  };
  const result = await bikesModel.findAll({ where: cases[type] });
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
  findBike,
  getBikeById,
  createBike,
  updateBike,
  deleteBike,
};
