const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
        username: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        },
        role: {
            type: String,
            required: true,
            enum: ["admin", "user"],
            default: "user"
        },
        maintenanceCalories: {
            type: Number,
            required: true,
            default: 0
        },
        targetCalories: {
            type: Number,
            required: true,
            default: 0
        },
        height: {
            type: Number,
            required: true,
            default: 0
        },
        weight: {
            type: Number,
            required: true,
            default: 0
        }, 
        goal: {
            type: String,
            required: true,
            default: "weight loss"
        },
        gender: {
            type: String,
            required: true,
            enum: ["male", "female", "not-set"],
            default: "not-set"
        }, 
        age: {
            type: Number,
            required: true,
            default: 0
        }    
    }, 
    {
        timestamps: true
    });
    
const User = mongoose.model("User", userSchema);

module.exports = User;