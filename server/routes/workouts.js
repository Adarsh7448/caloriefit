const express = require("express");

const authMiddleware = require("../middlewares/authMiddleware");
const roleMiddleware = require("../middlewares/roleMiddleware");
const {
    listWorkouts,
    getOneWorkout,
    createWorkout,
    updateWorkout,
    assignWorkout,
    deleteWorkout
} = require("../controllers/workout");

const workoutRouter = express.Router();

workoutRouter
.route('/')
.get(listWorkouts)
.post(createWorkout)

workoutRouter
.route('/:name')
.get(getOneWorkout)

workoutRouter
.route('/:id')
.put(updateWorkout)
.patch(assignWorkout)
.delete(deleteWorkout)

module.exports = workoutRouter;