import express from 'express';
import dotenv from 'dotenv'
dotenv.config()
import connectDb from './config/DBConnected.js';

const app = express()

const port = process.env.PORT

app.listen(port, ()=>{
    connectDb()
    console.log(`Server is listing at ${port}`);
})