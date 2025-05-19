const express = require("express");

const authMiddleware = require("../middlewares/authMiddleware");
const roleMiddleware = require("../middlewares/roleMiddleware");
const {
    listWorkoutCategory,
    getOneWorkoutCategory,
    createWorkoutCategory,
    updateWorkoutCategory,
    deleteWorkoutCategory
} = require("../controllers/workoutCategory");

const workoutCategoryRouter = express.Router();

workoutCategoryRouter
.route('/')
.get(getOneWorkoutCategory)
.post(createWorkoutCategory)
.put(updateWorkoutCategory)
.delete(deleteWorkoutCategory)

workoutCategoryRouter
.route('/all')
.get(listWorkoutCategory)

module.exports = workoutCategoryRouter;