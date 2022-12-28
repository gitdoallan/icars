const { Op } = require('sequelize');
const { ErrorHandler } = require('../utils/errorHandler');
const Model = require('../database/models');
const { ONE_DAY } = require('../utils/magicNumbers');
require('express-async-errors');

const getAllCars = async () => {
  const result = await Model.cars.findAll({
    attributes: ['id', 'image', 'price', 'rating'],
    include: [
      {
        model: Model.storeLocations,
        attributes: ['name'],
      },
      {
        model: Model.carModels,
        attributes: ['name'],
      },
    ],
  });
  return result;
};

const isCarAvailable = async ({ id, startDate, endDate }) => {
  const result = await Model.cars.findOne({
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
  if (result) throw new ErrorHandler(400, 'Car is not available!');
  return true;
};

const getCarById = async (id) => {
  const result = await Model.cars.findOne({
    where: { id },
    attributes: ['id', 'image', 'price', 'rating'],
    include: [
      {
        model: Model.storeLocations,
        attributes: ['name'],
      },
      {
        model: Model.carModels,
        attributes: ['name'],
      },
      {
        model: Model.carColors,
        attributes: ['name'],
      },
    ],
  });
  return result;
};

const rentCar = async ({
  carId, userId, startDate, endDate,
}) => {
  await isCarAvailable({ id: carId, startDate, endDate });
  const { price } = await getCarById(carId);
  const calcEndDate = new Date(endDate.split('T')[0]).getTime();
  const calcStartDate = new Date(startDate.split('T')[0]).getTime();
  const orderTotal = ((calcEndDate - calcStartDate) / ONE_DAY) * +price;
  const transaction = await Model.reservations.sequelize.transaction();
  try {
    const result = await Model.reservations.create({
      carId, userId, orderTotal, startDate, endDate,
    }, { transaction });
    await transaction.commit();
    return { orderId: result.id };
  } catch (error) {
    await transaction.rollback();
    throw new ErrorHandler(400, 'Error while renting car');
  }
};

const listAllReservationsBetweenDates = async (filter) => {
  const result = await Model.reservations.findAll({
    attributes: ['carId'],
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

const getAllFilteredCars = async (filter) => {
  const result = await Model.cars.findAll({
    attributes: ['id', 'image', 'price', 'rating'],
    include: [
      {
        model: Model.storeLocations,
        attributes: ['id', 'name'],
        where: filter.storeLocation ? { id: filter.storeLocation } : {},
      },
      {
        model: Model.carModels,
        attributes: ['id', 'name'],
        where: filter.carModel ? { id: filter.carModel } : {},
      },
      {
        model: Model.carColors,
        attributes: ['id', 'name'],
        where: filter.carColor ? { id: filter.carColor } : {},
      },
    ],
    having: { rating: { [Op.gte]: filter.rating } },
  });

  const excludeFromResults = await listAllReservationsBetweenDates(filter);

  const filteredResult = result.reduce((acc, car) => {
    if (!excludeFromResults.some((el) => el.carId === car.id)) {
      acc = [...acc, car];
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
    Model.carModels.findAll({
      attributes: ['id', 'name'],
      order: [['name', 'ASC']],
    }),
    Model.carColors.findAll({
      attributes: ['id', 'name'],
      order: [['name', 'ASC']],
    }),
  ]);
  if (!result) throw new ErrorHandler(400, 'Error while getting filters');
  return {
    storeLocations: result[0],
    carModels: result[1],
    carColors: result[2],
  };
};

module.exports = {
  getAllCars,
  getCarById,
  isCarAvailable,
  rentCar,
  getAllFilteredCars,
  getAllFilters,
};
