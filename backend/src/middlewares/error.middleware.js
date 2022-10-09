const errorMiddleware = async (err, _req, res, next) => {
  const { status, message } = err;
  if (!err) next();
  return res.status(status || 500).json({ message });
};

module.exports = errorMiddleware;
