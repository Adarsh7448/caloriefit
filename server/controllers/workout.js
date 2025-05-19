const { WorkoutCategory, Workout } = require("../models/workoutModel");

// list all workouts
const listWorkouts = async (req, res) => {
    const workoutlist = await Workout.find({})
    return res.json(workoutlist)
}

// get a workout
const getOneWorkout = async (req, res) => {
    const { name } = req.body;
    const workout = await Workout.findOne({name: name});
    return res.json(workout)
}

// create a workout
const createWorkout = async (req, res) => {
    const item = req.body;
    const workout = new Workout(item);
    await workout.save();
    return res.status(201).json({
        message: "New workout created successfully!" 
    })
}

// update a workout
const updateWorkout = async (req, res) => {
    if (Object.keys(req.body).includes("category")){
        const { name, category } = req.body;
        const thisCat = await WorkoutCategory.findOne({name: category})
        const workout = await Workout.findOneAndUpdate({name: name}, { $addToSet: { categories: thisCat._id }});
        await WorkoutCategory.findOneAndUpdate({name: category}, { $addToSet: { workouts: workout._id }});
        return res.status(200).json({
            message: `New workout, ${name} is added to the category ${category}` 
        })
    } else {
        const { name, reps } = req.body;
        const workout = await Workout.findOneAndUpdate({name: name}, {reps: reps});
        return res.status(200).json({
            message: "Workout description updated successfully!" 
        })
    }
}

// delete a workout
const deleteWorkout = async (req, res) => {
    const { name } = req.body;
    await Workout.findOneAndDelete({name: name});
    return res.json({
        message: "workout deleted successfully!" 
    })
}

module.exports = {
    listWorkouts,
    getOneWorkout,
    createWorkout,
    updateWorkout,
    deleteWorkout
}