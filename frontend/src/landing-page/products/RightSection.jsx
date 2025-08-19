import React from "react";
import { FaArrowRight } from "react-icons/fa";

function RightSection({
  productName,
  productDescription,
  learnMore,
  imageURL,
}) {
  return (
    <div className="container py-5">
      <div className="row gx-5 gy-4 align-items-center">
        <div className="col-12 col-md-6 d-flex flex-column justify-content-center">
          <h1 className="mb-3 fs-2 lh-base">
            {productName}
          </h1>
          <p className="mb-4 fs-6 lh-lg fw-normal">
            {productDescription}
          </p>
          <div>
            <a href={learnMore} className="btn btn-outline-primary">
              Learn more <FaArrowRight />
            </a>
          </div>
        </div>

        <div className="col-12 col-md-6">
          <img src={imageURL} alt={productName} className="img-fluid"></img>
        </div>
      </div>
    </div>
  );
}

export default RightSection;
