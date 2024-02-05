import app from './app.js'
import dotenv from 'dotenv'
import dbconnect from './db/index.js'
dotenv.config()

dbconnect().then(()=>{
  app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}! `)
  })
})
.catch((err)=>{console.log('Error in DB connection',err);})
