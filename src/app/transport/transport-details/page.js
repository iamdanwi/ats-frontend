"use client";
import React, { useMemo } from "react";
import Breadcrumb from "@/components/common/Breadcrumb";
import QuantityCounter from "@/uitils/QuantityCounter";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper";
import { customLabels } from "@/hooks/CommonFunctions";
SwiperCore.use([Autoplay, EffectFade, Navigation, Pagination]);

const Page = () => {
  const settings = useMemo(() => {
    return {
      slidesPerView: "auto",
			speed: 1500,
			spaceBetween: 10,
			loop: true,
			autoplay: false,
		navigation: {
			nextEl: ".product-stand-next",
			prevEl: ".product-stand-prev",
		},

    };
  }, []);
  return (
    <>
      <Breadcrumb pagename="Transport Details" pagetitle="Transport Details" />
      <div className="transport-details-section pt-120 mb-120">
        <div className="container">
          <div className="row g-lg-4 gy-5">
            <div className="col-lg-8">
              <div className="transport-image-area mb-50">
                <div className="tab-content mb-30" id="myTab5Content">
                  <div
                    className="tab-pane fade show active"
                    id="exterior"
                    role="tabpanel"
                    aria-labelledby="exterior-tab"
                  >
                    <div className="transport-img">
                      <div className="slider-btn-group">
                        <div className="product-stand-next swiper-arrow">
                          <svg
                            width={8}
                            height={13}
                            viewBox="0 0 8 13"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M0 6.50008L8 0L2.90909 6.50008L8 13L0 6.50008Z" />
                          </svg>
                        </div>
                        <div className="product-stand-prev swiper-arrow">
                          <svg
                            width={8}
                            height={13}
                            viewBox="0 0 8 13"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M8 6.50008L0 0L5.09091 6.50008L0 13L8 6.50008Z" />
                          </svg>
                        </div>
                      </div>
                      <Swiper {...settings} className="swiper product-img-slider">
                        <div className="swiper-wrapper">
                          <SwiperSlide className="swiper-slide">
                            <img
                              src="/assets/img/innerpage/car-img.jpg"
                              alt="image"
                            />
                          </SwiperSlide>
                          <SwiperSlide className="swiper-slide">
                            <img
                              src="/assets/img/innerpage/car-img1.jpg"
                              alt="image"
                            />
                          </SwiperSlide>
                          <SwiperSlide className="swiper-slide">
                            <img
                              src="/assets/img/innerpage/car-img2.jpg"
                              alt="image"
                            />
                          </SwiperSlide>
                        </div>
                      </Swiper>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="interior"
                    role="tabpanel"
                    aria-labelledby="interior-tab"
                  >
                    <div className="transport-img">
                      <div className="slider-btn-group">
                        <div className="product-stand-next swiper-arrow">
                          <svg
                            width={8}
                            height={13}
                            viewBox="0 0 8 13"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M0 6.50008L8 0L2.90909 6.50008L8 13L0 6.50008Z" />
                          </svg>
                        </div>
                        <div className="product-stand-prev swiper-arrow">
                          <svg
                            width={8}
                            height={13}
                            viewBox="0 0 8 13"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M8 6.50008L0 0L5.09091 6.50008L0 13L8 6.50008Z" />
                          </svg>
                        </div>
                      </div>
                      <Swiper {...settings} className="swiper product-img-slider">
                        <div className="swiper-wrapper">
                          <SwiperSlide className="swiper-slide">
                            <img
                              src="/assets/img/innerpage/tab-big-01.jpg"
                              alt="image"
                            />
                          </SwiperSlide>
                          <SwiperSlide className="swiper-slide">
                            <img
                              src="/assets/img/innerpage/tab-big-011.jpg"
                              alt="image"
                            />
                          </SwiperSlide>
                          <SwiperSlide className="swiper-slide">
                            <img
                              src="/assets/img/innerpage/tab-big-012.jpg"
                              alt="image"
                            />
                          </SwiperSlide>
                        </div>
                      </Swiper>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="video-clip"
                    role="tabpanel"
                    aria-labelledby="video-clip-tab"
                  >
                    <div className="transport-img">
                      <div className="slider-btn-group">
                        <div className="product-stand-next swiper-arrow">
                          <svg
                            width={8}
                            height={13}
                            viewBox="0 0 8 13"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M0 6.50008L8 0L2.90909 6.50008L8 13L0 6.50008Z" />
                          </svg>
                        </div>
                        <div className="product-stand-prev swiper-arrow">
                          <svg
                            width={8}
                            height={13}
                            viewBox="0 0 8 13"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M8 6.50008L0 0L5.09091 6.50008L0 13L8 6.50008Z" />
                          </svg>
                        </div>
                      </div>
                      <Swiper {...settings} className="swiper product-img-slider">
                        <div className="swiper-wrapper">
                          <SwiperSlide className="swiper-slide">
                            <img
                              src="/assets/img/innerpage/tab-big-03.jpg"
                              alt="image"
                            />
                          </SwiperSlide>
                          <SwiperSlide className="swiper-slide">
                            <img
                              src="/assets/img/innerpage/tab-big-031.jpg"
                              alt="image"
                            />
                          </SwiperSlide>
                          <SwiperSlide className="swiper-slide">
                            <img
                              src="/assets/img/innerpage/tab-big-032.jpg"
                              alt="image"
                            />
                          </SwiperSlide>
                        </div>
                      </Swiper>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="color-clip"
                    role="tabpanel"
                    aria-labelledby="color-clip-tab"
                  >
                    <div className="transport-img">
                      <div className="slider-btn-group">
                        <div className="product-stand-next swiper-arrow">
                          <svg
                            width={8}
                            height={13}
                            viewBox="0 0 8 13"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M0 6.50008L8 0L2.90909 6.50008L8 13L0 6.50008Z" />
                          </svg>
                        </div>
                        <div className="product-stand-prev swiper-arrow">
                          <svg
                            width={8}
                            height={13}
                            viewBox="0 0 8 13"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M8 6.50008L0 0L5.09091 6.50008L0 13L8 6.50008Z" />
                          </svg>
                        </div>
                      </div>
                      <Swiper {...settings} className="swiper product-img-slider">
                        <div className="swiper-wrapper">
                          <SwiperSlide className="swiper-slide">
                            <img
                              src="/assets/img/innerpage/tab-big-04.jpg"
                              alt="image"
                            />
                          </SwiperSlide>
                          <SwiperSlide className="swiper-slide">
                            <img
                              src="/assets/img/innerpage/tab-big-041.jpg"
                              alt="image"
                            />
                          </SwiperSlide>
                          <SwiperSlide className="swiper-slide">
                            <img
                              src="/assets/img/innerpage/tab-big-042.jpg"
                              alt="image"
                            />
                          </SwiperSlide>
                        </div>
                      </Swiper>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="color-clip2"
                    role="tabpanel"
                    aria-labelledby="color-clip2-tab"
                  >
                    <div className="transport-img">
                      <div className="slider-btn-group">
                        <div className="product-stand-next swiper-arrow">
                          <svg
                            width={8}
                            height={13}
                            viewBox="0 0 8 13"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M0 6.50008L8 0L2.90909 6.50008L8 13L0 6.50008Z" />
                          </svg>
                        </div>
                        <div className="product-stand-prev swiper-arrow">
                          <svg
                            width={8}
                            height={13}
                            viewBox="0 0 8 13"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M8 6.50008L0 0L5.09091 6.50008L0 13L8 6.50008Z" />
                          </svg>
                        </div>
                      </div>
                      <Swiper {...settings} className="swiper product-img-slider">
                        <div className="swiper-wrapper">
                          <SwiperSlide className="swiper-slide">
                            <img
                              src="/assets/img/innerpage/tab-big-05.jpg"
                              alt="image"
                            />
                          </SwiperSlide>
                          <SwiperSlide className="swiper-slide">
                            <img
                              src="/assets/img/innerpage/tab-big-051.jpg"
                              alt="image"
                            />
                          </SwiperSlide>
                          <SwiperSlide className="swiper-slide">
                            <img
                              src="/assets/img/innerpage/tab-big-052.jpg"
                              alt="image"
                            />
                          </SwiperSlide>
                        </div>
                      </Swiper>
                    </div>
                  </div>
                </div>
                <ul className="nav nav-tabs" id="myTab5" role="tablist">
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link active"
                      id="exterior-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#exterior"
                      type="button"
                      role="tab"
                      aria-controls="exterior"
                      aria-selected="true"
                    >
                      <img
                        src="/assets/img/innerpage/tab-sm-img02.jpg"
                        alt=""
                      />
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="interior-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#interior"
                      type="button"
                      role="tab"
                      aria-controls="interior"
                      aria-selected="false"
                    >
                      <img
                        src="/assets/img/innerpage/tab-sm-img01.jpg"
                        alt=""
                      />
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="video-clip-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#video-clip"
                      type="button"
                      role="tab"
                      aria-controls="video-clip"
                      aria-selected="false"
                    >
                      <img
                        src="/assets/img/innerpage/tab-sm-img03.jpg"
                        alt=""
                      />
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="color-clip-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#color-clip"
                      type="button"
                      role="tab"
                      aria-controls="color-clip"
                      aria-selected="false"
                    >
                      <img
                        src="/assets/img/innerpage/tab-sm-img04.jpg"
                        alt=""
                      />
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="color-clip2-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#color-clip2"
                      type="button"
                      role="tab"
                      aria-controls="color-clip2"
                      aria-selected="false"
                    >
                      <img
                        src="/assets/img/innerpage/tab-sm-img05.jpg"
                        alt=""
                      />
                    </button>
                  </li>
                </ul>
              </div>
              <h3>Travel to Sajek from Dhaka (4 ways to travel)</h3>
              <ul className="fetures">
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={14}
                    height={14}
                    viewBox="0 0 14 14"
                  >
                    <g>
                      <mask
                        id="mask0_2770_3"
                        style={{ maskType: "luminance" }}
                        maskUnits="userSpaceOnUse"
                        x={0}
                        y={0}
                        width={14}
                        height={14}
                      >
                        <path d="M14 0H0V14H14V0Z" fill="white" />
                      </mask>
                      <g>
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M0.290345 0.305287C0.477874 0.117817 0.732181 0.0125018 0.997345 0.0125018C1.26251 0.0125018 1.51682 0.117817 1.70434 0.305287L6.99735 5.59828L12.2903 0.305287C12.3826 0.209778 12.4929 0.133596 12.6149 0.0811869C12.7369 0.0287779 12.8682 0.00119157 13.0009 3.77571e-05C13.1337 -0.00111606 13.2654 0.0241854 13.3883 0.0744663C13.5112 0.124747 13.6229 0.199 13.7167 0.292893C13.8106 0.386786 13.8849 0.498438 13.9352 0.621335C13.9855 0.744231 14.0108 0.875911 14.0096 1.00869C14.0085 1.14147 13.9809 1.27269 13.9284 1.39469C13.876 1.5167 13.7998 1.62704 13.7043 1.71929L8.41135 7.01228L13.7043 12.3053C13.8865 12.4939 13.9873 12.7465 13.985 13.0087C13.9827 13.2709 13.8776 13.5217 13.6922 13.7071C13.5067 13.8925 13.256 13.9977 12.9938 14C12.7316 14.0022 12.479 13.9015 12.2903 13.7193L6.99735 8.42628L1.70434 13.7193C1.51574 13.9015 1.26314 14.0022 1.00094 14C0.738747 13.9977 0.487933 13.8925 0.302526 13.7071C0.117118 13.5217 0.0119492 13.2709 0.00967073 13.0087C0.00739232 12.7465 0.108187 12.4939 0.290345 12.3053L5.58335 7.01228L0.290345 1.71929C0.102874 1.53176 -0.00244141 1.27745 -0.00244141 1.01229C-0.00244141 0.747124 0.102874 0.492816 0.290345 0.305287Z"
                        />
                      </g>
                    </g>
                  </svg>
                  Free Cancellation
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width={20}
                    height={20}
                    x={0}
                    y={0}
                    viewBox="0 0 512 512"
                    style={{ enableBackground: "new 0 0 512 512" }}
                    xmlSpace="preserve"
                  >
                    <g>
                      <path
                        d="M256.042 512h-.028c-5.523 0-10-4.477-10-10s4.477-10 10-10 10.014 4.477 10.014 10-4.463 10-9.986 10z"
                        opacity={1}
                        data-original="#000000"
                      />
                      <path
                        d="M414.061 369.245v-39.872l-.001-.165c-.456-27.735-10.892-48.256-31.903-62.735-17.493-12.055-39.509-17.987-60.8-23.723-6.067-1.635-11.896-3.205-17.501-4.88v-21.161c22.812-15.416 37.841-41.522 37.841-71.074v-10.712a31.52 31.52 0 0 0 3.335-2.882c11.212-11.212 12.184-28.84 2.929-41.173V50.761C347.96 22.771 325.189 0 297.2 0h-82.4c-27.989 0-50.76 22.771-50.76 50.761v40.108c-9.255 12.333-8.282 29.961 2.941 41.185a31.63 31.63 0 0 0 3.323 2.872v10.709c0 29.547 15.028 55.649 37.841 71.066v21.169c-5.605 1.675-11.435 3.246-17.501 4.88-21.291 5.736-43.307 11.668-60.8 23.723-21.012 14.479-31.447 35-31.903 62.735l-.001.165v39.872c-4.657 4.703-7.54 11.167-7.54 18.294v28.459c0 14.345 11.67 26.016 26.015 26.016h24.915c1.312 0 2.609-.068 3.889-.191v46.6c0 13.001 10.564 23.578 23.549 23.578h42.319c5.523 0 10-4.477 10-10s-4.477-10-10-10h-42.319c-1.924 0-3.549-1.638-3.549-3.578v-54.29c9.914-7.337 16.355-19.111 16.355-32.364s-6.442-25.026-16.355-32.364v-30.083c0-1.924 1.625-3.549 3.549-3.549h46.662v60.865a10 10 0 0 0 15.587 8.293l24.994-16.84 24.967 16.838a9.998 9.998 0 0 0 15.591-8.29v-60.865h46.662c1.939 0 3.577 1.625 3.577 3.549v30.063c-9.929 7.336-16.383 19.119-16.383 32.384s6.454 25.048 16.383 32.384v54.27c0 1.939-1.638 3.578-3.577 3.578h-42.319c-5.523 0-10 4.477-10 10s4.477 10 10 10h42.319c13 0 23.577-10.577 23.577-23.578v-46.597a40.38 40.38 0 0 0 3.861.189h24.915c14.345 0 26.015-11.67 26.015-26.016v-28.459c.002-7.128-2.881-13.593-7.538-18.296zM184.04 50.761C184.04 33.799 197.839 20 214.8 20h82.4c16.961 0 30.76 13.799 30.76 30.761v22.4C307.002 58.503 282.109 50.604 256 50.604s-51.002 7.898-71.96 22.557zm-2.929 67.139c-4.486-4.487-4.486-11.786-.001-16.273l.002-.001c20.004-20.004 46.6-31.021 74.888-31.021s54.884 11.017 74.888 31.021l.002.001c4.486 4.487 4.485 11.787.012 16.261-4.485 4.469-11.782 4.47-16.255.012-15.667-15.667-36.489-24.295-58.631-24.295s-42.964 8.628-58.619 24.283c-4.494 4.478-11.804 4.478-16.286.012zm9.193 27.735v-4.43c7.71-.257 15.345-3.306 21.222-9.163 11.889-11.889 27.688-18.437 44.488-18.437s32.6 6.547 44.501 18.449c5.863 5.843 13.482 8.886 21.181 9.145v4.437c0 36.234-29.465 65.712-65.682 65.712-36.232-.001-65.71-29.479-65.71-65.713zm93.551 81.042v18.538c0 15.352-12.489 27.842-27.841 27.842-15.367 0-27.869-12.49-27.869-27.842V226.67a85.3 85.3 0 0 0 27.869 4.677 85.27 85.27 0 0 0 27.841-4.67zm-167.44 195.337a6.022 6.022 0 0 1-6.015-6.016v-28.459a6.021 6.021 0 0 1 6.015-6.015h24.915c11.163 0 20.245 9.082 20.245 20.245s-9.082 20.245-20.245 20.245zm160.155-44.181-14.965-10.092a9.996 9.996 0 0 0-11.179-.002l-14.997 10.104v-42.069h41.141zm66.662-62.06H168.768c-12.985 0-23.549 10.564-23.549 23.549v22.393a40.639 40.639 0 0 0-3.889-.191h-23.391V329.46c.364-21.055 7.754-35.838 23.253-46.519 14.665-10.105 34.994-15.583 54.654-20.88 4.661-1.256 9.402-2.542 14.097-3.891 5.669 20.102 24.169 34.885 46.07 34.885 21.889 0 40.378-14.782 46.043-34.884 4.694 1.348 9.436 2.634 14.096 3.89 19.66 5.297 39.99 10.774 54.654 20.88 15.5 10.681 22.89 25.463 23.253 46.519v32.063H370.67c-1.303 0-2.59.068-3.861.189v-22.39c.001-12.985-10.576-23.549-23.577-23.549zm58.369 100.226a6.022 6.022 0 0 1-6.015 6.016H370.67c-3.235 0-6.284-.782-8.998-2.137a10.056 10.056 0 0 0-.735-.366c-6.259-3.448-10.511-10.106-10.511-17.742 0-11.163 9.082-20.245 20.244-20.245h24.915a6.021 6.021 0 0 1 6.015 6.015v28.459z"
                        opacity={1}
                        data-original="#000000"
                      />
                    </g>
                  </svg>
                  Pay at Pickup
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={18}
                    height={18}
                    viewBox="0 0 14 14"
                  >
                    <path d="M12.355 5.79446L11.6018 5.57163C11.5058 5.54339 11.4145 5.47737 11.3346 5.3784C11.2547 5.27948 11.1882 5.15003 11.1401 4.99957L10.0999 1.76401C9.92742 1.2287 9.67856 0.78376 9.37846 0.474057C9.07834 0.164306 8.73761 0.000826392 8.39059 0H4.7344C4.38741 0.000777781 4.04668 0.164209 3.74658 0.473863C3.44646 0.783517 3.1976 1.22841 3.02509 1.76362L1.96416 5.06413C1.92003 5.20063 1.86089 5.31992 1.79028 5.41496C1.71966 5.50994 1.63901 5.57873 1.55312 5.61713L0.828187 5.93913C0.647691 6.01944 0.481758 6.18054 0.346177 6.40706C0.210594 6.63364 0.109872 6.91807 0.0535937 7.23336C0.0511875 7.24347 0.0509687 7.25552 0.049 7.26602C0.0173298 7.4473 0.000819981 7.63586 0 7.82564V10.5C0.000347345 11.0156 0.115693 11.5098 0.320737 11.8743C0.525779 12.2388 0.803775 12.4439 1.09375 12.4445H1.89984C2.02356 12.9098 2.21909 13.303 2.46365 13.5784C2.70822 13.8538 2.99176 14 3.28125 14C3.57074 14 3.85429 13.8538 4.09885 13.5784C4.34342 13.303 4.53892 12.9098 4.66265 12.4445H9.33734C9.46107 12.9098 9.65658 13.303 9.90114 13.5784C10.1457 13.8538 10.4293 14 10.7187 14C11.0082 14 11.2918 13.8538 11.5363 13.5784C11.7809 13.303 11.9764 12.9098 12.1002 12.4445H12.9062C13.1962 12.4439 13.4742 12.2388 13.6793 11.8743C13.8843 11.5098 13.9996 11.0156 14 10.5V9.24664C14.0012 8.41763 13.8363 7.61496 13.5348 6.98238C13.2334 6.3498 12.8152 5.92873 12.355 5.79446ZM13.3206 7.7778C13.4071 8.01756 13.4718 8.28001 13.5124 8.55559H13.3437C13.1702 8.55549 13.0037 8.43362 12.8804 8.21647C12.8111 8.09232 12.7581 7.94255 12.7251 7.7778H13.3206ZM0.439687 7.7778H0.813531L0.704156 8.55559H0.4375V7.82564C0.4375 7.80931 0.439469 7.79375 0.439687 7.7778ZM3.28125 13.2223C3.06493 13.2223 2.85346 13.1082 2.67359 12.8946C2.49373 12.6809 2.35354 12.3772 2.27076 12.0219C2.18797 11.6666 2.16631 11.2757 2.20852 10.8985C2.25072 10.5213 2.35489 10.1748 2.50785 9.9029C2.66081 9.63096 2.8557 9.44576 3.06786 9.37075C3.28005 9.29569 3.49994 9.33419 3.6998 9.48139C3.89965 9.62853 4.0705 9.87776 4.19067 10.1975C4.31085 10.5173 4.375 10.8933 4.375 11.2778C4.37464 11.7933 4.25931 12.2876 4.05426 12.6521C3.84923 13.0166 3.57123 13.2216 3.28125 13.2223ZM10.7187 13.2223C10.5024 13.2223 10.291 13.1082 10.1111 12.8946C9.93122 12.6809 9.79103 12.3772 9.70826 12.0219C9.62546 11.6666 9.6038 11.2757 9.64602 10.8985C9.68821 10.5213 9.79239 10.1748 9.94535 9.9029C10.0983 9.63096 10.2932 9.44576 10.5054 9.37075C10.7175 9.29569 10.9374 9.33419 11.1373 9.48139C11.3372 9.62853 11.508 9.87776 11.6282 10.1975C11.7483 10.5173 11.8125 10.8933 11.8125 11.2778C11.8121 11.7933 11.6968 12.2876 11.4918 12.6521C11.2867 13.0166 11.0087 13.2216 10.7187 13.2223ZM12.9062 11.6667H12.2325C12.2657 11.279 12.2515 10.8831 12.1907 10.5061C12.1299 10.1291 12.024 9.77991 11.8803 9.48241C11.7365 9.18496 11.5583 8.94618 11.3578 8.7825C11.1573 8.61883 10.9394 8.5341 10.7187 8.5341C10.4981 8.5341 10.2802 8.61883 10.0797 8.7825C9.87921 8.94618 9.70098 9.18496 9.55724 9.48241C9.41349 9.77991 9.30759 10.1291 9.2468 10.5061C9.18599 10.8831 9.17175 11.279 9.205 11.6667H4.795C4.82825 11.279 4.814 10.8831 4.75319 10.5061C4.6924 10.1291 4.5865 9.77991 4.44276 9.48241C4.29901 9.18496 4.12078 8.94618 3.92033 8.7825C3.71984 8.61883 3.50186 8.5341 3.28125 8.5341C3.06064 8.5341 2.84265 8.61883 2.64218 8.7825C2.4417 8.94618 2.26349 9.18496 2.11974 9.48241C1.97599 9.77991 1.87009 10.1291 1.8093 10.5061C1.7485 10.8831 1.73424 11.279 1.7675 11.6667H1.09375C0.919701 11.6667 0.752781 11.5438 0.62971 11.325C0.506641 11.1062 0.4375 10.8094 0.4375 10.5V9.33337H0.875C0.923764 9.33337 0.971132 9.30439 1.00958 9.25107C1.04802 9.19774 1.07534 9.12307 1.08719 9.03898L1.30594 7.48341C1.31402 7.42605 1.31464 7.36621 1.30775 7.30836C1.30086 7.25057 1.28665 7.19627 1.2662 7.14965C1.24574 7.10308 1.21958 7.06536 1.1897 7.03945C1.15981 7.01349 1.127 7.00002 1.09375 7.00002H0.631968C0.715364 6.85118 0.819929 6.7454 0.9345 6.69397L1.65966 6.37158C1.80265 6.30741 1.93692 6.19274 2.05447 6.03436C2.17203 5.87603 2.27045 5.67726 2.34391 5.44991L3.40484 2.1494C3.53905 1.73314 3.73264 1.38712 3.96607 1.14635C4.19951 0.905531 4.46452 0.778412 4.7344 0.77778H8.39059C8.66047 0.778412 8.92549 0.905531 9.15892 1.14635C9.39235 1.38712 9.58595 1.73314 9.72015 2.1494L10.7601 5.38496C10.8403 5.63589 10.9511 5.85178 11.0842 6.01681C11.2174 6.1819 11.3697 6.2919 11.5299 6.33891L12.283 6.56213C12.5033 6.62693 12.7129 6.77636 12.8973 7.00002H12.4687C12.4107 7.00002 12.3551 7.041 12.3141 7.11392C12.273 7.18684 12.25 7.28576 12.25 7.38891C12.2499 7.64432 12.278 7.89729 12.333 8.13335C12.3879 8.36936 12.4684 8.58383 12.57 8.76442C12.6716 8.94501 12.7922 9.08827 12.925 9.18588C13.0578 9.28349 13.2001 9.33361 13.3437 9.33337H13.5625V10.5C13.5625 10.8094 13.4933 11.1062 13.3703 11.325C13.2472 11.5438 13.0803 11.6667 12.9062 11.6667Z" />
                    <path d="M9.94393 3.6887C9.91405 3.60028 9.86565 3.53655 9.80932 3.51156C9.75302 3.48658 9.69344 3.50237 9.6437 3.55551C9.59396 3.60864 9.55811 3.69468 9.54406 3.79482C9.53001 3.89491 9.53889 4.00083 9.56878 4.08926L9.89493 5.05565H7.21875V1.94453H8.47328C8.58656 1.94506 8.69788 1.99751 8.79645 2.09673C8.89503 2.19599 8.97758 2.33872 9.03612 2.51114L9.17481 2.92259C9.2047 3.01101 9.2531 3.07474 9.30942 3.09973C9.36572 3.12471 9.42531 3.10891 9.47504 3.05578C9.52478 3.00265 9.56063 2.91661 9.57468 2.81647C9.58874 2.71638 9.57985 2.61045 9.54997 2.52203L9.41106 2.11058C9.3135 1.82329 9.17599 1.58558 9.01173 1.42026C8.84748 1.25493 8.66203 1.16762 8.47328 1.16675H7C6.94197 1.16675 6.88633 1.20773 6.84531 1.28064C6.8043 1.35356 6.78125 1.45249 6.78125 1.55564V5.44454C6.78125 5.54769 6.8043 5.64662 6.84531 5.71953C6.88633 5.79245 6.94197 5.83343 7 5.83343H10.2812C10.32 5.83343 10.358 5.81515 10.3914 5.78045C10.4249 5.74579 10.4525 5.69591 10.4716 5.63602C10.4907 5.57608 10.5004 5.50827 10.4999 5.43944C10.4994 5.3706 10.4886 5.30328 10.4687 5.24426L9.94393 3.6887ZM6.125 1.16675H4.65172C4.46296 1.16762 4.27752 1.25493 4.11326 1.42026C3.94901 1.58558 3.8115 1.82329 3.71394 2.11058L2.65628 5.24426C2.63634 5.30328 2.62557 5.3706 2.62506 5.43944C2.62455 5.50827 2.63433 5.57608 2.65339 5.63602C2.67246 5.69591 2.70012 5.74579 2.73357 5.78045C2.76702 5.81515 2.80503 5.83343 2.84375 5.83343H6.125C6.18302 5.83343 6.23867 5.79245 6.27968 5.71953C6.3207 5.64662 6.34375 5.54769 6.34375 5.44454V1.55564C6.34375 1.45249 6.3207 1.35356 6.27968 1.28064C6.23867 1.20773 6.18302 1.16675 6.125 1.16675ZM5.90625 5.05565H3.23006L4.08887 2.51114C4.14742 2.33872 4.22997 2.19599 4.32854 2.09673C4.42712 1.99751 4.53843 1.94506 4.65172 1.94453H5.90625V5.05565ZM7.4375 6.22232H7C6.94197 6.22232 6.88633 6.2633 6.84531 6.33622C6.8043 6.40913 6.78125 6.50806 6.78125 6.61121C6.78125 6.71436 6.8043 6.81329 6.84531 6.88621C6.88633 6.95912 6.94197 7.0001 7 7.0001H7.4375C7.49552 7.0001 7.55117 6.95912 7.59218 6.88621C7.6332 6.81329 7.65625 6.71436 7.65625 6.61121C7.65625 6.50806 7.6332 6.40913 7.59218 6.33622C7.55117 6.2633 7.49552 6.22232 7.4375 6.22232ZM3.28125 6.22232H2.84375C2.78573 6.22232 2.7301 6.2633 2.68907 6.33622C2.64805 6.40913 2.625 6.50806 2.625 6.61121C2.625 6.71436 2.64805 6.81329 2.68907 6.88621C2.7301 6.95912 2.78573 7.0001 2.84375 7.0001H3.28125C3.33927 7.0001 3.39492 6.95912 3.43593 6.88621C3.47695 6.81329 3.5 6.71436 3.5 6.61121C3.5 6.50806 3.47695 6.40913 3.43593 6.33622C3.39492 6.2633 3.33927 6.22232 3.28125 6.22232ZM10.7187 10.1112C10.5889 10.1112 10.4621 10.1797 10.3541 10.3079C10.2462 10.436 10.1621 10.6182 10.1125 10.8314C10.0628 11.0446 10.0498 11.2792 10.0751 11.5055C10.1004 11.7318 10.1629 11.9397 10.2547 12.1029C10.3465 12.266 10.4634 12.3771 10.5907 12.4222C10.718 12.4672 10.85 12.4441 10.9699 12.3558C11.0898 12.2675 11.1923 12.1179 11.2644 11.9261C11.3365 11.7342 11.375 11.5087 11.375 11.2779C11.375 10.9685 11.3058 10.6717 11.1828 10.4529C11.0597 10.2342 10.8928 10.1112 10.7187 10.1112ZM10.7187 11.6668C10.6755 11.6668 10.6332 11.644 10.5972 11.6013C10.5612 11.5585 10.5332 11.4978 10.5166 11.4267C10.5001 11.3557 10.4958 11.2775 10.5042 11.202C10.5126 11.1266 10.5335 11.0573 10.5641 11.0029C10.5947 10.9485 10.6336 10.9115 10.6761 10.8965C10.7185 10.8815 10.7625 10.8892 10.8024 10.9186C10.8424 10.948 10.8766 10.9979 10.9006 11.0618C10.9247 11.1258 10.9375 11.201 10.9375 11.2779C10.9375 11.381 10.9144 11.48 10.8734 11.5529C10.8324 11.6258 10.7768 11.6668 10.7187 11.6668ZM3.28125 10.1112C3.15145 10.1112 3.02457 10.1797 2.91665 10.3079C2.80875 10.436 2.72462 10.6182 2.67495 10.8314C2.62528 11.0446 2.61229 11.2792 2.63761 11.5055C2.66293 11.7318 2.72543 11.9397 2.8172 12.1029C2.90899 12.266 3.02591 12.3771 3.15323 12.4222C3.28051 12.4672 3.41247 12.4441 3.53237 12.3558C3.6523 12.2675 3.75479 12.1179 3.82689 11.9261C3.899 11.7342 3.9375 11.5087 3.9375 11.2779C3.9375 10.9685 3.86835 10.6717 3.7453 10.4529C3.62223 10.2342 3.45529 10.1112 3.28125 10.1112ZM3.28125 11.6668C3.23799 11.6668 3.19569 11.644 3.15971 11.6013C3.12375 11.5585 3.0957 11.4978 3.07915 11.4267C3.06258 11.3557 3.05826 11.2775 3.06671 11.202C3.07513 11.1266 3.09597 11.0573 3.12657 11.0029C3.15716 10.9485 3.19613 10.9115 3.23857 10.8965C3.281 10.8815 3.325 10.8892 3.36495 10.9186C3.40493 10.948 3.43911 10.9979 3.46314 11.0618C3.48718 11.1258 3.5 11.201 3.5 11.2779C3.5 11.381 3.47695 11.48 3.43593 11.5529C3.39492 11.6258 3.33927 11.6668 3.28125 11.6668Z" />
                  </svg>
                  Shuttle to Car
                </li>
              </ul>
              <p>
                Traveling from Dhaka to Sajek Valley is an adventure that takes
                you from the bustling capital city of Bangladesh to the serene
                and picturesque landscapes of the Chittagong Hill Tracts.
              </p>
              <p>
                The journey begins in Dhaka, a vibrant metropolis teeming with
                life, where you'll find yourself amidst the hustle and bustle of
                the city streets. Travelers have several options for reaching
                Sajek Valley from Dhaka, typically starting with a journey by
                road.
              </p>
              <p>
                The road trip from Dhaka to Sajek Valley offers an opportunity
                to witness the diverse landscapes of Bangladesh. As you leave
                Dhaka behind, the scenery gradually transforms from urban
                developments to rural expanses, passing through towns and
                villages along the way. The road winds through lush greenery,
                hills, and valleys, providing glimpses of the country's natural
                beauty.
              </p>
              <h4>Included and Excluded</h4>
              <div className="includ-and-exclud-area mb-20">
                <ul>
                  <li>
                    <i className="bi bi-check-lg" /> Specify the modes of
                    transportation included (flights, trains, buses, etc.).
                  </li>
                  <li>
                    <i className="bi bi-check-lg" /> Clarify if it covers
                    transfers between destinations or if it's limited to
                    specific legs of the journey.
                  </li>
                  <li>
                    <i className="bi bi-check-lg" /> Mention the type of
                    accommodation provided (hotels, hostels, etc.).
                  </li>
                  <li>
                    <i className="bi bi-check-lg" /> Specify the number of
                    nights included and the room type (single, double, etc.).
                  </li>
                  <li>
                    <i className="bi bi-check-lg" /> Any additional services
                    like travel insurance, Wi-Fi access, or specific amenities.
                  </li>
                </ul>
                <ul className="exclud">
                  <li>
                    <i className="bi bi-x-lg" /> Specify activities or tours not
                    included but available as optional extras.
                  </li>
                  <li>
                    <i className="bi bi-x-lg" /> Clarify that personal expenses
                    such as souvenirs, extra meals, or additional transportation
                    outside the tour schedule are not included.
                  </li>
                  <li>
                    <i className="bi bi-x-lg" /> Highlight that travel insurance
                    is not included (if applicable) and recommend purchasing it
                    separately.
                  </li>
                  <li>
                    <i className="bi bi-x-lg" /> Specify that costs related to
                    visas or permits are not part of the package.
                  </li>
                  <li>
                    <i className="bi bi-x-lg" /> Indicate that tips for guides,
                    drivers, or any other service providers are not included
                  </li>
                </ul>
              </div>
              <div className="faq-content-wrap mb-80">
                <div className="faq-content-title mb-20">
                  <h4>Frequently Asked &amp; Question</h4>
                </div>
                <div className="faq-content">
                  <div className="accordion" id="accordionTravel">
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="travelheadingOne">
                        <button
                          className="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#travelcollapseOne"
                          aria-expanded="true"
                          aria-controls="travelcollapseOne"
                        >
                          01. How do I book a trip on your website?
                        </button>
                      </h2>
                      <div
                        id="travelcollapseOne"
                        className="accordion-collapse collapse show"
                        aria-labelledby="travelheadingOne"
                        data-bs-parent="#accordionTravel"
                      >
                        <div className="accordion-body">
                          Aptent taciti sociosqu ad litora torquent per conubia
                          nostra, per inci only Integer purus onthis felis non
                          aliquam.Mauris nec just vitae ann auctor tol euismod
                          sit amet non ipsul growing this.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="travelheadingTwo">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#travelcollapseTwo"
                          aria-expanded="false"
                          aria-controls="travelcollapseTwo"
                        >
                          02. What payment methods do you accept?
                        </button>
                      </h2>
                      <div
                        id="travelcollapseTwo"
                        className="accordion-collapse collapse"
                        aria-labelledby="travelheadingTwo"
                        data-bs-parent="#accordionTravel"
                      >
                        <div className="accordion-body">
                          Aptent taciti sociosqu ad litora torquent per conubia
                          nostra, per inceptos only Integer purus onthis
                          placerat felis non aliquam.Mauris nec justo vitae ante
                          auctor tol euismod sit amet non ipsul growing this
                          Praesent commodo at massa eget suscipit. Utani vitae
                          enim velit.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="travelheadingThree">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#travelcollapseThree"
                          aria-expanded="false"
                          aria-controls="travelcollapseThree"
                        >
                          03. Can I make changes to my reservation after
                          booking?
                        </button>
                      </h2>
                      <div
                        id="travelcollapseThree"
                        className="accordion-collapse collapse"
                        aria-labelledby="travelheadingThree"
                        data-bs-parent="#accordionTravel"
                      >
                        <div className="accordion-body">
                          Aptent taciti sociosqu ad litora torquent per conubia
                          nostra, per inceptos only Integer purus onthis
                          placerat felis non aliquam.Mauris nec justo vitae ante
                          auctor tol euismod sit amet non ipsul growing this
                          Praesent commodo at massa eget suscipit. Utani vitae
                          enim velit.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="travelheadingFour">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#travelcollapseFour"
                          aria-expanded="false"
                          aria-controls="travelcollapseFour"
                        >
                          04. What is your cancellation policy?
                        </button>
                      </h2>
                      <div
                        id="travelcollapseFour"
                        className="accordion-collapse collapse"
                        aria-labelledby="travelheadingFour"
                        data-bs-parent="#accordionTravel"
                      >
                        <div className="accordion-body">
                          Aptent taciti sociosqu ad litora torquent per conubia
                          nostra, per inceptos only Integer purus onthis
                          placerat felis non aliquam.Mauris nec justo vitae ante
                          auctor tol euismod sit amet non ipsul growing this
                          Praesent commodo at massa eget suscipit. Utani vitae
                          enim velit.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="travelheadingFive">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#travelcollapseFive"
                          aria-expanded="false"
                          aria-controls="travelcollapseFive"
                        >
                          05. Do you offer group booking discounts?
                        </button>
                      </h2>
                      <div
                        id="travelcollapseFive"
                        className="accordion-collapse collapse"
                        aria-labelledby="travelheadingFive"
                        data-bs-parent="#accordionTravel"
                      >
                        <div className="accordion-body">
                          Aptent taciti sociosqu ad litora torquent per conubia
                          nostra, per inceptos only Integer purus onthis
                          placerat felis non aliquam.Mauris nec justo vitae ante
                          auctor tol euismod sit amet non ipsul growing this
                          Praesent commodo at massa eget suscipit. Utani vitae
                          enim velit.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="review-wrapper">
                <h4>Customer Review</h4>
                <div className="review-box">
                  <div className="total-review">
                    <h2>9.5</h2>
                    <div className="review-wrap">
                      <ul className="star-list">
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
                          <i className="bi bi-star-half" />
                        </li>
                      </ul>
                      <span>2590 Reviews</span>
                    </div>
                  </div>
                  {/* modal for review */}
                  <div
                    className="modal fade"
                    id="exampleModalToggle"
                    aria-hidden="true"
                    tabIndex={-1}
                  >
                    <div className="modal-dialog modal-dialog-centered">
                      <div className="modal-content">
                        <div className="modal-body">
                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          >
                            <i className="bi bi-x-lg" />
                          </button>
                          <div className="row g-2">
                            <div className="col-lg-8">
                              <div className="review-from-wrapper">
                                <h4>Write Your Review</h4>
                                <form>
                                  <div className="row">
                                    <div className="col-md-6 mb-20">
                                      <div className="form-inner">
                                        <label>Name</label>
                                        <input
                                          type="text"
                                          placeholder="Enter Your Name:"
                                        />
                                      </div>
                                    </div>
                                    <div className="col-md-6 mb-20">
                                      <div className="form-inner">
                                        <label>Email</label>
                                        <input
                                          type="email"
                                          placeholder="Enter Your Email:"
                                        />
                                      </div>
                                    </div>
                                    <div className="col-lg-12 mb-20">
                                      <div className="form-inner">
                                        <label>Review*</label>
                                        <textarea
                                          name="message"
                                          placeholder="Enter Your Review..."
                                          defaultValue={""}
                                        />
                                      </div>
                                    </div>
                                    <div className="col-lg-12 mb-40">
                                      <div className="star-rating-wrapper">
                                        <ul className="star-rating-list">
                                          <li>
                                            <div
                                              className="rating-container"
                                              data-rating={0}
                                            >
                                              <i className="bi bi-star-fill star-icon" />
                                              <i className="bi bi-star-fill star-icon" />
                                              <i className="bi bi-star-fill star-icon" />
                                              <i className="bi bi-star-fill star-icon" />
                                              <i className="bi bi-star-fill star-icon" />
                                            </div>
                                            <span>Equipment</span>
                                          </li>
                                          <li>
                                            <div
                                              className="rating-container"
                                              data-rating={0}
                                            >
                                              <i className="bi bi-star-fill star-icon" />
                                              <i className="bi bi-star-fill star-icon" />
                                              <i className="bi bi-star-fill star-icon" />
                                              <i className="bi bi-star-fill star-icon" />
                                              <i className="bi bi-star-fill star-icon" />
                                            </div>
                                            <span>Comfortable</span>
                                          </li>
                                          <li>
                                            <div
                                              className="rating-container"
                                              data-rating={0}
                                            >
                                              <i className="bi bi-star-fill star-icon" />
                                              <i className="bi bi-star-fill star-icon" />
                                              <i className="bi bi-star-fill star-icon" />
                                              <i className="bi bi-star-fill star-icon" />
                                              <i className="bi bi-star-fill star-icon" />
                                            </div>
                                            <span>Climate Control</span>
                                          </li>
                                          <li>
                                            <div
                                              className="rating-container"
                                              data-rating={0}
                                            >
                                              <i className="bi bi-star-fill star-icon" />
                                              <i className="bi bi-star-fill star-icon" />
                                              <i className="bi bi-star-fill star-icon" />
                                              <i className="bi bi-star-fill star-icon" />
                                              <i className="bi bi-star-fill star-icon" />
                                            </div>
                                            <span>Facility</span>
                                          </li>
                                          <li>
                                            <div
                                              className="rating-container"
                                              data-rating={0}
                                            >
                                              <i className="bi bi-star-fill star-icon" />
                                              <i className="bi bi-star-fill star-icon" />
                                              <i className="bi bi-star-fill star-icon" />
                                              <i className="bi bi-star-fill star-icon" />
                                              <i className="bi bi-star-fill star-icon" />
                                            </div>
                                            <span>Aftercare</span>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                    <div className="col-lg-12">
                                      <button
                                        type="submit"
                                        className="primary-btn1"
                                      >
                                        Submit Now
                                      </button>
                                    </div>
                                  </div>
                                </form>
                              </div>
                            </div>
                            <div className="col-lg-4 d-lg-flex d-none">
                              <div className="modal-form-image">
                                <img
                                  src="/assets/img/innerpage/form-image.jpg"
                                  alt="image"
                                  className="img-fluid"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <a
                    className="primary-btn1"
                    data-bs-toggle="modal"
                    href="#exampleModalToggle"
                    role="button"
                  >
                    GIVE A RATING
                  </a>
                </div>
                <div className="review-area">
                  <ul className="comment">
                    <li>
                      <div className="single-comment-area">
                        <div className="author-img">
                          <img
                            src="/assets/img/innerpage/comment-author-01.jpg"
                            alt=""
                          />
                        </div>
                        <div className="comment-content">
                          <div className="author-name-deg">
                            <h6>Mr. Bowmik Haldar,</h6>
                            <span>05 June, 2023</span>
                          </div>
                          <ul className="review-item-list">
                            <li>
                              <span>Equipment</span>
                              <ul className="star-list">
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
                                  <i className="bi bi-star-half" />
                                </li>
                              </ul>
                            </li>
                            <li>
                              <span>Comfortable </span>
                              <ul className="star-list">
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
                                  <i className="bi bi-star-half" />
                                </li>
                              </ul>
                            </li>
                            <li>
                              <span>Climate Control</span>
                              <ul className="star-list">
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
                                  <i className="bi bi-star-half" />
                                </li>
                              </ul>
                            </li>
                            <li>
                              <span>Facility</span>
                              <ul className="star-list">
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
                                  <i className="bi bi-star-half" />
                                </li>
                              </ul>
                            </li>
                            <li>
                              <span>Aftercare</span>
                              <ul className="star-list">
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
                                  <i className="bi bi-star-half" />
                                </li>
                              </ul>
                            </li>
                          </ul>
                          <p>
                            A solution that we came up with is to think of
                            sanitary pads packaging as you would tea. Tea comes
                            individually packaged{" "}
                          </p>
                          <div className="replay-btn">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={14}
                              height={11}
                              viewBox="0 0 14 11"
                            >
                              <path d="M8.55126 1.11188C8.52766 1.10118 8.50182 1.09676 8.47612 1.09903C8.45042 1.1013 8.42569 1.11018 8.40419 1.12486C8.3827 1.13954 8.36513 1.15954 8.35311 1.18304C8.34109 1.20653 8.335 1.23276 8.33539 1.25932V2.52797C8.33539 2.67388 8.2791 2.81381 8.17889 2.91698C8.07868 3.02016 7.94277 3.07812 7.80106 3.07812C7.08826 3.07812 5.64984 3.08362 4.27447 3.98257C3.2229 4.66916 2.14783 5.9191 1.50129 8.24735C2.59132 7.16575 3.83632 6.57929 4.92635 6.2679C5.59636 6.07737 6.28492 5.96444 6.97926 5.93121C7.26347 5.91835 7.54815 5.92129 7.83205 5.94001H7.84594L7.85129 5.94111L7.80106 6.48906L7.85449 5.94111C7.98638 5.95476 8.10864 6.01839 8.19751 6.11966C8.28638 6.22092 8.33553 6.35258 8.33539 6.48906V7.75771C8.33539 7.87654 8.45294 7.95136 8.55126 7.90515L12.8088 4.67796C12.8233 4.66692 12.8383 4.65664 12.8537 4.64715C12.8769 4.63278 12.8962 4.61245 12.9095 4.58816C12.9229 4.56386 12.9299 4.53643 12.9299 4.50851C12.9299 4.4806 12.9229 4.45316 12.9095 4.42887C12.8962 4.40458 12.8769 4.38425 12.8537 4.36988C12.8382 4.36039 12.8233 4.35011 12.8088 4.33907L8.55126 1.11188ZM7.26673 7.02381C7.19406 7.02381 7.11391 7.02711 7.02842 7.03041C6.56462 7.05242 5.92342 7.12504 5.21169 7.32859C3.79464 7.7335 2.11684 8.65116 1.00115 10.7175C0.940817 10.8291 0.844683 10.9155 0.729224 10.9621C0.613765 11.0087 0.486168 11.0124 0.368304 10.9728C0.250441 10.9331 0.149648 10.8525 0.0831985 10.7447C0.0167484 10.6369 -0.011219 10.5086 0.0040884 10.3819C0.499949 6.29981 2.01959 4.15202 3.70167 3.05391C5.03215 2.18467 6.40218 2.01743 7.26673 1.98552V1.25932C7.26663 1.03273 7.32593 0.810317 7.43839 0.615545C7.55084 0.420773 7.71227 0.260866 7.90565 0.152696C8.09902 0.0445258 8.31717 -0.00789584 8.53707 0.000962485C8.75698 0.00982081 8.97048 0.0796305 9.15506 0.203025L13.4233 3.43792C13.5998 3.55133 13.7453 3.7091 13.8462 3.8964C13.9471 4.08369 14 4.29434 14 4.50851C14 4.72269 13.9471 4.93333 13.8462 5.12063C13.7453 5.30792 13.5998 5.4657 13.4233 5.57911L9.15506 8.814C8.97048 8.9374 8.75698 9.00721 8.53707 9.01607C8.31717 9.02492 8.09902 8.9725 7.90565 8.86433C7.71227 8.75616 7.55084 8.59626 7.43839 8.40148C7.32593 8.20671 7.26663 7.9843 7.26673 7.75771V7.02381Z"></path>
                            </svg>
                            Reply (01)
                          </div>
                        </div>
                      </div>
                      <ul className="comment-replay">
                        <li>
                          <div className="single-comment-area">
                            <div className="author-img">
                              <img
                                src="/assets/img/innerpage/comment-author-02.jpg"
                                alt=""
                              />
                            </div>
                            <div className="comment-content">
                              <div className="author-name-deg">
                                <h6>Author Response,</h6>
                                <span>05 June, 2023</span>
                              </div>
                              <p>Thanks for your review.</p>
                              <div className="replay-btn">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={14}
                                  height={11}
                                  viewBox="0 0 14 11"
                                >
                                  <path d="M8.55126 1.11188C8.52766 1.10118 8.50182 1.09676 8.47612 1.09903C8.45042 1.1013 8.42569 1.11018 8.40419 1.12486C8.3827 1.13954 8.36513 1.15954 8.35311 1.18304C8.34109 1.20653 8.335 1.23276 8.33539 1.25932V2.52797C8.33539 2.67388 8.2791 2.81381 8.17889 2.91698C8.07868 3.02016 7.94277 3.07812 7.80106 3.07812C7.08826 3.07812 5.64984 3.08362 4.27447 3.98257C3.2229 4.66916 2.14783 5.9191 1.50129 8.24735C2.59132 7.16575 3.83632 6.57929 4.92635 6.2679C5.59636 6.07737 6.28492 5.96444 6.97926 5.93121C7.26347 5.91835 7.54815 5.92129 7.83205 5.94001H7.84594L7.85129 5.94111L7.80106 6.48906L7.85449 5.94111C7.98638 5.95476 8.10864 6.01839 8.19751 6.11966C8.28638 6.22092 8.33553 6.35258 8.33539 6.48906V7.75771C8.33539 7.87654 8.45294 7.95136 8.55126 7.90515L12.8088 4.67796C12.8233 4.66692 12.8383 4.65664 12.8537 4.64715C12.8769 4.63278 12.8962 4.61245 12.9095 4.58816C12.9229 4.56386 12.9299 4.53643 12.9299 4.50851C12.9299 4.4806 12.9229 4.45316 12.9095 4.42887C12.8962 4.40458 12.8769 4.38425 12.8537 4.36988C12.8382 4.36039 12.8233 4.35011 12.8088 4.33907L8.55126 1.11188ZM7.26673 7.02381C7.19406 7.02381 7.11391 7.02711 7.02842 7.03041C6.56462 7.05242 5.92342 7.12504 5.21169 7.32859C3.79464 7.7335 2.11684 8.65116 1.00115 10.7175C0.940817 10.8291 0.844683 10.9155 0.729224 10.9621C0.613765 11.0087 0.486168 11.0124 0.368304 10.9728C0.250441 10.9331 0.149648 10.8525 0.0831985 10.7447C0.0167484 10.6369 -0.011219 10.5086 0.0040884 10.3819C0.499949 6.29981 2.01959 4.15202 3.70167 3.05391C5.03215 2.18467 6.40218 2.01743 7.26673 1.98552V1.25932C7.26663 1.03273 7.32593 0.810317 7.43839 0.615545C7.55084 0.420773 7.71227 0.260866 7.90565 0.152696C8.09902 0.0445258 8.31717 -0.00789584 8.53707 0.000962485C8.75698 0.00982081 8.97048 0.0796305 9.15506 0.203025L13.4233 3.43792C13.5998 3.55133 13.7453 3.7091 13.8462 3.8964C13.9471 4.08369 14 4.29434 14 4.50851C14 4.72269 13.9471 4.93333 13.8462 5.12063C13.7453 5.30792 13.5998 5.4657 13.4233 5.57911L9.15506 8.814C8.97048 8.9374 8.75698 9.00721 8.53707 9.01607C8.31717 9.02492 8.09902 8.9725 7.90565 8.86433C7.71227 8.75616 7.55084 8.59626 7.43839 8.40148C7.32593 8.20671 7.26663 7.9843 7.26673 7.75771V7.02381Z"></path>
                                </svg>
                                Reply
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <div className="single-comment-area">
                        <div className="author-img">
                          <img
                            src="/assets/img/innerpage/comment-author-04.jpg"
                            alt=""
                          />
                        </div>
                        <div className="comment-content">
                          <div className="author-name-deg">
                            <h6>Srileka Panday,</h6>
                            <span>05 June, 2023</span>
                          </div>
                          <ul className="review-item-list">
                            <li>
                              <span>Equipment</span>
                              <ul className="star-list">
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
                                  <i className="bi bi-star-half" />
                                </li>
                              </ul>
                            </li>
                            <li>
                              <span>Comfortable </span>
                              <ul className="star-list">
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
                                  <i className="bi bi-star-half" />
                                </li>
                              </ul>
                            </li>
                            <li>
                              <span>Climate Control</span>
                              <ul className="star-list">
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
                                  <i className="bi bi-star-half" />
                                </li>
                              </ul>
                            </li>
                            <li>
                              <span>Facility</span>
                              <ul className="star-list">
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
                                  <i className="bi bi-star-half" />
                                </li>
                              </ul>
                            </li>
                            <li>
                              <span>Aftercare</span>
                              <ul className="star-list">
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
                                  <i className="bi bi-star-half" />
                                </li>
                              </ul>
                            </li>
                          </ul>
                          <p>
                            A solution that we came up with is to think of
                            sanitary pads packaging as you would tea. Tea comes
                            individually packaged{" "}
                          </p>
                          <div className="replay-btn">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={14}
                              height={11}
                              viewBox="0 0 14 11"
                            >
                              <path d="M8.55126 1.11188C8.52766 1.10118 8.50182 1.09676 8.47612 1.09903C8.45042 1.1013 8.42569 1.11018 8.40419 1.12486C8.3827 1.13954 8.36513 1.15954 8.35311 1.18304C8.34109 1.20653 8.335 1.23276 8.33539 1.25932V2.52797C8.33539 2.67388 8.2791 2.81381 8.17889 2.91698C8.07868 3.02016 7.94277 3.07812 7.80106 3.07812C7.08826 3.07812 5.64984 3.08362 4.27447 3.98257C3.2229 4.66916 2.14783 5.9191 1.50129 8.24735C2.59132 7.16575 3.83632 6.57929 4.92635 6.2679C5.59636 6.07737 6.28492 5.96444 6.97926 5.93121C7.26347 5.91835 7.54815 5.92129 7.83205 5.94001H7.84594L7.85129 5.94111L7.80106 6.48906L7.85449 5.94111C7.98638 5.95476 8.10864 6.01839 8.19751 6.11966C8.28638 6.22092 8.33553 6.35258 8.33539 6.48906V7.75771C8.33539 7.87654 8.45294 7.95136 8.55126 7.90515L12.8088 4.67796C12.8233 4.66692 12.8383 4.65664 12.8537 4.64715C12.8769 4.63278 12.8962 4.61245 12.9095 4.58816C12.9229 4.56386 12.9299 4.53643 12.9299 4.50851C12.9299 4.4806 12.9229 4.45316 12.9095 4.42887C12.8962 4.40458 12.8769 4.38425 12.8537 4.36988C12.8382 4.36039 12.8233 4.35011 12.8088 4.33907L8.55126 1.11188ZM7.26673 7.02381C7.19406 7.02381 7.11391 7.02711 7.02842 7.03041C6.56462 7.05242 5.92342 7.12504 5.21169 7.32859C3.79464 7.7335 2.11684 8.65116 1.00115 10.7175C0.940817 10.8291 0.844683 10.9155 0.729224 10.9621C0.613765 11.0087 0.486168 11.0124 0.368304 10.9728C0.250441 10.9331 0.149648 10.8525 0.0831985 10.7447C0.0167484 10.6369 -0.011219 10.5086 0.0040884 10.3819C0.499949 6.29981 2.01959 4.15202 3.70167 3.05391C5.03215 2.18467 6.40218 2.01743 7.26673 1.98552V1.25932C7.26663 1.03273 7.32593 0.810317 7.43839 0.615545C7.55084 0.420773 7.71227 0.260866 7.90565 0.152696C8.09902 0.0445258 8.31717 -0.00789584 8.53707 0.000962485C8.75698 0.00982081 8.97048 0.0796305 9.15506 0.203025L13.4233 3.43792C13.5998 3.55133 13.7453 3.7091 13.8462 3.8964C13.9471 4.08369 14 4.29434 14 4.50851C14 4.72269 13.9471 4.93333 13.8462 5.12063C13.7453 5.30792 13.5998 5.4657 13.4233 5.57911L9.15506 8.814C8.97048 8.9374 8.75698 9.00721 8.53707 9.01607C8.31717 9.02492 8.09902 8.9725 7.90565 8.86433C7.71227 8.75616 7.55084 8.59626 7.43839 8.40148C7.32593 8.20671 7.26663 7.9843 7.26673 7.75771V7.02381Z"></path>
                            </svg>
                            Reply
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="single-comment-area">
                        <div className="author-img">
                          <img
                            src="/assets/img/innerpage/comment-author-05.jpg"
                            alt=""
                          />
                        </div>
                        <div className="comment-content">
                          <div className="author-name-deg">
                            <h6>Mr. Bowmik Haldar,</h6>
                            <span>05 June, 2023</span>
                          </div>
                          <ul className="review-item-list">
                            <li>
                              <span>Equipment</span>
                              <ul className="star-list">
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
                                  <i className="bi bi-star-half" />
                                </li>
                              </ul>
                            </li>
                            <li>
                              <span>Comfortable </span>
                              <ul className="star-list">
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
                                  <i className="bi bi-star-half" />
                                </li>
                              </ul>
                            </li>
                            <li>
                              <span>Climate Control</span>
                              <ul className="star-list">
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
                                  <i className="bi bi-star-half" />
                                </li>
                              </ul>
                            </li>
                            <li>
                              <span>Facility</span>
                              <ul className="star-list">
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
                                  <i className="bi bi-star-half" />
                                </li>
                              </ul>
                            </li>
                            <li>
                              <span>Aftercare</span>
                              <ul className="star-list">
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
                                  <i className="bi bi-star-half" />
                                </li>
                              </ul>
                            </li>
                          </ul>
                          <p>
                            However, here are some well-regarded car dealerships
                            known for their customer service, inventory, and
                            overall reputation. It's always a good idea to
                            research and read reviews specific...
                          </p>
                          <div className="replay-btn">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={14}
                              height={11}
                              viewBox="0 0 14 11"
                            >
                              <path d="M8.55126 1.11188C8.52766 1.10118 8.50182 1.09676 8.47612 1.09903C8.45042 1.1013 8.42569 1.11018 8.40419 1.12486C8.3827 1.13954 8.36513 1.15954 8.35311 1.18304C8.34109 1.20653 8.335 1.23276 8.33539 1.25932V2.52797C8.33539 2.67388 8.2791 2.81381 8.17889 2.91698C8.07868 3.02016 7.94277 3.07812 7.80106 3.07812C7.08826 3.07812 5.64984 3.08362 4.27447 3.98257C3.2229 4.66916 2.14783 5.9191 1.50129 8.24735C2.59132 7.16575 3.83632 6.57929 4.92635 6.2679C5.59636 6.07737 6.28492 5.96444 6.97926 5.93121C7.26347 5.91835 7.54815 5.92129 7.83205 5.94001H7.84594L7.85129 5.94111L7.80106 6.48906L7.85449 5.94111C7.98638 5.95476 8.10864 6.01839 8.19751 6.11966C8.28638 6.22092 8.33553 6.35258 8.33539 6.48906V7.75771C8.33539 7.87654 8.45294 7.95136 8.55126 7.90515L12.8088 4.67796C12.8233 4.66692 12.8383 4.65664 12.8537 4.64715C12.8769 4.63278 12.8962 4.61245 12.9095 4.58816C12.9229 4.56386 12.9299 4.53643 12.9299 4.50851C12.9299 4.4806 12.9229 4.45316 12.9095 4.42887C12.8962 4.40458 12.8769 4.38425 12.8537 4.36988C12.8382 4.36039 12.8233 4.35011 12.8088 4.33907L8.55126 1.11188ZM7.26673 7.02381C7.19406 7.02381 7.11391 7.02711 7.02842 7.03041C6.56462 7.05242 5.92342 7.12504 5.21169 7.32859C3.79464 7.7335 2.11684 8.65116 1.00115 10.7175C0.940817 10.8291 0.844683 10.9155 0.729224 10.9621C0.613765 11.0087 0.486168 11.0124 0.368304 10.9728C0.250441 10.9331 0.149648 10.8525 0.0831985 10.7447C0.0167484 10.6369 -0.011219 10.5086 0.0040884 10.3819C0.499949 6.29981 2.01959 4.15202 3.70167 3.05391C5.03215 2.18467 6.40218 2.01743 7.26673 1.98552V1.25932C7.26663 1.03273 7.32593 0.810317 7.43839 0.615545C7.55084 0.420773 7.71227 0.260866 7.90565 0.152696C8.09902 0.0445258 8.31717 -0.00789584 8.53707 0.000962485C8.75698 0.00982081 8.97048 0.0796305 9.15506 0.203025L13.4233 3.43792C13.5998 3.55133 13.7453 3.7091 13.8462 3.8964C13.9471 4.08369 14 4.29434 14 4.50851C14 4.72269 13.9471 4.93333 13.8462 5.12063C13.7453 5.30792 13.5998 5.4657 13.4233 5.57911L9.15506 8.814C8.97048 8.9374 8.75698 9.00721 8.53707 9.01607C8.31717 9.02492 8.09902 8.9725 7.90565 8.86433C7.71227 8.75616 7.55084 8.59626 7.43839 8.40148C7.32593 8.20671 7.26663 7.9843 7.26673 7.75771V7.02381Z"></path>
                            </svg>
                            Reply
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="transport-sidebar">
              <div className="booking-form-wrap">
                <h4>Book Your Tour</h4>
                <p>Reserve your ideal Room early for a hassle-free
                  trip secure comfort and convenience!</p>
                {/* <div className="nav nav-pills mb-40" role="tablist">
                <button className="nav-link show active" id="v-pills-booking-tab" data-bs-toggle="pill" data-bs-target="#v-pills-booking" type="button" role="tab" aria-controls="v-pills-booking" aria-selected="true">Online Booking</button>
                <button className="nav-link" id="v-pills-contact-tab" data-bs-toggle="pill" data-bs-target="#v-pills-contact" type="button" role="tab" aria-controls="v-pills-contact" aria-selected="false">Inquiry Form</button>
              </div> */}
                <div className="tab-content" id="v-pills-tabContent2">
                  <div className="tab-pane fade" id="v-pills-booking" role="tabpanel" aria-labelledby="v-pills-booking-tab">
                    <div className="sidebar-booking-form">
                      <form>
                        <div className="tour-date-wrap mb-50">
                          <h6>Select Your Booking Date:</h6>
                          <div className="form-inner mb-20">
                            <div className="form-group">
                              <input type="date" name="inOut" placeholder="5 Jan, 2024" />

                            </div>
                          </div>
                        </div>
                        <div className="booking-form-item-type mb-45">
                          <div className="number-input-item adults">
                            <label className="number-input-lable">Adult:<span>
                            </span><span> $60 <del>$80</del></span></label>
                            <QuantityCounter incIcon="bx bx-plus" dcrIcon="bx bx-minus" />
                          </div>
                          <div className="number-input-item children">
                            <label className="number-input-lable">Children:<span>
                            </span><span>$15</span></label>
                            <QuantityCounter incIcon="bx bx-plus" dcrIcon="bx bx-minus" />
                          </div>
                        </div>
                        <div className="booking-form-item-type">
                          <h5>Other Extra Services</h5>
                          <div className="checkbox-container">
                            <label className="check-container">Home Pickup
                              <input type="checkbox" className="services_check" name="services_list[]" defaultValue={0} />
                              <span className="checkmark" />
                              <span className="price">$10 </span>
                            </label>
                            <label className="check-container">Night Food
                              <input type="checkbox" className="services_check" name="services_list[]" defaultValue={1} />
                              <span className="checkmark" />
                              <span className="price">$15 </span>
                            </label>
                            <label className="check-container">Seaplane Fyling
                              <input type="checkbox" className="services_check" name="services_list[]" defaultValue={2} />
                              <span className="checkmark" />
                              <span className="price">$20 </span>
                            </label>
                          </div>
                        </div>
                        <div className="booking-form-item-type">
                          <div className="single-total mb-30">
                            <span>Adult</span>
                            <ul>
                              <li><strong>$195</strong> PRICE</li>
                              <li><i className="bi bi-x-lg" /></li>
                              <li><strong>02</strong> QTY</li>
                              <li><i className="bi bi-x-lg" /></li>
                              <li><strong>04</strong> DAYS</li>
                            </ul>
                            <svg xmlns="http://www.w3.org/2000/svg" width={27} height={15} viewBox="0 0 27 15">
                              <path fillRule="evenodd" clipRule="evenodd" d="M23.999 5.44668L25.6991 7.4978L23.9991 9.54878H0V10.5743H23.1491L20.0135 14.3575L20.7834 14.9956L26.7334 7.81687L26.9979 7.4978L26.7334 7.17873L20.7834 0L20.0135 0.638141L23.149 4.42114H0V5.44668H23.999Z" />
                            </svg>
                            <div className="total">$390</div>
                          </div>
                          <div className="single-total mb-30">
                            <span>Children</span>
                            <ul>
                              <li><strong>$195</strong> PRICE</li>
                              <li><i className="bi bi-x-lg" /></li>
                              <li><strong>02</strong> QTY</li>
                              <li><i className="bi bi-x-lg" /></li>
                              <li><strong>04</strong> DAYS</li>
                            </ul>
                            <svg xmlns="http://www.w3.org/2000/svg" width={27} height={15} viewBox="0 0 27 15">
                              <path fillRule="evenodd" clipRule="evenodd" d="M23.999 5.44668L25.6991 7.4978L23.9991 9.54878H0V10.5743H23.1491L20.0135 14.3575L20.7834 14.9956L26.7334 7.81687L26.9979 7.4978L26.7334 7.17873L20.7834 0L20.0135 0.638141L23.149 4.42114H0V5.44668H23.999Z" />
                            </svg>
                            <div className="total">$390</div>
                          </div>
                        </div>
                        <div className="total-price"><span>Total Price:</span> $470</div>
                        <button type="submit" className="primary-btn1 two book-now-activity">Book Now</button>
                      </form>
                    </div>
                  </div>
                  <div className="tab-pane fade active show" id="v-pills-contact" role="tabpanel" aria-labelledby="v-pills-contact-tab">
                    <div className="sidebar-booking-form">
                     
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

export default Page;
