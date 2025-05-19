const Workoutchart = require("../models/workoutchartModel");

// list all workout charts
const listWorkoutchart = async (req, res) => {
    const workoutcharts = await Workoutchart.find({});
    return res.json(workoutcharts)
}

// get a user's workoutchart 
const getWorkoutchart = async (req, res) => {
    const { userId } = req.body;
    const thischart = await Workoutchart.findOne({userId: userId});
    return res.json(thischart)
}

// create a workout chart
const createWorkoutchart = async (req, res) => {
    const details = req.body;
    const entry = new Workoutchart(details);
    await entry.save();
    return res.status(201).json({
        "message": "Workoutchart created successfully!"
    })
}

// const editWorkoutchart = async (req, res) => {
//     const { userId, details } = req.body;
//     const thischart = await Workoutchart.findOne({userId: userId});
//     await Workoutchart.findOneAndUpdate(details);
//     return res.json({
//         "message": "Workoutchart updated successfully!"
//     })
// }

const deleteWorkoutchart = async (req, res) => {
    const { chartId } = req.body;
    await Workoutchart.findByIdAndDelete({_id: chartId});
    return res.json({
        "message": "Workoutchart deleted successfully!"
    })
}

module.exports = {
    listWorkoutchart,
    getWorkoutchart,
    createWorkoutchart,
    // editWorkoutchart,
    deleteWorkoutchart
}