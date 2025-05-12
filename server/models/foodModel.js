const mongoose = require("mongoose");

const foodCategorySchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: true
    },
    description: {
        type: String,
    }
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
    } 
}, { timestamps: true}) 

const foodCategoryModel = mongoose.model("foodCategory", foodCategorySchema)
const foodItemModel = mongoose.model("foodItem", foodItemSchema)

module.exports = {
    foodCategoryModel,
    foodItemModel
}