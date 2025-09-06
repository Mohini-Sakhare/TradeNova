import React from "react";
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import { UserContext } from "./context/UserContext";
import Signup from "./Authentication/Auth";
import Home from "./components/Home";
import ProtectedRoute from "./components/ProtectedRoute";


createRoot(document.getElementById('root')).render(
 
    <BrowserRouter>
    <UserContext>
       <Routes>
        <Route path="/" element={<Signup/>}/>
        <Route path="/home/*" element={
          <ProtectedRoute>
               <Home/>
          </ProtectedRoute>
          }/>
      </Routes>
    </UserContext>
    </BrowserRouter>
);