const express = require("express");

const {
    listDietchart,
    getDietchart,
    createDietchart,
    deleteDietchart
} = require("../controllers/dietChart");

const dietChartRouter = express.Router();

dietChartRouter
.route('/all')
.get(listDietchart)

dietChartRouter
.route('/')
.get(getDietchart)
.post(createDietchart)
.delete(deleteDietchart)

module.exports = dietChartRouter