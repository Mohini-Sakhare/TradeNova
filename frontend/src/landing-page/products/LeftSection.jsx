import React from "react";
import { FaArrowRight } from "react-icons/fa";

function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container pt-5">
      <div className="row gx-5 gy-4 align-items-center">
        <div className="col-col-12 col-md-6">
          <img src={imageURL} alt={productName} className="img-fluid"></img>
        </div>
        <div className="col-12 col-md-6">
          <h1 className="mb-3 fs-2 lh-base">
            {productName}
          </h1>
          <p className="fs-6 lh-lg fw-normal mb-4">
            {productDescription}
          </p>
          <div className="row mb-3 text-center">
            <div className="col-6">
              <a href={tryDemo} className="btn btn-outline-primary w-100">
                Try Demo <FaArrowRight />
              </a>
            </div>
            <div className="col-6">
              <a href={learnMore} className="btn btn-outline-secondary w-100">
                Learn more<FaArrowRight />
              </a>
            </div>
          </div>
          <div className="row text-center">
            <div className="col-6 p-2">
              <a href={googlePlay}>
                <img src="Images/googlePlayBadge.svg" alt="Google play" className="img-fluid"></img>
              </a>
            </div>
            <div className="col-6 p-2">
              <a href={appStore}>
                <img src="Images/appstoreBadge.svg" alt="App store" className="img-fluid"></img>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
