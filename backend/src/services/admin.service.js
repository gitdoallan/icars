const { ErrorHandler } = require('../utils/errorHandler');
const { hashPassword } = require('../utils/bcrypt');
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
        model: Model.cars,
        attributes: ['id'],
        include: [
          {
            model: Model.carModels,
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

const listAllUsers = async () => {
  const result = await Model.users.findAll({
    attributes: ['id', 'name', 'email', 'role'],
  });
  if (!result) throw new ErrorHandler(404, 'No users found');
  return result;
};

const createNewAccount = async ({
  email, password, name, role,
}) => {
  const hash = await hashPassword(password);
  const transaction = await Model.sequelize.transaction();
  try {
    const result = await Model.users.create({
      email, password: hash, name, role,
    }, { transaction });
    await transaction.commit();
    return result;
  } catch (err) {
    await transaction.rollback();
    throw new ErrorHandler(500, 'Error creating new account');
  }
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
        model: Model.cars,
        attributes: ['id'],
        include: [
          {
            model: Model.carModels,
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

const listAllCars = async () => {
  const result = await Model.cars.findAll({
    attributes: ['id', 'image', 'price', 'rating'],
    include: [
      {
        model: Model.storeLocations,
        attributes: ['id', 'name'],
      },
      {
        model: Model.carModels,
        attributes: ['id', 'name'],
      },
      {
        model: Model.carColors,
        attributes: ['id', 'name'],
      },
    ],
  });
  if (!result) throw new ErrorHandler(404, 'No cars found');
  return result;
};

const createNewCar = async (car) => {
  const transaction = await Model.sequelize.transaction();
  try {
    const result = await Model.cars.create(car, { transaction });
    await transaction.commit();
    return result;
  } catch (err) {
    await transaction.rollback();
    throw new ErrorHandler(500, err.message);
  }
};

const deleteCarById = async (id) => {
  const transaction = await Model.sequelize.transaction();
  try {
    const result = await Model.cars.destroy({
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

const updateCarById = async (id, car) => {
  const transaction = await Model.sequelize.transaction();
  try {
    const result = await Model.cars.update(car, {
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
  listAllUsers,
  createNewAccount,
  getAllReservationsByUserId,
  updateUserById,
  deleteUserById,
  listAllCars,
  createNewCar,
  deleteCarById,
  updateCarById,
};
