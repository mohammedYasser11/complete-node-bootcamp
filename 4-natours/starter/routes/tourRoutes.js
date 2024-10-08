const express = require('express');
const tourController = require('../controllers/tourController');
const { getAllTours, getTour, createTour, updateTour, deleteTour, checkBody } =
  tourController;
const router = express.Router();

router.param('id', tourController.checkID);

router.route('/').get(getAllTours).post(checkBody,createTour);

router.route('/:id').get(getTour).patch(updateTour).delete(deleteTour);

module.exports = router;
