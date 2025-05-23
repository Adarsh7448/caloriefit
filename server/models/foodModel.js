const mongoose = require("mongoose");

const foodCategorySchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: true
    },
    description: {
        type: String,
        default: "This is a new food category. You can update it later!"
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
    protein: { // per 100 g
        type: Number,
        required: true,
        default: 0
    },
    carbs: { // per 100 g
        type: Number,
        required: true,
        default: 0
    },
    fats: { // per 100 g
        type: Number,
        required: true,
        default: 0
    },
    calories: { // per 100 g
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