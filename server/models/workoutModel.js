const mongoose = require("mongoose");

const workoutCategorySchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: true
    },
    description: {
        type: String,
    },
    workouts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Workout", // This links the models
    }]
}, { timestamps: true}) 

const workoutSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: true
    },
    reps: { 
        type: Number,
        default: 0
    },
    sets: {
        type: Number,
        default: 0
    },
    duration: { // average time in minutes
        type: Number,
        required: true,
        default: 0
    },
    intensity: {
        type: String,
        required: true,
        enum: ["low", "medium", "high"],
        default: "medium"
    },
    instructions: {
        type: Number,
        required: true,
        default: 0
    },
    caloriesBurned: { // Estimated calories burned per session
        type: Number,
        required: true,
        default: 0
    },
    videoUrl: {
        type: String,
    },
    categories: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "WorkoutCategory", // This links the models
    }]
}, { timestamps: true}) 

const WorkoutCategory = mongoose.model("WorkoutCategory", workoutCategorySchema, "workout_categories")
const Workout = mongoose.model("Workout", workoutSchema, "workouts")

module.exports = {
    WorkoutCategory,
    Workout
}