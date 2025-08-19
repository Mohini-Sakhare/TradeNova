import React from 'react';
import { FaArrowRight } from "react-icons/fa6";

function Pricing() {
  return (
    <div className="container my-5">
      <div className="row align-items-start">
        <div className="col-12 col-md-5 mb-4">
          <h1 className="fs-2 mb-3">Unbeatable pricing</h1>
          <p className="mb-4">
            We pioneered the concept of discount broking and price transparency in India.
            Flat fees and no hidden charges.
          </p>
          <a href="/pricing" className="text-decoration-none">
            See pricing <FaArrowRight />
          </a>
        </div>

        <div className="col-12 col-md-7 mb-4 d-flex flex-wrap justify-content-between">
          <div className="price-box text-center mb-4">
            <img
              src="Images/pricing-eq.svg"
              alt="Free account opening"
              className="img-fluid"
              style={{ maxWidth: '120px' }}
            />
            <p className="mt-2 small text-muted">Free account<br />opening</p>
          </div>

          <div className="price-box text-center mb-4">
            <img
              src="Images/pricing-eq.svg"
              alt="Free equity delivery"
              className="img-fluid"
              style={{ maxWidth: '120px' }}
            />
            <p className="mt-2 small text-muted">Free equity delivery<br />and direct mutual funds</p>
          </div>

          <div className="price-box text-center mb-4">
            <img
              src="Images/intradayTrades.svg"
              alt="Intraday & F&O"
              className="img-fluid"
              style={{ maxWidth: '120px' }}
            />
            <p className="mt-2 small text-muted">Intraday and<br />F&O</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;