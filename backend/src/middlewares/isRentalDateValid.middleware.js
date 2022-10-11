const { ErrorHandler } = require('../utils/errorHandler');

const isRentalDateValid = async (req, _res, next) => {
  const { startDate, endDate } = req.body;
  const today = new Date().getTime();
  const startDay = new Date(startDate).getTime();
  const endDay = new Date(endDate).getTime();
  if (startDay > endDay) {
    throw new ErrorHandler(400, 'Start date cannot be greater than end date');
  }
  if (startDay < today) {
    throw new ErrorHandler(400, 'Start date cannot be in the past');
  }
  next();
};

module.exports = { isRentalDateValid };
