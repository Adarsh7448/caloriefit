const express = require('express');
const env = require('dotenv').config()
const { logger } = require('./middlewares/logger');
const authRouter = require('./routes/authRoutes');
const userRouter = require('./routes/userRoutes');
const foodCategoryRouter = require('./routes/foodCategories');
const foodItemRouter = require('./routes/foodItem');
const workoutCategoryRouter = require('./routes/workoutCategories');
const dietChartRouter = require('./routes/dietChart');
const workoutChartRouter = require('./routes/workoutChart');
const workoutRouter = require('./routes/workouts');
const dbConnection = require('./config/dbConnection');


const app = express()
const PORT = process.env.PORT || 3000;

dbConnection()

app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use(logger('logs.txt'))
app.use('/backend/user', authRouter)
app.use('/backend/user', userRouter)
app.use('/backend/foodcategory', foodCategoryRouter)
app.use('/backend/fooditem', foodItemRouter)
app.use('/backend/workoutcategory', workoutCategoryRouter)
app.use('/backend/workout', workoutRouter)
app.use('/backend/dietchart', dietChartRouter)
app.use('/backend/workoutchart', workoutChartRouter)


app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))