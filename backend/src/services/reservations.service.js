const { ErrorHandler } = require('../utils/errorHandler');
const Model = require('../database/models');

const listAllUserReservations = async ({ userId }) => {
  const reservations = await Model.reservations.findAll({
    where: { userId },
    attributes: ['id', 'orderTotal', 'orderStatus', 'rate', 'startDate', 'endDate'],
    include: [
      {
        model: Model.bikes,
        attributes: ['id', 'image', 'price', 'rating'],
        include: [
          {
            model: Model.storeLocations,
            attributes: ['id', 'name'],
          },
          {
            model: Model.bikeModels,
            attributes: ['name'],
          },
        ],
      },
    ],
  });
  return reservations;
};

const cancelReservation = async ({ orderId, userId }) => {
  const { orderStatus } = await Model.reservations.findOne({
    where: { id: orderId, userId },
    attributes: ['id', 'orderStatus'],
  });

  const cancellationCases = {
    completed: () => { throw new ErrorHandler(400, 'Reservation already completed'); },
    cancelled: () => { throw new ErrorHandler(400, 'Reservation already canceled'); },
    null: () => { throw new ErrorHandler(404, 'Reservation not found'); },
    default: () => {},
  };
  (cancellationCases[orderStatus] || cancellationCases.default)();

  const transaction = await Model.sequelize.transaction();
  try {
    await Model.reservations.update(
      { orderStatus: 'cancelled' },
      { where: { id: orderId }, transaction },
    );
    await transaction.commit();
    return { message: 'Reservation cancelled' };
  } catch (error) {
    await transaction.rollback();
    throw new ErrorHandler(500, 'Error cancelling reservation');
  }
};

const getReservationById = async ({ orderId, userId, role }) => {
  const where = role === 'admin' ? { id: orderId } : { id: orderId, userId };
  const result = await Model.reservations.findOne({
    where,
    attributes: ['id', 'orderTotal', 'startDate', 'endDate'],
    include: [
      {
        model: Model.bikes,
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
      },
    ],
  });
  if (!result) throw new ErrorHandler(404, 'Reservation not found');
  return result;
};

module.exports = {
  getReservationById,
  listAllUserReservations,
  cancelReservation,
};
