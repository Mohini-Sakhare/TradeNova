import { useState, useEffect } from "react";
import VerticalGraph from "../DataDiagrams/VerticalGraph";
import { useContext } from "react";
import { UserDataContext } from "../context/UserContext";

function Holdings() {
  const [allHoldings, setAllHoldings] = useState([]);
  const {client}= useContext(UserDataContext);

  useEffect(() => {
    const fetchHoldings = async () => {
      try {
        const res = await client.get("/api/user/allHoldings");
        setAllHoldings(res.data);
      } catch (err) {
        console.error("Error fetching holdings:", err);
      }
    };

    fetchHoldings();
  }, [client]);


const labels = allHoldings.map((stock) => stock.name);

// Calculate P&L for each stock
const pnlValues = allHoldings.map(
  (stock) => stock.price * stock.qty - stock.avg * stock.qty
);

// Dynamic background color based on P&L
const backgroundColors = pnlValues.map((pnl) =>
  pnl >= 0 ? "rgba(3, 255, 116, 0.9)" : "rgba(255, 99, 132, 0.9)"
);

const data = {
  labels,
  datasets: [
    {
      label: "Stock Price",
      data: allHoldings.map((stock) => stock.price),
      backgroundColor: backgroundColors,
    },
  ],
};

  return (
    <>
      <h3 className="title">Holdings ({allHoldings.length})</h3>

      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg. cost</th>
              <th>LTP</th>
              <th>Cur. val</th>
              <th>P&L</th>
              <th>Net chg.</th>
              <th>Day chg.</th>
            </tr>
          </thead>

          <tbody>
            {allHoldings.map((stock, index) => {
              const curValue = stock.price * stock.qty;
              const isProfit = curValue - stock.avg * stock.qty >= 0.0;
              const profClass = isProfit ? "profit" : "loss";
              const dayClass = stock.isLoss ? "loss" : "profit";

              return (
                <tr key={index}>
                  <td>{stock.name}</td>
                  <td>{stock.qty}</td>
                  <td>{stock.avg.toFixed(2)}</td>
                  <td>{stock.price.toFixed(2)}</td>
                  <td>{curValue.toFixed(2)}</td>
                  <td className={profClass}>
                    {(curValue - stock.avg * stock.qty).toFixed(2)}
                  </td>
                  <td className={profClass}>{stock.net}</td>
                  <td className={dayClass}>{stock.day}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="row">
        <div className="col">
          <h5>
            29,875.<span>55</span>{" "}
          </h5>
          <p>Total investment</p>
        </div>
        <div className="col">
          <h5>
            31,428.<span>95</span>{" "}
          </h5>
          <p>Current value</p>
        </div>
        <div className="col">
          <h5>1,553.40 (+5.20%)</h5>
          <p>P&L</p>
        </div>
      </div>
      <VerticalGraph data={data}/>
    </>
  );
}

export default Holdings;
