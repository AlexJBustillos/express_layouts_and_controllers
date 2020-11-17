//import stuff
const express = require('express')
const app = express()
const ejsLayouts = require('express-ejs-layouts') 
const favesController = require('./controllers/favesController')
const hatesController = require('./controllers/hatesController')



app.set('view engine', 'ejs')
app.use(ejsLayouts)

//create t least 1 route
app.get('/', (req, res) => {
    res.render('index')
})

// app.get('/faves/animals', (req, res) => {
//     const animals = ['giraffe', 'aligator', 'peacock', 'unicorn']

//     res.render('faveAnimals', { animals })
// })

// app.get('/faves/foods', (req, res) => {
//     const foods = ['pho', 'poke bowl', 'boigas', 'gnocchi']

//     res.render('faveFoods', { foods })
// })

// app.get('/hates/animals', (req, res) => {
//     const animals = ['nyc rats', 'cockroaches', 'millipedes', 'ticks']

//     res.render('hateAnimals', { animals })
// })

// app.get('/hates/foods', (req, res) => {
//     const foods = ['eel', 'english peas', 'pretzels', 'bugs']

//     res.render('hateFoods', { foods })
// })

app.use('/hates', hatesController)

app.use('/faves', favesController)

//app.listen
app.listen(8000, () => {
    console.log('server has started');
})

