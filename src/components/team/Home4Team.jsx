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

const Home4Team = () => {
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
      <div className="home4-teams-section mb-120">
        <div className="container">
          <div className="row mb-40">
            <div className="col-lg-12 d-flex align-items-center justify-content-between flex-wrap gap-3">
              <div className="section-title3 two">
                <h2>Amazing Tour Guide</h2>
                <p>
                  Etiam ac tortor id purus commodo vulputate. Vestibulum
                  porttitor erat felis and sed vehicula tortor malesuada
                  gravida. Mauris volutpat enim.
                </p>
              </div>
              <div className="slider-btn-grp5">
                <div className="slider-btn teams-card-prev">
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
                <div className="slider-btn teams-card-next">
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
          <div className="teams-slider-area">
            <div className="row mb-60">
              <div className="col-lg-12">
                <Swiper {...settings} className="swiper teams-card-slider">
                  <div className="swiper-wrapper">
                    <SwiperSlide className="swiper-slide">
                      <div className="teams-card2 style-2">
                        <div className="teams-img">
                          <img
                            src="/assets/img/home4/teams-card2-img1.png"
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
                          <h4>Colton Jordan</h4>
                          <span>Tour Guide</span>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <div className="teams-card2 style-2">
                        <div className="teams-img">
                          <img
                            src="/assets/img/home4/teams-card2-img2.png"
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
                          <h4>Rowan Adam</h4>
                          <span>Tour Guide</span>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <div className="teams-card2 style-2">
                        <div className="teams-img">
                          <img
                            src="/assets/img/home4/teams-card2-img3.png"
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
                          <h4>River Thiago</h4>
                          <span>Tour Guide</span>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <div className="teams-card2 style-2">
                        <div className="teams-img">
                          <img
                            src="/assets/img/home4/teams-card2-img4.png"
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
                      <div className="teams-card2 style-2">
                        <div className="teams-img">
                          <img
                            src="/assets/img/home4/teams-card2-img5.png"
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
                      <div className="teams-card2 style-2">
                        <div className="teams-img">
                          <img
                            src="/assets/img/home4/teams-card2-img6.png"
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
                      <div className="teams-card2 style-2">
                        <div className="teams-img">
                          <img
                            src="/assets/img/home4/teams-card2-img7.png"
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

export default Home4Team;
