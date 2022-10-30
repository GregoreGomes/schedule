const { Router } = require('express')

const CardController = require('../controllers/CardController')

const routes = Router()

routes.get('/', (req, res) =>{
    res.sendFile('index.html')
})

routes.post('/cards', CardController.createCard)

module.exports = routes