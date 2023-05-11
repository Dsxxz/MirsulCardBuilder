import {CardType} from "../models/card_model";
const cardsRepo:Array<CardType>=[
    {
    id:"1",
    cardName:"sdgsgsgsgs",
    status:"sdgdfsgd"
},
    {
        id:"2",
        cardName:"sdgsgsgsgs",
        status:"sdgdfsgd"
    },{
        id:"4",
        cardName:"sdgsgsgsgs",
        status:"sdgdfsgd"
    },
    {
        id:"3",
        cardName:"sdgsgsgsgs",
        status:"sdgdfsgd"
    },{
        id:"5",
        cardName:"sdgsgsgsgs",
        status:"sdgdfsgd"
    }];
let num=10
export const cards_service=
    {
       async addCard(name:string,status:string){
            const newCard = {id:(num+=1).toString(), cardName:name,
            status:status}
            cardsRepo.push(newCard)
            return newCard;
        },
       async getAllCard(){
            return cardsRepo;
        },
        async getOneCard(id:string){
            return cardsRepo.find(el=> {
                return el.id === id
            });
        },
        async deleteOneCard(id:string){
           const card = cardsRepo.findIndex(el=> {
               return el.id === id
           })
            cardsRepo.splice(card,1)
            return 1;
        },
        async deleteAllCard(){
             cardsRepo.length=0;
             return 1;
        },
        async updateOneCard(id:string,
                            cardName: string,
                            status: string){
            const card = cardsRepo.find(el=> {
                return el.id === id
            })
            card.cardName = cardName
            card.status = status
            return card;

        },
        async updateAllCards(
                              cardName: string,
                              status: string){
           cardsRepo.map((el)=>{el.cardName=cardName,el.status=status})
            return cardsRepo
        }
    }
