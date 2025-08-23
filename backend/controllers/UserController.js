import User from "../model/UserModel.js";
import httpStatus from "http-status";
import bcrypt, {hash} from 'bcrypt';
import crypto from 'crypto'
import HoldingsModel from "../model/HoldingsModel.js";
import PositionsModel from "../model/PositionsModel.js";
import OrdersModel from "../model/OrdersModel.js";

export const Login = async(req, res)=>{
    try{
        const {email, password}=req.body;
        if(!email || !password){
            return res.status(httpStatus.BAD_REQUEST).json({message:"all fields are required!"})
        }

        const user = await User.findOne({email});
        if(!user){
            return res.status(httpStatus.NOT_FOUND).json({message:"incorrect email"})
        }

        const isMatch = await bcrypt.compare(password, user.password)
        if(!isMatch){
            return res.status(httpStatus.NOT_FOUND).json({message:"incorrect password"})
        }

        let token = crypto.randomBytes(10).toString("hex");
        user.token =token;
        await user.save();
        return res.status(httpStatus.OK).json({message:"user logged in successfully" , token: token})

    }catch(error){
      return res.status(500).json({message:'login error', error})
    }
}

export const Signup=async(req, res)=>{
    try{
        const {username, email, password}=req.body;
        const existEmail=await User.findOne({email})

        if(existEmail){
            return res.status(httpStatus.FOUND).json({message:"User already exists!"});
        }
        
        if(password.length<6){
            return res.status(httpStatus.BAD_REQUEST).json({message:"password must be at least 6 character"});
        }
        
        const hashedPassword = await bcrypt.hash(password, 10)

        const newUser = new User({
            username: username,
            email : email,
            password: hashedPassword
        });

        await newUser.save();

        res.status(httpStatus.CREATED).json({message: "User signed up successfully", newUser})
    }catch(error){
      res.status(500).json({message:'sign up error', error})
    }
}

export const Holdings = async (req, res) => {
  try {
    const allHoldings = await HoldingsModel.find({});
    res.status(200).json(allHoldings);
  } catch (error) {
    console.error("Error fetching holdings:", error);
    res.status(500).json({ message: "Failed to retrieve holdings." });
  }
};


export const Positions = async (req, res) => {
  try {
    const allPositions = await PositionsModel.find({});
    res.status(200).json(allPositions);
  } catch (error) {
    console.error("Error fetching positions:", error);
    res.status(500).json({ message: "Unable to retrieve positions." });
  }
};


export const NewOrders=async (req, res) => {
  try {
    const newOrders = new OrdersModel({
      name: req.body.name,
      qty: req.body.qty,
      price: req.body.price,
      mode: req.body.mode,
    });

    await newOrders.save();
    res.send("Order saved!");
  } catch (error) {
    console.error("Error saving order:", error);
    res.status(500).send("Internal Server Error");
  }
};

export const Orders = async (req, res) => {
  try {
    const allOrders = await OrdersModel.find({});
    res.status(200).json(allOrders);
  } catch (error) {
    console.error("Error fetching orders:", error);
    res.status(500).json({ message: "Unable to retrieve orders." });
  }
};
