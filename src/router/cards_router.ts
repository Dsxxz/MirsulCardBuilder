import {Router} from "express";
import {cards_service} from "../service/cards_service";
import {cardCreateDtoType, cardViewType} from "../models/card_model";
import {Request, Response} from "express";


export const cardRouter = Router({});


cardRouter.post('/',async (req:Request, res:Response) => {
    const createCardDto:cardCreateDtoType = {cardName: req.body.cardName, status: req.body.status};
    if(!createCardDto){
        res.status(404).send('Incorrect data');
    }
    const card:cardViewType = await cards_service.addCard(createCardDto);
    res.status(200).send(card);
})
cardRouter.get('/',async (req:Request, res:Response) => {
    console.log(5)
    const cards = await cards_service.getAllCard();
    console.log(3)
    res.status(200).send(cards)
})
cardRouter.get('/:id',async (req, res) => {
    const cards =await cards_service.getOneCard(req.params.id)
    res.status(200).send(cards)
})
cardRouter.delete('/:id', async (req, res) => {
    const cards = cards_service.deleteOneCard(req.params.id)
    res.status(200).send(cards)
})
cardRouter.delete('/all', async (req, res) => {
    await cards_service.deleteAllCard();
    res.sendStatus(204)
})
cardRouter.put('/:id', (req, res) => {
    const createCardDto = {cardName: req.body.name, status: req.body.status};
    if(!createCardDto){
        res.status(404).send('Incorrect data');
    }
    const card = cards_service.updateOneCard(req.params.id,createCardDto)
    if(card){
        res.status(204).send(card)}
    else{res.sendStatus(404)}})

cardRouter.put('/', (req, res) => {
    const dto = req.body ? req.body : undefined
    const createCardDto = {cardName: req.body.name, status: req.body.status};
    if(!createCardDto){
        res.status(404).send('Incorrect data');
    }
    const cards = cards_service.updateAllCards(createCardDto, dto)
    res.status(204).send(cards)
})