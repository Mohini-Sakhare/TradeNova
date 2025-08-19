import React from "react";

function Footer() {
  return (
    <footer className="bg-light border-top mt-5">
      <div className="container  mt-4 ">
        <div className="row mt-4 gy-4">
          <div className="col-12 col-md-3 text-center text-md-start">
            <img
              src="Images/TradeNova.jpg"
              alt="logo"
              className="img-fluid mb-3"
              style={{ maxWidth: "60%" }}
            />
            <p className="text-muted" style={{ fontSize: "12px" }}>
              &copy; 2010 - 2025, TradeNova Broking Ltd. All rights reserved.
            </p>
          </div>

          <div className="col-6 col-md-3">
            <p className="fs-5">Company</p>
            <div className="d-flex flex-column gap-1">
              <a href="#">About</a>
              <a href="#">Products</a>
              <a href="#">Pricing</a>
              <a href="#">Referral programme</a>
              <a href="#">Careers</a>
              <a href="#">TradeNova.tech</a>
              <a href="#">Open source</a>
              <a href="#">Press & media</a>
              <a href="#">TradeNova Cares (CSR)</a>
            </div>
          </div>

          <div className="col-6 col-md-3">
            <p className="fs-5">Support</p>
            <div className="d-flex flex-column gap-1">
              <a href="#">Contact us</a>
              <a href="#">Support portal</a>
              <a href="#">T-Connect blog</a>
              <a href="#">List of charges</a>
              <a href="#">Downloads & resources</a>
              <a href="#">Videos</a>
              <a href="#">Market overview</a>
              <a href="#">How to file a complaint?</a>
              <a href="#">Status of your complaints</a>
            </div>
          </div>

          <div className="col-12 col-md-3">
            <p className="fs-5">Account</p>
            <div className="d-flex flex-column gap-1">
              <a href="#">Open an account</a>
              <a href="#">Fund transfer</a>
            </div>
          </div>
        </div>

        <div className="mt-5 text-muted" style={{ fontSize: "10px" }}>
          <p>
            TradeNova Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration
            no.: INZ000031633 CDSL/NSDL: Depository services through TradeNova
            Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity
            Trading through TradeNova Commodities Pvt. Ltd. MCX: 46025; NSE-50001
            – SEBI Registration no.: INZ000038238 Registered Address: TradeNova
            Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence
            Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka,
            India. For any complaints pertaining to securities broking please
            write to <a href="">complaints@TradeNova.com</a>, for DP related to{" "}
            <a href="">dp@TradeNova.com.</a>
            Please ensure you carefully read the Risk Disclosure Document as
            prescribed by SEBI | ICF
          </p>
          <p>
            {" "}
            Procedure to file a complaint on <a href="">SEBI SCORES:</a>{" "}
            Register on SCORES portal. Mandatory details for filing complaints
            on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits:
            Effective Communication, Speedy redressal of the grievances{" "}
          </p>
          <p>
            <a href="">
              {" "}
              Smart Online Dispute Resolution | Grievances Redressal Mechanism{" "}
            </a>
          </p>
          <p>
            Investments in securities market are subject to market risks; read
            all the related documents carefully before investing.
          </p>
          <p>
            Attention investors: 1) Stock brokers can accept securities as
            margins from clients only by way of pledge in the depository system
            w.e.f September 01, 2020. 2) Update your e-mail and phone number
            with your stock broker / depository participant and receive OTP
            directly from depository on your e-mail and/or mobile number to
            create pledge. 3) Check your securities / MF / bonds in the
            consolidated account statement issued by NSDL/CDSL every month.
          </p>

          <p>
            "Prevent unauthorised transactions in your account. Update your
            mobile numbers/email IDs with your stock brokers. Receive
            information of your transactions directly from Exchange on your
            mobile/email at the end of the day. Issued in the interest of
            investors. KYC is one time exercise while dealing in securities
            markets - once KYC is done through a SEBI registered intermediary
            (broker, DP, Mutual Fund etc.), you need not undergo the same
            process again when you approach another intermediary." Dear
            Investor, if you are subscribing to an IPO, there is no need to
            issue a cheque. Please write the Bank account number and sign the
            IPO application form to authorize your bank to make payment in case
            of allotment. In case of non allotment the funds will remain in your
            bank account. As a business we don't give stock tips, and have not
            authorized anyone to trade on behalf of others. If you find anyone
            claiming to be part of TradeNova and offering such services, please
            <a href=""> create a ticket here</a>.
          </p>
        </div>

        <div className="footer-graveyard-links text-center">
          <ul className="list-inline">
            <li className="list-inline-item">
              <a href="https://nseindia.com">NSE</a>
            </li>
            <li className="list-inline-item">
              <a href="https://www.bseindia.com/">BSE</a>
            </li>
            <li className="list-inline-item">
              <a href="https://www.mcxindia.com/">MCX</a>
            </li>
            <li className="list-inline-item">
              <a href="https://zerodha.com/terms-and-conditions/">
                Terms & conditions
              </a>
            </li>
            <li className="list-inline-item">
              <a href="https://zerodha.com/policies-and-procedures/">
                Policies & procedures
              </a>
            </li>
            <li className="list-inline-item">
              <a href="https://zerodha.com/privacy-policy/">Privacy policy</a>
            </li>
            <li className="list-inline-item">
              <a href="https://zerodha.com/disclosure/">Disclosure</a>
            </li>
            <li className="list-inline-item">
              <a href="https://zerodha.com/investor-attention/">
                For investor's attention
              </a>
            </li>
            <li className="list-inline-item">
              <a href="https://zerodha.com/tos/investor-charter/">
                Investor charter
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
