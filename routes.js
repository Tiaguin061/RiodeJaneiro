const express = require('express')
const routes = express.Router()
const path = require('path')

routes.get('/', (req, res) => {
    res.sendFile('views/index.html', {
        root: path.join(__dirname, '/')
    })
})

module.exports = routes