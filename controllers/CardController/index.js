const Card = require('../../models/Card')

const CardController = {

    async createCard(req, res){
        const bodyData = req.body
        try {
            const newCard = await Card.create(bodyData)
            return res.status(200).json(newCard)

        } catch(err){
            return res.status(400).json(err)
        }
    }
}

module.exports = CardController