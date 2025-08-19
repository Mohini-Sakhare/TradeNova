import React from "react";
import { MdOutlineBarChart } from "react-icons/md";
import { FiUser } from "react-icons/fi";
import { FiPlusCircle } from "react-icons/fi";
import { TbCoinRupee } from "react-icons/tb";
import { RiProgress3Line } from "react-icons/ri";
import { RiRefundLine } from "react-icons/ri";

function CreateTicket() {
  return (
    <div className="container mt-5 ">
      <div className="row">
        <div className="col-12 col-md-9">
          <div className="accordion" id="mainAccordion">
            <div className="accordion-item">
              <p className="accordion-header" id="headingOne">
                <button
                  className="accordion-button collapsed gap-3 border-bottom"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="false"
                  aria-controls="collapseOne"
                >
                  <FiPlusCircle className="fs-3 border-end text-primary " />
                  <h5>Account opening</h5>
                </button>
              </p>
              <div
                id="collapseOne"
                className="accordion-collapse collapse"
                aria-labelledby="headingOne"
                data-bs-parent="#mainAccordion"
              >
                <ul className="m-3">
                  <a href="">
                    <li className="p-2">Resident individual</li>
                  </a>
                  <a href="">
                    <li className="p-2">Minor</li>
                  </a>
                  <a href="">
                    <li className="p-2">Non Resident Indian (NRI)</li>
                  </a>
                  <a href="">
                    <li className="p-2">Company, Partnership, HUF and LLP</li>
                  </a>
                  <a href="">
                    <li className="p-2">Glossary</li>
                  </a>
                </ul>
              </div>
            </div>
          

          
            <div className="accordion-item mt-3 border-top">
              <h5 className="accordion-header" id="headingTwo">
                <button
                  className="accordion-button collapsed gap-3 border-bottom"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  <FiUser className="fs-3 border-end text-primary " />
                  <h5>Your TradeNova Account</h5>
                </button>
              </h5>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#mainAccordion"

              >
                <ul className="m-3">
                  <a href="">
                    <li className="p-2">Your Profile</li>
                  </a>
                  <a href="">
                    <li className="p-2">Account modification</li>
                  </a>
                  <a href="">
                    <li className="p-2">
                      Client Master Report (CMR) and Depository Participant (DP){" "}
                    </li>
                  </a>
                  <a href="">
                    <li className="p-2">Nomination</li>
                  </a>
                  <a href="">
                    <li className="p-2">
                      Transfer and conversion of securities
                    </li>
                  </a>
                </ul>
              </div>
            </div>
          
            <div className="accordion-item mt-3 border-top" >
              <h5 className="accordion-header" id="headingThree">
                <button
                  className="accordion-button collapsed gap-3 border-bottom"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  <MdOutlineBarChart className="fs-3 border-end text-primary " />
                  <h5>TradeWing</h5>
                </button>
              </h5>
              <div
                id="collapseThree"
                className="accordion-collapse collapse "
                aria-labelledby="headingThree"
                 data-bs-parent="#mainAccordion"
              >
                <ul className="m-3">
                  <a href="">
                    <li className="p-2">IPO</li>
                  </a>
                  <a href="">
                    <li className="p-2">Trading FAQs</li>
                  </a>
                  <a href="">
                    <li className="p-2">
                      Margin Trading Facility (MTF) and Margins{" "}
                    </li>
                  </a>
                  <a href="">
                    <li className="p-2">Charts and Orders</li>
                  </a>
                  <a href="">
                    <li className="p-2">Alerts and Nudges</li>
                  </a>
                  <a href="">
                    <li className="p-2">General</li>
                  </a>
                </ul>
              </div>
            </div>
          
            <div className="accordion-item mt-3 border-top">
              <h5 className="accordion-header" id="headingFour">
                <button
                  className="accordion-button collapsed gap-3 border-bottom"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFour"
                  aria-expanded="false"
                  aria-controls="collapseFour"
                >
                  <RiRefundLine className="fs-3 border-end text-primary " />
                  <h5>Funds</h5>
                </button>
              </h5>
              <div
                id="collapseFour"
                className="accordion-collapse collapse "
                aria-labelledby="headingFour"
      data-bs-parent="#mainAccordion"
              >
                <ul className="m-3">
                  <a href="">
                    <li className="p-2">Add money</li>
                  </a>
                  <a href="">
                    <li className="p-2">Withdraw money</li>
                  </a>
                  <a href="">
                    <li className="p-2">Add bank accounts</li>
                  </a>
                  <a href="">
                    <li className="p-2">eMandates</li>
                  </a>
                </ul>
              </div>
            </div>
          
            <div className="accordion-item mt-3 border-top">
              <h5 className="accordion-header" id="headingFive">
                <button
                  className="accordion-button collapsed gap-3 border-bottom"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFive"
                  aria-expanded="false"
                  aria-controls="collapseFive"
                >
                  <RiProgress3Line className="fs-3 border-end text-primary " />
                  <h5>Console</h5>
                </button>
              </h5>
              <div
                id="collapseFive"
                className="accordion-collapse collapse"
                aria-labelledby="headingFive"
      data-bs-parent="#mainAccordion"
              >
                <ul className="m-3">
                  <a href="">
                    <li className="p-2">Portfolio</li>
                  </a>
                  <a href="">
                    <li className="p-2">Corporate actions</li>
                  </a>
                  <a href="">
                    <li className="p-2">Funds statement</li>
                  </a>
                  <a href="">
                    <li className="p-2">Reports</li>
                  </a>
                  <a href="">
                    <li className="p-2">Profile</li>
                  </a>
                  <a href="">
                    <li className="p-2">Segments</li>
                  </a>
                </ul>
              </div>
            </div>
          
            <div className="accordion-item mt-3 border-top">
              <h5 className="accordion-header" id="headingSix">
                <button
                  className="accordion-button collapsed gap-3 border-bottom"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseSix"
                  aria-expanded="false"
                  aria-controls="collapseSix"
                >
                  <TbCoinRupee className="fs-3 border-end text-primary " />
                  <h5>Coin</h5>
                </button>
              </h5>
              <div
                id="collapseSix"
                className="accordion-collapse collapse"
                aria-labelledby="headingSix"
      data-bs-parent="#mainAccordion"
              >
                <ul className="m-3">
                  <a href="">
                    <li className="p-2">Mutual funds</li>
                  </a>
                  <a href="">
                    <li className="p-2">National Pension Scheme (NPS)</li>
                  </a>
                  <a href="">
                    <li className="p-2">Fixed Deposite (FD) </li>
                  </a>
                  <a href="">
                    <li className="p-2">Features on Coin</li>
                  </a>
                  <a href="">
                    <li className="p-2">Payments and Orders</li>
                  </a>
                  <a href="">
                    <li className="p-2">General</li>
                  </a>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-3 mt-2 w-full">
          <ul className="bg-danger-subtle border-start border-warning border-5 p-4">
            <a href="#">
              <li>
                Exclusion of F&O contracts on 8 securities from August 29, 2025
              </li>{" "}
            </a>
            <a href="#">
              <li>
                Revision in expiry day of Index and Stock derivatives contracts
              </li>
            </a>
          </ul>
          <div className="border border-light-subtle ">
            <h5 className="bg-secondary-subtle p-2">Quick links</h5>
            <div className="border-bottom p-3">
              <a href=""> 1. Track account opening</a>
            </div>

            <div className="border-bottom p-3 ">
              <a href=""> 2. Track segment activation</a>
            </div>

            <div className="border-bottom p-3">
              <a href=""> 3. Intraday margins</a>
            </div>

            <div className="border-bottom p-3">
              <a href=""> 4. TradeNova user manual</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateTicket;
