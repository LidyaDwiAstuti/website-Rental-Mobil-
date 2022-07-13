const axios = require("axios")

async function update(req, res) {
    const data = {
        sizes: await axios.get("hhtp://localhost:8000/api/size")
            .then(res => res.data.data)
            .catch(error => console.log(error)),
        cars: await axios.get(`http://localhost:8000/api/cars/${req.params.id}`)
            .then(res => res.data.data)
            .catch(error => console.log(error))
    }
    res.render('../views/update', data)

}

module.exports = {
    update
}