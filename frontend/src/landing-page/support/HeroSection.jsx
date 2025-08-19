import React from "react";
import { useNavigate } from "react-router-dom";

function HeroSection() {
  const navigate=useNavigate();
  return (
    <main className="mt-4 bg-light">
      <div className="container">
        <div className="row justify-content-between align-items-center bg-light py-4 px-4 rounded">
          <div className="col-12 col-md-6">
            <h2 className="mb-0">
              <a href="/" className="text-decoration-none">
                Support Portal
              </a>
            </h2>
          </div>
          <div className="col-12 col-md-6 text-md-end mt-3 mt-md-0">
            <button className="btn btn-primary" onClick={()=>navigate("/signup")}>My Tickets</button>
          </div>
        </div>

        <div className="row mt-4 ">
          <div className="col-12 mb-5">
            <input
              id="searchInput"
              className="form-control form-control-lg"
              type="text"
              placeholder="Eg: how do I activate F&O..."
            />
          </div>
        </div> 
      </div>
    </main>
  );
}

export default HeroSection;
