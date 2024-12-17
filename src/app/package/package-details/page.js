"use client";
import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import Breadcrumb from "@/components/common/Breadcrumb";
import QuantityCounter from "@/uitils/QuantityCounter";
import Lightbox from "yet-another-react-lightbox";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
// import Newslatter from "@/components/common/Newslatter";
import Footer from "@/components/footer/Footer3";
import Header from "@/components/header/Header";
import Topbar from "@/components/topbar/Topbar";
import Header6 from "@/components/header/Header6";
import "@/components/stylebook/Footer.css";
import "./packagedetail.css";
import Link from "next/link";
const Page = () => {
  const [isOpen, setOpen] = useState(false);
  const [isOpenimg, setOpenimg] = useState({
    openingState: false,
    openingIndex: 0,
  });
  const images = [
    {
      id: 1,
      imageBig: "/assets/img/innerpage/package-01.jpg",
    },
    {
      id: 2,
      imageBig: "/assets/img/innerpage/package-02.jpg",
    },
    {
      id: 3,
      imageBig: "/assets/img/innerpage/package-03.jpg",
    },
    {
      id: 4,
      imageBig: "/assets/img/innerpage/package-04.jpg",
    },
    {
      id: 5,
      imageBig: "/assets/img/innerpage/package-05.jpg",
    },
    {
      id: 6,
      imageBig: "/assets/img/innerpage/package-06.jpg",
    },
  ];
  return (
    <>
      <Topbar />
      <Header />
      <Breadcrumb pagename="Package Details" pagetitle="Package Details" />
      <div className="package-details-area pt-120 mb-120 position-relative">
        <div className="container">
          <div className="row">
            <div className="co-lg-12">
              <div
                className="package-img-group"
                style={{
                  marginBottom: "35px",
                }}
              >
                <div className="row align-items-center g-5 package-page-img-crousel-on-large">
                  <div
                    className="col-lg-9"
                    style={{
                      marginTop: "0rem",
                      padding: "0rem",
                    }}
                  >
                    <div
                      className="gallery-img-wrap first-wrap-image flip-image-check"
                      style={{
                        marginTop: "0rem",
                        padding: "0rem",
                      }}
                    >
                      <img src="/assets/img/home2/makkah-one.png" alt="" />
                    </div>
                  </div>
                  <div
                    className="col-lg-3 h-100"
                    style={{
                      marginTop: "0rem",
                    }}
                  >
                    <div className="row g-3 h-100 ">
                      <div className="col-12">
                        <div className="gallery-img-wrap">
                          <img src="/assets/img/home2/makkah-two.png" alt="" />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="gallery-img-wrap">
                          <img
                            src="/assets/img/home2/makkah-three.png"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="others-image-wrap d-none">
            <a
              href="assets/img/innerpage/package-01.jpg"
              data-fancybox="images"
            >
              <img src="/assets/img/innerpage/blog-grid-img3.jpg" alt="" />
            </a>
            <a
              href="assets/img/innerpage/package-02.jpg"
              data-fancybox="images"
            >
              <img src="/assets/img/innerpage/blog-grid-img3.jpg" alt="" />
            </a>
            <a
              href="assets/img/innerpage/package-03.jpg"
              data-fancybox="images"
            >
              <img src="/assets/img/innerpage/blog-grid-img3.jpg" alt="" />
            </a>
            <a
              href="assets/img/innerpage/package-04.jpg"
              data-fancybox="images"
            >
              <img src="/assets/img/innerpage/blog-grid-img3.jpg" alt="" />
            </a>
            <a
              href="assets/img/innerpage/package-05.jpg"
              data-fancybox="images"
            >
              <img src="/assets/img/innerpage/blog-grid-img3.jpg" alt="" />
            </a>
          </div>
          <div className="row g-xl-4 gy-5 package-dtl-ui mt-2">
            <div className="col-xl-8">
              <div className="pckg-dtl-header">
                <div className="pckg-header-left">
                  <div className="pckg-left-title">
                    <h2>Umrah Package by Air</h2>
                    <span> 5 Nights / 6 Days - 1 Country / 2 Cities</span>
                  </div>
                  <div className="pckage-place">Makkah (3N)/Madinah (2N)</div>
                  <div className="pckg-badge-btn mt-2">
                    <button>
                      <span></span> Family
                    </button>
                    <button>
                      <span></span> Single
                    </button>
                  </div>
                </div>
                <div className="pckg-header-right">
                  <span>Starting Price Per Adult</span>
                  <div className="pckg-pricing">
                    <span>AED 4,650</span>
                    <h3>AED 4,185</h3>
                  </div>
                </div>
              </div>
              <div className="pckg-tab-content-area">
                <div className="row g-xl-5 gy-5 ">
                  <div className="col-xl-12">
                    <div className="pckg-tab-header">
                      <ul
                        className="nav nav-pills"
                        id="pills-tab3"
                        role="tablist"
                      >
                        <li className="nav-item" role="presentation">
                          <div
                            className="nav-link active"
                            id="overview-tab"
                            data-bs-toggle="pill"
                            data-bs-target="#overview"
                            role="tab"
                            aria-controls="overview"
                            aria-selected="true"
                          >
                            <h6>overview</h6>
                          </div>
                        </li>
                        <li className="nav-item" role="presentation">
                          <div
                            className="nav-link"
                            id="itinerary-tab"
                            data-bs-toggle="pill"
                            data-bs-target="#itinerary"
                            role="tab"
                            aria-controls="itinerary"
                            aria-selected="false"
                          >
                            <h6>itinerary</h6>
                          </div>
                        </li>
                        <li className="nav-item" role="presentation">
                          <div
                            className="nav-link"
                            id="accommodation-tab"
                            data-bs-toggle="pill"
                            data-bs-target="#accommodation"
                            role="tab"
                            aria-controls="accommodation"
                            aria-selected="false"
                          >
                            <h6>accommodation</h6>
                          </div>
                        </li>
                        <li className="nav-item" role="presentation">
                          <div
                            className="nav-link"
                            id="inclusion-exclusion-tab"
                            data-bs-toggle="pill"
                            data-bs-target="#inclusion-exclusion"
                            role="tab"
                            aria-controls="inclusion-exclusion-tab"
                            aria-selected="false"
                          >
                            <h6>inclusion & exclusion</h6>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-xl-12 d-flex justify-content-xl-start justify-content-center mt-4">
                    <div className="tab-content" id="pills-tab3Content">
                      <div
                        className="tab-pane fade show active"
                        id="overview"
                        role="tabpanel"
                        aria-labelledby="overview-tab"
                      >
                        <div className="tab-content-wrap">
                          <div className="pckg-table-ui">
                            <div className="pckg-table">
                              <table>
                                <tbody>
                                  <tr>
                                    <td>day 1</td>
                                    <td colSpan={2}>
                                      <div className="pckg-desc">
                                        <p>FULL DAY</p>
                                        <span>
                                          Arrival in Makkah. Check-in to the
                                          hotel and rest after your journey.
                                        </span>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>day 2</td>
                                    <td colSpan={2}>
                                      <div className="pckg-desc">
                                        <p>FULL DAY</p>
                                        <span>Ziyarah in Makkah</span>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>day 3</td>
                                    <td colSpan={2}>
                                      <div className="pckg-desc">
                                        <p>FULL DAY</p>
                                        <span>
                                          Enjoy a free day in Madinah to rest,
                                          relax, and engage in personal prayers
                                          and reflection.
                                        </span>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>day 4</td>
                                    <td>
                                      <div className="pckg-desc">
                                        <p>MORNING</p>
                                        <span>
                                          After breakfast, check-out from the
                                          hotel in makkah. Shared Transfer (SIC
                                          Basis) to Makkah.
                                        </span>
                                      </div>
                                    </td>
                                    <td width={350} className="third-col">
                                      <div className="pckg-desc packg-third-col">
                                        <p>NOON TO EVENING</p>
                                        <span>
                                          Rest and relax at the hotel.
                                        </span>
                                      </div>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                            <div className="pckg-table">
                              <table>
                                <tbody>
                                  <tr>
                                    <td>day 5</td>
                                    <td colSpan={2}>
                                      <div className="pckg-desc">
                                        <p>FULL DAY</p>
                                        <span>Ziyarah in Madinah</span>
                                      </div>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                            <div className="pckg-table">
                              <table>
                                <tbody>
                                  <tr>
                                    <td>day 6</td>
                                    <td colSpan={2}>
                                      <div className="pckg-desc">
                                        <p>Morning</p>
                                        <span>
                                          After breakfast, check-out from the
                                          hotel in Madinah.
                                        </span>
                                      </div>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="itinerary"
                        role="tabpanel"
                        aria-labelledby="itinerary-tab"
                      >
                        <div className=" tab-content-wrap">itinerary-tab</div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="accommodation"
                        role="tabpanel"
                        aria-labelledby="accommodation-tab"
                      >
                        <div className=" tab-content-wrap">
                          accommodation-tab
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="inclusion-exclusion"
                        role="tabpanel"
                        aria-labelledby="inclusion-exclusion-tab"
                      >
                        <div className=" tab-content-wrap">
                          inclusion-exclusion-tab
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4">
              <button class="primary-btn1 two  home-button book-now-thrill pckg-send-enquiry">
                SEND QUERY
              </button>
              <div className="banner2-card mb-48">
                <img src="/assets/img/activities/tele-cal.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
        <Lightbox
          className="img-fluid"
          open={isOpenimg.openingState}
          plugins={[Fullscreen]}
          index={isOpenimg.openingIndex}
          close={() => setOpenimg(false)}
          styles={{ container: { backgroundColor: "rgba(0, 0, 0, .9)" } }}
          slides={images.map(function (elem) {
            return { src: elem.imageBig };
          })}
        />
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
      {/* <Newslatter /> */}
      <Footer />
    </>
  );
};

export default Page;
