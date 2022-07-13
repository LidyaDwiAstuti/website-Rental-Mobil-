const express = require('express')

// Define Objek Express
const app = express()

//Import Router
const webRouter = require('./../routes/web.router')
const apiRouter = require('./../routes/api.router')

//Use express JSON
app.use(express.json())

//Use Express URL Encode
app.use(express.urlencoded())

//Define file static
app.use(express.static("public"))

//Set EJS Engine
app.set('view engine', 'ejs')

// Difine PORT
const PORT = 8000

//Define Router Web
app.use('/', webRouter)
app.use('/api', apiRouter)

//route 
// app.get('/', function (req, res) {
//     res.render('index')
// })
// app.get('/list', function (req, res) {
//     res.render('list')
// })
// app.get('/update', function (req, res) {
//     res.render('update')
// })

//Menjalankan server
app.listen(PORT, () => {
    console.log("server is running!")
})