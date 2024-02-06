import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

const app=express();
app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
})); 
// data form 
// security practice
app.use(express.json({limit:'50mb'}));
app.use(express.urlencoded({extended:true,limit:'50mb'}));
app.use(express.static('public'));// assets
app.use(cookieParser());


// routes
import  userRouter from './routes/user.router.js';

// routes declaration
app.use("/api/v1/users",userRouter);
export default app;
