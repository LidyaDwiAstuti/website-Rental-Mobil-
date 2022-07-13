const {
    default: axios
} = require("axios")

function index(req, res) {

    axios.get("http://localhost:8000/api/cars").then(
        (response) => res.render('../views/index', {
            Cars: response.data.data
        }))


}

module.exports = {
    index
}