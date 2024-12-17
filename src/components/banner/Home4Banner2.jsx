import Link from "next/link";
import React from "react";

const Home4Banner2 = () => {
  return (
    <>
      <div className="home4-banner2-area">
        <div className="slider-btn-grp2">
          <div className="slider-btn home4-banner2-slider-prev">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={8}
              height={14}
              viewBox="0 0 9 17"
            >
              <path d="M8.83399 0.281832L8.72217 0.16683L0.500652 8.50016L8.72217 16.8335L8.83398 16.7185L8.83398 13.0602L4.33681 8.50016L8.83399 3.94016L8.83399 0.281832Z" />
            </svg>
          </div>
          <div className="slider-btn home4-banner2-slider-next">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={8}
              height={14}
              viewBox="0 0 9 17"
              fill="none"
            >
              <path d="M0.166016 16.7182L0.277828 16.8332L8.49935 8.49984L0.277828 0.166504L0.166016 0.281504V3.93984L4.66319 8.49984L0.166016 13.0598V16.7182Z" />
            </svg>
          </div>
        </div>
        <div className="container-fluid">
          <div className="home4-banner2-wrapper">
            <div className="swiper home4-banner2-slider">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="row g-0 align-items-center">
                    <div className="col-lg-4 p-0">
                      <div className="home4-banner2-content">
                        <span>Let’s Travel</span>
                        <h2>
                          Honeymoon Tour <br /> <strong>25% Off</strong>
                        </h2>
                        <p>
                          Whatever your summer looks like, bring yourown heat
                          with up to 25% off Lumin Brand.
                        </p>
                        <Link href="/package/" className="secondary-btn1">
                          Book A Trip
                        </Link>
                      </div>
                    </div>
                    <div className="col-lg-8 p-0">
                      <div className="home4-banner2-img">
                        <img
                          src="/assets/img/home4/home4-banner2-img1.png"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="row g-0 align-items-center">
                    <div className="col-lg-4 p-0">
                      <div className="home4-banner2-content">
                        <span>Let’s Travel</span>
                        <h2>
                          Family Tour <br /> <strong>35% Off</strong>
                        </h2>
                        <p>
                          Whatever your summer looks like, bring yourown heat
                          with up to 35% off Lumin Brand.
                        </p>
                        <Link href="/package" className="secondary-btn1">
                          Book A Trip
                        </Link>
                      </div>
                    </div>
                    <div className="col-lg-8 p-0">
                      <div className="home4-banner2-img">
                        <img
                          src="/assets/img/home4/home4-banner2-img2.png"
                          alt=""
                        />
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

export default Home4Banner2;
