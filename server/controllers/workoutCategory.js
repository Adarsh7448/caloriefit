const { WorkoutCategory, Workout } = require("../models/workoutModel");

// list all workout categories
const listWorkoutCategory = async (req, res) => {
    const workoutCategorylist = await WorkoutCategory.find({})
    return res.json(workoutCategorylist)
}

// get a workout category
const getOneWorkoutCategory = async (req, res) => {
    const { name } = req.params;
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
    const { id } = req.params;
    const { description } = req.body;
    const workoutCategory = await WorkoutCategory.findByIdAndUpdate(id, {description: description});
    return res.status(200).json({
        message: "Workout category description updated successfully!" 
    })
}

// modify a workout category
const modifyWorkoutCategory = async (req, res) => {
    const { id } = req.params;
    const { workout} = req.body;
    const thisItem = await Workout.findOne({name: workout})
    const workoutCategory = await WorkoutCategory.findByIdAndUpdate(id, { $addToSet: { workouts: thisItem._id }});
    await Workout.findOneAndUpdate({name: workout}, { $addToSet: { categories: workoutCategory._id }});
    return res.status(200).json({
        message: `New workout, ${workout} is added to the category ${workoutCategory.name}` 
    })
}

// delete a workout category
const deleteWorkoutCategory = async (req, res) => {
    const { id } = req.params;
    await WorkoutCategory.findByIdAndDelete(id);
    return res.json({
        message: "food category's deleted successfully!" 
    })
}

module.exports = {
    listWorkoutCategory,
    getOneWorkoutCategory,
    createWorkoutCategory,
    updateWorkoutCategory,
    modifyWorkoutCategory,
    deleteWorkoutCategory
}