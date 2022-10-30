const { Router } = require('express')

const UserController = require('../controllers/UserController')

const routes = Router()

routes.get('/', (req, res) =>{
    res.sendFile('index.ejs')
})

routes.post('/users', UserController.createUser)

module.exports = routes