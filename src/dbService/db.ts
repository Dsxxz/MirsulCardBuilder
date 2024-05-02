import {MongoClient} from "mongodb";
import mongoose from "mongoose"
import {cardDBType} from "../models/card_model";


const mongoUrl:string = process.env.MONGO_REMOTE as string || "mongodb://127.0.0.1:27017"
if(!mongoUrl){
    throw new Error("URL doesnt found")
}

export const client = new MongoClient(mongoUrl)

const cardSchema = new mongoose.Schema<cardDBType>({
    _id: {type:mongoose.Schema.ObjectId, required:true},
    cardName: {type:String, required:true},
    status: {type:String, required:true}
})

export const CardModelClass = mongoose.model('CARDS',cardSchema)

export async function runDb():Promise<void>{
    try{
        await client.connect();
        mongoose.connection.set("bufferTimeout", 30000);
        await mongoose.connect(mongoUrl, {dbName: "MirsulCards"})
        console.log("mongoose connected")
        return;
    }
    catch {
        await mongoose.disconnect()
        return;
    }
}