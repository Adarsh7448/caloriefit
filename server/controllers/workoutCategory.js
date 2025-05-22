const { WorkoutCategory, Workout } = require("../models/workoutModel");

// list all workout categories
const listWorkoutCategory = async (req, res) => {
    const workoutCategorylist = await WorkoutCategory.find({})
    return res.json(workoutCategorylist)
}

// get a workout category
const getOneWorkoutCategory = async (req, res) => {
    const { name } = req.params;
    try {
        const workoutCategory = await WorkoutCategory.findOne({name: name});
        if (workoutCategory){
            return res.json(workoutCategory)
        }
        else{
            return res.status(404).json({"message": "Workout category not found!"})
        }
    } catch (error) {
        return res.status(500).json({"message": "ERROR: Workout Category error"})
    }   
}

// create a workout category
const createWorkoutCategory = async (req, res) => {
    if (req.body && Object.keys(req.body).includes("name")){
        const { name, description } = req.body;
        try{
            const workoutCategory = new WorkoutCategory({name, description});
            await workoutCategory.save();
            return res.status(201).json({
                message: "workout category created successfully!" 
            })
        } catch (error) {
            return res.status(500).json({"message": "ERROR: could not create workout category!"})
        }
    } else {
        return res.status(400).json({"message": "Name is required!"})
    }
}

// update a workout category
const updateWorkoutCategory = async (req, res) => {
    const { id } = req.params;
    const { description } = req.body;
    try{
        await WorkoutCategory.findByIdAndUpdate(id, {description: description});
        return res.status(200).json({
            message: "Workout category description updated successfully!" 
        })
    } catch (error) {
        return res.status(500).json({"message": "ERROR: could not update workout category!"})
    }  
}

// modify a workout category
const modifyWorkoutCategory = async (req, res) => {
    const { id } = req.params;
    const { workout} = req.body;
    const thisItem = await Workout.findOne({name: workout})
    if (!thisItem) {
        return res.status(400).json({
            "message": "select from the existing workouts!"
        })
    }
    try {
        const workoutCategory = await WorkoutCategory.findByIdAndUpdate(id, { $addToSet: { workouts: thisItem._id }});
        await Workout.findOneAndUpdate({name: workout}, { $addToSet: { categories: workoutCategory._id }});
        return res.status(200).json({
            message: `New workout, ${workout} is added to the category ${workoutCategory.name}` 
        })
    } catch {
        return res.status(500).json({
            message: "ERROR: workout assignment error!"
        })
    }  
}

// delete a workout category
const deleteWorkoutCategory = async (req, res) => {
    const { id } = req.params;
    try {
        await WorkoutCategory.findByIdAndDelete(id);
        return res.json({
            message: "food category's deleted successfully!" 
        })
    } catch (error){
        return res.status(404).json({
            message: "Could not find the given workout category!"
        })
    }   
}

module.exports = {
    listWorkoutCategory,
    getOneWorkoutCategory,
    createWorkoutCategory,
    updateWorkoutCategory,
    modifyWorkoutCategory,
    deleteWorkoutCategory
}