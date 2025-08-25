import React from "react";
import { Route, Routes } from "react-router-dom";
import Auth from "../Authentication/Auth";
import Funds from "./Funds";
import Holdings from "../DataComponents/Holdings";

import Orders from "../DataComponents/Orders";
import Positions from "../DataComponents/Positions";
import Summary from "./Summary";
import WatchList from "./WatchList";
import { GeneralContextProvider } from "../context/GeneralContext";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <GeneralContextProvider>
        <WatchList />
      </GeneralContextProvider>
      <div className="content">
        <Routes>
          <Route exact path="/" element={<Summary />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/holdings" element={<Holdings />} />
          <Route path="/positions" element={<Positions />} />
          <Route path="/funds" element={<Funds />} />
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;
