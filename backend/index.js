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
  origin:['http://localhost:5173'],
  origin:['http://localhost:5174'],
  credentials : true,
}));

app.use(bodyParser.json());
app.use(express.json());
app.use("/api/user", UserRouter);


// app.get('/allHoldings', async(req, res)=>{
//     let allHoldings = await HoldingsModel.find({});
//     res.json(allHoldings);
// });

// app.get("/allPositions", async(req, res)=>{
//     let allPositions = await PositionsModel.find({});
//     res.json(allPositions);
// });

// app.post("/newOrder", async (req, res) => {
//   try {
//     const newOrder = new OrdersModel({
//       name: req.body.name,
//       qty: req.body.qty,
//       price: req.body.price,
//       mode: req.body.mode,
//     });

//     await newOrder.save();
//     res.send("Order saved!");
//   } catch (error) {
//     console.error("Error saving order:", error);
//     res.status(500).send("Internal Server Error");
//   }
// });

// app.get("/allOrders", async(req, res) =>{
//   let allOrders = await OrdersModel.find({});
//   res.json(allOrders);
// })

const start = async()=>{
  app.listen(PORT, ()=>{
 console.log("App started!");
 mongoose.connect(uri);
 console.log("DB CONNECTED");
});
}
start();