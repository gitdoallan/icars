const express = require('express');
const bikesController = require('../controllers/bikes.controller');

const router = express.Router();

router.get('/', bikesController.getAllBikes);
router.get('/:id', bikesController.getBikeById);
router.post('/', bikesController.createBike);
router.put('/:id', bikesController.updateBike);
router.delete('/:id', bikesController.deleteBike);

module.exports = router;
