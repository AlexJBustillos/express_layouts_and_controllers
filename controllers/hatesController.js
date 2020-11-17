const hatesController = require('express').Router()

hatesController.get('/animals', (req, res) => {
    const animals = ['nyc rats', 'cockroaches', 'millipedes', 'ticks']

    res.render('hateAnimals', { animals })
})

hatesController.get('/foods', (req, res) => {
    const foods = ['eel', 'english peas', 'pretzels', 'bugs']

    res.render('hateFoods', { foods })
})

module.exports = hatesController