const errorMiddleware = async (err, _req, res, next) => {
  const { status, message } = err;
  if (!err) next();
  if (status) {
    return res.status(status).json({ message });
  } return res.status(500).json({ message: 'Internal server error' });
};

module.exports = errorMiddleware;
