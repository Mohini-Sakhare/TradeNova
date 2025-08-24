import React from "react";
import { useState, useEffect } from "react";
import VerticalGraph from '../DataDiagrams/VerticalGraph'
import { useContext } from "react";
import { UserDataContext } from "../context/UserContext";

function Positions() {
  const [allPositions, setAllPositions] = useState([]);
  const {client}=useContext(UserDataContext);

  useEffect(() => {
    const fetchPositions = async () => {
      try {
        // const token = localStorage.getItem("token");
        const res = await client.get("/allPositions", {
          // headers: {
          //   Authorization: `Bearer ${token}`,
          // },
        });
        setAllPositions(res.data);
      } catch (err) {
        console.error("Error fetching holdings:", err);
      }
    };

    fetchPositions();
  }, [client]);


const labels = allPositions.map((subArray) => subArray["name"]);

  const data = {
    labels,
    datasets: [
      {
        label: "Stock Price",
        data: allPositions.map((stock) => stock.price),
        backgroundColor: "rgba(252, 7, 7, 0.75)",
      },
    ],
  };

  return (
    <>
      <h3 className="title">Positions ({allPositions.length})</h3>

      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg.</th>
              <th>LTP</th>
              <th>P&L</th>
              <th>Chg.</th>
            </tr>
          </thead>

          <tbody>
            {allPositions.map((stock, index) => {
              const curValue = stock.price * stock.qty;
              const isProfit = curValue - stock.avg * stock.qty >= 0.0;
              const profClass = isProfit ? "profit" : "loss";
              const dayClass = stock.isLoss ? "loss" : "profit";

              return (
                <tr key={index}>
                  <td>{stock.product}</td>
                  <td>{stock.name}</td>
                  <td>{stock.qty}</td>
                  <td>{stock.avg.toFixed(2)}</td>
                  <td>{stock.price.toFixed(2)}</td>
                  <td className={profClass}>
                    {(curValue - stock.avg * stock.qty).toFixed(2)}
                  </td>
                  <td className={dayClass}>{stock.day}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <VerticalGraph data={data} />
    </>
  );
}

export default Positions;
