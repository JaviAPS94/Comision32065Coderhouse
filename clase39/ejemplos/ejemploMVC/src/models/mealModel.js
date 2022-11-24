const mongoose = require('mongoose');

const mealModel = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: { type: String, required: true },
    type: { type: String, required: false },
    price: { type: Number, required: false }
});

module.exports = mongoose.model('Meal', mealModel);