const mongoose = require("mongoose");

const workoutCategorySchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: true
    },
    description: {
        type: String,
        default: "This is a set of high calorie burning exercises"
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
    caloriesBurned: { // Estimated calories burned per session (/min or /set)
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