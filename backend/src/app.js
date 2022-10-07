const express = require('express');
const cors = require('cors');
const { router } = require('./routes');
const errorMiddleware = require('./middlewares/error.middleware');
require('express-async-errors');

const app = express();
app.use(cors());
app.use(express.json());
app.use(router);
app.use(errorMiddleware);

module.exports = { app };
