import React from "react";

function HeroSection() {
  return (
    <div className="container">
      <div className="row border-bottom">
      <h3 className="text-center mt-5 p-5 fs-2"style={{lineHeight:'1.7'}}>
        We pioneered the discount broking model in India.<br></br>
        Now, we are breaking ground with our technology.
      </h3>
      </div>
      <div className="row mt-5 text-muted d-flex justify-content-center ">
        <div className="col-12 col-md-4">
          <p>
            We kick-started operations on the 15th of August, 2010 with the goal
            of breaking all barriers that traders and investors face in India in
            terms of cost, support, and technology. We named the company
            TradeNova.
          </p>
          <p>
            Today, our disruptive pricing models and in-house technology have
            made us the biggest stock broker in India.
          </p>
          <p>
            Over 1+ Crore clients place millions of orders every day through our
            powerful ecosystem of investment platforms, contributing over 15% of
            all Indian retail trading volumes.
          </p>
        </div>
        <div className="col-12 col-md-4">
          <p>
            In addition, we run a number of popular open online educational and
            community initiatives to empower retail traders and investors.
          </p>
          <p>
            <a href=" ">Rainmatter</a>, our fintech fund and incubator, has invested in several
            fintech startups with the goal of growing the Indian capital
            markets.
          </p>
          <p>
            And yet, we are always up to something new every day. Catch up on
            the latest updates on our <a href=" ">blog</a> or see what the media is <a href=" ">Saying about us</a>.
          </p>
        </div>
    </div>
    </div>
  );
}

export default HeroSection;