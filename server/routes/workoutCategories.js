const express = require("express");

const authMiddleware = require("../middlewares/authMiddleware");
const roleMiddleware = require("../middlewares/roleMiddleware");
const {
    listWorkoutCategory,
    getOneWorkoutCategory,
    createWorkoutCategory,
    updateWorkoutCategory,
    modifyWorkoutCategory,
    deleteWorkoutCategory
} = require("../controllers/workoutCategory");

const workoutCategoryRouter = express.Router();

workoutCategoryRouter
.route('/')
.get(listWorkoutCategory)
.post(createWorkoutCategory)

workoutCategoryRouter
.route('/:name')
.get(getOneWorkoutCategory)

workoutCategoryRouter
.route('/:id')
.put(updateWorkoutCategory)
.patch(modifyWorkoutCategory)
.delete(deleteWorkoutCategory)


module.exports = workoutCategoryRouter;