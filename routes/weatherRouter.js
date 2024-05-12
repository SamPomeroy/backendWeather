const express = require('express');
const router = express.Router();

const {getAllLocales, addLocale, deleteLocaleById} = require('./locations/controller/weatherController')

router.get('/get-all-searched-locations', getAllLocales);

router.delete('/delete-location/:id', deleteLocaleById)

router.post('/add-location', addLocale)


module.exports = router