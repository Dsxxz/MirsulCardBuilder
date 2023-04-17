import express = require('express')
import {cardRouter} from "./router/cards_router";
const app = express()
const port = 3000
import {json} from "body-parser";
app.use(json())
app.use('/cards', cardRouter)
app.get('/test',(req,res)=>{
    res.status(200).send("sfghgfhkjghlkj")
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})