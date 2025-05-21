const { FoodCategory, FoodItem } = require("../models/foodModel");

// list all food categories
const listFoodItems = async (req, res) => {
    const foodItemslist = await FoodItem.find({})
    return res.json(foodItemslist)
}

// get a food category
const getOneFoodItem = async (req, res) => {
    const { name } = req.params;
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
    const { id } = req.params;
    const foodParams = req.body;
    const foodItem = await FoodItem.findByIdAndUpdate(id, foodParams);
    return res.status(200).json({
        message: "food category's description updated successfully!" 
    })
}

// Assign a food item to a category
const assignFoodItem = async (req, res) => {
    const { id } = req.params;
    const { category } = req.body;
    const thisCat = await FoodCategory.findOne({name: category})
    const foodItem = await FoodItem.findByIdAndUpdate(id, { $addToSet: { categories: thisCat._id }});
    await FoodCategory.findOneAndUpdate({name: category}, { $addToSet: { foodItems: foodItem._id }});
    return res.status(200).json({
        message: `New food item, ${foodItem.name} is added to the category ${category}` 
    })
}

// delete a food category
const deleteFoodItem = async (req, res) => {
    const { id } = req.params;
    await FoodItem.findByIdAndDelete(id);
    return res.json({
        message: "food category's deleted successfully!" 
    })
}

module.exports = {
    listFoodItems,
    getOneFoodItem,
    createFoodItem,
    updateFoodItem,
    assignFoodItem,
    deleteFoodItem
}