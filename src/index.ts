import express = require('express')
import {cardRouter} from "./router/cards_router";
export  const app = express()
import {json} from "body-parser";
app.use(json())
import * as dotenv from 'dotenv'

dotenv.config()

const port = process.env.PORT || 3000
const cors = require('cors')
import {runDb} from "./dbService/db";
app.set('trust proxy', true)
app.use(json())
app.use(cors())
app.use('/cards', cardRouter)
app.get('/test',(req,res)=>{
    res.status(200).send("sfghgfhkjghlkj")
})



const startApp = async ()=>{
    await runDb()
    app.listen(port, () => {
        console.log(`Example app listening on port ${port}`)})
}

startApp();
