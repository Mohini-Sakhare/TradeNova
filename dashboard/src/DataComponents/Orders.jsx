import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import axios from "axios";
import { useContext } from "react";
import { UserDataContext } from "../context/UserContext";

function Orders() {
  const [orders, setOrders] = useState([]);
  const { client } = useContext(UserDataContext);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await client.get("/allOrders");
        setOrders(res.data);
      } catch (err) {
        console.error("Error fetching holdings:", err);
      }
    };

    fetchOrders();
  }, []);

  return (
    <div className="orders">
      <h3 className="title">Orders ({orders.length})</h3>

      {orders.length === 0 ? (
        <div className="no-orders">
          <p>You haven't placed any orders today</p>
          <Link to="/" className="btn">
            Get started
          </Link>
        </div>
      ) : (
        <div className="order-table">
          <table>
            <thead>
              <tr>
                <th>Instrument</th>
                <th>Qty.</th>
                <th>Price</th>
                <th>Type</th>
                <th>Time</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, index) => {
                const typeClass = order.mode === "BUY" ? "buy" : "sell";
                const formattedTime = new Date(
                  order.timestamp || Date.now()
                ).toLocaleTimeString();

                return (
                  <tr key={index}>
                    <td>{order.name}</td>
                    <td>{order.qty}</td>
                    <td>{order.price.toFixed(2)}</td>
                    <td className={typeClass}>{order.mode}</td>
                    <td>{formattedTime}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default Orders;
