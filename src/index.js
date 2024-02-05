import express from 'express'
import dotenv from 'dotenv'
const app = express()
import dbconnect from './db/index.js'
dotenv.config()

dbconnect();
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get("/about",(req,res)=>{
    res.send("<h1>this is about<h1>")
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}! `)
})