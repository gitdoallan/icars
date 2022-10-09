const express = require('express');
const storeController = require('../controllers/store.controller');

const router = express.Router();

router.get('/bikes', storeController.getAllBikes);
router.post('/bikes/find', storeController.findBike);
router.get('/bike/:id', storeController.getBikeById);
router.post('/', storeController.createBike);
router.put('/:id', storeController.updateBike);
router.delete('/:id', storeController.deleteBike);

module.exports = router;
