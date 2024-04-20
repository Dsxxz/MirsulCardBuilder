import {MongoClient} from "mongodb";
import * as mongoose from "mongoose";
import {cardDBType} from "../models/card_model";

const mongoUri = process.env.MONGO_REMOTE ||  process.env.mongoUri
console.log(mongoUri)
if(!mongoUri){
    throw new Error("URL doesnt found")
}


export const client = new MongoClient(mongoUri)

const cardSchema = new mongoose.Schema<cardDBType>({
    _id: {type:mongoose.Schema.ObjectId, required:true},
    cardName: {type:String, required:true},
    status: {type:String, required:true}
})

export const CardModelClass = mongoose.model('CARDS',cardSchema)

export async function runDb():Promise<void>{
    try{
        await client.connect();
        await mongoose.connect(mongoUri, {dbName: "MirsulCards"})
        console.log("mongoose connected")
        return;
    }
    catch {

        await mongoose.disconnect()
        return;
    }
}