const { FoodCategory, FoodItem } = require("../models/foodModel");

// list all food categories
const listFoodCategory = async (req, res) => {
    const foodCategorylist = await FoodCategory.find({})
    return res.json(foodCategorylist)
}

// get a food category
const getOneFoodCategory = async (req, res) => {
    const { name } = req.params;
    try {
        const foodCategory = await FoodCategory.findOne({name});
        if (foodCategory){
            return res.json(foodCategory)
        }
        else{
            return res.status(404).json({"message": "Food category not found!"})
        }   
    } catch (error) {
        return res.status(500).json({"message": "ERROR: Food Category error"})
    }  
}

// create a food category
const createFoodCategory = async (req, res) => {
    if (req.body && Object.keys(req.body).includes("name")){
        const { name, description } = req.body;
        try {
            const foodCategory = new FoodCategory({name, description});
            await foodCategory.save();
            return res.status(201).json({
                message: "food category created successfully!" 
            })
        } catch (error) {
            return res.status(500).json({"message": "ERROR: could not create food category!"})
        }
    } else {    
        return res.status(400).json({"message": "Name is required!"})
    }  
}

// update a food category
const updateFoodCategory = async (req, res) => {
    const { id } = req.params;
    const { description } = req.body;
    try {
        await FoodCategory.findByIdAndUpdate(id, {description: description});
        return res.status(200).json({
            message: "food item description updated successfully!" 
        })
    } catch (error) {
        return res.status(500).json({"message": "ERROR: could not update food category!"})
    }  
}

// modify a food category
const modifyFoodCategory = async (req, res) => {
    const { id } = req.params;
    const { foodItem } = req.body;
    const thisItem = await FoodItem.findOne({name: foodItem})
    if (!thisItem){
        return res.status(400).json({
            "message": "select from the existing food items!"
        })
    }
    try {
        const foodCategory = await FoodCategory.findByIdAndUpdate(id, { $addToSet: { foodItems: thisItem._id }});
        await FoodItem.findOneAndUpdate({name: foodItem}, { $addToSet: { categories: foodCategory._id }});
        return res.status(200).json({
            message: `New food item, ${foodItem} is added to the category ${foodCategory.name}` 
        })
    } catch (error) {
        return res.status(500).json({
            message: "ERROR: food item assignment error!"
        })
    }
}

// delete a food category
const deleteFoodCategory = async (req, res) => {
    const { id } = req.params;
    try{
        await FoodCategory.findByIdAndDelete(id);
        return res.json({
            message: "food category's deleted successfully!" 
        })
    } catch (error){
        return res.status(404).json({
            message: "Could not find the given food category!"
        })
    }
}

module.exports = {
    listFoodCategory,
    getOneFoodCategory,
    createFoodCategory,
    updateFoodCategory,
    modifyFoodCategory,
    deleteFoodCategory
}