const { Op } = require('sequelize');
const { ErrorHandler } = require('../utils/errorHandler');
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
  if (result) throw new ErrorHandler(400, 'Bike is not available');
  return true;
};

const rentBike = async ({
  bikeId, userId, orderTotal, startDate, endDate,
}) => {
  await isBikeAvailable({ id: bikeId, startDate, endDate });
  const transaction = await reservations.sequelize.transaction();
  try {
    const result = await reservations.create({
      bikeId, userId, orderTotal, startDate, endDate,
    }, { transaction });
    await transaction.commit();
    return { orderId: result.id };
  } catch (error) {
    await transaction.rollback();
    throw new ErrorHandler(400, 'Error while renting bike');
  }
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

module.exports = {
  getAllBikes,
  getBikeById,
  isBikeAvailable,
  rentBike,
};
