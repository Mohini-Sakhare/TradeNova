import { createContext } from "react";
import axios from 'axios';
import {useNavigate} from "react-router-dom"
import httpStatus from "http-status";


export const UserDataContext = createContext();


export const UserContext = ({children})=>{


  const client = axios.create({
    baseURL:'http://localhost:3001/api/user'
  })

  const navigate=useNavigate();

  const handleRegister = async(username, email, password) =>{
    try{
        let request = await client.post("/signup",{
            username:username,
            email:email,
            password:password
        })

        if(request.status === httpStatus.CREATED){
            return request.data.message;
        }
    }catch(err){
       console.log(err);
    }
  }

  const handleLogin = async (email, password) =>{
    try{
        let request = await client.post('/login',{
            email:email,
            password:password
        });

        console.log(request.data);

        if(request.status === httpStatus.OK){
            localStorage.setItem("token", request.data.token);
            navigate("/")
        }
    }catch(err){
        console.log(err);
    }
  }

  const data = {
    handleRegister, handleLogin
  }

  return(
    <UserDataContext.Provider value={data}>
        {children}
    </UserDataContext.Provider>
  )

}

