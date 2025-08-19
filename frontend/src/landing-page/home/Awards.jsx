import React from 'react';

function Awards() {
  return (
    <div className="container mt-5">
      <div className="row align-items-center">
        {/* Image Section */}
        <div className="col-md-6 col-12 p-4 text-center">
          <img src="Images/largestBroker.svg" alt="Largest Broker" className="img-fluid" />
        </div>

        {/* Text Section */}
        <div className="col-md-6 col-12 p-4 mt-md-3 mt-0">
          <h1 className="fs-2 mb-4">Largest stock broker in India</h1>
          <p className="mb-5">
            2+ million TradeNova clients contribute to over 15% of all retail order volumes in India daily by trading and investing in:
          </p>

          {/* Investment Options */}
          <div className="row">
            <div className="col-12 col-sm-6 mb-3">
              <ul>
                <li><p>Futures and Options</p></li>
                <li><p>Commodity derivatives</p></li>
                <li><p>Currency derivatives</p></li>
              </ul>
            </div>

            <div className="col-12 col-sm-6 mb-3">
              <ul>
                <li><p>Stocks & IPOs</p></li>
                <li><p>Direct mutual funds</p></li>
                <li><p>Bonds and Gov. Securities</p></li>
              </ul>
            </div>
          </div>

          {/* Logos */}
          <img src="Images/pressLogos.png" alt="Press Logos" className="img-fluid mt-4" />
        </div>
      </div>
    </div>
  );
}

export default Awards;