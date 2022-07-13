const express = require('express')
const {
    index
} = require('../controllers/web/index.controller')
const {
    list
} = require('../controllers/web/list.controller')
const {
    update
} = require('../controllers/web/update.controller')
const router = express.Router()

router.get('/', index)
router.get('/list', list)
router.get('/update/:id', update)

module.exports = router