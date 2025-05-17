const { FoodCategory, FoodItem } = require("../models/foodModel");

// list all food categories
const listFoodItems = async (req, res) => {
    const foodItemslist = await FoodItem.find({})
    return res.json(foodItemslist)
}

// get a food category
const getOneFoodItem = async (req, res) => {
    const { name } = req.body;
    const foodItem = await FoodItem.findOne({name: name});
    return res.json(foodItem)
}

// create a food category
const createFoodItem = async (req, res) => {
    const item = req.body;
    const foodItem = new FoodItem(item);
    await foodItem.save();
    return res.status(201).json({
        message: "food item created successfully!" 
    })
}

// update a food category
const updateFoodItem = async (req, res) => {
    if (Object.keys(req.body).includes("category")){
        const { name, category } = req.body;
        const thisCat = await FoodCategory.findOne({name: category})
        const foodItem = await FoodItem.findOneAndUpdate({name: name}, { $addToSet: { categories: thisCat._id }});
        await FoodCategory.findOneAndUpdate({name: category}, { $addToSet: { foodItems: foodItem._id }});
        return res.status(200).json({
            message: `New food item, ${name} is added to the category ${category}` 
        })
    } else {
        const { name, protein } = req.body;
        const foodItem = await FoodItem.findOneAndUpdate({name: name}, {protein: protein});
        return res.status(200).json({
            message: "food category's description updated successfully!" 
        })
    }
}

// delete a food category
const deleteFoodItem = async (req, res) => {
    const { name } = req.body;
    await FoodItem.findOneAndDelete({name: name});
    return res.json({
        message: "food category's deleted successfully!" 
    })
}

module.exports = {
    listFoodItems,
    getOneFoodItem,
    createFoodItem,
    updateFoodItem,
    deleteFoodItem
}