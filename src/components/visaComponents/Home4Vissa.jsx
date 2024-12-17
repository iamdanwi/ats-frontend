"use client";
import React, { useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper";
import Link from "next/link";
SwiperCore.use([Autoplay, EffectFade, Navigation, Pagination]);

const Home4Vissa = () => {
  const settings = useMemo(() => {
    return {
      slidesPerView: "auto",
      speed: 2000,
      spaceBetween: 25,
      navigation: {
        nextEl: ".package-card4-slider-next",
        prevEl: ".package-card4-slider-prev",
      },

      breakpoints: {
        280: {
          slidesPerView: 1,
        },
        386: {
          slidesPerView: 1,
        },
        576: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        768: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        992: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        1200: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        1400: {
          slidesPerView: 2,
        },
      },
    };
  }, []);
  return (
    <>
      <div className="home4-visa-application-section mb-120">
        <div className="container">
          <div className="row mb-50">
            <div className="col-lg-12 d-flex align-items-center justify-content-between flex-wrap gap-3">
              <div className="section-title3">
                <h2>Visa Processing</h2>
                <p>
                  Etiam ac tortor id purus commodo vulputate. Vestibulum
                  porttitor erat felis and sed vehicula tortor malesuada
                  gravida. Mauris volutpat enim.
                </p>
              </div>
              <Link href="/visa" className="view-btn">
                View All Visa
                <div className="arrow">
                  <svg
                    width={18}
                    height={16}
                    viewBox="0 0 18 16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.73828 11.75L15.6103 4.31833"
                      strokeLinecap="round"
                    />
                    <path
                      d="M13.3477 10.3057L15.6115 4.31789L9.29402 3.28456"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="package-card4-slider-wrapper">
          <div className="container-fluid">
            <div className="row mb-50">
              <div className="col-lg-12">
                <Swiper {...settings} className="swiper package-card4-slider">
                  <div className="swiper-wrapper">
                    <SwiperSlide className="swiper-slide">
                      <div className="package-card4">
                        <Link
                          href="/visas/visas-details"
                          className="package-card-img"
                        >
                          <img
                            src="/assets/img/home4/package-card4-img1.jpg"
                            alt=""
                          />
                        </Link>
                        <div className="package-card-content">
                          <div className="card-content-top">
                            <h5>
                              Electronic Visa Adult with Fan with Insurance.
                            </h5>
                            <ul>
                              <li>
                                <span>Country :</span> New York
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
                              <li>
                                <span>Processing Time :</span> 7-10 Working Day
                              </li>
                            </ul>
                          </div>
                          <div className="card-content-bottom">
                            <div className="price-area">
                              <span>Starting Form:</span>
                              <h6>
                                <strong>$</strong>3860 <span>Per Person</span>
                              </h6>
                            </div>
                            <Link
                              href="/visas/visas-details"
                              className="apply-btn"
                            >
                              Apply Now
                              <div className="arrow">
                                <i className="bi bi-arrow-right" />
                              </div>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <div className="package-card4">
                        <Link
                          href="/visas/visas-details"
                          className="package-card-img"
                        >
                          <img
                            src="/assets/img/home4/package-card4-img2.jpg"
                            alt=""
                          />
                        </Link>
                        <div className="package-card-content">
                          <div className="card-content-top">
                            <h5>Grown-up E-visa with Cooling and Assurance.</h5>
                            <ul>
                              <li>
                                <span>Country :</span> New York
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
                              <li>
                                <span>Processing Time :</span> 7-10 Working Day
                              </li>
                            </ul>
                          </div>
                          <div className="card-content-bottom">
                            <div className="price-area">
                              <span>Starting Form:</span>
                              <h6>
                                <strong>$</strong>3860 <span>Per Person</span>
                              </h6>
                            </div>
                            <Link
                              href="/visas/visas-details"
                              className="apply-btn"
                            >
                              Apply Now
                              <div className="arrow">
                                <i className="bi bi-arrow-right" />
                              </div>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <div className="package-card4">
                        <Link
                          href="/visas/visas-details"
                          className="package-card-img"
                        >
                          <img
                            src="/assets/img/home4/package-card4-img1.jpg"
                            alt=""
                          />
                        </Link>
                        <div className="package-card-content">
                          <div className="card-content-top">
                            <h5>
                              Electronic Visa Adult with Fan with Insurance.
                            </h5>
                            <ul>
                              <li>
                                <span>Country :</span> New York
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
                              <li>
                                <span>Processing Time :</span> 7-10 Working Day
                              </li>
                            </ul>
                          </div>
                          <div className="card-content-bottom">
                            <div className="price-area">
                              <span>Starting Form:</span>
                              <h6>
                                <strong>$</strong>3860 <span>Per Person</span>
                              </h6>
                            </div>
                            <Link
                              href="/visas/visas-details"
                              className="apply-btn"
                            >
                              Apply Now
                              <div className="arrow">
                                <i className="bi bi-arrow-right" />
                              </div>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <div className="package-card4">
                        <Link
                          href="/visas/visas-details"
                          className="package-card-img"
                        >
                          <img
                            src="/assets/img/home4/package-card4-img2.jpg"
                            alt=""
                          />
                        </Link>
                        <div className="package-card-content">
                          <div className="card-content-top">
                            <h5>Grown-up E-visa with Cooling and Assurance.</h5>
                            <ul>
                              <li>
                                <span>Country :</span> New York
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
                              <li>
                                <span>Processing Time :</span> 7-10 Working Day
                              </li>
                            </ul>
                          </div>
                          <div className="card-content-bottom">
                            <div className="price-area">
                              <span>Starting Form:</span>
                              <h6>
                                <strong>$</strong>3860 <span>Per Person</span>
                              </h6>
                            </div>
                            <Link
                              href="/visas/visas-details"
                              className="apply-btn"
                            >
                              Apply Now
                              <div className="arrow">
                                <i className="bi bi-arrow-right" />
                              </div>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  </div>
                </Swiper>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12 d-flex justify-content-center">
                <div className="slider-btn-grp5">
                  <div className="slider-btn package-card4-slider-prev">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={43}
                      height={14}
                      viewBox="0 0 43 14"
                    >
                      <path
                        d="M42 7.18797L1.14917 7.18797M6.8649 13L1 7L6.86491 0.999997"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="slider-btn package-card4-slider-next">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={43}
                      height={14}
                      viewBox="0 0 43 14"
                    >
                      <path
                        d="M1 6.81204H41.8508M36.1351 1.00002L42 7.00002L36.1351 13"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
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

export default Home4Vissa;
