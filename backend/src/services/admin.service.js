const fs = require('fs');
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

const uploadImage = async ({ id, image }) => {
  const { filename, mimetype, createReadStream } = await image;
  if (mimetype !== 'image/png' && mimetype !== 'image/jpeg') {
    throw new ErrorHandler(400, 'Image must be png or jpeg');
  }
  const stream = createReadStream();
  const path = `./images/bikes/${id}/${filename}`;
  await new Promise((resolve, reject) => {
    stream
      .pipe(fs.createWriteStream(path))
      .on('finish', () => resolve())
      .on('error', (e) => reject(e));
  });
  return path;
};

const createNewBike = async (bike) => {
  const result = await Model.bikes.create(bike);
  fs.mkdirSync(`./images/bikes/${result.id}`, { recursive: true });
  await uploadImage({ id: result.id, image: bike.image });
  if (!result) throw new ErrorHandler(400, 'Bike could not be created');
  return result;
};

module.exports = {
  listAllReservations, getAllReservationsByUserId, deleteUserById, createNewBike,
};
