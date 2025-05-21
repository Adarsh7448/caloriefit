const express = require("express");

const {
    listDietchart,
    getDietchart,
    createDietchart,
    deleteDietchart
} = require("../controllers/dietChart");

const dietChartRouter = express.Router();

dietChartRouter
.route('/')
.get(listDietchart)
.post(createDietchart)

dietChartRouter
.route('/:userid')
.get(getDietchart)

dietChartRouter
.route('/:id')
.delete(deleteDietchart)

module.exports = dietChartRouter