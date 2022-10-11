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

const updateUserById = async (id, user) => {
  const transaction = await Model.sequelize.transaction();
  try {
    const result = await Model.users.update(user, {
      where: { id },
      transaction,
    });
    if (!result) throw new ErrorHandler(404, 'User not found');
    await transaction.commit();
  } catch (err) {
    await transaction.rollback();
    throw new ErrorHandler(500, err.message);
  }
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
  if (!result) throw new ErrorHandler(404, 'User not found');
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

const deleteBikeById = async (id) => {
  const transaction = await Model.sequelize.transaction();
  try {
    const result = await Model.bikes.destroy({
      where: {
        id,
      },
      transaction,
    });
    await transaction.commit();
    return result;
  } catch (err) {
    await transaction.rollback();
    throw new ErrorHandler(500, err.message);
  }
};

const updateBikeById = async (id, bike) => {
  const transaction = await Model.sequelize.transaction();
  try {
    const result = await Model.bikes.update(bike, {
      where: {
        id,
      },
      transaction,
    });
    await transaction.commit();
    return result;
  } catch (err) {
    await transaction.rollback();
    throw new ErrorHandler(500, err.message);
  }
};

module.exports = {
  listAllReservations,
  getAllReservationsByUserId,
  updateUserById,
  deleteUserById,
  createNewBike,
  deleteBikeById,
  updateBikeById,
};
