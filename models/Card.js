const mongoose = require('mongoose')

const Schema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    client: {
        type: String,
        required: true
    },
    horaEntrada: {
        type: String,
        required: true
    },
    horaSaida: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Card', Schema)