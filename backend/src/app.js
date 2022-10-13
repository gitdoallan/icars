require('express-async-errors');
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const router = require('./routes');
const errorMiddleware = require('./middlewares/error.middleware');

const app = express();

app.use(express.json());

app.use(cors({
  origin: 'https://ibikes.win',
  credentials: true,
}));

app.use(cookieParser());

app.use(router);

app.use(errorMiddleware);

module.exports = app;
