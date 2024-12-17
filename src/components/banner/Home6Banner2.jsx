import Link from "next/link";
import React from "react";

const Home6Banner2 = () => {
  return (
    <>
      <div className="home6-banner2-area mb-120">
        <div className="row g-0 align-items-center justify-content-between">
          <div className="col-lg-4">
            <div className="home6-banner2-img">
              <img src="/assets/img/home6/banner2-left-img.png" alt="" />
            </div>
          </div>
          <div className="col-lg-4">
            <div className="home6-banner2-content">
              <span>Let’s Travel</span>
              <h2>
                Honeymoon Tour <br /> <strong>25% Off</strong>
              </h2>
              <p>
                Whatever your summer looks like, bring yourown heat with up to
                25% off Lumin Brand.
              </p>
              <Link href="/package" className="primary-btn1 two">
                Book A Trip
              </Link>
            </div>
          </div>
          <div className="col-lg-4 d-flex justify-content-end">
            <div className="home6-banner2-img">
              <img src="/assets/img/home6/banner2-right-img.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home6Banner2;
