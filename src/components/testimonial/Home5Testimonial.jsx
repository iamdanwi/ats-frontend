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

const Home5Testimonial = () => {
  const settings = useMemo(() => {
    return {
      slidesPerView: "auto",
      speed: 2500,
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
        nextEl: ".home5-testimonal-slider-next",
        prevEl: ".home5-testimonal-slider-prev",
      },
    };
  }, []);
  return (
    <>
      <div className="home5-testimonal-slider-section mb-120">
        <div className="container">
          <div className="row mb-50">
            <div className="col-lg-12 d-flex align-items-center justify-content-between flex-wrap gap-3">
              <div className="section-title4">
                <div className="eg-section-tag">
                  <span>Testimonial</span>
                </div>
                <h2>What They Are Say!</h2>
              </div>
              <ul className="rating-area">
                <li>
                  <a href="https://www.trustpilot.com/">
                    <div className="logo">
                      <img
                        src="/assets/img/home5/vector/trustpilot-logo.svg"
                        alt=""
                      />
                    </div>
                    <div className="star">
                      <img
                        src="/assets/img/home5/vector/trustpilot-star.svg"
                        alt=""
                      />
                      <span>5.0 / 5.0</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="https://www.tripadvisor.com/">
                    <div className="logo">
                      <img
                        src="/assets/img/home5/vector/tripadvisor-logo.svg"
                        alt=""
                      />
                    </div>
                    <div className="star">
                      <img
                        src="/assets/img/home5/vector/tripadvisor-star.svg"
                        alt=""
                      />
                      <span>5.0 / 5.0</span>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="testimonal-slider-wrap">
            <div className="row g-0 align-items-center">
              <div className="col-lg-4">
                <div className="testimonal-slider-left-img">
                  <img
                    src="/assets/img/home5/testimonal-slider-left-img.jpg"
                    alt=""
                  />
                </div>
              </div>
              <div className="col-lg-8">
                <div className="testimonial-slider-area">
                  <Swiper
                    {...settings}
                    className="swiper home5-testimonal-slider"
                  >
                    <div className="swiper-wrapper">
                      <SwiperSlide className="swiper-slide">
                        <div className="testimonial-wrapper">
                          <div className="testi-img">
                            <img
                              src="/assets/img/home5/home5-testi-img1.png"
                              alt=""
                            />
                          </div>
                          <div className="testi-content">
                            <div className="testi-content-top">
                              <div className="rating-title">
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
                              </div>
                              <div className="quote">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={58}
                                  height={41}
                                  viewBox="0 0 58 41"
                                >
                                  <g opacity="0.08">
                                    <path d="M47.7685 1.34542C52.7428 6.13419 56.2328 12.7622 57.5472 19.8837C58.0118 22.4519 58.1477 27.0276 57.8191 29.2145C57.4792 31.4912 56.6181 33.7005 55.383 35.4725C52.3123 39.8799 46.6807 41.8089 41.3665 40.2837C39.2815 39.6893 37.5932 38.6799 35.9502 37.0538C34.3525 35.4725 33.5027 34.1267 32.8342 32.1528C31.7351 28.9117 31.973 25.3902 33.48 22.3734C35.3043 18.7061 38.9529 16.0258 42.8735 15.4538C44.5052 15.2183 44.3352 15.3641 44.2559 14.2314C44.0859 11.8762 43.1908 9.48746 41.4911 6.78466C40.494 5.22578 40.4033 5.45008 43.2814 2.60149C46.3181 -0.392899 46.0348 -0.314396 47.7685 1.34542ZM43.4854 6.2912C44.5958 8.09681 45.5363 10.3847 45.9329 12.3248C46.1822 13.5024 46.2275 15.779 46.0122 16.3846C45.7969 16.9566 45.5249 17.1024 44.4032 17.1809C40.29 17.5061 36.766 19.9061 35.0551 23.5622C34.2959 25.1772 34.1486 25.9398 34.1599 28.0706C34.1599 29.8201 34.1939 30.0669 34.4772 30.9865C35.6216 34.7098 38.6017 37.5697 42.3636 38.5678C43.712 38.9267 46.4201 38.9379 47.7118 38.579C52.1876 37.3566 55.247 33.6893 55.9609 28.6986C56.1308 27.465 56.1082 23.5846 55.9042 22.0145C55.5983 19.5585 55.0884 17.394 54.3178 15.2295C52.7315 10.7772 50.0347 6.437 46.6807 2.97158L46.1595 2.44448L44.5958 3.99214L43.0208 5.55102L43.4854 6.2912Z" />
                                    <path d="M16.0165 1.80512C21.4894 7.32287 24.9 14.6574 25.7158 22.6649C25.9085 24.5939 25.7838 28.6537 25.5006 30.0331C24.1748 36.3247 19.4838 40.5079 13.4556 40.7658C9.81837 40.9228 6.61169 39.7565 4.01688 37.3228C1.95462 35.3826 0.662884 33.0499 0.152987 30.3135C-0.107628 28.9565 -0.0283108 26.2088 0.300289 24.9752C1.59203 20.1752 5.1953 16.6761 10.011 15.5658C10.5436 15.4425 11.1668 15.3415 11.4047 15.3415C12.1072 15.3415 12.1526 15.263 12.0619 14.164C11.8693 11.8649 11.0195 9.58829 9.30848 6.79576C8.6966 5.80885 8.58329 5.55091 8.63995 5.28175C8.6966 5.05745 9.42179 4.24998 11.0081 2.67989C12.2772 1.43503 13.3877 0.358395 13.4783 0.302319C13.569 0.246246 13.8182 0.201385 14.0335 0.201385C14.3961 0.201385 14.5661 0.347179 16.0165 1.80512ZM11.5974 6.8182C13.297 9.76772 14.2262 13.2331 13.9315 15.5546C13.7503 17.0014 13.6709 17.0686 12.2092 17.1808C7.48418 17.5509 3.68827 20.5677 2.28322 25.0649C1.99995 25.9733 1.97729 26.1976 1.97729 28.0144C1.97729 29.8312 1.99995 30.0555 2.28322 30.9639C3.29169 34.1826 5.28595 36.4929 8.28868 37.8836C9.88636 38.6237 10.8835 38.8368 12.8438 38.8368C14.2601 38.8368 14.7021 38.792 15.5066 38.5789C19.3931 37.5471 22.3958 34.4181 23.427 30.3471C23.7896 28.934 23.8802 27.9359 23.8915 25.6593C23.8915 20.7359 22.8944 16.3733 20.7302 11.921C19.1438 8.65744 17.4668 6.23502 14.7587 3.29671L13.9769 2.45559L12.4132 3.99203L10.8608 5.52848L11.5974 6.8182Z" />
                                  </g>
                                </svg>
                              </div>
                            </div>
                            <p>
                              "I work with Alguneb Johnl on many projects, he
                              always on tolda forn tha excel my expectations
                              with his qualitywork andani fastestopasn told up
                              services, very smooth and simpl communication one
                              the way to go upe."
                            </p>
                            <div className="author-name-desig">
                              <h5>Leslie Alexander</h5>
                              <span>CEO, Egenslab</span>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide className="swiper-slide">
                        <div className="testimonial-wrapper">
                          <div className="testi-img">
                            <img
                              src="/assets/img/home5/home5-testi-img2.png"
                              alt=""
                            />
                          </div>
                          <div className="testi-content">
                            <div className="testi-content-top">
                              <div className="rating-title">
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
                                <h4>Explore Enchanting Spain</h4>
                              </div>
                              <div className="quote">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={58}
                                  height={41}
                                  viewBox="0 0 58 41"
                                >
                                  <g opacity="0.08">
                                    <path d="M47.7685 1.34542C52.7428 6.13419 56.2328 12.7622 57.5472 19.8837C58.0118 22.4519 58.1477 27.0276 57.8191 29.2145C57.4792 31.4912 56.6181 33.7005 55.383 35.4725C52.3123 39.8799 46.6807 41.8089 41.3665 40.2837C39.2815 39.6893 37.5932 38.6799 35.9502 37.0538C34.3525 35.4725 33.5027 34.1267 32.8342 32.1528C31.7351 28.9117 31.973 25.3902 33.48 22.3734C35.3043 18.7061 38.9529 16.0258 42.8735 15.4538C44.5052 15.2183 44.3352 15.3641 44.2559 14.2314C44.0859 11.8762 43.1908 9.48746 41.4911 6.78466C40.494 5.22578 40.4033 5.45008 43.2814 2.60149C46.3181 -0.392899 46.0348 -0.314396 47.7685 1.34542ZM43.4854 6.2912C44.5958 8.09681 45.5363 10.3847 45.9329 12.3248C46.1822 13.5024 46.2275 15.779 46.0122 16.3846C45.7969 16.9566 45.5249 17.1024 44.4032 17.1809C40.29 17.5061 36.766 19.9061 35.0551 23.5622C34.2959 25.1772 34.1486 25.9398 34.1599 28.0706C34.1599 29.8201 34.1939 30.0669 34.4772 30.9865C35.6216 34.7098 38.6017 37.5697 42.3636 38.5678C43.712 38.9267 46.4201 38.9379 47.7118 38.579C52.1876 37.3566 55.247 33.6893 55.9609 28.6986C56.1308 27.465 56.1082 23.5846 55.9042 22.0145C55.5983 19.5585 55.0884 17.394 54.3178 15.2295C52.7315 10.7772 50.0347 6.437 46.6807 2.97158L46.1595 2.44448L44.5958 3.99214L43.0208 5.55102L43.4854 6.2912Z" />
                                    <path d="M16.0165 1.80512C21.4894 7.32287 24.9 14.6574 25.7158 22.6649C25.9085 24.5939 25.7838 28.6537 25.5006 30.0331C24.1748 36.3247 19.4838 40.5079 13.4556 40.7658C9.81837 40.9228 6.61169 39.7565 4.01688 37.3228C1.95462 35.3826 0.662884 33.0499 0.152987 30.3135C-0.107628 28.9565 -0.0283108 26.2088 0.300289 24.9752C1.59203 20.1752 5.1953 16.6761 10.011 15.5658C10.5436 15.4425 11.1668 15.3415 11.4047 15.3415C12.1072 15.3415 12.1526 15.263 12.0619 14.164C11.8693 11.8649 11.0195 9.58829 9.30848 6.79576C8.6966 5.80885 8.58329 5.55091 8.63995 5.28175C8.6966 5.05745 9.42179 4.24998 11.0081 2.67989C12.2772 1.43503 13.3877 0.358395 13.4783 0.302319C13.569 0.246246 13.8182 0.201385 14.0335 0.201385C14.3961 0.201385 14.5661 0.347179 16.0165 1.80512ZM11.5974 6.8182C13.297 9.76772 14.2262 13.2331 13.9315 15.5546C13.7503 17.0014 13.6709 17.0686 12.2092 17.1808C7.48418 17.5509 3.68827 20.5677 2.28322 25.0649C1.99995 25.9733 1.97729 26.1976 1.97729 28.0144C1.97729 29.8312 1.99995 30.0555 2.28322 30.9639C3.29169 34.1826 5.28595 36.4929 8.28868 37.8836C9.88636 38.6237 10.8835 38.8368 12.8438 38.8368C14.2601 38.8368 14.7021 38.792 15.5066 38.5789C19.3931 37.5471 22.3958 34.4181 23.427 30.3471C23.7896 28.934 23.8802 27.9359 23.8915 25.6593C23.8915 20.7359 22.8944 16.3733 20.7302 11.921C19.1438 8.65744 17.4668 6.23502 14.7587 3.29671L13.9769 2.45559L12.4132 3.99203L10.8608 5.52848L11.5974 6.8182Z" />
                                  </g>
                                </svg>
                              </div>
                            </div>
                            <p>
                              "I work with Alguneb Johnl on many projects, he
                              always on tolda forn tha excel my expectations
                              with his qualitywork andani fastestopasn told up
                              services, very smooth and simpl communication one
                              the way to go upe."
                            </p>
                            <div className="author-name-desig">
                              <h5>Luis Costa</h5>
                              <span>CEO, Egenslab</span>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide className="swiper-slide">
                        <div className="testimonial-wrapper">
                          <div className="testi-img">
                            <img
                              src="/assets/img/home5/home5-testi-img3.png"
                              alt=""
                            />
                          </div>
                          <div className="testi-content">
                            <div className="testi-content-top">
                              <div className="rating-title">
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
                                <h4>Tour Picturesque Dubai</h4>
                              </div>
                              <div className="quote">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={58}
                                  height={41}
                                  viewBox="0 0 58 41"
                                >
                                  <g opacity="0.08">
                                    <path d="M47.7685 1.34542C52.7428 6.13419 56.2328 12.7622 57.5472 19.8837C58.0118 22.4519 58.1477 27.0276 57.8191 29.2145C57.4792 31.4912 56.6181 33.7005 55.383 35.4725C52.3123 39.8799 46.6807 41.8089 41.3665 40.2837C39.2815 39.6893 37.5932 38.6799 35.9502 37.0538C34.3525 35.4725 33.5027 34.1267 32.8342 32.1528C31.7351 28.9117 31.973 25.3902 33.48 22.3734C35.3043 18.7061 38.9529 16.0258 42.8735 15.4538C44.5052 15.2183 44.3352 15.3641 44.2559 14.2314C44.0859 11.8762 43.1908 9.48746 41.4911 6.78466C40.494 5.22578 40.4033 5.45008 43.2814 2.60149C46.3181 -0.392899 46.0348 -0.314396 47.7685 1.34542ZM43.4854 6.2912C44.5958 8.09681 45.5363 10.3847 45.9329 12.3248C46.1822 13.5024 46.2275 15.779 46.0122 16.3846C45.7969 16.9566 45.5249 17.1024 44.4032 17.1809C40.29 17.5061 36.766 19.9061 35.0551 23.5622C34.2959 25.1772 34.1486 25.9398 34.1599 28.0706C34.1599 29.8201 34.1939 30.0669 34.4772 30.9865C35.6216 34.7098 38.6017 37.5697 42.3636 38.5678C43.712 38.9267 46.4201 38.9379 47.7118 38.579C52.1876 37.3566 55.247 33.6893 55.9609 28.6986C56.1308 27.465 56.1082 23.5846 55.9042 22.0145C55.5983 19.5585 55.0884 17.394 54.3178 15.2295C52.7315 10.7772 50.0347 6.437 46.6807 2.97158L46.1595 2.44448L44.5958 3.99214L43.0208 5.55102L43.4854 6.2912Z" />
                                    <path d="M16.0165 1.80512C21.4894 7.32287 24.9 14.6574 25.7158 22.6649C25.9085 24.5939 25.7838 28.6537 25.5006 30.0331C24.1748 36.3247 19.4838 40.5079 13.4556 40.7658C9.81837 40.9228 6.61169 39.7565 4.01688 37.3228C1.95462 35.3826 0.662884 33.0499 0.152987 30.3135C-0.107628 28.9565 -0.0283108 26.2088 0.300289 24.9752C1.59203 20.1752 5.1953 16.6761 10.011 15.5658C10.5436 15.4425 11.1668 15.3415 11.4047 15.3415C12.1072 15.3415 12.1526 15.263 12.0619 14.164C11.8693 11.8649 11.0195 9.58829 9.30848 6.79576C8.6966 5.80885 8.58329 5.55091 8.63995 5.28175C8.6966 5.05745 9.42179 4.24998 11.0081 2.67989C12.2772 1.43503 13.3877 0.358395 13.4783 0.302319C13.569 0.246246 13.8182 0.201385 14.0335 0.201385C14.3961 0.201385 14.5661 0.347179 16.0165 1.80512ZM11.5974 6.8182C13.297 9.76772 14.2262 13.2331 13.9315 15.5546C13.7503 17.0014 13.6709 17.0686 12.2092 17.1808C7.48418 17.5509 3.68827 20.5677 2.28322 25.0649C1.99995 25.9733 1.97729 26.1976 1.97729 28.0144C1.97729 29.8312 1.99995 30.0555 2.28322 30.9639C3.29169 34.1826 5.28595 36.4929 8.28868 37.8836C9.88636 38.6237 10.8835 38.8368 12.8438 38.8368C14.2601 38.8368 14.7021 38.792 15.5066 38.5789C19.3931 37.5471 22.3958 34.4181 23.427 30.3471C23.7896 28.934 23.8802 27.9359 23.8915 25.6593C23.8915 20.7359 22.8944 16.3733 20.7302 11.921C19.1438 8.65744 17.4668 6.23502 14.7587 3.29671L13.9769 2.45559L12.4132 3.99203L10.8608 5.52848L11.5974 6.8182Z" />
                                  </g>
                                </svg>
                              </div>
                            </div>
                            <p>
                              "I work with Alguneb Johnl on many projects, he
                              always on tolda forn tha excel my expectations
                              with his qualitywork andani fastestopasn told up
                              services, very smooth and simpl communication one
                              the way to go upe."
                            </p>
                            <div className="author-name-desig">
                              <h5>David Becham</h5>
                              <span>CEO, Egenslab</span>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide className="swiper-slide">
                        <div className="testimonial-wrapper">
                          <div className="testi-img">
                            <img
                              src="/assets/img/home5/home5-testi-img4.png"
                              alt=""
                            />
                          </div>
                          <div className="testi-content">
                            <div className="testi-content-top">
                              <div className="rating-title">
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
                                <h4>Travel Gorgeous Paris</h4>
                              </div>
                              <div className="quote">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={58}
                                  height={41}
                                  viewBox="0 0 58 41"
                                >
                                  <g opacity="0.08">
                                    <path d="M47.7685 1.34542C52.7428 6.13419 56.2328 12.7622 57.5472 19.8837C58.0118 22.4519 58.1477 27.0276 57.8191 29.2145C57.4792 31.4912 56.6181 33.7005 55.383 35.4725C52.3123 39.8799 46.6807 41.8089 41.3665 40.2837C39.2815 39.6893 37.5932 38.6799 35.9502 37.0538C34.3525 35.4725 33.5027 34.1267 32.8342 32.1528C31.7351 28.9117 31.973 25.3902 33.48 22.3734C35.3043 18.7061 38.9529 16.0258 42.8735 15.4538C44.5052 15.2183 44.3352 15.3641 44.2559 14.2314C44.0859 11.8762 43.1908 9.48746 41.4911 6.78466C40.494 5.22578 40.4033 5.45008 43.2814 2.60149C46.3181 -0.392899 46.0348 -0.314396 47.7685 1.34542ZM43.4854 6.2912C44.5958 8.09681 45.5363 10.3847 45.9329 12.3248C46.1822 13.5024 46.2275 15.779 46.0122 16.3846C45.7969 16.9566 45.5249 17.1024 44.4032 17.1809C40.29 17.5061 36.766 19.9061 35.0551 23.5622C34.2959 25.1772 34.1486 25.9398 34.1599 28.0706C34.1599 29.8201 34.1939 30.0669 34.4772 30.9865C35.6216 34.7098 38.6017 37.5697 42.3636 38.5678C43.712 38.9267 46.4201 38.9379 47.7118 38.579C52.1876 37.3566 55.247 33.6893 55.9609 28.6986C56.1308 27.465 56.1082 23.5846 55.9042 22.0145C55.5983 19.5585 55.0884 17.394 54.3178 15.2295C52.7315 10.7772 50.0347 6.437 46.6807 2.97158L46.1595 2.44448L44.5958 3.99214L43.0208 5.55102L43.4854 6.2912Z" />
                                    <path d="M16.0165 1.80512C21.4894 7.32287 24.9 14.6574 25.7158 22.6649C25.9085 24.5939 25.7838 28.6537 25.5006 30.0331C24.1748 36.3247 19.4838 40.5079 13.4556 40.7658C9.81837 40.9228 6.61169 39.7565 4.01688 37.3228C1.95462 35.3826 0.662884 33.0499 0.152987 30.3135C-0.107628 28.9565 -0.0283108 26.2088 0.300289 24.9752C1.59203 20.1752 5.1953 16.6761 10.011 15.5658C10.5436 15.4425 11.1668 15.3415 11.4047 15.3415C12.1072 15.3415 12.1526 15.263 12.0619 14.164C11.8693 11.8649 11.0195 9.58829 9.30848 6.79576C8.6966 5.80885 8.58329 5.55091 8.63995 5.28175C8.6966 5.05745 9.42179 4.24998 11.0081 2.67989C12.2772 1.43503 13.3877 0.358395 13.4783 0.302319C13.569 0.246246 13.8182 0.201385 14.0335 0.201385C14.3961 0.201385 14.5661 0.347179 16.0165 1.80512ZM11.5974 6.8182C13.297 9.76772 14.2262 13.2331 13.9315 15.5546C13.7503 17.0014 13.6709 17.0686 12.2092 17.1808C7.48418 17.5509 3.68827 20.5677 2.28322 25.0649C1.99995 25.9733 1.97729 26.1976 1.97729 28.0144C1.97729 29.8312 1.99995 30.0555 2.28322 30.9639C3.29169 34.1826 5.28595 36.4929 8.28868 37.8836C9.88636 38.6237 10.8835 38.8368 12.8438 38.8368C14.2601 38.8368 14.7021 38.792 15.5066 38.5789C19.3931 37.5471 22.3958 34.4181 23.427 30.3471C23.7896 28.934 23.8802 27.9359 23.8915 25.6593C23.8915 20.7359 22.8944 16.3733 20.7302 11.921C19.1438 8.65744 17.4668 6.23502 14.7587 3.29671L13.9769 2.45559L12.4132 3.99203L10.8608 5.52848L11.5974 6.8182Z" />
                                  </g>
                                </svg>
                              </div>
                            </div>
                            <p>
                              "I work with Alguneb Johnl on many projects, he
                              always on tolda forn tha excel my expectations
                              with his qualitywork andani fastestopasn told up
                              services, very smooth and simpl communication one
                              the way to go upe."
                            </p>
                            <div className="author-name-desig">
                              <h5>Dani Moris</h5>
                              <span>CEO, Egenslab</span>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    </div>
                    <div className="slider-btn-grp5">
                      <div className="slider-btn home5-testimonal-slider-prev swiper-button-disabled">
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
                      <div className="slider-btn home5-testimonal-slider-next">
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
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home5Testimonial;
