const { Op } = require('sequelize');
const { ErrorHandler } = require('../utils/errorHandler');
const Model = require('../database/models');
const { ONE_DAY } = require('../utils/magicNumbers');
require('express-async-errors');

const getAllBikes = async () => {
  const result = await Model.bikes.findAll({
    attributes: ['id', 'image', 'price', 'rating'],
    include: [
      {
        model: Model.storeLocations,
        attributes: ['name'],
      },
      {
        model: Model.bikeModels,
        attributes: ['name'],
      },
    ],
  });
  return result;
};

const isBikeAvailable = async ({ id, startDate, endDate }) => {
  const result = await Model.bikes.findOne({
    where: { id },
    attributes: ['id'],
    include: [
      {
        model: Model.reservations,
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
          orderStatus: {
            [Op.not]: 'cancelled',
          },
        },
      },
    ],
  });
  if (result) throw new ErrorHandler(400, 'Bike is not available');
  return true;
};

const getBikeById = async (id) => {
  const result = await Model.bikes.findOne({
    where: { id },
    attributes: ['id', 'image', 'price', 'rating'],
    include: [
      {
        model: Model.storeLocations,
        attributes: ['name'],
      },
      {
        model: Model.bikeModels,
        attributes: ['name'],
      },
      {
        model: Model.bikeColors,
        attributes: ['name'],
      },
    ],
  });
  return result;
};

const rentBike = async ({
  bikeId, userId, startDate, endDate,
}) => {
  await isBikeAvailable({ id: bikeId, startDate, endDate });
  const { price } = await getBikeById(bikeId);
  const calcEndDate = new Date(endDate.split('T')[0]).getTime();
  const calcStartDate = new Date(startDate.split('T')[0]).getTime();
  const orderTotal = ((calcEndDate - calcStartDate) / ONE_DAY) * +price;
  const transaction = await Model.reservations.sequelize.transaction();
  try {
    const result = await Model.reservations.create({
      bikeId, userId, orderTotal, startDate, endDate,
    }, { transaction });
    await transaction.commit();
    return { orderId: result.id };
  } catch (error) {
    await transaction.rollback();
    throw new ErrorHandler(400, 'Error while renting bike');
  }
};

const listAllReservationsBetweenDates = async (filter) => {
  const result = await Model.reservations.findAll({
    attributes: ['bikeId'],
    where: {
      [Op.or]: [
        {
          startDate: {
            [Op.between]: [filter.startDate, filter.endDate],
          },
        },
        {
          endDate: {
            [Op.between]: [filter.startDate, filter.endDate],
          },
        },
      ],
      orderStatus: {
        [Op.not]: 'cancelled',
      },
    },
  });
  return result;
};

const getAllFilteredBikes = async (filter) => {
  const result = await Model.bikes.findAll({
    attributes: ['id', 'image', 'price', 'rating'],
    include: [
      {
        model: Model.storeLocations,
        attributes: ['id', 'name'],
        where: filter.storeLocation ? { id: filter.storeLocation } : {},
      },
      {
        model: Model.bikeModels,
        attributes: ['id', 'name'],
        where: filter.bikeModel ? { id: filter.bikeModel } : {},
      },
      {
        model: Model.bikeColors,
        attributes: ['id', 'name'],
        where: filter.bikeColor ? { id: filter.bikeColor } : {},
      },
    ],
    having: { rating: { [Op.gte]: filter.rating } },
  });

  const excludeFromResults = await listAllReservationsBetweenDates(filter);

  const filteredResult = result.reduce((acc, bike) => {
    if (!excludeFromResults.some((el) => el.bikeId === bike.id)) {
      acc = [...acc, bike];
    }
    return acc;
  }, []);

  return filteredResult;
};

const getAllFilters = async () => {
  const result = await Promise.all([
    Model.storeLocations.findAll({
      attributes: ['id', 'name'],
      order: [['name', 'ASC']],
    }),
    Model.bikeModels.findAll({
      attributes: ['id', 'name'],
      order: [['name', 'ASC']],
    }),
    Model.bikeColors.findAll({
      attributes: ['id', 'name'],
      order: [['name', 'ASC']],
    }),
  ]);
  if (!result) throw new ErrorHandler(400, 'Error while getting filters');
  return {
    storeLocations: result[0],
    bikeModels: result[1],
    bikeColors: result[2],
  };
};

module.exports = {
  getAllBikes,
  getBikeById,
  isBikeAvailable,
  rentBike,
  getAllFilteredBikes,
  getAllFilters,
};
