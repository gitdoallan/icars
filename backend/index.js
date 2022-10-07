const { app } = require('./src/app');
require('dotenv').config();

const API_PORT = process.env.API_PORT || 3001;

app.listen(API_PORT, () => console.log(`Running on port ${API_PORT}`));
