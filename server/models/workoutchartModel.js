const mongoose = require('mongoose');

const exerciseSchema = new mongoose.Schema({
    workout: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Workout"
    },
    reps: {
      type: Number,
      default: 0
    },
    sets: {
      type: Number,
      default: 0
    },
    duration: {
      type: Number, // Duration in minutes
      default: 0
    },
    caloriesBurned: {
      type: Number,
      default: 0
    }
}, {_id: false})

const workoutSessionSchema = new mongoose.Schema({
  day: {
    type: String,
    required: true,
  },
  time: {
    type: String, // e.g., "07:00 AM"
    required: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  totalWorkouts: [exerciseSchema],
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
}, { timestamps: true });

const Workoutchart = mongoose.model("Workoutchart", workoutChartSchema, "workout_charts");

module.exports = Workoutchart;