import express = require('express')
import {cardRouter} from "./router/cards_router";
const app = express()
const port = 3000
const cors = require('cors')
import {json} from "body-parser";
import {runDb} from "./dbService/db";
app.use(json())
app.use(cors({origin:'*'}))
app.use('/cards', cardRouter)
app.get('/test',(req,res)=>{
    res.status(200).send("sfghgfhkjghlkj")
})


app.listen(port, async () => {
    await runDb();
    console.log(`Example app listening on port ${port}`)
})