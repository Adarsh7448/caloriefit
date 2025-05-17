const express = require('express');
const env = require('dotenv').config()
const { logger } = require('./middlewares/logger');
const authRouter = require('./routes/authRoutes');
const userRouter = require('./routes/userRoutes');
const foodRouter = require('./routes/foodRoutes');
const foodItemRouter = require('./routes/foodItem');
const dbConnection = require('./config/dbConnection');


const app = express()
const PORT = process.env.PORT || 3000;

dbConnection()

app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use(logger('logs.txt'))
app.use('/backend/user', authRouter)
app.use('/backend/user', userRouter)
app.use('/backend/foodcategory', foodRouter)
app.use('/backend/fooditem', foodItemRouter)


app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))