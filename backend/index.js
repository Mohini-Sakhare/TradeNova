import express from 'express';
import mongoose from 'mongoose';

import bodyParser from 'body-parser';

import dotenv from 'dotenv';
dotenv.config();

import cors from 'cors';

import  HoldingsModel  from './model/HoldingsModel.js';

import  PositionsModel  from './model/PositionsModel.js';

import  OrdersModel  from './model/OrdersModel.js';

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
app.use("/api/user",UserRouter)

app.get('/allHoldings', async(req, res)=>{
    let allHoldings = await HoldingsModel.find({});
    res.json(allHoldings);
});

app.get("/allPositions", async(req, res)=>{
    let allPositions = await PositionsModel.find({});
    res.json(allPositions);
});

app.post("/newOrder", async (req, res) => {
  try {
    const newOrder = new OrdersModel({
      name: req.body.name,
      qty: req.body.qty,
      price: req.body.price,
      mode: req.body.mode,
    });

    await newOrder.save();
    res.send("Order saved!");
  } catch (error) {
    console.error("Error saving order:", error);
    res.status(500).send("Internal Server Error");
  }
});

app.get("/allOrders", async(req, res) =>{
  let allOrders = await OrdersModel.find({});
  res.json(allOrders);
})
// app.post("/newOrder", async (req, res) => {
//   try {
//     const { name, qty, price, mode } = req.body;

//     if (!["BUY", "SELL"].includes(mode)) {
//       return res.status(400).send("Invalid trade mode");
//     }

//     // Optional: Add logic for SELL mode (e.g., check stock availability)
//     if (mode === "SELL") {
//       // Example: Check if user has enough stock to sell
//       // const userStock = await getUserStock(name);
//       // if (qty > userStock) return res.status(400).send("Insufficient stock");
//     }

//     const newOrder = new OrdersModel({ name, qty, price, mode });
//     await newOrder.save();

//     res.send(`${mode} order saved!`);
//   } catch (error) {
//     console.error("Error saving order:", error);
//     res.status(500).send("Internal Server Error");
//   }
// });

const start = async()=>{
  app.listen(PORT, ()=>{
 console.log("App started!");
 mongoose.connect(uri);
 console.log("DB CONNECTED");
});
}
start();