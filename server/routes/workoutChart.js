const express = require("express");

const {
    listWorkoutchart,
    getWorkoutchart,
    createWorkoutchart,
    deleteWorkoutchart
} = require("../controllers/workoutChart");

const workoutChartRouter = express.Router();

workoutChartRouter
.route('/')
.get(listWorkoutchart)
.post(createWorkoutchart)

workoutChartRouter
.route('/:userid')
.get(getWorkoutchart)

workoutChartRouter
.route('/:id')
.delete(deleteWorkoutchart)

module.exports = workoutChartRouter