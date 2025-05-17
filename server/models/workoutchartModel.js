const mongoose = require('mongoose');

const workoutSessionSchema = new mongoose.Schema({
  workoutItem: {
    type: Schema.Types.ObjectId,
    ref: 'WorkoutItem',
    required: true
  },
  time: {
    type: String, // e.g., "07:00 AM"
    required: true
  },
  duration: {
    type: Number, // in minutes
    required: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  notes: {
    type: String
  }
}, { _id: false });

const workoutChartSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  sessions: [workoutSessionSchema],
  notes: {
    type: String
  }
}, { timestamps: true });

const WorkoutChart = mongoose.model("WorkoutChart", workoutChartSchema, "workout_charts");

module.exports = WorkoutChart;