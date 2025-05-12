const mongoose = require("mongoose");

const workoutCategorySchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: true
    },
    description: {
        type: String,
    }
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
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'FoodCategory', // This links the models
        required: true,
    },
}, { timestamps: true}) 

const workoutCategoryModel = mongoose.model("workoutCategory", workoutCategorySchema)
const workoutModel = mongoose.model("Workout", workoutSchema)

module.exports = {
    workoutCategoryModel,
    workoutModel
}