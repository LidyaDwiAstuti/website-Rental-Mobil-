const express = require('express')
const {
    getAllSize
} = require('../controllers/api/size.controller')
const router = express.Router()

router.get('/size', getAllSize)

module.exports = router

//cars 
const {
    getAllCars,
    createcars,
    Destroy,
    updatecars,
    showCar
} = require('../controllers/api/cars.controller')
router.get('/cars', getAllCars)
router.post('/cars', createcars)
router.post('/cars/:id', updatecars)
router.delete('/delete/:id', Destroy)
router.get('/cars/:id', showCar)