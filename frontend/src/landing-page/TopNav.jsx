import React from "react";
import { Link } from "react-router-dom";

function TopNav() {
  return (
    <nav className="navbar navbar-expand-lg border-bottom bg-white">
      <div className="container">
        {/* Brand Logo */}
        <Link className="navbar-brand d-inline-flex" to="/">
          <img
            src="Images/TradeNova.jpg"
            alt="logo"
            style={{ width: "120px" }}
            className="img-fluid"
          />
          <h1 className="m-4"><u>TRADENOVA</u></h1>
        </Link>

        {/* Toggler for Mobile */}
        <button 
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>


        {/* Navigation Links */}
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" to="/signup">Signup</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/products">Products</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/pricing">Pricing</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/support">Support</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/tradewing"><img src="/Images/wing.jpg" alt="TradeWing logo" width="60px"/></Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default TopNav;