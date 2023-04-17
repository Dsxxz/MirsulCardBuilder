import {CardType} from "../models/card_model";
const cardsRepo:Array<CardType>=[{
    "cardName":"sdgsgsgsgs",
    "status":"sdgdfsgd"
},
    {
        "cardName":"sdgsgsgsgs",
        "status":"sdgdfsgd"
    },{
        "cardName":"sdgsgsgsgs",
        "status":"sdgdfsgd"
    },
    {
        "cardName":"sdgsgsgsgs",
        "status":"sdgdfsgd"
    },{
        "cardName":"sdgsgsgsgs",
        "status":"sdgdfsgd"
    }];
export const cards_service=
    {
       async addCard(name:string,status:string){
            const newCard = {cardName:name,
            status:status}
            cardsRepo.push(newCard)
            return newCard;
        },
       async getCard(){
            return cardsRepo;
        }
    }

