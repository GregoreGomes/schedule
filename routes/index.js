const { Router } = require('express')
var moment = require('moment');

const CardController = require('../controllers/CardController')
const Card = require('../models/Card')

const routes = Router()

routes.get('/', (req, res) =>{
    res.sendFile('index.html')
})



routes.post('/cards', (req, res) =>{

    var card = new Card({
        date: req.body.dia,
        username: req.body.atendimento,
        client: req.body.cliente,
        horaEntrada: req.body.entrada,
        horaSaida: req.body.saida
    })
    card.save(function(err){
        if(err){
            console.log(err)
        }
        else{
            res.redirect('/')
        }
    })
})

routes.get('/cards', CardController.getCards)
// routes.delete('/cards', CardController.removeCards)

module.exports = routes