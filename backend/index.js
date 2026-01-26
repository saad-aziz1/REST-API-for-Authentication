import express from 'express';
import dotenv from 'dotenv'
dotenv.config()
import connectDb from './config/DBConnected.js';
import authRouter from './routes/user.routes.js';

const app = express()
app.use(express.json())
app.use("/api", authRouter)

const port = process.env.PORT

app.listen(port, ()=>{
    connectDb()
    console.log(`Server is listing at ${port}`);
})