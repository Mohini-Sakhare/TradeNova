import React from "react";
import { useNavigate } from "react-router-dom";

function Universe() {
  const navigate=useNavigate();
  return (
    <div className="container py-5">
      <div className="mb-5 text-center">
        <p className="mb-5 fs-4">
          Want to know more about our technology stack? Check out the{" "}
          <a href="">TradeNova.tech</a> blog.
        </p>
        <h1 className=" mb-2 fw-medium fs-2 lh-base">The Zerodha Universe</h1>
        <p className="fs-6 text-muted ">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
      </div>

      <div className="row gy-5 text-center mt-4">
        {/* cloumn 1 */}
        <div className="col-12 col-md-4">
          <a href="">
            <img
              src="Images/zerodhaFundhouse.png"
              alt="Zerodha Fund House"
              className="img-fluid w-75"
            ></img>
          </a>
          <p className="text-muted small mt-3">
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>

          <div className="mt-5">
            <a href="">
              <img
                src="Images/streakLogo.png"
                alt="Streak logo"
                className="img-fluid w-75"
              ></img>
            </a>
            <p className="text-muted small mt-3">
              Systematic trading platformthat allows you to create and backtest
              strategies without coding.
            </p>
          </div>
        </div>

        {/* column 2 */}
        <div className="col-12 col-md-4">
          <a href="">
            <img
              src="Images/sensibullLogo.svg"
              className="img-fluid w-75"
              alt="Sensibull logo"
            ></img>
          </a>
          <p className="text-muted mt-3 small">
            Options trading platform that lets you<br></br>create strategies,
            analyze positions, and examine<br></br>data points like open
            interest, FII/DII, and more.
          </p>

          <div className="mt-5">
            <a href="">
              <img
                src="Images/smallcaseLogo.png"
                className="img-fluid w-75"
                alt="smallcase logo"
              ></img>
            </a>
            <p className="text-muted mt-3 small">
              Thematic investing platform<br></br>that helps you invest in
              diversified<br></br>
              baskets of stocks on ETFs.
            </p>
          </div>
        </div>

        {/* column 3 */}
        <div className="col-12 col-md-4">
          <a href="">
            <img
              src="Images/tijori.svg"
              className="img-fluid w-75"
              alt="tijori logo"
            />
          </a>
          <p className="text-muted mt-3 small">
            Investment research platform<br></br>that offers detailed insights
            on stocks,<br></br>sectors, supply chains, and more.
          </p>
          <div className="mt-5">
            <a href="">
              <img
                src="Images/dittoLogo.png"
                className="img-fluid w-75"
                alt="ditto logo"
              />
            </a>
            <p className="text-muted mt-3 small">
              Personalized advice on life<br></br>and health insurance. No spam
              <br></br>and no mis-selling.
            </p>
          </div>
        </div>

        <div className="mt-5 text-center">
          <button className="btn btn-primary fs-5 px-4 py-2"
          onClick={()=>navigate("/signup")}>
            Sign up for free
          </button>
        </div>
      </div>
    </div>
  );
}

export default Universe;
