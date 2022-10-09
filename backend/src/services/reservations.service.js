const { ErrorHandler } = require('../utils/errorHandler');
const Model = require('../database/models');

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
};
