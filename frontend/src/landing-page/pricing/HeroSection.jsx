import React from "react";

function HeroSection() {
  return (
    <div className="container ">
      <div className="row text-center">
        <div className="text-center mt-5 p-5">
          <h1 className="mt-3 fw-medium lh-base display-4">Charges</h1>
          <p className="text-muted mt-2 mb-3 fs-5 lh-lg fw-normal">
            List of all charges and taxes
          </p>
        </div>
      </div>

      <div className="row text-center">
        <div className="col-12 col-md-4 mt-4">
          <img src="Images/pricing-eq.svg" className="w-75" />
          <h2 className="mt-4 lh-lg fs-3">Free equity delivery</h2>
          <p className="mt-3 text-muted">
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>
        <div className="col-12 col-md-4 mt-4">
          <img src="Images/intradayTrades.svg" className="w-75" />
          <h2 className="mt-4 lh-lg fs-3">Intraday and F&O trades</h2>
          <p className="mt-3 text-muted">
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades. Flat
            ₹20 on all option trades.
          </p>
        </div>
        <div className="col-12 col-md-4 mt-4">
          <img src="Images/pricing-eq.svg" className="w-75" />
          <h2 className="mt-4 lh-lg fs-3">Free direct MF</h2>
          <p className="mt-3 text-muted">
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
