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

const Home3Team = () => {
  const settings = useMemo(() => {
    return {
      slidesPerView: "auto",
      speed: 1500,
      spaceBetween: 25,
      // autoplay: {
      // 	delay: 2500, // Autoplay duration in milliseconds
      // 	disableOnInteraction: false,
      // },
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
      <div className="home3-teams-section mb-120">
        <div className="container">
          <div className="row mb-50">
            <div className="col-lg-12 d-flex align-items-center justify-content-between flex-wrap gap-3">
              <div className="section-title2 two">
                <h2>Expert Tour Guide</h2>
                <p>
                  Etiam ac tortor id purus commodo vulputate. Vestibulum
                  porttitor erat felis and sed vehicula tortor malesuada
                  gravida. Mauris volutpat enim quis.
                </p>
              </div>
              <div className="slider-btn-grp4">
                <div className="slider-btn teams-card-prev">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={20}
                    viewBox="0 0 16 20"
                  >
                    <path d="M15.9512 0.869644C13.5972 7.34699 13.5419 12.9847 15.8404 19.1322C15.9511 19.4021 15.8404 19.7319 15.6188 19.8819C15.3973 20.0618 15.0927 20.0318 14.8988 19.8219C10.1356 14.7839 5.28936 11.7252 0.470783 10.6756C0.193853 10.6157 1.79767e-06 10.3458 1.82127e-06 10.0759C1.84749e-06 9.77599 0.193853 9.50611 0.470783 9.44613C5.26167 8.36657 10.1633 5.24785 15.0096 0.179928C15.1204 0.0599765 15.2588 -1.97214e-06 15.425 -1.95762e-06C15.5358 -1.94793e-06 15.6465 0.0299873 15.7573 0.119951C15.9788 0.26989 16.0619 0.569767 15.9512 0.869644Z" />
                  </svg>
                </div>
                <div className="slider-btn teams-card-next">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={20}
                    viewBox="0 0 16 20"
                  >
                    <path d="M0.0488516 19.1304C2.40275 12.6531 2.45814 7.01538 0.159624 0.867897C0.0488521 0.598007 0.159624 0.268143 0.381167 0.118204C0.602711 -0.0617224 0.907334 -0.0317344 1.10118 0.17818C5.86437 5.21612 10.7106 8.27486 15.5292 9.32443C15.8061 9.38441 16 9.6543 16 9.92419C16 10.2241 15.8061 10.494 15.5292 10.5539C10.7383 11.6335 5.83668 14.7522 0.990413 19.8201C0.879641 19.9401 0.741176 20.0001 0.575018 20.0001C0.464247 20.0001 0.353474 19.9701 0.242703 19.8801C0.0211589 19.7302 -0.0619202 19.4303 0.0488516 19.1304Z" />
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
                      <div className="teams-card2">
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
                                  width={18}
                                  height={18}
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
                      <div className="teams-card2">
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
                                  width={18}
                                  height={18}
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
                      <div className="teams-card2">
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
                                  width={18}
                                  height={18}
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
                      <div className="teams-card2">
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
                                  width={18}
                                  height={18}
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
                      <div className="teams-card2">
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
                                  width={18}
                                  height={18}
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
                          <h4>Landry Palmer</h4>
                          <span>Tour Guide</span>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <div className="teams-card2">
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
                                  width={18}
                                  height={18}
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
                          <h4>Joseph David</h4>
                          <span>Tour Guide</span>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <div className="teams-card2">
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
                                  width={18}
                                  height={18}
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

export default Home3Team;
