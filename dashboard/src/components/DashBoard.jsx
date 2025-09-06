import React, { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Funds from "./Funds";
import Holdings from "../DataComponents/Holdings";
import Orders from "../DataComponents/Orders";
import Positions from "../DataComponents/Positions";
import Summary from "./Summary";
import WatchList from "./WatchList";
import { GeneralContextProvider } from "../context/GeneralContext";
import { UserDataContext } from "../context/UserContext";


const Dashboard = () => {
   const {userData}=useContext(UserDataContext);
  return (
    <div className="dashboard-container">
      <GeneralContextProvider>
        <WatchList />
      </GeneralContextProvider>
      <div className="content">
        <Routes>
          <Route path="/" element={<Summary/>} />
          <Route path="orders" element={<Orders/>}/>
          <Route path="holdings" element={<Holdings />}/>
          <Route path="positions" element={<Positions/>}/>
          <Route path="funds" element={<Funds />} />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;
