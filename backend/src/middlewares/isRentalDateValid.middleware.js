const { ErrorHandler } = require('../utils/errorHandler');
const { ONE_DAY } = require('../utils/magicNumbers');

const isRentalDateValid = async (req, _res, next) => {
  const { startDate, endDate } = req.body;
  const yesterday = new Date().setHours(0, 0, 0, 0) - ONE_DAY;
  const startDay = new Date(startDate).setHours(0, 0, 0, 0);
  const endDay = new Date(endDate).setHours(0, 0, 0, 0);
  if (startDay > endDay) {
    throw new ErrorHandler(400, 'Start date cannot be greater than end date');
  }
  if (startDay < yesterday) {
    throw new ErrorHandler(400, 'Start date cannot be in the past');
  }
  next();
};

module.exports = { isRentalDateValid };
