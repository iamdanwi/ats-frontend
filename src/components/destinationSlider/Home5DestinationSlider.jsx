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

const Home5DestinationSlider = () => {
  const settings = useMemo(() => {
    return {
      slidesPerView: "auto",
      speed: 1500,
      spaceBetween: 25,
      // loop: true,
      navigation: {
        nextEl: ".destination-card3-slider-next",
        prevEl: ".destination-card3-slider-prev",
      },

      breakpoints: {
        280: {
          slidesPerView: 1,
        },
        386: {
          slidesPerView: 1,
        },
        576: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
        992: {
          slidesPerView: 4,
          spaceBetween: 15,
        },
        1200: {
          slidesPerView: 4,
          spaceBetween: 15,
        },
        1400: {
          slidesPerView: 4,
        },
      },
    };
  }, []);
  return (
    <>
      <div className="home5-destination-card-slider-section mb-120">
        <div className="container-fluid">
          <div className="destination-card-slider-wrap">
            <div className="row mb-50">
              <div className="col-lg-12">
                <div className="section-title4 text-center">
                  <div className="eg-section-tag">
                    <span>Exploring</span>
                  </div>
                  <h2>Finest Tourist Spot</h2>
                </div>
              </div>
            </div>
            <div className="destination-card-with-slider mb-50">
              <div className="row">
                <div className="col-lg-12">
                  <Swiper
                    {...settings}
                    className="swiper destination-card3-slider"
                  >
                    <div className="swiper-wrapper">
                      <SwiperSlide className="swiper-slide">
                        <div className="destination-card3">
                          <Link
                            href="/destination/destination-details"
                            className="destination-card-img"
                          >
                            <img
                              src="/assets/img/home5/destination-card3-img1.jpg"
                              alt=""
                            />
                          </Link>
                          <div className="destination-card-content">
                            <h4>
                              <Link href="/destination/destination-details">
                                New York
                              </Link>
                            </h4>
                          </div>
                          <div className="batch">
                            <span>5 Tour</span>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide className="swiper-slide">
                        <div className="destination-card3">
                          <Link
                            href="/destination/destination-details"
                            className="destination-card-img"
                          >
                            <img
                              src="/assets/img/home5/destination-card3-img2.jpg"
                              alt=""
                            />
                          </Link>
                          <div className="destination-card-content">
                            <h4>
                              <Link href="/destination/destination-details">
                                Brazil
                              </Link>
                            </h4>
                          </div>
                          <div className="batch">
                            <span>3 Tour</span>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide className="swiper-slide">
                        <div className="destination-card3">
                          <Link
                            href="/destination/destination-details"
                            className="destination-card-img"
                          >
                            <img
                              src="/assets/img/home5/destination-card3-img3.jpg"
                              alt=""
                            />
                          </Link>
                          <div className="destination-card-content">
                            <h4>
                              <Link href="/destination/destination-details">
                                Saudi Arab
                              </Link>
                            </h4>
                          </div>
                          <div className="batch">
                            <span>7 Tour</span>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide className="swiper-slide">
                        <div className="destination-card3">
                          <Link
                            href="/destination/destination-details"
                            className="destination-card-img"
                          >
                            <img
                              src="/assets/img/home5/destination-card3-img4.jpg"
                              alt=""
                            />
                          </Link>
                          <div className="destination-card-content">
                            <h4>
                              <Link href="/destination/destination-details">
                                India
                              </Link>
                            </h4>
                          </div>
                          <div className="batch">
                            <span>10 Tour</span>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide className="swiper-slide">
                        <div className="destination-card3">
                          <Link
                            href="/destination/destination-details"
                            className="destination-card-img"
                          >
                            <img
                              src="/assets/img/home5/destination-card3-img5.jpg"
                              alt=""
                            />
                          </Link>
                          <div className="destination-card-content">
                            <h4>
                              <Link href="/destination/destination-details">
                                Switzerland
                              </Link>
                            </h4>
                          </div>
                          <div className="batch">
                            <span>4 Tour</span>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide className="swiper-slide">
                        <div className="destination-card3">
                          <Link
                            href="/destination/destination-details"
                            className="destination-card-img"
                          >
                            <img
                              src="/assets/img/home5/destination-card3-img6.jpg"
                              alt=""
                            />
                          </Link>
                          <div className="destination-card-content">
                            <h4>
                              <Link href="/destination/destination-details">
                                Indonesia
                              </Link>
                            </h4>
                          </div>
                          <div className="batch">
                            <span>7 Tour</span>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide className="swiper-slide">
                        <div className="destination-card3">
                          <Link
                            href="/destination/destination-details"
                            className="destination-card-img"
                          >
                            <img
                              src="/assets/img/home5/destination-card3-img7.jpg"
                              alt=""
                            />
                          </Link>
                          <div className="destination-card-content">
                            <h4>
                              <Link href="/destination/destination-details">
                                Australia
                              </Link>
                            </h4>
                          </div>
                          <div className="batch">
                            <span>8 Tour</span>
                          </div>
                        </div>
                      </SwiperSlide>
                    </div>
                  </Swiper>
                </div>
              </div>
              <div className="slider-btn-grp2">
                <div className="slider-btn destination-card3-slider-prev">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={9}
                    height={17}
                    viewBox="0 0 9 17"
                  >
                    <path d="M8.83399 0.281832L8.72217 0.16683L0.500652 8.50016L8.72217 16.8335L8.83398 16.7185L8.83398 13.0602L4.33681 8.50016L8.83399 3.94016L8.83399 0.281832Z" />
                  </svg>
                </div>
                <div className="slider-btn destination-card3-slider-next">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={9}
                    height={17}
                    viewBox="0 0 9 17"
                    fill="none"
                  >
                    <path d="M0.166016 16.7182L0.277828 16.8332L8.49935 8.49984L0.277828 0.166504L0.166016 0.281504V3.93984L4.66319 8.49984L0.166016 13.0598V16.7182Z" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12 d-flex justify-content-center">
                <Link href="/destination" className="secondary-btn3">
                  <span>View All Destination</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home5DestinationSlider;
