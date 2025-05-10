const express = require('express');
const authRouter = express.Router()
const { loginUserHandler, registerUserHandler} = require('../controllers/authControllers');

authRouter
.route('/login')
.post(loginUserHandler);

authRouter
.route('/register')
.post(registerUserHandler);

module.exports = authRouter;