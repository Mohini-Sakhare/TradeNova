import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

function Education() {
  return (
    <div className="container mt-5">
      <div className="row align-items-center">
        {/* Image Section */}
        <div className="col-12 col-md-6 text-center mb-4 mb-md-0">
          <img src="Images/education.svg" alt="Education" className="img-fluid" style={{ maxWidth: '90%' }} />
        </div>

        {/* Text Section */}
        <div className="col-12 col-md-6">
          <h1 className="mb-4 fs-2">Free and open market education</h1>
          <p>
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>
          <a href="#" className="text-decoration-none d-inline-flex align-items-center gap-2 mb-4">
            Varsity <FaArrowRight />
          </a>

          <p className="mt-5">
            TradingQ&A, the most active trading and investment community in India for all your market related queries.
          </p>
          <a href="#" className="text-decoration-none d-inline-flex align-items-center gap-2">
            TradingQ&A <FaArrowRight />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Education;
