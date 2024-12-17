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

const Home6Testimonial = () => {
  const settings = useMemo(() => {
    return {
      slidesPerView: "auto",
      speed: 1500,
      spaceBetween: 25,
      effect: "fade",
      fadeEffect: {
        crossFade: true,
      },
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".home6-testimonial-next",
        prevEl: ".home6-testimonial-prev",
      },
    };
  }, []);
  return (
    <>
      <div className="home6-testimonial-section mb-120">
        <div className="container one">
          <div className="testimonial-slider-area">
            <div className="row justify-content-center">
              <div className="col-md-8">
                <Swiper
                  {...settings}
                  className="swiper home6-testimonial-slider"
                >
                  <div className="swiper-wrapper">
                    <SwiperSlide className="swiper-slide">
                      <div className="testimonial-wrapper">
                        <div className="author-img">
                          <img
                            src="/assets/img/home6/testimonial-author-img1.png"
                            alt=""
                          />
                        </div>
                        <h3>Journey Beautiful Indonesia</h3>
                        <p>
                          “I cannot express enough how satisfied I am with the
                          webgot deve services provided by Egens Lab from the
                          initial.Aenean fermentum. Integer auctor enim eget
                          Fusce nec egestas risus, ac eleifend urna. Vivamus
                          risus velit, scelerisque in dolor sit amet, sodales
                          interdum ligula.”
                        </p>
                        <div className="testimonial-bottom">
                          <div className="quote">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={42}
                              height={29}
                              viewBox="0 0 42 29"
                            >
                              <g>
                                <path d="M9.65997 0C7.07971 0 4.65389 0.99407 2.82934 2.79909C1.0048 4.60415 0 7.00407 0 9.55677C0 10.8693 0.219996 12.1107 0.653928 13.2466C1.10189 14.4192 1.76695 15.4505 2.63064 16.312C4.4681 18.1449 7.11636 19.1136 10.289 19.1136C10.3132 19.1136 10.3316 19.115 10.345 19.1167C10.4413 19.3756 10.341 20.4863 9.17988 22.3371C7.96255 24.2773 6.1238 26.1423 4.13515 27.4535C3.82228 27.6599 3.68279 28.0445 3.79174 28.4005C3.90065 28.7565 4.23233 29 4.60833 29C6.25157 29 9.90803 27.9012 13.2463 24.8741C16.0171 22.3616 19.3199 17.7727 19.3199 10.1791C19.3199 7.30874 18.3191 4.70024 16.5017 2.83412C14.7218 1.00648 12.2921 0 9.65997 0Z" />
                                <path d="M39.1853 2.83408C37.4054 1.00648 34.9757 0 32.3436 0C29.7633 0 27.3374 0.99407 25.5129 2.79909C23.6884 4.60415 22.6836 7.00407 22.6836 9.55677C22.6836 10.8693 22.9036 12.1107 23.3375 13.2466C23.7855 14.4192 24.4505 15.4505 25.3142 16.312C27.1517 18.1449 29.7999 19.1136 32.9726 19.1136C32.9968 19.1136 33.0153 19.115 33.0286 19.1167C33.1249 19.3756 33.0246 20.4863 31.8635 22.3371C30.6461 24.2774 28.8074 26.1423 26.8187 27.4535C26.5059 27.6599 26.3664 28.0445 26.4753 28.4005C26.5843 28.7565 26.916 29 27.2919 29C28.9352 29 32.5916 27.9012 35.9299 24.8741C38.7007 22.3616 42.0035 17.7727 42.0035 10.1791C42.0035 7.3087 41.0026 4.7002 39.1853 2.83408Z" />
                              </g>
                            </svg>
                          </div>
                          <div className="author-name-and-desig">
                            <h5>Liam Nohkan</h5>
                            <span>CEO, TourXpro</span>
                          </div>
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
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <div className="testimonial-wrapper">
                        <div className="author-img">
                          <img
                            src="/assets/img/home6/testimonial-author-img2.png"
                            alt=""
                          />
                        </div>
                        <h3>Expedition Lovely Brazil</h3>
                        <p>
                          “I cannot express enough how satisfied I am with the
                          webgot deve services provided by Egens Lab from the
                          initial.Aenean fermentum. Integer auctor enim eget
                          Fusce nec egestas risus, ac eleifend urna. Vivamus
                          risus velit, scelerisque in dolor sit amet, sodales
                          interdum ligula.”
                        </p>
                        <div className="testimonial-bottom">
                          <div className="quote">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={42}
                              height={29}
                              viewBox="0 0 42 29"
                            >
                              <g>
                                <path d="M9.65997 0C7.07971 0 4.65389 0.99407 2.82934 2.79909C1.0048 4.60415 0 7.00407 0 9.55677C0 10.8693 0.219996 12.1107 0.653928 13.2466C1.10189 14.4192 1.76695 15.4505 2.63064 16.312C4.4681 18.1449 7.11636 19.1136 10.289 19.1136C10.3132 19.1136 10.3316 19.115 10.345 19.1167C10.4413 19.3756 10.341 20.4863 9.17988 22.3371C7.96255 24.2773 6.1238 26.1423 4.13515 27.4535C3.82228 27.6599 3.68279 28.0445 3.79174 28.4005C3.90065 28.7565 4.23233 29 4.60833 29C6.25157 29 9.90803 27.9012 13.2463 24.8741C16.0171 22.3616 19.3199 17.7727 19.3199 10.1791C19.3199 7.30874 18.3191 4.70024 16.5017 2.83412C14.7218 1.00648 12.2921 0 9.65997 0Z" />
                                <path d="M39.1853 2.83408C37.4054 1.00648 34.9757 0 32.3436 0C29.7633 0 27.3374 0.99407 25.5129 2.79909C23.6884 4.60415 22.6836 7.00407 22.6836 9.55677C22.6836 10.8693 22.9036 12.1107 23.3375 13.2466C23.7855 14.4192 24.4505 15.4505 25.3142 16.312C27.1517 18.1449 29.7999 19.1136 32.9726 19.1136C32.9968 19.1136 33.0153 19.115 33.0286 19.1167C33.1249 19.3756 33.0246 20.4863 31.8635 22.3371C30.6461 24.2774 28.8074 26.1423 26.8187 27.4535C26.5059 27.6599 26.3664 28.0445 26.4753 28.4005C26.5843 28.7565 26.916 29 27.2919 29C28.9352 29 32.5916 27.9012 35.9299 24.8741C38.7007 22.3616 42.0035 17.7727 42.0035 10.1791C42.0035 7.3087 41.0026 4.7002 39.1853 2.83408Z" />
                              </g>
                            </svg>
                          </div>
                          <div className="author-name-and-desig">
                            <h5>Alison Bekkar</h5>
                            <span>CEO, TourXpro</span>
                          </div>
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
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <div className="testimonial-wrapper">
                        <div className="author-img">
                          <img
                            src="/assets/img/home6/testimonial-author-img3.png"
                            alt=""
                          />
                        </div>
                        <h3>Trek Stunning France</h3>
                        <p>
                          “I cannot express enough how satisfied I am with the
                          webgot deve services provided by Egens Lab from the
                          initial.Aenean fermentum. Integer auctor enim eget
                          Fusce nec egestas risus, ac eleifend urna. Vivamus
                          risus velit, scelerisque in dolor sit amet, sodales
                          interdum ligula.”
                        </p>
                        <div className="testimonial-bottom">
                          <div className="quote">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={42}
                              height={29}
                              viewBox="0 0 42 29"
                            >
                              <g>
                                <path d="M9.65997 0C7.07971 0 4.65389 0.99407 2.82934 2.79909C1.0048 4.60415 0 7.00407 0 9.55677C0 10.8693 0.219996 12.1107 0.653928 13.2466C1.10189 14.4192 1.76695 15.4505 2.63064 16.312C4.4681 18.1449 7.11636 19.1136 10.289 19.1136C10.3132 19.1136 10.3316 19.115 10.345 19.1167C10.4413 19.3756 10.341 20.4863 9.17988 22.3371C7.96255 24.2773 6.1238 26.1423 4.13515 27.4535C3.82228 27.6599 3.68279 28.0445 3.79174 28.4005C3.90065 28.7565 4.23233 29 4.60833 29C6.25157 29 9.90803 27.9012 13.2463 24.8741C16.0171 22.3616 19.3199 17.7727 19.3199 10.1791C19.3199 7.30874 18.3191 4.70024 16.5017 2.83412C14.7218 1.00648 12.2921 0 9.65997 0Z" />
                                <path d="M39.1853 2.83408C37.4054 1.00648 34.9757 0 32.3436 0C29.7633 0 27.3374 0.99407 25.5129 2.79909C23.6884 4.60415 22.6836 7.00407 22.6836 9.55677C22.6836 10.8693 22.9036 12.1107 23.3375 13.2466C23.7855 14.4192 24.4505 15.4505 25.3142 16.312C27.1517 18.1449 29.7999 19.1136 32.9726 19.1136C32.9968 19.1136 33.0153 19.115 33.0286 19.1167C33.1249 19.3756 33.0246 20.4863 31.8635 22.3371C30.6461 24.2774 28.8074 26.1423 26.8187 27.4535C26.5059 27.6599 26.3664 28.0445 26.4753 28.4005C26.5843 28.7565 26.916 29 27.2919 29C28.9352 29 32.5916 27.9012 35.9299 24.8741C38.7007 22.3616 42.0035 17.7727 42.0035 10.1791C42.0035 7.3087 41.0026 4.7002 39.1853 2.83408Z" />
                              </g>
                            </svg>
                          </div>
                          <div className="author-name-and-desig">
                            <h5>Paul Pogba</h5>
                            <span>CEO, TourXpro</span>
                          </div>
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
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <div className="testimonial-wrapper">
                        <div className="author-img">
                          <img
                            src="/assets/img/home6/testimonial-author-img4.png"
                            alt=""
                          />
                        </div>
                        <h3>Tour Breathtaking England</h3>
                        <p>
                          “I cannot express enough how satisfied I am with the
                          webgot deve services provided by Egens Lab from the
                          initial.Aenean fermentum. Integer auctor enim eget
                          Fusce nec egestas risus, ac eleifend urna. Vivamus
                          risus velit, scelerisque in dolor sit amet, sodales
                          interdum ligula.”
                        </p>
                        <div className="testimonial-bottom">
                          <div className="quote">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={42}
                              height={29}
                              viewBox="0 0 42 29"
                            >
                              <g>
                                <path d="M9.65997 0C7.07971 0 4.65389 0.99407 2.82934 2.79909C1.0048 4.60415 0 7.00407 0 9.55677C0 10.8693 0.219996 12.1107 0.653928 13.2466C1.10189 14.4192 1.76695 15.4505 2.63064 16.312C4.4681 18.1449 7.11636 19.1136 10.289 19.1136C10.3132 19.1136 10.3316 19.115 10.345 19.1167C10.4413 19.3756 10.341 20.4863 9.17988 22.3371C7.96255 24.2773 6.1238 26.1423 4.13515 27.4535C3.82228 27.6599 3.68279 28.0445 3.79174 28.4005C3.90065 28.7565 4.23233 29 4.60833 29C6.25157 29 9.90803 27.9012 13.2463 24.8741C16.0171 22.3616 19.3199 17.7727 19.3199 10.1791C19.3199 7.30874 18.3191 4.70024 16.5017 2.83412C14.7218 1.00648 12.2921 0 9.65997 0Z" />
                                <path d="M39.1853 2.83408C37.4054 1.00648 34.9757 0 32.3436 0C29.7633 0 27.3374 0.99407 25.5129 2.79909C23.6884 4.60415 22.6836 7.00407 22.6836 9.55677C22.6836 10.8693 22.9036 12.1107 23.3375 13.2466C23.7855 14.4192 24.4505 15.4505 25.3142 16.312C27.1517 18.1449 29.7999 19.1136 32.9726 19.1136C32.9968 19.1136 33.0153 19.115 33.0286 19.1167C33.1249 19.3756 33.0246 20.4863 31.8635 22.3371C30.6461 24.2774 28.8074 26.1423 26.8187 27.4535C26.5059 27.6599 26.3664 28.0445 26.4753 28.4005C26.5843 28.7565 26.916 29 27.2919 29C28.9352 29 32.5916 27.9012 35.9299 24.8741C38.7007 22.3616 42.0035 17.7727 42.0035 10.1791C42.0035 7.3087 41.0026 4.7002 39.1853 2.83408Z" />
                              </g>
                            </svg>
                          </div>
                          <div className="author-name-and-desig">
                            <h5>Sadio Mane</h5>
                            <span>CEO, TourXpro</span>
                          </div>
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
                    </SwiperSlide>
                  </div>
                </Swiper>
              </div>
            </div>
            <div className="slider-btn-grp two d-md-block d-none">
              <div className="slider-btn home6-testimonial-prev">
                <i className="bi bi-arrow-left" />
              </div>
              <div className="slider-btn home6-testimonial-next">
                <i className="bi bi-arrow-right" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home6Testimonial;
