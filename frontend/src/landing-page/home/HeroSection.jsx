import React from 'react';
import {useNavigate} from "react-router-dom"

function HeroSection() {
  const navigate=useNavigate();
  return (
    <div className="container py-5 mb-5">
      <div className="row justify-content-center text-center">
        <div className="col-12 col-md-10">
          <img
            src="Images/homeHero.png"
            alt="Hero Image"
            className="img-fluid mb-4"
          />
          <h1 className="mt-3">Invest in everything</h1>
          <p className="mb-4">
            Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.
          </p>
          <button className="btn btn-primary fs-5 px-4 py-2" onClick={()=>navigate("/signup")}>
            Sign up for free
          </button>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
