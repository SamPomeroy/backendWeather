const express = require('express');
const logger = require('morgan');
const cors = require('cors')

const app = express();
const weatherRouter = require('./routes/weatherRouter')

app.use(express.json())
app.use(logger('dev'));
app.use(cors());

app.use('/weather/', weatherRouter)

module.exports = app