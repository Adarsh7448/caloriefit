const express = require("express");

const authMiddleware = require("../middlewares/authMiddleware");
const roleMiddleware = require("../middlewares/roleMiddleware");
const {
    listWorkouts,
    getOneWorkout,
    createWorkout,
    updateWorkout,
    deleteWorkout
} = require("../controllers/workout");

const workoutRouter = express.Router();

workoutRouter
.route('/')
.get(getOneWorkout)
.post(createWorkout)
.put(updateWorkout)
.delete(deleteWorkout)

workoutRouter
.route('/all')
.get(listWorkouts)

module.exports = workoutRouter;