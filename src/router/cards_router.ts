import {Router} from "express";
import {cards_service} from "../service/cards_service";


export const cardRouter = Router({});


cardRouter.post('/',async (req, res) => {
    const card = await cards_service.addCard(req.body.name,req.body.status)
    res.status(200).send(card)
})
cardRouter.get('/',async (req, res) => {
    const cards =await cards_service.getCard()
    res.status(200).send(cards)
})
cardRouter.delete('/:name', (req, res) => {
    res.sendStatus(403)
})
