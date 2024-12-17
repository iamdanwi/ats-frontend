"use client";
import React, { useEffect, useState } from "react";
import ModalVideo from "react-modal-video";
import CountUp from "react-countup";

const Home6About = () => {
  const [isOpen, setOpen] = useState(false);
  useEffect(() => {
    const elements = document.querySelectorAll(".badge__char");
    const step = 360 / elements.length;

    elements.forEach((elem, i) => {
      elem.style.setProperty("--char-rotate", i * step + "deg");
    });
  }, []);
  return (
    <>
      <div className="home6-about-section mb-120">
        <div className="container one">
          <div className="row align-items-xl-end align-items-center">
            <div className="col-lg-6">
              <div className="about-content">
                <div className="section-title5 mb-40">
                  <span>
                    Let’s About Us
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
                  <h2>Who We Are Your Trusted Travel Companion</h2>
                  <p>
                    Etiam ac tortor id purus commodo vulputate. Vestibulum
                    porttitor erat felis and sed vehiculant tortor malesuada
                    gravida. Mauris volutpat enim quis pulv gont congue.
                    Suspendisse ullamcor. In this luxurious getaway, no expense
                    has been spared. You will be captivated by fine a ghosa
                    cuisines, the naivety of local people and top notched
                    services.
                  </p>
                </div>
                <ul className="facilities">
                  <li>
                    <div className="icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={43}
                        height={43}
                        viewBox="0 0 43 43"
                      >
                        <path
                          opacity="0.5"
                          d="M20.5621 1.53451C20.8843 0.663888 22.1157 0.663888 22.4379 1.53451L27.4175 14.9917C27.5188 15.2654 27.7346 15.4812 28.0083 15.5825L41.4655 20.5621C42.3361 20.8843 42.3361 22.1157 41.4655 22.4379L28.0083 27.4175C27.7346 27.5188 27.5188 27.7346 27.4175 28.0083L22.4379 41.4655C22.1157 42.3361 20.8843 42.3361 20.5621 41.4655L15.5825 28.0083C15.4812 27.7346 15.2654 27.5188 14.9917 27.4175L1.53451 22.4379C0.663888 22.1157 0.663888 20.8843 1.53451 20.5621L14.9917 15.5825C15.2654 15.4812 15.4812 15.2654 15.5825 14.9917L20.5621 1.53451Z"
                        />
                      </svg>
                    </div>
                    <div className="content">
                      <h5>Safety first always</h5>
                      <p>
                        Praesent gravida nunc at tortor cursus, molestie dapibus
                        purus posuere. Vestibulum commodo, massa eget rutrum
                        feugiat
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="icon secondary">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={43}
                        height={43}
                        viewBox="0 0 43 43"
                      >
                        <path
                          opacity="0.5"
                          d="M20.5621 1.53451C20.8843 0.663888 22.1157 0.663888 22.4379 1.53451L27.4175 14.9917C27.5188 15.2654 27.7346 15.4812 28.0083 15.5825L41.4655 20.5621C42.3361 20.8843 42.3361 22.1157 41.4655 22.4379L28.0083 27.4175C27.7346 27.5188 27.5188 27.7346 27.4175 28.0083L22.4379 41.4655C22.1157 42.3361 20.8843 42.3361 20.5621 41.4655L15.5825 28.0083C15.4812 27.7346 15.2654 27.5188 14.9917 27.4175L1.53451 22.4379C0.663888 22.1157 0.663888 20.8843 1.53451 20.5621L14.9917 15.5825C15.2654 15.4812 15.4812 15.2654 15.5825 14.9917L20.5621 1.53451Z"
                        />
                      </svg>
                    </div>
                    <div className="content">
                      <h5>Trusted Travel Guide</h5>
                      <p>
                        Praesent gravida nunc at tortor cursus, molestie dapibus
                        purus posuere. Vestibulum commodo, massa eget rutrum
                        feugiat
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={43}
                        height={43}
                        viewBox="0 0 43 43"
                      >
                        <path
                          opacity="0.5"
                          d="M20.5621 1.53451C20.8843 0.663888 22.1157 0.663888 22.4379 1.53451L27.4175 14.9917C27.5188 15.2654 27.7346 15.4812 28.0083 15.5825L41.4655 20.5621C42.3361 20.8843 42.3361 22.1157 41.4655 22.4379L28.0083 27.4175C27.7346 27.5188 27.5188 27.7346 27.4175 28.0083L22.4379 41.4655C22.1157 42.3361 20.8843 42.3361 20.5621 41.4655L15.5825 28.0083C15.4812 27.7346 15.2654 27.5188 14.9917 27.4175L1.53451 22.4379C0.663888 22.1157 0.663888 20.8843 1.53451 20.5621L14.9917 15.5825C15.2654 15.4812 15.4812 15.2654 15.5825 14.9917L20.5621 1.53451Z"
                        />
                      </svg>
                    </div>
                    <div className="content">
                      <h5>Time And Stress Savings</h5>
                      <p>
                        Praesent gravida nunc at tortor cursus, molestie dapibus
                        purus posuere. Vestibulum commodo, massa eget rutrum
                        feugiat
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-video-and-img">
                <div className="video-and-batch-wrap">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="video-and-batch">
                        <div className="badge">
                          <span className="badge__char">T</span>
                          <span className="badge__char">R</span>
                          <span className="badge__char">A</span>
                          <span className="badge__char">V</span>
                          <span className="badge__char">E</span>
                          <span className="badge__char">L</span>
                          <span className="badge__char">.</span>
                          <span className="badge__char">A</span>
                          <span className="badge__char">G</span>
                          <span className="badge__char">E</span>
                          <span className="badge__char">N</span>
                          <span className="badge__char">C</span>
                          <span className="badge__char">Y</span>
                          <span className="badge__char">.</span>
                          <span className="badge__char">E</span>
                          <span className="badge__char">S</span>
                          <span className="badge__char">T</span>
                          <span className="badge__char">-</span>
                          <span className="badge__char">2</span>
                          <span className="badge__char">0</span>
                          <span className="badge__char">1</span>
                          <span className="badge__char">2</span>
                          <span className="badge__char">.</span>
                          <div className="counter-area">
                            <div className="counter-content-wrap">
                              <div className="number">
                                <h5 className="counter">
                                  <CountUp delay={2} end={60} />
                                </h5>
                                <span>K+</span>
                              </div>
                              <p>
                                Tours <br />
                                Success
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="video-wrapper">
                          <img
                            src="/assets/img/home6/about-video-img.jpg"
                            alt=""
                          />
                          <a
                            style={{ cursor: "pointer" }}
                            onClick={() => setOpen(true)}
                            className="video-area video5"
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
                                style={{ enableBackground: "new 0 0 206 206" }}
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
                <div className="row">
                  <div className="col-lg-12">
                    <div className="about-section-img">
                      <img src="/assets/img/home6/about-img.jpg" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
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

export default Home6About;
