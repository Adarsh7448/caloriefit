const express = require('express');
const { logger } = require('./middlewares/logger');
const userRouter = require('./routes/userRoutes')

const app = express()
const PORT = 3000;

app.use(express.urlencoded({extended:false}))
app.use('/backend/user', userRouter)
app.use(logger('logs.txt'))

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))