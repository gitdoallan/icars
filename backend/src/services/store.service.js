const { bikes: bikesModel } = require('../database/models');

const getAllBikes = async () => {
  const result = await bikesModel.findAll();
  return result;
};

module.exports = {
  getAllBikes,
};
