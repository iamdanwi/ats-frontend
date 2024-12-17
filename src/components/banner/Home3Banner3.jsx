import Link from "next/link";
import React from "react";

const Home3Banner3 = () => {
  return (
    <>
      <div className="home3-banner2-section">
        <div className="container">
          <div className="row mb-50">
            <div className="col-lg-12 d-flex justify-content-center">
              <div className="section-title2 two text-center">
                <h2>Display Special Deals </h2>
                <p>
                  Etiam ac tortor id purus commodo vulputate. Vestibulum
                  porttitor erat felis and sed vehicula tortor malesuada
                  gravida. Mauris volutpat enim quis.
                </p>
              </div>
            </div>
          </div>
          <div className="banner2-wrapper">
            <div className="row g-4">
              <div className="col-lg-6">
                <div className="row">
                  <div className="col-lg-12 mb-30">
                    <div className="banner4-card four">
                      <img
                        src="/assets/img/home3/banner4-card-img1.png"
                        alt=""
                      />
                      <div className="banner4-content-wrapper">
                        <div className="banner4-content">
                          <span>Savings worldwide</span>
                          <h3>20% Off</h3>
                          <Link href="/package" className="text">
                            Discover Great Deal
                          </Link>
                          <Link href="/package" className="primary-btn1">
                            View This Trip
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="banner2-card five">
                      <img
                        src="/assets/img/home3/banner4-card-img2.png"
                        alt=""
                      />
                      <div className="banner2-content-wrap d-flex align-items-center">
                        <div className="w-100 d-flex flex-column align-items-end">
                          <div className="banner2-content">
                            <span>Savings worldwide</span>
                            <h5>
                              Up to <span>40%</span> Off Honeymoon.
                            </h5>
                            <Link href="/package" className="secondary-btn1">
                              View This Trip
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="banner2-card six">
                  <img src="/assets/img/home3/banner2-card-img1.png" alt="" />
                  <div className="banner2-content-wrap">
                    <div className="banner2-content">
                      <h3>
                        Honeymoon Package <br />
                        <span>25%</span> off
                      </h3>
                      <p>
                        Whatever your summer looks like, bring yourown heat with
                        up to 25% off Lumin Brand.
                      </p>
                      <Link href="/package">
                        View This Trip
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={17}
                          height={17}
                          viewBox="0 0 17 17"
                        >
                          <path d="M7.70294 9.65818L7.27464 11.6673L5.29549 17.0003L6.47016 16.8046L11.9577 9.62856C12.7321 9.6016 13.4832 9.56006 14.1359 9.49563C17.1552 9.19702 16.9986 8.50013 16.9986 8.50013C16.9986 8.50013 17.1552 7.80325 14.1358 7.50464C13.4832 7.43995 12.7321 7.39845 11.9576 7.3717L6.47019 0.195477L5.29549 -5.1162e-07L7.27464 5.33303L7.70294 7.34212C6.69752 7.35717 6.01715 7.38006 6.01715 7.38006C6.01715 7.38006 4.63017 7.41207 2.48417 7.8956L0.734503 5.46859L-8.41624e-05 5.46859L0.523018 8.41949C0.428867 8.44835 0.428867 8.55195 0.523018 8.58081L-8.44274e-05 11.5317L0.734502 11.5317L2.48417 9.10495C4.63017 9.58848 6.01715 9.62001 6.01715 9.62001C6.01715 9.62001 6.69752 9.64317 7.70294 9.65818Z" />
                          <path d="M11.4004 11.2692L11.4004 12.0613L8.47265 12.0613L8.47265 11.2692L11.4004 11.2692ZM11.4004 4.94234L11.4004 5.73425L8.47282 5.73425L8.47282 4.94234L11.4004 4.94234ZM9.42515 13.9276L9.42515 14.7195L6.71923 14.7195L6.71923 13.9276L9.42515 13.9276ZM9.42515 2.28418L9.42515 3.07634L6.71924 3.07634L6.71924 2.28418L9.42515 2.28418Z" />
                        </svg>
                      </Link>
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

export default Home3Banner3;
