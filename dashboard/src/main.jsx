import React from "react";
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import Home from "./components/Home";
import { UserContext } from "./context/UserContext";
// import Signup from "./Authentication/Signup";

createRoot(document.getElementById('root')).render(
 
    <BrowserRouter>
    <UserContext>
       <Routes>
        {/* <Route path="/*" element={<Signup/>} /> */}
        <Route path="/*" element={<Home />} />
      </Routes>
    </UserContext>
    </BrowserRouter>
);