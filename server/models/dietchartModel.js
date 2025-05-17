const mongoose = require("mongoose");

const mealSchema = new mongoose.Schema({
    foodItem: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'FoodItem',
        required: true 
    },
    quantity: { 
        type: Number, // e.g., 2 servings
        required: true
    }, 
    unit: {
        type: String,     // e.g., "cups", "g"
        required: true,
    }
}, {_id: false});

const sessionSchema = new mongoose.Schema({
    day: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    meals: [mealSchema]
}, {_id: false});

const dietchartSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    startDate: {
        type: Date,
        required: true, 
    },
    endDate: {
        type: Date,
        required: true, 
    },
    sessions: [sessionSchema],
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }, 
    notes: {
        type: String,
    } 
}); 

const Dietchart = mongoose.model("Dietchart", dietchartSchema, "diet_charts");

module.exports = Dietchart;