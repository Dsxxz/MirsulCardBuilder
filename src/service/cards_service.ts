import {CardModelClass} from "../dbService/db";
import {cardCreateDtoType, cardDBType, cardViewType} from "../models/card_model";
import {ObjectId} from "mongodb";
export const cards_service=
    {
       async addCard(cardCreateDto: cardCreateDtoType){
           const newCard = new CardModelClass(cardCreateDto);
           await newCard.save();
          return {
              id:newCard._id.toString(),
              cardName: newCard.cardName,
              status: newCard.status
          }
        },
       async getAllCard(): Promise<cardDBType[]>{
           const cards = await CardModelClass.find();
           if(!cards){
               return [];
           }
           return cards;
       },
        async getOneCard(id: string): Promise<cardViewType | null>{
            const card:cardDBType | null = await CardModelClass.findOne({_id: new ObjectId(id)});
            return card ?
                {
                    id:card._id.toString(),
                cardName: card.cardName,
                status: card.status
                } : null;
        },
        async deleteOneCard(id:string){
            if(!ObjectId.isValid(id)){
                return false;
            }
           const card = CardModelClass.findOne({_id: new ObjectId(id)});
            if(!card){
                return false;
            }
            card.deleteOne()
            return true;
        },
        async deleteAllCard(){
             return  CardModelClass.deleteMany({});
        },
        async updateOneCard(id: string, cardForUpdate : cardCreateDtoType){
            await CardModelClass.updateOne({_id : new ObjectId(id)},
               {cardName:cardForUpdate.cardName, status: cardForUpdate.status});
           return this.getOneCard(id);
        },
        async updateAllCards(cardForUpdate : cardCreateDtoType,dto?:any){
           const filter = dto ? {cardName : dto.cardName} : {}
            await CardModelClass.updateMany(filter,
               {cardName:cardForUpdate.cardName, status: cardForUpdate.status});
            return await this.getAllCard();
        }
    }
