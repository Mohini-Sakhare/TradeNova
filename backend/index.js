import express from 'express';
import mongoose from 'mongoose';

import bodyParser from 'body-parser';

import dotenv from 'dotenv';
dotenv.config();

import cors from 'cors';

import UserRouter from './Routes/UserRoutes.js';


const PORT = process.env.PORT || 3001;
const uri = process.env.MONGO_URL;

const app = express();

app.use(cors({
  origin:['https://tradenova-frontend-z088.onrender.com'],
   methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials : true,
}));

app.use(bodyParser.json());
app.use(express.json());
app.use("/api/user", UserRouter);


const start = async()=>{
  app.listen(PORT, ()=>{
 console.log("App started!");
 mongoose.connect(uri);
 console.log("DB CONNECTED");
});
}
start();
