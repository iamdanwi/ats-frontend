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

const Home4DestinationSlide = () => {
  const settings = useMemo(() => {
    return {
      slidesPerView: "auto",
      speed: 2000,
      spaceBetween: 25,
      navigation: {
        nextEl: ".home4-destination-card-next",
        prevEl: ".home4-destination-card-prev",
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
          slidesPerView: 2,
          spaceBetween: 15,
        },
        992: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
        1400: {
          slidesPerView: 3,
        },
      },
    };
  }, []);
  return (
    <>
      <div className="home4-destination-card-slider-section pt-120 mb-120">
        <div className="container">
          <div className="row mb-60">
            <div className="col-lg-12 d-flex align-items-center justify-content-between flex-wrap gap-3">
              <div className="section-title3">
                <h2>Find Top Destinations</h2>
                <p>
                  Etiam ac tortor id purus commodo vulputate. Vestibulum
                  porttitor erat felis and sed vehicula tortor malesuada
                  gravida. Mauris volutpat enim quis.
                </p>
              </div>
              <div className="slider-btn-grp5">
                <div className="slider-btn home4-destination-card-prev">
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
                <div className="slider-btn home4-destination-card-next">
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
          <div className="row mb-50">
            <div className="col-lg-12">
              <Swiper
                {...settings}
                className="swiper home4-destination-card-slider"
              >
                <div className="swiper-wrapper">
                  <SwiperSlide className="swiper-slide">
                    <div className="destination-card2 style-2">
                      <Link
                        href="/destination/destination-details"
                        className="destination-card-img"
                      >
                        <img
                          src="/assets/img/home4/destination-card-img1.jpg"
                          alt=""
                        />
                      </Link>
                      <div className="destination-card2-content-wrap">
                        <div className="eg-batch">
                          <div className="location">
                            <ul className="location-list">
                              <li>20 Tour</li>
                              <li>05 Adventure</li>
                            </ul>
                          </div>
                        </div>
                        <div className="destination-card2-content">
                          <span>Travel To</span>
                          <h4>
                            <Link href="/destination/destination-details">
                              New York
                            </Link>
                          </h4>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="destination-card2 style-2">
                      <Link
                        href="/destination/destination-details"
                        className="destination-card-img"
                      >
                        <img
                          src="/assets/img/home4/destination-card-img2.jpg"
                          alt=""
                        />
                      </Link>
                      <div className="destination-card2-content-wrap">
                        <div className="eg-batch">
                          <div className="location">
                            <ul className="location-list">
                              <li>20 Tour</li>
                              <li>05 Adventure</li>
                            </ul>
                          </div>
                        </div>
                        <div className="destination-card2-content">
                          <span>Travel To</span>
                          <h4>
                            <Link href="/destination/destination-details">
                              Indonesia
                            </Link>
                          </h4>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="destination-card2 style-2">
                      <Link
                        href="/destination/destination-details"
                        className="destination-card-img"
                      >
                        <img
                          src="/assets/img/home4/destination-card-img3.jpg"
                          alt=""
                        />
                      </Link>
                      <div className="destination-card2-content-wrap">
                        <div className="eg-batch">
                          <div className="location">
                            <ul className="location-list">
                              <li>20 Tour</li>
                              <li>05 Adventure</li>
                            </ul>
                          </div>
                        </div>
                        <div className="destination-card2-content">
                          <span>Travel To</span>
                          <h4>
                            <Link href="/destination/destination-details">
                              Saudi Arab
                            </Link>
                          </h4>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="destination-card2 style-2">
                      <Link
                        href="/destination/destination-details"
                        className="destination-card-img"
                      >
                        <img
                          src="/assets/img/home4/destination-card-img4.jpg"
                          alt=""
                        />
                      </Link>
                      <div className="destination-card2-content-wrap">
                        <div className="eg-batch">
                          <div className="location">
                            <ul className="location-list">
                              <li>20 Tour</li>
                              <li>05 Adventure</li>
                            </ul>
                          </div>
                        </div>
                        <div className="destination-card2-content">
                          <span>Travel To</span>
                          <h4>
                            <Link href="/destination/destination-details">
                              India
                            </Link>
                          </h4>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="destination-card2 style-2">
                      <Link
                        href="/destination/destination-details"
                        className="destination-card-img"
                      >
                        <img
                          src="/assets/img/home4/destination-card-img5.jpg"
                          alt=""
                        />
                      </Link>
                      <div className="destination-card2-content-wrap">
                        <div className="eg-batch">
                          <div className="location">
                            <ul className="location-list">
                              <li>20 Tour</li>
                              <li>05 Adventure</li>
                            </ul>
                          </div>
                        </div>
                        <div className="destination-card2-content">
                          <span>Travel To</span>
                          <h4>
                            <Link href="/destination/destination-details">
                              Brazil
                            </Link>
                          </h4>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="destination-card2 style-2">
                      <Link
                        href="/destination/destination-details"
                        className="destination-card-img"
                      >
                        <img
                          src="/assets/img/home4/destination-card-img6.jpg"
                          alt=""
                        />
                      </Link>
                      <div className="destination-card2-content-wrap">
                        <div className="eg-batch">
                          <div className="location">
                            <ul className="location-list">
                              <li>20 Tour</li>
                              <li>05 Adventure</li>
                            </ul>
                          </div>
                        </div>
                        <div className="destination-card2-content">
                          <span>Travel To</span>
                          <h4>
                            <Link href="/destination/destination-details">
                              Australia
                            </Link>
                          </h4>
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
              <Link href="/destination" className="primary-btn1">
                View All Destination
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home4DestinationSlide;
