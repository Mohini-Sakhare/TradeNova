import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import GeneralContext from "../context/GeneralContext";
import "./ActionWindow.css";
import { UserDataContext } from "../context/UserContext";

function BuyActionWindow({ uid}) {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);

  const [expectedCredit, setExpectedCredit] = useState(0.0);

  const { client } = useContext(UserDataContext);
  const { closeBuyWindow } = useContext(GeneralContext);

  useEffect(() => {
    const credit = Number(stockQuantity) * Number(stockPrice);
    setExpectedCredit(credit);
  }, [stockQuantity, stockPrice]);

  const handleBuyClick = async () => {
    try {
        await client.post("/newOrders", {
        name: uid,
        qty: stockQuantity,
        price: stockPrice,
        mode: "BUY",
      });
    closeBuyWindow(); 
    } catch (err) {
      console.error("Buy order failed:", err);
    }
  };

  const handleCancelClick = () => {
    closeBuyWindow();
  };

  return (
    <div className="container" id="buy-window" draggable="true">
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
          <Link className="btn btn-blue" onClick={handleBuyClick}>
            Buy
          </Link>
          <Link to="" className="btn btn-grey" onClick={handleCancelClick}>
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BuyActionWindow;