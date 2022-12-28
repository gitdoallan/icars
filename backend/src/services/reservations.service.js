const { ErrorHandler } = require('../utils/errorHandler');
const Model = require('../database/models');

const listAllUserReservations = async ({ userId }) => {
  const reservations = await Model.reservations.findAll({
    where: { userId },
    attributes: ['id', 'orderTotal', 'orderStatus', 'rate', 'startDate', 'endDate'],
    include: [
      {
        model: Model.cars,
        attributes: ['id', 'image', 'price', 'rating'],
        include: [
          {
            model: Model.storeLocations,
            attributes: ['id', 'name'],
          },
          {
            model: Model.carModels,
            attributes: ['name'],
          },
        ],
      },
    ],
  });
  return reservations;
};

const rateOrderByReservationId = async ({
  orderId, carId, userId, rate,
}) => {
  const transaction = await Model.sequelize.transaction();
  try {
    await Model.reservations.update(
      { rate: true },
      { where: { id: orderId, userId }, transaction },
    );
    const car = await Model.cars.findOne({
      where: { id: carId },
      attributes: ['id', 'rating', 'receivedRates'],
    });
    const newRating = ((car.rating * car.receivedRates) + rate) / (car.receivedRates + 1);
    const updatedCar = await Model.cars.update({
      rating: newRating,
      receivedRates: car.receivedRates + 1,
    }, {
      where: { id: carId },
      transaction,
    });
    await transaction.commit();
    return updatedCar;
  } catch (error) {
    await transaction.rollback();
    throw new ErrorHandler(500, 'Internal server error');
  }
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
    attributes: ['id', 'orderTotal', 'orderStatus', 'rate', 'startDate', 'endDate'],
    include: [
      {
        model: Model.cars,
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
      },
    ],
  });
  if (!result) throw new ErrorHandler(404, 'Reservation not found');
  return result;
};

module.exports = {
  getReservationById,
  rateOrderByReservationId,
  listAllUserReservations,
  cancelReservation,
};
