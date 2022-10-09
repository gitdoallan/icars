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

module.exports = { listAllReservations };
