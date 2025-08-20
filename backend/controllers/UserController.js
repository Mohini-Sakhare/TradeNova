import User from "../model/UserModel.js";
import httpStatus from "http-status";
import bcrypt, {hash} from 'bcrypt';
import crypto from 'crypto'

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
