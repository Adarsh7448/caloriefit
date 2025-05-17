const express = require('express');
const authMiddleware = require("../middlewares/authMiddleware");
const roleMiddleware = require("../middlewares/roleMiddleware");
const {
    listFoodCategory,
    getOneFoodCategory,
    createFoodCategory,
    updateFoodCategory,
    deleteFoodCategory
} = require('../controllers/foodCategoryControllers');

const foodRouter = express.Router()

foodRouter
.route('/')
.get(getOneFoodCategory)
.post(createFoodCategory)
.put(updateFoodCategory)
.delete(deleteFoodCategory)

foodRouter
.route('/all')
.get(listFoodCategory)

module.exports = foodRouter;