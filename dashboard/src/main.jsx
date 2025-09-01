import React from "react";
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import Home from "./components/Home";
import { UserContext } from "./context/UserContext";

createRoot(document.getElementById('root')).render(
 
    <BrowserRouter>
    <UserContext>
       <Routes>
        <Route path="/*" element={<Home/>}/>
      </Routes>
    </UserContext>
    </BrowserRouter>
);