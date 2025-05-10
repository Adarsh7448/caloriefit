const express = require('express');
const env = require('dotenv').config()
const { logger } = require('./middlewares/logger');
const authRouter = require('./routes/authRoutes');
const dbConnection = require('./config/dbConnection');

const app = express()
const PORT = process.env.PORT || 3000;

dbConnection()

app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use('/backend/user', authRouter)
app.use(logger('logs.txt'))


app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))