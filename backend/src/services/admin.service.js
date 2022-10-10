const { ErrorHandler } = require('../utils/errorHandler');
const Model = require('../database/models');

const listAllReservations = async () => {
  const result = await Model.reservations.findAll({
    attributes: ['id', 'orderTotal', 'startDate', 'endDate', 'orderStatus'],
    include: [
      {
        model: Model.users,
        attributes: ['id', 'name', 'email'],
      },
      {
        model: Model.bikes,
        attributes: ['id'],
        include: [
          {
            model: Model.bikeModels,
            attributes: ['name'],
          },
          {
            model: Model.storeLocations,
            attributes: ['name'],
          },
        ],
      },
    ],
  });
  if (!result) throw new ErrorHandler(404, 'No reservations found');
  return result;
};

const getAllReservationsByUserId = async (id) => {
  const result = await Model.reservations.findAll({
    attributes: ['id', 'orderTotal', 'startDate', 'endDate', 'orderStatus'],
    where: {
      userId: id,
    },
    include: [
      {
        model: Model.users,
        attributes: ['id', 'name', 'email'],
      },
      {
        model: Model.bikes,
        attributes: ['id'],
        include: [
          {
            model: Model.bikeModels,
            attributes: ['name'],
          },
          {
            model: Model.storeLocations,
            attributes: ['name'],
          },
        ],
      },
    ],
  });
  if (!result) throw new ErrorHandler(404, 'No reservations found');
  return result;
};

const deleteUserById = async (id) => {
  const result = await Model.users.destroy({
    where: {
      id,
    },
  });
  if (!result) throw new ErrorHandler(404, 'No user found');
  return result;
};

const createNewBike = async (bike) => {
  const transaction = await Model.sequelize.transaction();
  try {
    const result = await Model.bikes.create(bike, { transaction });
    await transaction.commit();
    return result;
  } catch (err) {
    await transaction.rollback();
    throw new ErrorHandler(500, err.message);
  }
};

module.exports = {
  listAllReservations, getAllReservationsByUserId, deleteUserById, createNewBike,
};
