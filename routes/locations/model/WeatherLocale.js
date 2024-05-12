const mongoose = require('mongoose');

const weatherSchema = new mongoose.Schema({
    location: {
        type: String
    },
    country: {
        type: String
    },
    description: {
        type: String
    },
    temperature: {
        type: Number
        
    }
})


module.exports = mongoose.model('weather', weatherSchema)