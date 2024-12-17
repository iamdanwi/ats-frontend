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
const Home2Testimonial = () => {
  const settings = useMemo(() => {
    return {
      slidesPerView: "auto",
      speed: 2500,
      spaceBetween: 25,
      loop: true,
      navigation: {
        nextEl: ".testimonial-card-slider-next",
        prevEl: ".testimonial-card-slider-prev",
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
          slidesPerView: 1,
          spaceBetween: 15,
        },
        1200: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        1400: {
          slidesPerView: 1,
        },
      },
    };
  }, []);
  return (
    <>
      <div className="home2-testimonial-section mb-120">
        <div className="container-fluid">
          <div className="row g-lg-4 gy-5">
            <div className="col-lg-5">
              <div className="testimonial-content-wrapper">
                <div className="section-title2 mb-40">
                  <div className="eg-section-tag two">
                    <span>Testimonial</span>
                  </div>
                  <h2>Find The Compliments From Our Travelers</h2>
                  <p>
                    Nunc volutpat sagittis cursus. Praesent sed dolor
                    pellentesque, consectetur velon sit amet, pharetra ipsum.
                    Fusce europ ultrices tortor. Praesent vehicula commodo purus
                    at vulputate one of the most popular tourist place.
                  </p>
                </div>
                <div className="review-wrap">
                  <h6>Review On</h6>
                  <ul className="rating-area">
                    <li className="single-rating">
                      <a href="https://www.trustpilot.com/">
                        <div className="icon">
                          <img
                            src="/assets/img/home2/icon/trustpilot-logo.svg"
                            alt=""
                          />
                        </div>
                        <div className="rating">
                          <div className="star">
                            <img
                              src="/assets/img/home2/icon/trustpilot-star.svg"
                              alt=""
                            />
                          </div>
                          <span>5.0 / 5.0</span>
                        </div>
                      </a>
                    </li>
                    <li className="single-rating">
                      <a href="https://www.tripadvisor.com/">
                        <div className="icon">
                          <img
                            src="/assets/img/home2/icon/tripadvisor-logo2.svg"
                            alt=""
                          />
                        </div>
                        <div className="rating">
                          <div className="star">
                            <img
                              src="/assets/img/home2/icon/tripadvisor-star2.svg"
                              alt=""
                            />
                          </div>
                          <span>4.5 / 5.0</span>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="testimonial-card-slider-area">
                <div className="row">
                  <div className="col-lg-12">
                    <Swiper
                      {...settings}
                      className="swiper home2-testimonial-card-slider mb-35"
                    >
                      <div className="swiper-wrapper">
                        <SwiperSlide className="swiper-slide">
                          <div className="tesimonial-card-wrapper style-2">
                            <div className="tesimonial-card">
                              <img
                                src="/assets/img/home2/vector/testi-quote.svg"
                                alt=""
                                className="quote"
                              />
                              <div className="testimonial-content">
                                <p>
                                  “I cannot express enough how satisfied I am
                                  with the web development services provided by
                                  Egens Lab. From the initial consultation to
                                  the final delivery, they have exceeded.”
                                </p>
                              </div>
                              <div className="testimonial-bottom">
                                <div className="rating-area">
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
                                </div>
                              </div>
                            </div>
                            <div className="author-area">
                              <div className="author-img">
                                <img
                                  src="/assets/img/home1/testi-author-img1.png"
                                  alt=""
                                />
                              </div>
                              <div className="author-content">
                                <h5>Mateo Daniel</h5>
                                <span>CEO, ToruXpro</span>
                              </div>
                            </div>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                          <div className="tesimonial-card-wrapper style-2">
                            <div className="tesimonial-card">
                              <img
                                src="/assets/img/home2/vector/testi-quote.svg"
                                alt=""
                                className="quote"
                              />
                              <div className="testimonial-content">
                                <p>
                                  “I cannot express enough how satisfied I am
                                  with the web development services provided by
                                  Egens Lab. From the initial consultation to
                                  the final delivery, they have exceeded.”
                                </p>
                              </div>
                              <div className="testimonial-bottom">
                                <div className="rating-area">
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
                                </div>
                              </div>
                            </div>
                            <div className="author-area">
                              <div className="author-img">
                                <img
                                  src="/assets/img/home1/testi-author-img2.png"
                                  alt=""
                                />
                              </div>
                              <div className="author-content">
                                <h5>Liam Nohkan</h5>
                                <span>CTO, ToruXpro</span>
                              </div>
                            </div>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                          <div className="tesimonial-card-wrapper style-2">
                            <div className="tesimonial-card">
                              <img
                                src="/assets/img/home2/vector/testi-quote.svg"
                                alt=""
                                className="quote"
                              />
                              <div className="testimonial-content">
                                <p>
                                  “I cannot express enough how satisfied I am
                                  with the web development services provided by
                                  Egens Lab. From the initial consultation to
                                  the final delivery, they have exceeded.”
                                </p>
                              </div>
                              <div className="testimonial-bottom">
                                <div className="rating-area">
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
                                </div>
                              </div>
                            </div>
                            <div className="author-area">
                              <div className="author-img">
                                <img
                                  src="/assets/img/home1/testi-author-img3.png"
                                  alt=""
                                />
                              </div>
                              <div className="author-content">
                                <h5>Dani Alves</h5>
                                <span>Manager, ToruXpro</span>
                              </div>
                            </div>
                          </div>
                        </SwiperSlide>
                      </div>
                    </Swiper>
                    <div className="slide-and-view-btn-grp style-3">
                      <div className="slider-btn-grp3">
                        <div className="slider-btn testimonial-card-slider-prev">
                          <i className="bi bi-arrow-left" />
                          <span>PREV</span>
                        </div>
                        <div className="slider-btn testimonial-card-slider-next">
                          <span>NEXT</span>
                          <i className="bi bi-arrow-right" />
                        </div>
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

export default Home2Testimonial;
