const express = require('express');
const mealController = require('../controllers/mealController');
const router = express.Router();

router.get('/menu', mealController.getMenuController);

module.exports = router;