const express = require("express");

const {
    listWorkoutchart,
    getWorkoutchart,
    createWorkoutchart,
    deleteWorkoutchart
} = require("../controllers/workoutChart");

const workoutChartRouter = express.Router();

workoutChartRouter
.route('/all')
.get(listWorkoutchart)

workoutChartRouter
.route('/')
.get(getWorkoutchart)
.post(createWorkoutchart)
.delete(deleteWorkoutchart)

module.exports = workoutChartRouter