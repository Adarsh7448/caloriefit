const express = require('express');
const authMiddleware = require("../middlewares/authMiddleware");
const roleMiddleware = require("../middlewares/roleMiddleware");
const {
    listFoodItems,
    getOneFoodItem,
    createFoodItem,
    updateFoodItem,
    deleteFoodItem
} = require('../controllers/foodItem');

const foodItemRouter = express.Router()

foodItemRouter
.route('/')
.get(getOneFoodItem)
.post(createFoodItem)
.put(updateFoodItem)
.delete(deleteFoodItem)

foodItemRouter
.route('/all')
.get(listFoodItems)

module.exports = foodItemRouter;