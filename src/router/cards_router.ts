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
cardRouter.delete('/:id',async (req, res) => {
    const cards = cards_service.deleteOneCard(req.params.id)
    res.status(200).send(cards)
})
cardRouter.delete('/',async (req, res) => {
     cards_service.deleteAllCard()
    res.sendStatus(204)
})
cardRouter.put('/:id',async (req, res) => {
    const card = cards_service.updateOneCard(req.params.id,req.body.cardName,req.body.status)
    if(card){
    res.status(204).send(card)}
        else{res.sendStatus(404)}})
cardRouter.put('/', async (req, res) => {
    const cards = cards_service.updateAllCards(req.body.cardName,req.body.status)
    res.status(204).send(cards)
},
cardRouter.get('hello'), async (req,res) =>{
    res.status(200).send("Hello, pidors")
})