import React,{useContext} from 'react'
import { UserDataContext } from '../context/UserContext';
import { Navigate } from 'react-router';

export default function ProtectedRoute({children}) {
  const {userData} = useContext(UserDataContext);
  const token = localStorage.getItem("token");

  if(!userData && !token){
    return <Navigate to="/"/>;
  }

  return children;
}
