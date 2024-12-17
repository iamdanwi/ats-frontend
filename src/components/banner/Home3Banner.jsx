"use client";
import React, { useMemo, useState } from "react";
import ModalVideo from "react-modal-video";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper";
import Link from "next/link";
SwiperCore.use([Autoplay, EffectFade, Navigation, Pagination]);

const Home3Banner = () => {
  const [isOpen, setOpen] = useState(false);
  const settings = useMemo(() => {
    return {
      slidesPerView: "auto",
      speed: 1500,
      spaceBetween: 25,
      effect: "fade",
      loop: true,
      fadeEffect: {
        crossFade: true,
      },
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".progress-pagination",
        type: "progressbar",
      },
      navigation: {
        nextEl: ".home3-banner-next",
        prevEl: ".home3-banner-prev",
      },
    };
  });
  return (
    <>
      <div className="home3-banner-area">
        <Swiper {...settings} className="swiper home3-banner-slider">
          <div className="swiper-wrapper">
            <SwiperSlide className="swiper-slide">
              <div
                className="home3-banner-wrapper"
                style={{
                  backgroundImage:
                    "linear-gradient(180deg, rgba(34, 34, 34, 0.5) 0%, rgba(34, 34, 34, 0.5) 100%), url(assets/img/home3/home3-banner-img1.jpg)",
                }}
              >
                <div className="home3-banner-content-wrap">
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="home3-banner-content">
                          <div className="eg-tag">
                            <span>New York</span>
                          </div>
                          <h1>
                            Find Your Next
                            <span>Holiday Cool</span>
                            Packages !
                          </h1>
                          <div className="banner-content-bottom">
                            <Link href="/package" className="primary-btn4">
                              <span>
                                Book a Trip
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={17}
                                  height={17}
                                  viewBox="0 0 17 17"
                                >
                                  <path d="M7.70294 9.65818L7.27464 11.6673L5.29549 17.0003L6.47016 16.8046L11.9577 9.62856C12.7321 9.6016 13.4832 9.56006 14.1359 9.49563C17.1552 9.19702 16.9986 8.50013 16.9986 8.50013C16.9986 8.50013 17.1552 7.80325 14.1358 7.50464C13.4832 7.43995 12.7321 7.39845 11.9576 7.3717L6.47019 0.195477L5.29549 -5.1162e-07L7.27464 5.33303L7.70294 7.34212C6.69752 7.35717 6.01715 7.38006 6.01715 7.38006C6.01715 7.38006 4.63017 7.41207 2.48417 7.8956L0.734503 5.46859L-8.41624e-05 5.46859L0.523018 8.41949C0.428867 8.44835 0.428867 8.55195 0.523018 8.58081L-8.44274e-05 11.5317L0.734502 11.5317L2.48417 9.10495C4.63017 9.58848 6.01715 9.62001 6.01715 9.62001C6.01715 9.62001 6.69752 9.64317 7.70294 9.65818Z" />
                                  <path d="M11.4004 11.2692L11.4004 12.0613L8.47265 12.0613L8.47265 11.2692L11.4004 11.2692ZM11.4004 4.94234L11.4004 5.73425L8.47282 5.73425L8.47282 4.94234L11.4004 4.94234ZM9.42515 13.9276L9.42515 14.7195L6.71923 14.7195L6.71923 13.9276L9.42515 13.9276ZM9.42515 2.28418L9.42515 3.07634L6.71924 3.07634L6.71924 2.28418L9.42515 2.28418Z" />
                                </svg>
                              </span>
                            </Link>
                            <a
                              data-fancybox="popup-video"
                              style={{ cursor: "pointer" }}
                              onClick={() => setOpen(true)}
                              className="video-area"
                            >
                              <div className="icon">
                                <svg
                                  className="video-circle"
                                  xmlns="http://www.w3.org/2000/svg"
                                  xmlnsXlink="http://www.w3.org/1999/xlink"
                                  x="0px"
                                  y="0px"
                                  width="51px"
                                  viewBox="0 0 206 206"
                                  style={{
                                    enableBackground: "new 0 0 206 206",
                                  }}
                                  xmlSpace="preserve"
                                >
                                  <circle
                                    className="circle"
                                    strokeMiterlimit={10}
                                    cx={103}
                                    cy={103}
                                    r={100}
                                  />
                                  <path
                                    className="circle-half top-half"
                                    strokeWidth={4}
                                    strokeMiterlimit={10}
                                    d="M16.4,53C44,5.2,105.2-11.2,153,16.4s64.2,88.8,36.6,136.6"
                                  />
                                  <path
                                    className="circle-half bottom-half"
                                    strokeWidth={4}
                                    strokeMiterlimit={10}
                                    d="M189.6,153C162,200.8,100.8,217.2,53,189.6S-11.2,100.8,16.4,53"
                                  />
                                </svg>
                                <i className="bi bi-play" />
                              </div>
                              <h6>Watch Tour</h6>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div
                className="home3-banner-wrapper"
                style={{
                  backgroundImage:
                    "linear-gradient(180deg, rgba(16, 12, 8, 0.6) 0%, rgba(16, 12, 8, 0.6) 100%), url(assets/img/home3/home3-banner-img2.jpg)",
                }}
              >
                <div className="home3-banner-content-wrap">
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="home3-banner-content">
                          <div className="eg-tag">
                            <span>New York</span>
                          </div>
                          <h2>
                            Discover Your
                            <span>Future Vacation</span>
                            Specials !
                          </h2>
                          <div className="banner-content-bottom">
                            <Link href="/package" className="primary-btn4">
                              <span>
                                Book a Trip
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={17}
                                  height={17}
                                  viewBox="0 0 17 17"
                                >
                                  <path d="M7.70294 9.65818L7.27464 11.6673L5.29549 17.0003L6.47016 16.8046L11.9577 9.62856C12.7321 9.6016 13.4832 9.56006 14.1359 9.49563C17.1552 9.19702 16.9986 8.50013 16.9986 8.50013C16.9986 8.50013 17.1552 7.80325 14.1358 7.50464C13.4832 7.43995 12.7321 7.39845 11.9576 7.3717L6.47019 0.195477L5.29549 -5.1162e-07L7.27464 5.33303L7.70294 7.34212C6.69752 7.35717 6.01715 7.38006 6.01715 7.38006C6.01715 7.38006 4.63017 7.41207 2.48417 7.8956L0.734503 5.46859L-8.41624e-05 5.46859L0.523018 8.41949C0.428867 8.44835 0.428867 8.55195 0.523018 8.58081L-8.44274e-05 11.5317L0.734502 11.5317L2.48417 9.10495C4.63017 9.58848 6.01715 9.62001 6.01715 9.62001C6.01715 9.62001 6.69752 9.64317 7.70294 9.65818Z" />
                                  <path d="M11.4004 11.2692L11.4004 12.0613L8.47265 12.0613L8.47265 11.2692L11.4004 11.2692ZM11.4004 4.94234L11.4004 5.73425L8.47282 5.73425L8.47282 4.94234L11.4004 4.94234ZM9.42515 13.9276L9.42515 14.7195L6.71923 14.7195L6.71923 13.9276L9.42515 13.9276ZM9.42515 2.28418L9.42515 3.07634L6.71924 3.07634L6.71924 2.28418L9.42515 2.28418Z" />
                                </svg>
                              </span>
                            </Link>
                            <a
                              style={{ cursor: "pointer" }}
                              onClick={() => setOpen(true)}
                              className="video-area video1"
                            >
                              <div className="icon">
                                <svg
                                  className="video-circle"
                                  xmlns="http://www.w3.org/2000/svg"
                                  xmlnsXlink="http://www.w3.org/1999/xlink"
                                  x="0px"
                                  y="0px"
                                  width="51px"
                                  viewBox="0 0 206 206"
                                  style={{
                                    enableBackground: "new 0 0 206 206",
                                  }}
                                  xmlSpace="preserve"
                                >
                                  <circle
                                    className="circle"
                                    strokeMiterlimit={10}
                                    cx={103}
                                    cy={103}
                                    r={100}
                                  />
                                  <path
                                    className="circle-half top-half"
                                    strokeWidth={4}
                                    strokeMiterlimit={10}
                                    d="M16.4,53C44,5.2,105.2-11.2,153,16.4s64.2,88.8,36.6,136.6"
                                  />
                                  <path
                                    className="circle-half bottom-half"
                                    strokeWidth={4}
                                    strokeMiterlimit={10}
                                    d="M189.6,153C162,200.8,100.8,217.2,53,189.6S-11.2,100.8,16.4,53"
                                  />
                                </svg>
                                <i className="bi bi-play" />
                              </div>
                              <h6>Watch Tour</h6>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div
                className="home3-banner-wrapper"
                style={{
                  backgroundImage:
                    "linear-gradient(180deg, rgba(16, 12, 8, 0.6) 0%, rgba(16, 12, 8, 0.6) 100%), url(assets/img/home3/home3-banner-img3.jpg)",
                }}
              >
                <div className="home3-banner-content-wrap">
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="home3-banner-content">
                          <div className="eg-tag">
                            <span>New York</span>
                          </div>
                          <h2>
                            Explore Your
                            <span>Next Vacation</span>
                            Deals !
                          </h2>
                          <div className="banner-content-bottom">
                            <Link href="/package" className="primary-btn4">
                              <span>
                                Book a Trip
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={17}
                                  height={17}
                                  viewBox="0 0 17 17"
                                >
                                  <path d="M7.70294 9.65818L7.27464 11.6673L5.29549 17.0003L6.47016 16.8046L11.9577 9.62856C12.7321 9.6016 13.4832 9.56006 14.1359 9.49563C17.1552 9.19702 16.9986 8.50013 16.9986 8.50013C16.9986 8.50013 17.1552 7.80325 14.1358 7.50464C13.4832 7.43995 12.7321 7.39845 11.9576 7.3717L6.47019 0.195477L5.29549 -5.1162e-07L7.27464 5.33303L7.70294 7.34212C6.69752 7.35717 6.01715 7.38006 6.01715 7.38006C6.01715 7.38006 4.63017 7.41207 2.48417 7.8956L0.734503 5.46859L-8.41624e-05 5.46859L0.523018 8.41949C0.428867 8.44835 0.428867 8.55195 0.523018 8.58081L-8.44274e-05 11.5317L0.734502 11.5317L2.48417 9.10495C4.63017 9.58848 6.01715 9.62001 6.01715 9.62001C6.01715 9.62001 6.69752 9.64317 7.70294 9.65818Z" />
                                  <path d="M11.4004 11.2692L11.4004 12.0613L8.47265 12.0613L8.47265 11.2692L11.4004 11.2692ZM11.4004 4.94234L11.4004 5.73425L8.47282 5.73425L8.47282 4.94234L11.4004 4.94234ZM9.42515 13.9276L9.42515 14.7195L6.71923 14.7195L6.71923 13.9276L9.42515 13.9276ZM9.42515 2.28418L9.42515 3.07634L6.71924 3.07634L6.71924 2.28418L9.42515 2.28418Z" />
                                </svg>
                              </span>
                            </Link>
                            <a
                              style={{ cursor: "pointer" }}
                              onClick={() => setOpen(true)}
                              className="video-area video2"
                            >
                              <div className="icon">
                                <svg
                                  className="video-circle"
                                  xmlns="http://www.w3.org/2000/svg"
                                  xmlnsXlink="http://www.w3.org/1999/xlink"
                                  x="0px"
                                  y="0px"
                                  width="51px"
                                  viewBox="0 0 206 206"
                                  style={{
                                    enableBackground: "new 0 0 206 206",
                                  }}
                                  xmlSpace="preserve"
                                >
                                  <circle
                                    className="circle"
                                    strokeMiterlimit={10}
                                    cx={103}
                                    cy={103}
                                    r={100}
                                  />
                                  <path
                                    className="circle-half top-half"
                                    strokeWidth={4}
                                    strokeMiterlimit={10}
                                    d="M16.4,53C44,5.2,105.2-11.2,153,16.4s64.2,88.8,36.6,136.6"
                                  />
                                  <path
                                    className="circle-half bottom-half"
                                    strokeWidth={4}
                                    strokeMiterlimit={10}
                                    d="M189.6,153C162,200.8,100.8,217.2,53,189.6S-11.2,100.8,16.4,53"
                                  />
                                </svg>
                                <i className="bi bi-play" />
                              </div>
                              <h6>Watch Tour</h6>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div
                className="home3-banner-wrapper"
                style={{
                  backgroundImage:
                    "linear-gradient(180deg, rgba(16, 12, 8, 0.6) 0%, rgba(16, 12, 8, 0.6) 100%), url(assets/img/home3/home3-banner-img4.jpg)",
                }}
              >
                <div className="home3-banner-content-wrap">
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="home3-banner-content">
                          <div className="eg-tag">
                            <span>New York</span>
                          </div>
                          <h2>
                            Explore
                            <span>Exciting Vacation</span>
                            Packages!
                          </h2>
                          <div className="banner-content-bottom">
                            <Link href="/package" className="primary-btn4">
                              <span>
                                Book a Trip
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={17}
                                  height={17}
                                  viewBox="0 0 17 17"
                                >
                                  <path d="M7.70294 9.65818L7.27464 11.6673L5.29549 17.0003L6.47016 16.8046L11.9577 9.62856C12.7321 9.6016 13.4832 9.56006 14.1359 9.49563C17.1552 9.19702 16.9986 8.50013 16.9986 8.50013C16.9986 8.50013 17.1552 7.80325 14.1358 7.50464C13.4832 7.43995 12.7321 7.39845 11.9576 7.3717L6.47019 0.195477L5.29549 -5.1162e-07L7.27464 5.33303L7.70294 7.34212C6.69752 7.35717 6.01715 7.38006 6.01715 7.38006C6.01715 7.38006 4.63017 7.41207 2.48417 7.8956L0.734503 5.46859L-8.41624e-05 5.46859L0.523018 8.41949C0.428867 8.44835 0.428867 8.55195 0.523018 8.58081L-8.44274e-05 11.5317L0.734502 11.5317L2.48417 9.10495C4.63017 9.58848 6.01715 9.62001 6.01715 9.62001C6.01715 9.62001 6.69752 9.64317 7.70294 9.65818Z" />
                                  <path d="M11.4004 11.2692L11.4004 12.0613L8.47265 12.0613L8.47265 11.2692L11.4004 11.2692ZM11.4004 4.94234L11.4004 5.73425L8.47282 5.73425L8.47282 4.94234L11.4004 4.94234ZM9.42515 13.9276L9.42515 14.7195L6.71923 14.7195L6.71923 13.9276L9.42515 13.9276ZM9.42515 2.28418L9.42515 3.07634L6.71924 3.07634L6.71924 2.28418L9.42515 2.28418Z" />
                                </svg>
                              </span>
                            </Link>
                            <a
                              style={{ cursor: "pointer" }}
                              onClick={() => setOpen(true)}
                              className="video-area video3"
                            >
                              <div className="icon">
                                <svg
                                  className="video-circle"
                                  xmlns="http://www.w3.org/2000/svg"
                                  xmlnsXlink="http://www.w3.org/1999/xlink"
                                  x="0px"
                                  y="0px"
                                  width="51px"
                                  viewBox="0 0 206 206"
                                  style={{
                                    enableBackground: "new 0 0 206 206",
                                  }}
                                  xmlSpace="preserve"
                                >
                                  <circle
                                    className="circle"
                                    strokeMiterlimit={10}
                                    cx={103}
                                    cy={103}
                                    r={100}
                                  />
                                  <path
                                    className="circle-half top-half"
                                    strokeWidth={4}
                                    strokeMiterlimit={10}
                                    d="M16.4,53C44,5.2,105.2-11.2,153,16.4s64.2,88.8,36.6,136.6"
                                  />
                                  <path
                                    className="circle-half bottom-half"
                                    strokeWidth={4}
                                    strokeMiterlimit={10}
                                    d="M189.6,153C162,200.8,100.8,217.2,53,189.6S-11.2,100.8,16.4,53"
                                  />
                                </svg>
                                <i className="bi bi-play" />
                              </div>
                              <h6>Watch Tour</h6>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </div>
        </Swiper>
        <div className="slider-btn-grp">
          <div className="slider-btn home3-banner-prev">
            <i className="bi bi-arrow-up" />
          </div>
          <div className="progress-pagination" />
          <div className="slider-btn home3-banner-next">
            <i className="bi bi-arrow-down" />
          </div>
        </div>
        <React.Fragment>
          <ModalVideo
            channel="youtube"
            onClick={() => setOpen(true)}
            isOpen={isOpen}
            animationSpeed="350"
            videoId="r4KpWiK08vM"
            ratio="16:9"
            onClose={() => setOpen(false)}
          />
        </React.Fragment>
      </div>
    </>
  );
};

export default Home3Banner;
