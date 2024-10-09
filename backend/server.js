import express from "express";
import bodyParser from "body-parser"
import mongoose from "mongoose"
import dotenv from "dotenv"
import AuthRouter from "./Routes/AuthRoutes.js"

const app = express()

app.use('/auth',AuthRouter)


app.use(bodyParser.json({extended:true}))
app.use(bodyParser.urlencoded({extended:true}));
dotenv.config();


const PORT = process.env.PORT|| 5000;


app.listen(PORT,()=>{
    console.log(`server running on ${PORT}`)
})