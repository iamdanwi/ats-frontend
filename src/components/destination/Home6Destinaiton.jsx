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

const Home6Destinaiton = () => {
  const settings = useMemo(() => {
    return {
      slidesPerView: "auto",
      speed: 2000,
      spaceBetween: 15,
      navigation: {
        nextEl: ".activity-card-slider-next",
        prevEl: ".activity-card-slider-prev",
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
          slidesPerView: 2,
          spaceBetween: 15,
        },
        992: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
        1200: {
          slidesPerView: 4,
          spaceBetween: 15,
        },
        1400: {
          slidesPerView: 4,
        },
        1700: {
          slidesPerView: 5,
        },
      },
    };
  }, []);
  return (
    <>
      <div className="home6-destination-card-slider-section mb-120">
        <div className="row mb-50">
          <div className="col-lg-12">
            <div className="section-title5 text-center">
              <span>
                Destinations
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  viewBox="0 0 20 20"
                >
                  <g opacity="0.8">
                    <path d="M9.06226 11.3626L8.55838 13.7263L6.22997 20.0004L7.61194 19.7701L14.0678 11.3277C14.979 11.296 15.8626 11.2471 16.6304 11.1713C20.1826 10.82 19.9984 10.0002 19.9984 10.0002C19.9984 10.0002 20.1826 9.18031 16.6304 8.829C15.8626 8.7529 14.9789 8.70407 14.0678 8.67261L7.61197 0.229974L6.22997 -6.01907e-07L8.55838 6.27416L9.06226 8.6378C7.87942 8.6555 7.07898 8.68244 7.07898 8.68244C7.07898 8.68244 5.44724 8.7201 2.92253 9.28895L0.864093 6.43364L-0.000128074 6.43364L0.615287 9.90529C0.504522 9.93924 0.504522 10.0611 0.615287 10.0951L-0.000128385 13.5667L0.864093 13.5667L2.92253 10.7117C5.44724 11.2806 7.07898 11.3177 7.07898 11.3177C7.07898 11.3177 7.87942 11.3449 9.06226 11.3626Z" />
                    <path d="M13.4102 13.2575L13.4102 14.1895L9.96575 14.1895L9.96575 13.2575L13.4102 13.2575ZM13.4102 5.81414L13.4102 6.7458L9.96595 6.7458L9.96595 5.81414L13.4102 5.81414ZM11.0863 16.385L11.0863 17.3167L7.90291 17.3167L7.90291 16.385L11.0863 16.385ZM11.0863 2.68689L11.0863 3.61885L7.90291 3.61885L7.90291 2.68689L11.0863 2.68689Z" />
                  </g>
                </svg>
              </span>
              <h2>Explore the World</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <Swiper
              {...settings}
              className="swiper home6-destination-card-slider"
            >
              <div className="swiper-wrapper">
                <SwiperSlide className="swiper-slide">
                  <div className="destination-card4">
                    <Link
                      href="/destination/destination-details"
                      className="card-img"
                    >
                      <img
                        src="/assets/img/home6/destination-card-img1.jpg"
                        alt=""
                      />
                    </Link>
                    <div className="card-content-wrap">
                      <div className="batch">
                        <ul>
                          <li>5 Tour</li>
                          <li>10 Hotel</li>
                        </ul>
                      </div>
                      <div className="card-content">
                        <h4>
                          <Link href="/destination/destination-details">
                            Switzerland
                          </Link>
                        </h4>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="destination-card4">
                    <Link
                      href="/destination/destination-details"
                      className="card-img"
                    >
                      <img
                        src="/assets/img/home6/destination-card-img2.jpg"
                        alt=""
                      />
                    </Link>
                    <div className="card-content-wrap">
                      <div className="batch">
                        <ul>
                          <li>3 Tour</li>
                          <li>8 Hotel</li>
                        </ul>
                      </div>
                      <div className="card-content">
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
                  <div className="destination-card4">
                    <Link
                      href="/destination/destination-details"
                      className="card-img"
                    >
                      <img
                        src="/assets/img/home6/destination-card-img3.jpg"
                        alt=""
                      />
                    </Link>
                    <div className="card-content-wrap">
                      <div className="batch">
                        <ul>
                          <li>8 Tour</li>
                          <li>20 Hotel</li>
                        </ul>
                      </div>
                      <div className="card-content">
                        <h4>
                          <Link href="/destination/destination-details">
                            Egypt
                          </Link>
                        </h4>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="destination-card4">
                    <Link
                      href="/destination/destination-details"
                      className="card-img"
                    >
                      <img
                        src="/assets/img/home6/destination-card-img4.jpg"
                        alt=""
                      />
                    </Link>
                    <div className="card-content-wrap">
                      <div className="batch">
                        <ul>
                          <li>8 Tour</li>
                          <li>20 Hotel</li>
                        </ul>
                      </div>
                      <div className="card-content">
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
                  <div className="destination-card4">
                    <Link
                      href="/destination/destination-details"
                      className="card-img"
                    >
                      <img
                        src="/assets/img/home6/destination-card-img5.jpg"
                        alt=""
                      />
                    </Link>
                    <div className="card-content-wrap">
                      <div className="batch">
                        <ul>
                          <li>6 Tour</li>
                          <li>15 Hotel</li>
                        </ul>
                      </div>
                      <div className="card-content">
                        <h4>
                          <Link href="/destination/destination-details">
                            Australia
                          </Link>
                        </h4>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="destination-card4">
                    <Link
                      href="/destination/destination-details"
                      className="card-img"
                    >
                      <img
                        src="/assets/img/home6/destination-card-img6.jpg"
                        alt=""
                      />
                    </Link>
                    <div className="card-content-wrap">
                      <div className="batch">
                        <ul>
                          <li>2 Tour</li>
                          <li>8 Hotel</li>
                        </ul>
                      </div>
                      <div className="card-content">
                        <h4>
                          <Link href="/destination/destination-details">
                            Turkey
                          </Link>
                        </h4>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="destination-card4">
                    <Link
                      href="/destination/destination-details"
                      className="card-img"
                    >
                      <img
                        src="/assets/img/home6/destination-card-img7.jpg"
                        alt=""
                      />
                    </Link>
                    <div className="card-content-wrap">
                      <div className="batch">
                        <ul>
                          <li>6 Tour</li>
                          <li>12 Hotel</li>
                        </ul>
                      </div>
                      <div className="card-content">
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
                  <div className="destination-card4">
                    <Link
                      href="/destination/destination-details"
                      className="card-img"
                    >
                      <img
                        src="/assets/img/home6/destination-card-img8.jpg"
                        alt=""
                      />
                    </Link>
                    <div className="card-content-wrap">
                      <div className="batch">
                        <ul>
                          <li>9 Tour</li>
                          <li>20 Hotel</li>
                        </ul>
                      </div>
                      <div className="card-content">
                        <h4>
                          <Link href="/destination/destination-details">
                            India
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
        <div className="container one mt-30">
          <div className="row">
            <div className="col-lg-12">
              <div className="slider-btn-grp two d-md-flex d-none justify-content-between">
                <div className="slider-btn activity-card-slider-prev">
                  <i className="bi bi-arrow-left" />
                </div>
                <Link href="/destination" className="secondary-btn4">
                  View All Destination
                </Link>
                <div className="slider-btn activity-card-slider-next">
                  <i className="bi bi-arrow-right" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home6Destinaiton;
