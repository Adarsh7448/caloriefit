const mongoose = require("mongoose");

const foodCategorySchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: true
    },
    description: {
        type: String,
    },
    foodItems: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "FoodItem"
    }]
}, { timestamps: true}) 

const foodItemSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: true
    },
    protein: {
        type: Number,
        required: true,
        default: 0
    },
    carbs: {
        type: Number,
        required: true,
        default: 0
    },
    fats: {
        type: Number,
        required: true,
        default: 0
    },
    calories: {
        type: Number,
        required: true,
        default: 0
    },
    servingSize: {
        type: String,
        required: true,
        default: "100g"
    },
    imageUrl: {
        type: String,
    },
    categories: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "FoodCategory", // This links the models
    }] 
}, { timestamps: true}) 


const FoodCategory = mongoose.model("FoodCategory", foodCategorySchema, "food_categories")
const FoodItem = mongoose.model("FoodItem", foodItemSchema, "food_items")

module.exports = {
    FoodCategory,
    FoodItem
}