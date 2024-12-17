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

const Home6TourPackage = () => {
  const settings = useMemo(() => {
    return {
      slidesPerView: "auto",
      speed: 2000,
      spaceBetween: 20,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".home6-package-card-next",
        prevEl: ".home6-package-card-prev",
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
      <div className="home6-tourpack-section mb-120">
        <div className="container one">
          <div className="row mb-50">
            <div className="col-lg-12 d-flex align-items-center justify-content-between flex-wrap gap-3">
              <div className="section-title5">
                <span>
                  Tour Package
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
                <h2>Elite Tour Deals</h2>
              </div>
              <div className="slider-btn-grp two d-md-flex d-none">
                <div className="slider-btn home6-package-card-prev">
                  <i className="bi bi-arrow-left" />
                </div>
                <div className="slider-btn home6-package-card-next">
                  <i className="bi bi-arrow-right" />
                </div>
              </div>
            </div>
          </div>
          <div className="package-card-slider-wrap mb-50">
            <div className="row">
              <div className="col-lg-12">
                <Swiper
                  {...settings}
                  className="swiper home6-package-card-slider"
                >
                  <div className="swiper-wrapper">
                    <SwiperSlide className="swiper-slide">
                      <div className="package-card style-2">
                        <div className="package-card-img-wrap">
                          <Link
                            href="package/package-details"
                            className="card-img"
                          >
                            <img
                              src="/assets/img/home1/package-card-img1.png"
                              alt=""
                            />
                          </Link>
                          <div className="batch">
                            <span className="date">3 Days / 4 Night</span>
                            <div className="location">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={18}
                                height={18}
                                viewBox="0 0 18 18"
                              >
                                <path d="M8.99939 0C5.40484 0 2.48047 2.92437 2.48047 6.51888C2.48047 10.9798 8.31426 17.5287 8.56264 17.8053C8.79594 18.0651 9.20326 18.0646 9.43613 17.8053C9.68451 17.5287 15.5183 10.9798 15.5183 6.51888C15.5182 2.92437 12.5939 0 8.99939 0ZM8.99939 9.79871C7.19088 9.79871 5.71959 8.32739 5.71959 6.51888C5.71959 4.71037 7.19091 3.23909 8.99939 3.23909C10.8079 3.23909 12.2791 4.71041 12.2791 6.51892C12.2791 8.32743 10.8079 9.79871 8.99939 9.79871Z" />
                              </svg>
                              <ul className="location-list">
                                <li>
                                  <Link href="/package">Nepal</Link>
                                </li>
                                <li>
                                  <Link href="/package">Indonesia Tour</Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="package-card-content">
                          <div className="card-content-top">
                            <h5>
                              <Link href="/package/package-details">
                                Embark Trquility Adventure, and Spiritual.
                              </Link>
                            </h5>
                            <div className="location-area">
                              <ul className="location-list scrollTextAni">
                                <li>
                                  <Link href="/package">Alexandria</Link>
                                </li>
                                <li>
                                  <Link href="/package">Sharm El Sheikh</Link>
                                </li>
                                <li>
                                  <Link href="/package">Mansoura</Link>
                                </li>
                                <li>
                                  <Link href="/package">Karachi</Link>
                                </li>
                                <li>
                                  <Link href="/package">Lahore</Link>
                                </li>
                                <li>
                                  <Link href="/package">Islamabad</Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="card-content-bottom">
                            <div className="price-area">
                              <h6>Starting Form:</h6>
                              <span>
                                $2,898 <del>$3000</del>
                              </span>
                            </div>
                            <Link
                              href="/package/package-details"
                              className="primary-btn1"
                            >
                              Book a Trip
                            </Link>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <div className="package-card style-2">
                        <div className="package-card-img-wrap">
                          <Link
                            href="package/package-details"
                            className="card-img"
                          >
                            <img
                              src="/assets/img/home1/package-card-img2.png"
                              alt=""
                            />
                          </Link>
                          <div className="batch">
                            <span className="date">7 Days / 8 Night</span>
                            <div className="location">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={18}
                                height={18}
                                viewBox="0 0 18 18"
                              >
                                <path d="M8.99939 0C5.40484 0 2.48047 2.92437 2.48047 6.51888C2.48047 10.9798 8.31426 17.5287 8.56264 17.8053C8.79594 18.0651 9.20326 18.0646 9.43613 17.8053C9.68451 17.5287 15.5183 10.9798 15.5183 6.51888C15.5182 2.92437 12.5939 0 8.99939 0ZM8.99939 9.79871C7.19088 9.79871 5.71959 8.32739 5.71959 6.51888C5.71959 4.71037 7.19091 3.23909 8.99939 3.23909C10.8079 3.23909 12.2791 4.71041 12.2791 6.51892C12.2791 8.32743 10.8079 9.79871 8.99939 9.79871Z" />
                              </svg>
                              <ul className="location-list">
                                <li>
                                  <Link href="/package">Egypt</Link>
                                </li>
                                <li>
                                  <Link href="/package">Turkey Tour</Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="package-card-content">
                          <div className="card-content-top">
                            <h5>
                              <Link href="/package/package-details">
                                pellentesqu egestas Etiamat sit amet purus.
                              </Link>
                            </h5>
                            <div className="location-area">
                              <ul className="location-list scrollTextAni">
                                <li>
                                  <Link href="/package">Mecca</Link>
                                </li>
                                <li>
                                  <Link href="/package">Medina</Link>
                                </li>
                                <li>
                                  <Link href="/package">Riyadh</Link>
                                </li>
                                <li>
                                  <Link href="/package">Doha</Link>
                                </li>
                                <li>
                                  <Link href="/package">Al Wakrah</Link>
                                </li>
                                <li>
                                  <Link href="/package">Al Rayyan</Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="card-content-bottom">
                            <div className="price-area">
                              <h6>Starting Form:</h6>
                              <span>$3,256</span>
                            </div>
                            <Link
                              href="/package/package-details"
                              className="primary-btn1"
                            >
                              Book a Trip
                            </Link>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <div className="package-card style-2">
                        <div className="package-card-img-wrap">
                          <Link
                            href="package/package-details"
                            className="card-img"
                          >
                            <img
                              src="/assets/img/home1/package-card-img3.png"
                              alt=""
                            />
                          </Link>
                          <div className="batch">
                            <span className="date">5 Days / 6 Night</span>
                            <div className="location">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={18}
                                height={18}
                                viewBox="0 0 18 18"
                              >
                                <path d="M8.99939 0C5.40484 0 2.48047 2.92437 2.48047 6.51888C2.48047 10.9798 8.31426 17.5287 8.56264 17.8053C8.79594 18.0651 9.20326 18.0646 9.43613 17.8053C9.68451 17.5287 15.5183 10.9798 15.5183 6.51888C15.5182 2.92437 12.5939 0 8.99939 0ZM8.99939 9.79871C7.19088 9.79871 5.71959 8.32739 5.71959 6.51888C5.71959 4.71037 7.19091 3.23909 8.99939 3.23909C10.8079 3.23909 12.2791 4.71041 12.2791 6.51892C12.2791 8.32743 10.8079 9.79871 8.99939 9.79871Z" />
                              </svg>
                              <ul className="location-list">
                                <li>
                                  <Link href="/package">France</Link>
                                </li>
                                <li>
                                  <Link href="/package">Spain Tour</Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="package-card-content">
                          <div className="card-content-top">
                            <h5>
                              <Link href="/package/package-details">
                                Embark Tranquility, Adventure, and Spiritual.
                              </Link>
                            </h5>
                            <div className="location-area">
                              <ul className="location-list scrollTextAni">
                                <li>
                                  <Link href="/package">Alexandria</Link>
                                </li>
                                <li>
                                  <Link href="/package">Sharm El Sheikh</Link>
                                </li>
                                <li>
                                  <Link href="/package">Mansoura</Link>
                                </li>
                                <li>
                                  <Link href="/package">Karachi</Link>
                                </li>
                                <li>
                                  <Link href="/package">Lahore</Link>
                                </li>
                                <li>
                                  <Link href="/package">Islamabad</Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="card-content-bottom">
                            <div className="price-area">
                              <h6>Starting Form:</h6>
                              <span>
                                $1,988 <del>$2500</del>
                              </span>
                            </div>
                            <Link
                              href="/package/package-details"
                              className="primary-btn1"
                            >
                              Book a Trip
                            </Link>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <div className="package-card style-2">
                        <div className="package-card-img-wrap">
                          <Link
                            href="package/package-details"
                            className="card-img"
                          >
                            <img
                              src="/assets/img/home1/package-card-img4.png"
                              alt=""
                            />
                          </Link>
                          <div className="batch">
                            <span className="date">8 Days / 9 Night</span>
                            <div className="location">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={18}
                                height={18}
                                viewBox="0 0 18 18"
                              >
                                <path d="M8.99939 0C5.40484 0 2.48047 2.92437 2.48047 6.51888C2.48047 10.9798 8.31426 17.5287 8.56264 17.8053C8.79594 18.0651 9.20326 18.0646 9.43613 17.8053C9.68451 17.5287 15.5183 10.9798 15.5183 6.51888C15.5182 2.92437 12.5939 0 8.99939 0ZM8.99939 9.79871C7.19088 9.79871 5.71959 8.32739 5.71959 6.51888C5.71959 4.71037 7.19091 3.23909 8.99939 3.23909C10.8079 3.23909 12.2791 4.71041 12.2791 6.51892C12.2791 8.32743 10.8079 9.79871 8.99939 9.79871Z" />
                              </svg>
                              <ul className="location-list">
                                <li>
                                  <Link href="/package">India</Link>
                                </li>
                                <li>
                                  <Link href="/package">Japan Tour</Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="package-card-content">
                          <div className="card-content-top">
                            <h5>
                              <Link href="/package/package-details">
                                Embracing City Lights, Landm, and Iconic
                                Culture.
                              </Link>
                            </h5>
                            <div className="location-area">
                              <ul className="location-list scrollTextAni">
                                <li>
                                  <Link href="/package">Bangalore</Link>
                                </li>
                                <li>
                                  <Link href="/package">Chennai</Link>
                                </li>
                                <li>
                                  <Link href="/package">New Delhi</Link>
                                </li>
                                <li>
                                  <Link href="/package">Dhaka</Link>
                                </li>
                                <li>
                                  <Link href="/package">Rangpur</Link>
                                </li>
                                <li>
                                  <Link href="/package">Sylhet</Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="card-content-bottom">
                            <div className="price-area">
                              <h6>Starting Form:</h6>
                              <span>$3,798</span>
                            </div>
                            <Link
                              href="/package/package-details"
                              className="primary-btn1"
                            >
                              Book a Trip
                            </Link>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <div className="package-card style-2">
                        <div className="package-card-img-wrap">
                          <Link
                            href="package/package-details"
                            className="card-img"
                          >
                            <img
                              src="/assets/img/home1/package-card-img5.png"
                              alt=""
                            />
                          </Link>
                          <div className="batch">
                            <span className="date">6 Days / 7 Night</span>
                            <div className="location">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={18}
                                height={18}
                                viewBox="0 0 18 18"
                              >
                                <path d="M8.99939 0C5.40484 0 2.48047 2.92437 2.48047 6.51888C2.48047 10.9798 8.31426 17.5287 8.56264 17.8053C8.79594 18.0651 9.20326 18.0646 9.43613 17.8053C9.68451 17.5287 15.5183 10.9798 15.5183 6.51888C15.5182 2.92437 12.5939 0 8.99939 0ZM8.99939 9.79871C7.19088 9.79871 5.71959 8.32739 5.71959 6.51888C5.71959 4.71037 7.19091 3.23909 8.99939 3.23909C10.8079 3.23909 12.2791 4.71041 12.2791 6.51892C12.2791 8.32743 10.8079 9.79871 8.99939 9.79871Z" />
                              </svg>
                              <ul className="location-list">
                                <li>
                                  <Link href="/package">Brazil</Link>
                                </li>
                                <li>
                                  <Link href="/package">Hungary Tour</Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="package-card-content">
                          <div className="card-content-top">
                            <h5>
                              <Link href="/package/package-details">
                                A Journey of Tour Beauty and Inspiration.
                              </Link>
                            </h5>
                            <div className="location-area">
                              <ul className="location-list scrollTextAni">
                                <li>
                                  <Link href="/package">Paris</Link>
                                </li>
                                <li>
                                  <Link href="/package">Marseille</Link>
                                </li>
                                <li>
                                  <Link href="/package">Bordeaux</Link>
                                </li>
                                <li>
                                  <Link href="/package">Madrid</Link>
                                </li>
                                <li>
                                  <Link href="/package">Barcelona</Link>
                                </li>
                                <li>
                                  <Link href="/package">Valencia</Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="card-content-bottom">
                            <div className="price-area">
                              <h6>Starting Form:</h6>
                              <span>
                                $4,562 <del>$5,000</del>
                              </span>
                            </div>
                            <Link
                              href="/package/package-details"
                              className="primary-btn1"
                            >
                              Book a Trip
                            </Link>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <div className="package-card style-2">
                        <div className="package-card-img-wrap">
                          <Link
                            href="package/package-details"
                            className="card-img"
                          >
                            <img
                              src="/assets/img/home1/package-card-img6.png"
                              alt=""
                            />
                          </Link>
                          <div className="batch">
                            <span className="date">4 Days / 5 Night</span>
                            <div className="location">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={18}
                                height={18}
                                viewBox="0 0 18 18"
                              >
                                <path d="M8.99939 0C5.40484 0 2.48047 2.92437 2.48047 6.51888C2.48047 10.9798 8.31426 17.5287 8.56264 17.8053C8.79594 18.0651 9.20326 18.0646 9.43613 17.8053C9.68451 17.5287 15.5183 10.9798 15.5183 6.51888C15.5182 2.92437 12.5939 0 8.99939 0ZM8.99939 9.79871C7.19088 9.79871 5.71959 8.32739 5.71959 6.51888C5.71959 4.71037 7.19091 3.23909 8.99939 3.23909C10.8079 3.23909 12.2791 4.71041 12.2791 6.51892C12.2791 8.32743 10.8079 9.79871 8.99939 9.79871Z" />
                              </svg>
                              <ul className="location-list">
                                <li>
                                  <Link href="/package">Nepal</Link>
                                </li>
                                <li>
                                  <Link href="/package">Indonesia Tour </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="package-card-content">
                          <div className="card-content-top">
                            <h5>
                              <Link href="/package/package-details">
                                Mauris et augue eget Touris hendrerit pellent.
                              </Link>
                            </h5>
                            <div className="location-area">
                              <ul className="location-list scrollTextAni">
                                <li>
                                  <Link href="/package">Kathmandu</Link>
                                </li>
                                <li>
                                  <Link href="/package">Pokhara</Link>
                                </li>
                                <li>
                                  <Link href="/package">Lalitpur</Link>
                                </li>
                                <li>
                                  <Link href="/package">Jakarta</Link>
                                </li>
                                <li>
                                  <Link href="/package">Surabaya</Link>
                                </li>
                                <li>
                                  <Link href="/package">Bandung</Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="card-content-bottom">
                            <div className="price-area">
                              <h6>Starting Form:</h6>
                              <span>
                                $5,320 <del>$5,500</del>
                              </span>
                            </div>
                            <Link
                              href="/package/package-details"
                              className="primary-btn1"
                            >
                              Book a Trip
                            </Link>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <div className="package-card style-2">
                        <div className="package-card-img-wrap">
                          <Link
                            href="package/package-details"
                            className="card-img"
                          >
                            <img
                              src="/assets/img/home1/package-card-img10.png"
                              alt=""
                            />
                          </Link>
                          <div className="batch">
                            <span className="date">2 Days / 3 Night</span>
                            <div className="location">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={18}
                                height={18}
                                viewBox="0 0 18 18"
                              >
                                <path d="M8.99939 0C5.40484 0 2.48047 2.92437 2.48047 6.51888C2.48047 10.9798 8.31426 17.5287 8.56264 17.8053C8.79594 18.0651 9.20326 18.0646 9.43613 17.8053C9.68451 17.5287 15.5183 10.9798 15.5183 6.51888C15.5182 2.92437 12.5939 0 8.99939 0ZM8.99939 9.79871C7.19088 9.79871 5.71959 8.32739 5.71959 6.51888C5.71959 4.71037 7.19091 3.23909 8.99939 3.23909C10.8079 3.23909 12.2791 4.71041 12.2791 6.51892C12.2791 8.32743 10.8079 9.79871 8.99939 9.79871Z" />
                              </svg>
                              <ul className="location-list">
                                <li>
                                  <Link href="/package">Brazil</Link>
                                </li>
                                <li>
                                  <Link href="/package">Hungary Tour </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="package-card-content">
                          <div className="card-content-top">
                            <h5>
                              <Link href="/package/package-details">
                                luctus vitae ultrices volutp venenatis vel
                                velit.
                              </Link>
                            </h5>
                            <div className="location-area">
                              <ul className="location-list scrollTextAni">
                                <li>
                                  <Link href="/package">Kathmandu</Link>
                                </li>
                                <li>
                                  <Link href="/package">Pokhara</Link>
                                </li>
                                <li>
                                  <Link href="/package">Lalitpur</Link>
                                </li>
                                <li>
                                  <Link href="/package">Jakarta</Link>
                                </li>
                                <li>
                                  <Link href="/package">Surabaya</Link>
                                </li>
                                <li>
                                  <Link href="/package">Bandung</Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="card-content-bottom">
                            <div className="price-area">
                              <h6>Starting Form:</h6>
                              <span>
                                $5,320 <del>$5,500</del>
                              </span>
                            </div>
                            <Link
                              href="/package/package-details"
                              className="primary-btn1"
                            >
                              Book a Trip
                            </Link>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  </div>
                </Swiper>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 d-flex justify-content-center">
              <Link href="/package" className="secondary-btn4">
                View All Package
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home6TourPackage;
