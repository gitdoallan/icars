const { Op } = require('sequelize');
const {
  bikes, storeLocations, bikeModels, bikeColors, reservations,
} = require('../database/models');

const getAllBikes = async () => {
  const result = await bikes.findAll({
    attributes: ['id', 'image', 'price', 'rating'],
    include: [
      {
        model: storeLocations,
        attributes: ['name'],
      },
      {
        model: bikeModels,
        attributes: ['name'],
      },
    ],
  });
  return result;
};

const getBikeById = async (id) => {
  const result = await bikes.findOne({
    where: { id },
    attributes: ['id', 'image', 'price', 'rating'],
    include: [
      {
        model: storeLocations,
        attributes: ['name'],
      },
      {
        model: bikeModels,
        attributes: ['name'],
      },
      {
        model: bikeColors,
        attributes: ['name'],
      },
    ],
  });
  return result;
};

const isBikeAvailable = async ({ id, startDate, endDate }) => {
  const result = await bikes.findOne({
    where: { id },
    attributes: ['id'],
    include: [
      {
        model: reservations,
        attributes: ['id'],
        where: {
          [Op.or]: [
            {
              startDate: {
                [Op.between]: [startDate, endDate],
              },
            },
            {
              endDate: {
                [Op.between]: [startDate, endDate],
              },
            },
          ],
        },
      },
    ],
  });
  return result === null;
};

module.exports = {
  getAllBikes,
  getBikeById,
  isBikeAvailable,
};
