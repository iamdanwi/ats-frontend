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

const Home4Testimonail = () => {
  const settings = useMemo(() => {
    return {
      slidesPerView: "auto",
      speed: 2500,
      spaceBetween: 25,
      navigation: {
        nextEl: ".home4-testimonial-card-slider-next",
        prevEl: ".home4-testimonial-card-slider-prev",
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
          slidesPerView: 2,
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
      <div className="home4-testimonial-section mb-120">
        <div className="row mb-50">
          <div className="col-lg-12 d-flex justify-content-center">
            <div className="section-title3 text-center">
              <h2>Travelers Say About Us</h2>
              <p>
                Etiam ac tortor id purus commodo vulputate. Vestibulum porttitor
                erat felis and sed vehicula tortor malesuada gravida. Mauris
                volutpat enim quis.
              </p>
            </div>
          </div>
        </div>
        <div className="testimonial-card-slider-area">
          <div className="row mb-50">
            <div className="col-lg-12">
              <Swiper
                {...settings}
                className="swiper home4-testimonial-card-slider"
              >
                <div className="swiper-wrapper">
                  <SwiperSlide className="swiper-slide">
                    <div className="testimonial-card2 style-2">
                      <ul className="rating">
                        <li>
                          <i className="bi bi-star-fill" />
                        </li>
                        <li>
                          <i className="bi bi-star-fill" />
                        </li>
                        <li>
                          <i className="bi bi-star-fill" />
                        </li>
                        <li>
                          <i className="bi bi-star-fill" />
                        </li>
                        <li>
                          <i className="bi bi-star-fill" />
                        </li>
                      </ul>
                      <h4>Journey Beautiful Indonesia</h4>
                      <p>
                        “I cannot express enough how satisfied I am with the
                        webgot deve services provided by Egens Lab from the
                        initial.”
                      </p>
                      <div className="tesimonial-card-bottom">
                        <div className="author-area">
                          <div className="author-img">
                            <img
                              src="/assets/img/home3/testi-author-img1.png"
                              alt=""
                            />
                          </div>
                          <div className="author-name-desig">
                            <h5>Liam Nohkan</h5>
                            <span>CEO, TourXpro</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="testimonial-card2 style-2">
                      <ul className="rating">
                        <li>
                          <i className="bi bi-star-fill" />
                        </li>
                        <li>
                          <i className="bi bi-star-fill" />
                        </li>
                        <li>
                          <i className="bi bi-star-fill" />
                        </li>
                        <li>
                          <i className="bi bi-star-fill" />
                        </li>
                        <li>
                          <i className="bi bi-star-fill" />
                        </li>
                      </ul>
                      <h4>Cultural Immersion at Its Best</h4>
                      <p>
                        “I cannot express enough how satisfied I am with the
                        webgot deve services provided by Egens Lab from the
                        initial.”
                      </p>
                      <div className="tesimonial-card-bottom">
                        <div className="author-area">
                          <div className="author-img">
                            <img
                              src="/assets/img/home3/testi-author-img2.png"
                              alt=""
                            />
                          </div>
                          <div className="author-name-desig">
                            <h5>Jon Mark</h5>
                            <span>Founder, Tourio</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="testimonial-card2 style-2">
                      <ul className="rating">
                        <li>
                          <i className="bi bi-star-fill" />
                        </li>
                        <li>
                          <i className="bi bi-star-fill" />
                        </li>
                        <li>
                          <i className="bi bi-star-fill" />
                        </li>
                        <li>
                          <i className="bi bi-star-fill" />
                        </li>
                        <li>
                          <i className="bi bi-star-fill" />
                        </li>
                      </ul>
                      <h4>Memories That Will Last Forever</h4>
                      <p>
                        “I cannot express enough how satisfied I am with the
                        webgot deve services provided by Egens Lab from the
                        initial.”
                      </p>
                      <div className="tesimonial-card-bottom">
                        <div className="author-area">
                          <div className="author-img">
                            <img
                              src="/assets/img/home3/testi-author-img3.png"
                              alt=""
                            />
                          </div>
                          <div className="author-name-desig">
                            <h5>Jordan Moriah</h5>
                            <span>Founder, Travel Lab</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="testimonial-card2 style-2">
                      <ul className="rating">
                        <li>
                          <i className="bi bi-star-fill" />
                        </li>
                        <li>
                          <i className="bi bi-star-fill" />
                        </li>
                        <li>
                          <i className="bi bi-star-fill" />
                        </li>
                        <li>
                          <i className="bi bi-star-fill" />
                        </li>
                        <li>
                          <i className="bi bi-star-fill" />
                        </li>
                      </ul>
                      <h4>Journey Beautiful Indonesia</h4>
                      <p>
                        “I cannot express enough how satisfied I am with the
                        webgot deve services provided by Egens Lab from the
                        initial.”
                      </p>
                      <div className="tesimonial-card-bottom">
                        <div className="author-area">
                          <div className="author-img">
                            <img
                              src="/assets/img/home3/testi-author-img1.png"
                              alt=""
                            />
                          </div>
                          <div className="author-name-desig">
                            <h5>Liam Nohkan</h5>
                            <span>CEO, TourXpro</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="testimonial-card2 style-2">
                      <ul className="rating">
                        <li>
                          <i className="bi bi-star-fill" />
                        </li>
                        <li>
                          <i className="bi bi-star-fill" />
                        </li>
                        <li>
                          <i className="bi bi-star-fill" />
                        </li>
                        <li>
                          <i className="bi bi-star-fill" />
                        </li>
                        <li>
                          <i className="bi bi-star-fill" />
                        </li>
                      </ul>
                      <h4>Cultural Immersion at Its Best</h4>
                      <p>
                        “I cannot express enough how satisfied I am with the
                        webgot deve services provided by Egens Lab from the
                        initial.”
                      </p>
                      <div className="tesimonial-card-bottom">
                        <div className="author-area">
                          <div className="author-img">
                            <img
                              src="/assets/img/home3/testi-author-img2.png"
                              alt=""
                            />
                          </div>
                          <div className="author-name-desig">
                            <h5>Jon Mark</h5>
                            <span>Founder, Tourio</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="testimonial-card2 style-2">
                      <ul className="rating">
                        <li>
                          <i className="bi bi-star-fill" />
                        </li>
                        <li>
                          <i className="bi bi-star-fill" />
                        </li>
                        <li>
                          <i className="bi bi-star-fill" />
                        </li>
                        <li>
                          <i className="bi bi-star-fill" />
                        </li>
                        <li>
                          <i className="bi bi-star-fill" />
                        </li>
                      </ul>
                      <h4>Memories That Will Last Forever</h4>
                      <p>
                        “I cannot express enough how satisfied I am with the
                        webgot deve services provided by Egens Lab from the
                        initial.”
                      </p>
                      <div className="tesimonial-card-bottom">
                        <div className="author-area">
                          <div className="author-img">
                            <img
                              src="/assets/img/home3/testi-author-img3.png"
                              alt=""
                            />
                          </div>
                          <div className="author-name-desig">
                            <h5>Jordan Moriah</h5>
                            <span>Founder, Travel Lab</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                </div>
              </Swiper>
            </div>
          </div>
          <div className="container">
            <div className="slider-btn-grp5">
              <div className="slider-btn home4-testimonial-card-slider-prev">
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
              <div className="slider-btn home4-testimonial-card-slider-next">
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
    </>
  );
};

export default Home4Testimonail;
