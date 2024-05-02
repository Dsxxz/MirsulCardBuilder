import {CardModelClass} from "../dbService/db";
import {cardCreateDtoType, cardDBType, cardViewType} from "../models/card_model";
import {ObjectId} from "mongodb";
import {HydratedDocument} from "mongoose";
export const cards_service=
    {

       async addCard(cardCreateDto: cardCreateDtoType){
           const card:cardDBType = {_id: new ObjectId(),
               cardName: cardCreateDto.cardName,
               status: cardCreateDto.status}
           const newCard = new CardModelClass(card);
            newCard.save();
          return this.createViewModel(newCard);
        },
        createViewModel(card: HydratedDocument<cardDBType> | cardDBType){
           return {
               id:card._id.toString(),
               cardName: card.cardName,
               status: card.status
           }
        },
        async getAllCard(): Promise<cardViewType[] | []>{
            try {
                console.log(6);
                const cards:cardDBType[] = await CardModelClass.find();
                console.log(1);
                console.log(cards);
                const cardViews: cardViewType[] = cards.map((card) => {return this.createViewModel(card)});
                console.log(2);
                return cardViews;
            } catch (error) {
                console.error("Error in getAllCard:", error);
                return []; // Возвращаем пустой массив при возникновении ошибки
            }
        },
        async getOneCard(id: string): Promise<cardViewType | null>{
            if(!ObjectId.isValid(id)){
                return null;
            }
            const card:HydratedDocument<cardViewType> | null = await CardModelClass.findOne({_id: new ObjectId(id)});
            return card ?
                this.createViewModel(card) : null;
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
