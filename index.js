require('dotenv').config()

const mongoose = require('mongoose');
const app = require('./app')

const port=3000
mongoose
    .connect('mongodb://localhost:27017/weather-api')
    .then(()=>{
        app.listen(port, ()=>{
            console.log(`Server started on Port: ${port}`);
        })
        console.log(('MONGO DB CONNECTED'));
    })
    .catch(e=>{
        console.log(e);
    })