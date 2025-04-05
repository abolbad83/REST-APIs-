require('dotenv').config({path: `${process.cwd()}/.env`});
const express = require('express');

const authRouter = require('./routes/authRoute');
const projectRouter = require('./routes/projectRoute')
const catchAsync = require('./utils/catchAsync');
const AppError = require('./utils/appError');
const globalErrorHandler = require('./controller/errorController');
const userRouter = require('./routes/userRoute')
const app = express();

app.use(express.json());


// all routes 
app.use('/api/v1/auth', authRouter);
app.use('/api/v1/project', projectRouter);
app.use('/api/v1/user', userRouter)


app.use(
    '*', catchAsync (async (req, res, next) => {
        throw new AppError(`can't find ${req.originalUrl} on this server`, 404)
}))

app.use(globalErrorHandler);
const PORT = process.env.APP_PORT || 4000;

app.listen(PORT, () => {
    console.log('server is running', PORT )
}) 