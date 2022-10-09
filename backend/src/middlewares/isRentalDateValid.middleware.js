const { ErrorHandler } = require('../utils/errorHandler');

export const isRentalDateValid = async (req, _res, next) => {
  const { startDate, endDate } = req.body;
  const startDateObj = new Date(startDate);
  const endDateObj = new Date(endDate);
  if (startDateObj > endDateObj) {
    throw new ErrorHandler(400, 'Start date cannot be greater than end date');
  }
  if (startDateObj < new Date()) {
    throw new ErrorHandler(400, 'Start date cannot be in the past');
  }
  next();
};
