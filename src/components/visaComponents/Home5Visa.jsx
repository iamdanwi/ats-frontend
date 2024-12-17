import Link from "next/link";
import React from "react";

const Home5Visa = () => {
  return (
    <>
      <div className="home5-visa-application-section mb-120">
        <div className="container-fliud">
          <div className="visa-application-wrapper">
            <div className="container">
              <div className="row mb-50">
                <div className="col-lg-12 d-flex align-items-center justify-content-between flex-wrap gap-3">
                  <div className="section-title4">
                    <div className="eg-section-tag">
                      <span>Need Visa</span>
                    </div>
                    <h2>Visa Processing</h2>
                  </div>
                  <Link href="/visa" className="secondary-btn3">
                    <span>View All Visa</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="package-card-area">
              <div className="row g-xl-4 gy-5">
                <div className="col-lg-6">
                  <div className="package-card4 two">
                    <div className="package-card-img">
                      <img
                        src="/assets/img/home5/package-card4-img1.jpg"
                        alt=""
                      />
                    </div>
                    <div className="package-card-content">
                      <div className="card-content-top">
                        <h5>Electronic Visa Adult with Fan with Insurance.</h5>
                        <ul>
                          <li>
                            <span>Country :</span> Australia
                          </li>
                          <li>
                            <span>Visa Type :</span> Tourist
                          </li>
                          <li>
                            <span>Visa Mode :</span> Electronic
                          </li>
                          <li>
                            <span>Validity :</span> 60 Days
                          </li>
                        </ul>
                      </div>
                      <div className="card-content-bottom">
                        <div className="price-area">
                          <span>Starting Form:</span>
                          <h6>
                            <strong>$</strong>1200 <span>Per Person</span>
                          </h6>
                        </div>
                        <Link href="/visas/visas-details" className="apply-btn">
                          Apply Now
                          <div className="arrow">
                            <i className="bi bi-arrow-right" />
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="package-card4 two">
                    <div className="package-card-img">
                      <img
                        src="/assets/img/home5/package-card4-img2.jpg"
                        alt=""
                      />
                    </div>
                    <div className="package-card-content">
                      <div className="card-content-top">
                        <h5>Grown-up E-visa with Cooling and Assurance.</h5>
                        <ul>
                          <li>
                            <span>Country :</span> Indonesia
                          </li>
                          <li>
                            <span>Visa Type :</span> Tourist
                          </li>
                          <li>
                            <span>Visa Mode :</span> Electronic
                          </li>
                          <li>
                            <span>Validity :</span> 60 Days
                          </li>
                        </ul>
                      </div>
                      <div className="card-content-bottom">
                        <div className="price-area">
                          <span>Starting Form:</span>
                          <h6>
                            <strong>$</strong>900 <span>Per Person</span>
                          </h6>
                        </div>
                        <Link href="/visas/visas-details" className="apply-btn">
                          Apply Now
                          <div className="arrow">
                            <i className="bi bi-arrow-right" />
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home5Visa;
