import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

function Stats() {
  return (
    <div className="container p-3">
      <div className="row p-3 align-items-center">
        {/* Text Section */}
        <div className="col-12 col-md-6 p-3 mt-md-4">
          <h1 className="fs-2 mb-5">Trust with Confidence</h1>

          <h2 className="fs-4">Customer-first always</h2>
          <p className="text-muted mb-5">
            That's why 1.5+ crore customers trust TradeNova with ₹4.5+ lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.
          </p>

          <h2 className="fs-4">No spam or gimmicks</h2>
          <p className="text-muted mb-5">
            No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.
          </p>

          <h2 className="fs-4">The TradeNova universe</h2>
          <p className="text-muted mb-5">
            Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.
          </p>

          <h2 className="fs-4">Do better with money</h2>
          <p className="text-muted mb-5">
            With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.
          </p>
        </div>

        {/* Image + Links */}
        <div className="col-12 col-md-6 mt-4 text-center">
          <img src="Images/ecosystem.png" alt="Ecosystem" className="img-fluid" />
          <div className="d-flex justify-content-center gap-4 mt-5 flex-wrap">
            <a href="#" className="text-decoration-none d-flex align-items-center gap-2">
              Explore our products <FaArrowRight />
            </a>
            <a href="#" className="text-decoration-none d-flex align-items-center gap-2">
              Try Kite demo <FaArrowRight />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
