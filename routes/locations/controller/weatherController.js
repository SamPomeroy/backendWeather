const WeatherLocale = require('../model/WeatherLocale')
// const {default: mongoose} = require('mongoose')


async function getAllLocales(req, res){
    try {
        const allWeatherLocales = await WeatherLocale.find({});
        res.json({message: 'success', payload: allWeatherLocales})
    } catch (error) {
        res.status(500).json({message: 'error', error: error})
    }
}

async function addLocale(req, res){
    const {location, country, description, temperature} = req.body
    try {
        const newWeatherLocale = new WeatherLocale({
            location,
            country,
            description,
            temperature
        })
        await newWeatherLocale.save()
        res.json({message: 'success', payload: newWeatherLocale})
    } catch (error) {
        res.status(500).json({message: 'error', error: error})
    }
}

async function deleteLocaleById(req, res){
    try {
        const deletedWeatherLocale = await WeatherLocale.findByIdAndDelete({_id: req.params.id})
        res.json({message: 'success', payload: deletedWeatherLocale})
    } catch (error) {
        res.status(500).json({message: 'error', error: error})
    }
}

module.exports = {deleteLocaleById, getAllLocales, addLocale}