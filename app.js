require('dotenv').config({path: `${process.cwd()}/.env`});
const express = require('express');
const authRouter = require('./routes/authRoute');

const app = express();

app.get('/',(req, res) => {
    res.status(200).json({
        status: 'success',
        message: 'hello world!'
    })
})
// all routes 
app.use('/api/v1/auth', authRouter);


app.use('*', (req, res, next) => {
    res.status(404).json({
        status: 'fail',
        message: 'route not found'
    })
})
const PORT = process.env.APP_PORT || 4000;

app.listen(PORT, () => {
    console.log('server is running', PORT )
})