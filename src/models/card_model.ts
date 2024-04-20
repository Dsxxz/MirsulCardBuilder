import {ObjectId} from "mongodb";

export type cardCreateDtoType = {
    cardName: string,
    status: string
}

export type cardViewType = {
    id:string,
    cardName: string,
    status: string
}

export type cardDBType = {
    _id:ObjectId,
    cardName: string,
    status: string
}