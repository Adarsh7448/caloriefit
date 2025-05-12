const { getAdminDashboard, getUserDashboard } = require('../controllers/userControllers');
const authMiddleware = require("../middlewares/authMiddleware");
const roleMiddleware = require("../middlewares/roleMiddleware");
const express = require('express');
const userRouter = express.Router();

userRouter
    .route('/admin')
    .get(authMiddleware, roleMiddleware("admin"), getAdminDashboard)

userRouter
    .route('/user')
    .get(authMiddleware, roleMiddleware("admin", "user"), getUserDashboard)

module.exports = userRouter;