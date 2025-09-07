import { createContext, useState } from "react";
import axios from 'axios';
import {useNavigate} from "react-router-dom"
import httpStatus from "http-status";

export const UserDataContext = createContext();

export const UserContext = ({children})=>{

 
  const client = axios.create({
    baseURL:'https://tradenova-backend.onrender.com'
  })
  
  const [userData, setUserData]=useState(null);
  const navigate=useNavigate();

  const handleRegister = async (username, email, password) => {
  try {
    const response = await client.post("/api/user/signup", {
      username,
      email,
      password
    });

    if (response.status === httpStatus.CREATED) {
      return response.data; // return full data object
    }
  } catch (err) {
    console.error("Signup error:", err);
    throw err;
  }
};

  const handleLogin = async (email, password) =>{
    try{
        const response = await client.post('/api/user/login',{
            email:email,
            password:password
        });

        console.log(response.data);

        if(response.status === httpStatus.OK){
            localStorage.setItem("token", response.data.token);
            return response.data;
        }
    }catch(err){
        console.log(err);
    }
  }

  const data = {
    handleRegister, handleLogin, client, userData, setUserData
  }

  return(
    <UserDataContext.Provider value={data}>
        {children}
    </UserDataContext.Provider>
  )

}
