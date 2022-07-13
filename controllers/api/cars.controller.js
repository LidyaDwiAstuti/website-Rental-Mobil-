// function getAllCars(req, res) {
//     res.status(200).json({
//         message: "success",
//         data: []
//     })
// }

// function listcars(req, res) {
//     res.status(200).json({
//         message: "success",
//         data: []
//     })
// }

// function updatecars(req, res) {
//     res.status(200).json({
//         message: "success",
//         data: []
//     })
// }

const req = require('express/lib/request')
const {
    tbl_cars
} = require('../../models')

const getAllCars = async (req, res) => {
    // ambil data dari tbl_cars
    tbl_cars.findAll().then(car => res.status(200).json({
        message: "Success",
        data: car
    }))
}

const Destroy = async (req, res) => {
    tbl_cars.destroy({
            where: {
                id: req.params.id
            }
        })
        .then(car => res.status(200).json({
            message: "Success",
            data: car
        }))
}

async function showCar(req, res) {
    try {
        let idCar = Number(req.params.id)
        let car = await tbl_cars.findOne({
            where: [{
                id: idCar
            }]
        })
        res.status(200).json({
            message: "Success",
            data: car
        })
    } catch (error) {
        console.log(error)
    }
}

const createcars = async (req, res) => {
    await tbl_cars.create({
            name: req.body.name,
            harga: req.body.harga,
            url_image: req.body.url_image,
            createAt: new Date(),
            updateAt: new Date(),
            id_size: req.body.id_size
        })
        .then(car => res.status(200).json({
            message: "Success",
            data: car
        }))
}
const updatecars = async (req, res) => {
    await tbl_cars.update({
            name: req.body.name,
            harga: req.body.harga,
            url_image: req.body.url_image,
            createAt: new Date(),
            updateAt: new Date(),
            id_size: req.body.id_size
        }, {
            where: {
                id: req.params.id
            }
        })
        .then(car => res.redirect('/'))
}



module.exports = {
    getAllCars,
    createcars,
    Destroy,
    updatecars,
    showCar
}