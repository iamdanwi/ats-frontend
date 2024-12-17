"use client";
import React, { useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper";
SwiperCore.use([Autoplay, EffectFade, Navigation, Pagination]);

const Home6Team = () => {
  const settings = useMemo(() => {
    return {
      slidesPerView: "auto",
      speed: 1500,
      spaceBetween: 25,
      navigation: {
        nextEl: ".teams-card-next",
        prevEl: ".teams-card-prev",
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
      },
    };
  }, []);
  return (
    <>
      <div className="home6-teams-section mb-120">
        <div className="container one">
          <div className="row mb-50">
            <div className="col-lg-12 d-flex align-items-center justify-content-between flex-wrap gap-3">
              <div className="section-title5">
                <span>
                  Our Guide
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
                <h2>Guide For Traveler's</h2>
              </div>
              <div className="slider-btn-grp two d-md-flex d-none">
                <div className="slider-btn teams-card-prev">
                  <i className="bi bi-arrow-left" />
                </div>
                <div className="slider-btn teams-card-next">
                  <i className="bi bi-arrow-right" />
                </div>
              </div>
            </div>
          </div>
          <div className="teams-slider-area">
            <div className="row">
              <div className="col-lg-12">
                <Swiper {...settings} className="swiper teams-card-slider">
                  <div className="swiper-wrapper">
                    <SwiperSlide className="swiper-slide">
                      <div className="teams-card2 style-4">
                        <div className="teams-img">
                          <img
                            src="/assets/img/home3/teams-card2-img1.png"
                            alt=""
                          />
                          <ul className="social-list">
                            <li>
                              <a href="https://www.instagram.com/">
                                <i className="bx bxl-instagram" />
                              </a>
                            </li>
                            <li>
                              <a href="https://www.pinterest.com/">
                                <i className="bx bxl-pinterest-alt" />
                              </a>
                            </li>
                            <li>
                              <a href="https://twitter.com/">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={16}
                                  height={16}
                                  fill="currentColor"
                                  className="bi bi-twitter-x"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z" />
                                </svg>
                              </a>
                            </li>
                            <li>
                              <a href="https://www.facebook.com/">
                                <i className="bx bxl-facebook" />
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="teams-content">
                          <h4>Asher Samuel</h4>
                          <span>Tour Guide</span>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <div className="teams-card2 style-4">
                        <div className="teams-img">
                          <img
                            src="/assets/img/home3/teams-card2-img5.png"
                            alt=""
                          />
                          <ul className="social-list">
                            <li>
                              <a href="https://www.instagram.com/">
                                <i className="bx bxl-instagram" />
                              </a>
                            </li>
                            <li>
                              <a href="https://www.pinterest.com/">
                                <i className="bx bxl-pinterest-alt" />
                              </a>
                            </li>
                            <li>
                              <a href="https://twitter.com/">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={16}
                                  height={16}
                                  fill="currentColor"
                                  className="bi bi-twitter-x"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z" />
                                </svg>
                              </a>
                            </li>
                            <li>
                              <a href="https://www.facebook.com/">
                                <i className="bx bxl-facebook" />
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="teams-content">
                          <h4>Dani Alves</h4>
                          <span>Tour Guide</span>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <div className="teams-card2 style-4">
                        <div className="teams-img">
                          <img
                            src="/assets/img/home3/teams-card2-img3.png"
                            alt=""
                          />
                          <ul className="social-list">
                            <li>
                              <a href="https://www.instagram.com/">
                                <i className="bx bxl-instagram" />
                              </a>
                            </li>
                            <li>
                              <a href="https://www.pinterest.com/">
                                <i className="bx bxl-pinterest-alt" />
                              </a>
                            </li>
                            <li>
                              <a href="https://twitter.com/">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={16}
                                  height={16}
                                  fill="currentColor"
                                  className="bi bi-twitter-x"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z" />
                                </svg>
                              </a>
                            </li>
                            <li>
                              <a href="https://www.facebook.com/">
                                <i className="bx bxl-facebook" />
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="teams-content">
                          <h4>Lucas Mora</h4>
                          <span>Tour Guide</span>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <div className="teams-card2 style-4">
                        <div className="teams-img">
                          <img
                            src="/assets/img/home3/teams-card2-img4.png"
                            alt=""
                          />
                          <ul className="social-list">
                            <li>
                              <a href="https://www.instagram.com/">
                                <i className="bx bxl-instagram" />
                              </a>
                            </li>
                            <li>
                              <a href="https://www.pinterest.com/">
                                <i className="bx bxl-pinterest-alt" />
                              </a>
                            </li>
                            <li>
                              <a href="https://twitter.com/">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={16}
                                  height={16}
                                  fill="currentColor"
                                  className="bi bi-twitter-x"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z" />
                                </svg>
                              </a>
                            </li>
                            <li>
                              <a href="https://www.facebook.com/">
                                <i className="bx bxl-facebook" />
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="teams-content">
                          <h4>Mason Ezra</h4>
                          <span>Tour Guide</span>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <div className="teams-card2 style-4">
                        <div className="teams-img">
                          <img
                            src="/assets/img/home3/teams-card2-img2.png"
                            alt=""
                          />
                          <ul className="social-list">
                            <li>
                              <a href="https://www.instagram.com/">
                                <i className="bx bxl-instagram" />
                              </a>
                            </li>
                            <li>
                              <a href="https://www.pinterest.com/">
                                <i className="bx bxl-pinterest-alt" />
                              </a>
                            </li>
                            <li>
                              <a href="https://twitter.com/">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={16}
                                  height={16}
                                  fill="currentColor"
                                  className="bi bi-twitter-x"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z" />
                                </svg>
                              </a>
                            </li>
                            <li>
                              <a href="https://www.facebook.com/">
                                <i className="bx bxl-facebook" />
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="teams-content">
                          <h4>Ethan James</h4>
                          <span>Tour Guide</span>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <div className="teams-card2 style-4">
                        <div className="teams-img">
                          <img
                            src="/assets/img/home3/teams-card2-img6.png"
                            alt=""
                          />
                          <ul className="social-list">
                            <li>
                              <a href="https://www.instagram.com/">
                                <i className="bx bxl-instagram" />
                              </a>
                            </li>
                            <li>
                              <a href="https://www.pinterest.com/">
                                <i className="bx bxl-pinterest-alt" />
                              </a>
                            </li>
                            <li>
                              <a href="https://twitter.com/">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={16}
                                  height={16}
                                  fill="currentColor"
                                  className="bi bi-twitter-x"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z" />
                                </svg>
                              </a>
                            </li>
                            <li>
                              <a href="https://www.facebook.com/">
                                <i className="bx bxl-facebook" />
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="teams-content">
                          <h4>Oliver Jameson</h4>
                          <span>Tour Guide</span>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <div className="teams-card2 style-4">
                        <div className="teams-img">
                          <img
                            src="/assets/img/home3/teams-card2-img5.png"
                            alt=""
                          />
                          <ul className="social-list">
                            <li>
                              <a href="https://www.instagram.com/">
                                <i className="bx bxl-instagram" />
                              </a>
                            </li>
                            <li>
                              <a href="https://www.pinterest.com/">
                                <i className="bx bxl-pinterest-alt" />
                              </a>
                            </li>
                            <li>
                              <a href="https://twitter.com/">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={16}
                                  height={16}
                                  fill="currentColor"
                                  className="bi bi-twitter-x"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z" />
                                </svg>
                              </a>
                            </li>
                            <li>
                              <a href="https://www.facebook.com/">
                                <i className="bx bxl-facebook" />
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="teams-content">
                          <h4>Dani Alves</h4>
                          <span>Tour Guide</span>
                        </div>
                      </div>
                    </SwiperSlide>
                  </div>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home6Team;
