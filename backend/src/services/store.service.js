const { bikes, storeLocations, bikeModels } = require('../database/models');

const getAllBikes = async () => {
  const result = await bikes.findAll({
    attributes: ['id', 'image', 'price', 'rating'],
    include: [
      {
        model: storeLocations,
        attributes: ['name'],
      },
      {
        model: bikeModels,
        attributes: ['name'],
      },
    ],
  });
  return result;
};

module.exports = {
  getAllBikes,
};
