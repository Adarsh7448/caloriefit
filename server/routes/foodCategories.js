const express = require('express');
const authMiddleware = require("../middlewares/authMiddleware");
const roleMiddleware = require("../middlewares/roleMiddleware");
const {
    listFoodCategory,
    getOneFoodCategory,
    createFoodCategory,
    updateFoodCategory,
    modifyFoodCategory,
    deleteFoodCategory
} = require('../controllers/foodCategory');

const foodCategoryRouter = express.Router()

foodCategoryRouter
.route('/')
.get(listFoodCategory)
.post(createFoodCategory)

foodCategoryRouter
.route('/:name')
.get(getOneFoodCategory)

foodCategoryRouter
.route('/:id')
.put(updateFoodCategory)
.patch(modifyFoodCategory)
.delete(deleteFoodCategory)

module.exports = foodCategoryRouter;