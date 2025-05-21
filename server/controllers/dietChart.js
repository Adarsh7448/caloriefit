const Dietchart = require("../models/dietchartModel");

// list all diet charts
const listDietchart = async (req, res) => {
    const dietcharts = await Dietchart.find({});
    return res.json(dietcharts)
}

// get a user's dietchart 
const getDietchart = async (req, res) => {
    const { userid: userId } = req.params;
    const thischart = await Dietchart.findOne({userId: userId});
    return res.json(thischart)
}

// create a diet chart
const createDietchart = async (req, res) => {
    const details = req.body;
    const entry = new Dietchart(details);
    await entry.save();
    return res.status(201).json({
        "message": "Dietchart created successfully!"
    })
}

// const editDietchart = async (req, res) => {
//     const { userId, details } = req.body;
//     const thischart = await Dietchart.findOne({userId: userId});
//     await Dietchart.findOneAndUpdate(details);
//     return res.json({
//         "message": "Dietchart updated successfully!"
//     })
// }

const deleteDietchart = async (req, res) => {
    const { id } = req.params;
    await Dietchart.findByIdAndDelete(id);
    return res.json({
        "message": "Dietchart deleted successfully!"
    })
}

module.exports = {
    listDietchart,
    getDietchart,
    createDietchart,
    // editDietchart,
    deleteDietchart
}