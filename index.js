//import stuff
const express = require('express')
const app = express()
//create t least 1 route
app.get('/', (req, res) => {
    res.send('Hello from the matrix')
})



//app.listen
app.listen(8000, () => {
    console.log('server has started');
})