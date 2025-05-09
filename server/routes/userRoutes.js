const { getUserHandler } = require('../controllers/userHandlers');
const express = require('express');
const userRouter = express.Router();

userRouter
    .route('/')
    .get(getUserHandler)

module.exports = userRouter;