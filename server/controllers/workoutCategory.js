const { WorkoutCategory, Workout } = require("../models/workoutModel");

// list all workout categories
const listWorkoutCategory = async (req, res) => {
    const workoutCategorylist = await WorkoutCategory.find({})
    return res.json(workoutCategorylist)
}

// get a workout category
const getOneWorkoutCategory = async (req, res) => {
    const { name } = req.body;
    const workoutCategory = await WorkoutCategory.findOne({name: name});
    return res.json(workoutCategory)
}

// create a workout category
const createWorkoutCategory = async (req, res) => {
    const { name, description } = req.body;
    const workoutCategory = new WorkoutCategory({name, description});
    await workoutCategory.save();
    return res.status(201).json({
        message: "workout category created successfully!" 
    })
}

// update a workout category
const updateWorkoutCategory = async (req, res) => {
    if (Object.keys(req.body).includes("workout")){
        const { name: catName, workout } = req.body;
        const thisItem = await Workout.findOne({name: workout})
        const workoutCategory = await WorkoutCategory.findOneAndUpdate({name: catName}, { $addToSet: { workouts: thisItem._id }});
        await Workout.findOneAndUpdate({name: workout}, { $addToSet: { categories: workoutCategory._id }});
        return res.status(200).json({
            message: `New workout, ${workout} is added to the category ${catName}` 
        })
    } else {
        const { name: catName, description } = req.body;
        const workoutCategory = await WorkoutCategory.findOneAndUpdate({name: catName}, {description: description});
        return res.status(200).json({
            message: "Workout category description updated successfully!" 
        })
    }
}

// delete a workout category
const deleteWorkoutCategory = async (req, res) => {
    const { catName } = req.body;
    await WorkoutCategory.findOneAndDelete({name: catName});
    return res.json({
        message: "food category's deleted successfully!" 
    })
}

module.exports = {
    listWorkoutCategory,
    getOneWorkoutCategory,
    createWorkoutCategory,
    updateWorkoutCategory,
    deleteWorkoutCategory
}