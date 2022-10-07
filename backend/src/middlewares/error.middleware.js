const errorMiddleware = async (err, _req, res, _next) => {
  const { status, message } = err;
  return res.status(status || 500).json({ message });
};

module.exports = errorMiddleware;
