import {Router} from "express";
import {cards_service} from "../service/cards_service";


export const cardRouter = Router({});


cardRouter.post('/',async (req, res) => {
    const card = await cards_service.addCard(req.body.name,req.body.status)
    res.status(200).send(card)
})
cardRouter.get('/',async (req, res) => {
    const cards =await cards_service.getAllCard()
    res.status(200).send(cards)
})
cardRouter.get('/:id',async (req, res) => {
    const cards =await cards_service.getOneCard(req.params.id)
    res.status(200).send(cards)
})
cardRouter.delete('/:id', (req, res) => {
    const cards = cards_service.deleteOneCard(req.params.id)
    res.status(200).send(cards)
})
cardRouter.delete('/', (req, res) => {
     cards_service.deleteAllCard()
    res.sendStatus(204)
})