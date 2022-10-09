const express = require('express');
const storeController = require('../controllers/store.controller');

const router = express.Router();

router.get('/bikes', storeController.getAllBikes);

module.exports = router;
