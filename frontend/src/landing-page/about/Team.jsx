import React from "react";

function Team() {
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-12 text-center">
          <h2 className="mb-5">People</h2>
        </div>
      </div>

      <div className="row align-items-center gy-4 gx-5">
        <div className="col-12 col-md-5 text-center ">
          <div className="d-flex flex-column align-items-center">
            <img
              src="Images/Mohini.JPG"
              alt="Portrait of Mohini Sakhare"
              className="img-fluid rounded-circle mb-3 "
              style={{
                width: "280px",
                objectFit: "cover",
              }}
            />
            <h5 className="mb-1">Mohini Sakhare</h5>
            <p className="text-muted lh-lg">TradeNova Creator</p>
          </div>
        </div>
        <div className="col-12 col-md-7">
          <p>
            I am a <b>Computer Engineer and Frontend-Focused MERN Full Stack Web
            Developer</b>, passionate about building intuitive, high-performance web
            applications.
          </p>
          <p>
            I independently bootstrapped the <b>TradeNova</b> project, drawing
            inspiration from <b>Zerodha</b>. This project includes two distinct
            frontends and one backend. The first frontend, <b>TradeNova, mirrors </b>
            the design and functionality of <b>Zerodha's main interface</b>, while the
            second frontend, <b>TradeWing</b>, is inspired by the <b>Zerodha Kite </b>
            platform. The backend was developed to dynamically serve trading
            data to both frontends and display the interaction.
          </p>
          <p>
            Through this journey, I deepened my technical expertise and
            significantly sharpened my coding skills.
          </p>
          <p>I am passionate about coding and built web applications.</p>
          <p>
            Connect on <a href="https://www.linkedin.com/in/mohini-sakhare-7720bb12b/">LinkedIn</a> / <a href="https://github.com/Mohini-Sakhare">GitHub</a> /{" "}
            <a href="">Portfolio</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
