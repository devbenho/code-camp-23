const express = require('express');
const morgan = require('morgan');
const app = express();
app.use(express.json());
app.use(morgan('dev'))
app.use('/healthz',(req,res,next)=>{
    res.send('Works ✌️');
    next();
})
module.exports = app;