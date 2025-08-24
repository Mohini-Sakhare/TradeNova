import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./ActionWindow.css"; 
import { useContext } from "react";
import { UserDataContext } from "../context/UserContext";
import GeneralContext from "../context/GeneralContext";

function SellActionWindow({ uid }){
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);
  const [expectedCredit, setExpectedCredit] = useState(0.0);

  const { client } = useContext(UserDataContext);
  const { closeSellWindow } = useContext(GeneralContext);

  useEffect(() => {
    const credit = Number(stockQuantity) * Number(stockPrice);
    setExpectedCredit(credit);
  }, [stockQuantity, stockPrice]);


  const handleSellClick = async () => {
    try {
        await client.post("/newOrders", {
        name: uid,
        qty: stockQuantity,
        price: stockPrice,
        mode: "SELL",
      });
    closeSellWindow(); 
    } catch (err) {
      console.error("Sell order failed:", err);
    }
  };

const handleCancelClick = () => {
  closeSellWindow();
};

return (
  <div className="container" id="sell-window" draggable="true">
    <div className="regular-order">
      <div className="inputs">
        <fieldset>
          <legend>Qty.</legend>
          <input
            type="number"
            name="qty"
            id="qty"
            onChange={(e) => setStockQuantity(e.target.value)}
            value={stockQuantity}
          />
        </fieldset>
        <fieldset>
          <legend>Price</legend>
          <input
            type="number"
            name="price"
            id="price"
            step="0.05"
            onChange={(e) => setStockPrice(e.target.value)}
            value={stockPrice}
          />
        </fieldset>
      </div>
    </div>

    <div className="buttons">
      <span>Expected Credit ₹{expectedCredit.toFixed(2)}</span>
      <div>
        <Link className="btn btn-red" onClick={handleSellClick}>
          Sell
        </Link>
        <Link to="" className="btn btn-grey" onClick={handleCancelClick}>
          Cancel
        </Link>
      </div>
    </div>
  </div>
);
};
export default SellActionWindow;
