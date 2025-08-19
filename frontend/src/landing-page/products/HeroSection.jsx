import React from 'react'

function HeroSection() {
  return (
    <div className="container border-bottom py-5">
      <div className="row text-center justify-content-center px-3">
         <div className="col-12">
          <h1 className="mb-4 mt-5 fs-1 fw-medium lh-sm">
            TradeNova Products
          </h1>
          <p className="fs-4 lh-lg fw-normal mb-4 px-2">
            Sleek, modern, and intuitive trading platforms
          </p>
          <p className="fs-6 lh-lg">
            Check out our <a href="">investment offerings →</a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default HeroSection