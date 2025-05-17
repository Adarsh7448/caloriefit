const { FoodCategory, FoodItem } = require("../models/foodModel");

// list all food categories
const listFoodCategory = async (req, res) => {
    const foodCategorylist = await FoodCategory.find({})
    return res.json(foodCategorylist)
}

// get a food category
const getOneFoodCategory = async (req, res) => {
    const { name: catName } = req.body;
    const foodCategory = await FoodCategory.findOne({name: catName});
    return res.json(foodCategory)
}

// create a food category
const createFoodCategory = async (req, res) => {
    const { name, description } = req.body;
    const foodCategory = new FoodCategory({name, description});
    await foodCategory.save();
    return res.status(201).json({
        message: "food category created successfully!" 
    })
}

// update a food category
const updateFoodCategory = async (req, res) => {
    if (Object.keys(req.body).includes("foodItem")){
        const { name: catName, foodItem } = req.body;
        const thisItem = await FoodItem.findOne({name: foodItem})
        const foodCategory = await FoodCategory.findOneAndUpdate({name: catName}, { $addToSet: { foodItems: thisItem._id }});
        await FoodItem.findOneAndUpdate({name: foodItem}, { $addToSet: { categories: foodCategory._id }});
        return res.status(200).json({
            message: `New food item, ${foodItem} is added to the category ${catName}` 
        })
    } else {
        const { name: catName, description } = req.body;
        const foodCategory = await FoodCategory.findOneAndUpdate({name: catName}, {description: description});
        return res.status(200).json({
            message: "food item description updated successfully!" 
        })
    }
}

// delete a food category
const deleteFoodCategory = async (req, res) => {
    const { catName } = req.body;
    await FoodCategory.findOneAndDelete({name: catName});
    return res.status(201).json({
        message: "food category's deleted successfully!" 
    })
}

module.exports = {
    listFoodCategory,
    getOneFoodCategory,
    createFoodCategory,
    updateFoodCategory,
    deleteFoodCategory
}