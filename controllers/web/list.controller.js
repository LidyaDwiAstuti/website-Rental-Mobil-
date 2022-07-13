const axios = require("axios")

async function list(req, res) {
    axios.get(`http://localhost:8000/api/size`).then((reponseSize) => {
        res.render('../views/list', {
            size: reponseSize.data.data
        })
    })
}

module.exports = {
    list
}