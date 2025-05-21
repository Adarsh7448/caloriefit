const express = require('express');
const authMiddleware = require("../middlewares/authMiddleware");
const roleMiddleware = require("../middlewares/roleMiddleware");
const {
    listFoodItems,
    getOneFoodItem,
    createFoodItem,
    updateFoodItem,
    assignFoodItem,
    deleteFoodItem
} = require('../controllers/foodItem');

const foodItemRouter = express.Router()

foodItemRouter
.route('/')
.get(listFoodItems)
.post(createFoodItem)

foodItemRouter
.route('/:name')
.get(getOneFoodItem)

foodItemRouter
.route('/:id')
.put(updateFoodItem)
.patch(assignFoodItem)
.delete(deleteFoodItem)

module.exports = foodItemRouter;