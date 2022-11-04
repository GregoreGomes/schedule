const Card = require('../../models/Card')

const CardController = {

    async getCards(req, res){

        const paramsData = req.params

        try{
            const Cards = await Card.find()
            return res.status(200).json(Cards)
        }
        catch(err){
            return res.status(400).json(err)
        }
    }
}
//,
// async removeCards(req, res){

//     const paramsData = req.params

//     try{
//         const Cards = await Card.find()
//         return res.status(200).json(Cards)
//     }
//     catch(err){
//         return res.status(400).json(err)
//     }
// }

module.exports = CardController