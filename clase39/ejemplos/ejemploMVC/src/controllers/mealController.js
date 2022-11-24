const mealModel = require('../models/mealModel');

module.exports = {
    getMenuController: (req, res, next) => {
        const meals = mealModel.getMeals();
        res.render('menu', { meals })
        res.status(201).json(meals);
    }
}