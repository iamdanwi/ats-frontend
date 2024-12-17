
import React from "react";
import Breadcrumb from "@/components/common/Breadcrumb";
import QuantityCounter from "@/uitils/QuantityCounter";
import Link from "next/link";
import Topbar from "@/components/topbar/Topbar";
import Header from "@/components/header/Header";
import Newslatter from "@/components/common/Newslatter";
import Footer from "@/components/footer/Footer3";
import '@/components/stylebook/Footer.css'
export const metadata = {
  title: "ATS - tour & travel",
  description:
    "ATS is a Tour and Travel Agency",
  icons: {
    icon: "/assets/img/sm-logo.svg",
  },
};
const page = () => {
  return (
    <>
      <Topbar />
      <Header />
      <Breadcrumb pagename="Visa" pagetitle="Visa" />
      <div className="package-search-filter-wrapper">
        <div className="container">
          <div className="filter-group">
            <form>
              <div className="filter-area">
                <div className="row g-xl-4 gy-4">
                  <div className="col-xl-3 col-md-6 d-flex justify-content-center divider">
                    <div className="single-search-box">
                      <div className="icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={27}
                          height={27}
                          viewBox="0 0 27 27"
                        >
                          <path d="M18.0075 17.8392C20.8807 13.3308 20.5195 13.8933 20.6023 13.7757C21.6483 12.3003 22.2012 10.5639 22.2012 8.75391C22.2012 3.95402 18.3062 0 13.5 0C8.7095 0 4.79883 3.94622 4.79883 8.75391C4.79883 10.5627 5.3633 12.3446 6.44361 13.8399L8.99237 17.8393C6.26732 18.2581 1.63477 19.506 1.63477 22.2539C1.63477 23.2556 2.28857 24.6831 5.40327 25.7955C7.57814 26.5722 10.4536 27 13.5 27C19.1966 27 25.3652 25.3931 25.3652 22.2539C25.3652 19.5055 20.7381 18.2589 18.0075 17.8392ZM7.76508 12.9698C7.75639 12.9562 7.7473 12.9428 7.73782 12.9298C6.83886 11.6931 6.38086 10.2274 6.38086 8.75391C6.38086 4.79788 9.56633 1.58203 13.5 1.58203C17.4255 1.58203 20.6191 4.7993 20.6191 8.75391C20.6191 10.2297 20.1698 11.6457 19.3195 12.8498C19.2432 12.9503 19.6408 12.3327 13.5 21.9686L7.76508 12.9698ZM13.5 25.418C7.27766 25.418 3.2168 23.589 3.2168 22.2539C3.2168 21.3566 5.30339 19.8811 9.92714 19.306L12.8329 23.8656C12.9044 23.9777 13.0029 24.0701 13.1195 24.134C13.2361 24.198 13.367 24.2315 13.4999 24.2315C13.6329 24.2315 13.7638 24.198 13.8804 24.134C13.9969 24.0701 14.0955 23.9777 14.167 23.8656L17.0727 19.306C21.6966 19.8811 23.7832 21.3566 23.7832 22.2539C23.7832 23.5776 19.7589 25.418 13.5 25.418Z" />
                          <path d="M13.5 4.79883C11.3192 4.79883 9.54492 6.57308 9.54492 8.75391C9.54492 10.9347 11.3192 12.709 13.5 12.709C15.6808 12.709 17.4551 10.9347 17.4551 8.75391C17.4551 6.57308 15.6808 4.79883 13.5 4.79883ZM13.5 11.127C12.1915 11.127 11.127 10.0624 11.127 8.75391C11.127 7.44541 12.1915 6.38086 13.5 6.38086C14.8085 6.38086 15.873 7.44541 15.873 8.75391C15.873 10.0624 14.8085 11.127 13.5 11.127Z" />
                        </svg>
                      </div>
                      <div className="searchbox-input">
                        <label>Country</label>
                        <div className="custom-select-dropdown">
                          <div className="select-input">
                            <input
                              type="text"
                              readOnly
                              defaultValue="Bangladesh"
                            />
                            <i className="bi bi-chevron-down" />
                          </div>
                          <div className="custom-select-wrap">
                            <div className="custom-select-search-area">
                              <i className="bx bx-search" />
                              <input
                                type="text"
                                placeholder="Type Your Destination"
                              />
                            </div>
                            <ul className="option-list">
                              <li>
                                <div className="destination">
                                  <h6>Bangladesh</h6>
                                  <p>Dhaka, Cox's Bazar, Sylhet</p>
                                </div>
                                <div className="tour">
                                  <span>
                                    50 <br /> Tour
                                  </span>
                                </div>
                              </li>
                              <li>
                                <div className="destination">
                                  <h6>Nepal</h6>
                                  <p>KATHMANDU, POKHARA</p>
                                </div>
                                <div className="tour">
                                  <span>
                                    30 <br /> Tour
                                  </span>
                                </div>
                              </li>
                              <li>
                                <div className="destination">
                                  <h6>India</h6>
                                  <p>Delhi, Agra, Himachal</p>
                                </div>
                                <div className="tour">
                                  <span>
                                    30 <br /> Tour
                                  </span>
                                </div>
                              </li>
                              <li>
                                <div className="destination">
                                  <h6>Brazil</h6>
                                  <p>Sao Paulo, Salvador, Bonito</p>
                                </div>
                                <div className="tour">
                                  <span>
                                    20 <br /> Tour
                                  </span>
                                </div>
                              </li>
                              <li>
                                <div className="destination">
                                  <h6>Thailand</h6>
                                  <p>Bangkok, Phuket, Trang</p>
                                </div>
                                <div className="tour">
                                  <span>
                                    40 <br /> Tour
                                  </span>
                                </div>
                              </li>
                              <li>
                                <div className="destination">
                                  <h6>Span</h6>
                                  <p>Barcelona, Madrid</p>
                                </div>
                                <div className="tour">
                                  <span>
                                    20 <br /> Tour
                                  </span>
                                </div>
                              </li>
                              <li>
                                <div className="destination">
                                  <h6>Dubai</h6>
                                  <p>Abu Dhabi, Burj Khalifa</p>
                                </div>
                                <div className="tour">
                                  <span>
                                    35 <br /> Tour
                                  </span>
                                </div>
                              </li>
                              <li>
                                <div className="destination">
                                  <h6>United States</h6>
                                  <p>New York, Las Vegas, Colorado</p>
                                </div>
                                <div className="tour">
                                  <span>
                                    45 <br /> Tour
                                  </span>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-md-6 d-flex justify-content-center divider">
                    <div className="single-search-box">
                      <div className="icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={27}
                          height={27}
                          viewBox="0 0 27 27"
                        >
                          <g clipPath="url(#clip0_273_1731)">
                            <path d="M26.4727 15.0783C26.334 15.0783 26.1981 15.1348 26.0998 15.2328C26.0013 15.332 25.9458 15.4659 25.9453 15.6057C25.9453 15.7443 26.0017 15.8804 26.0998 15.9785C26.199 16.077 26.3329 16.1325 26.4727 16.133C26.6115 16.133 26.7474 16.0766 26.8455 15.9785C26.944 15.8794 26.9995 15.7454 27 15.6057C27 15.4665 26.9436 15.3309 26.8455 15.2328C26.7464 15.1343 26.6124 15.0788 26.4727 15.0783Z" />
                            <path d="M22.9027 6.15386H22.4775V2.97002H23.0675C23.3588 2.97002 23.5949 2.73399 23.5949 2.44268V1.60226C23.5949 0.718746 22.8761 3.05176e-05 21.9926 3.05176e-05H16.4811C15.5978 3.05176e-05 14.879 0.718746 14.879 1.60226V2.44268C14.879 2.73399 15.1151 2.97002 15.4064 2.97002H15.9962V6.15386H15.571C15.0486 6.1537 14.531 6.2534 14.046 6.44759V2.63674C14.046 2.41283 13.9045 2.21324 13.6932 2.13904C13.5665 2.09478 13.4277 2.10045 13.305 2.15491C13.3042 2.15533 13.3034 2.15533 13.3024 2.15575L7.45469 4.78688C7.18912 4.90637 7.07068 5.21867 7.19018 5.48418C7.30962 5.7497 7.62191 5.86835 7.88743 5.7487L10.7903 4.44268L5.2822 9.53855L1.96553 8.41341L3.98451 7.50496C4.25003 7.38552 4.36842 7.07323 4.24898 6.80771C4.12953 6.54219 3.81724 6.42354 3.55167 6.54319L0.31099 8.00124C0.214435 8.0447 0.133195 8.11622 0.077836 8.20648C0.0224775 8.29674 -0.00443615 8.40157 0.000596289 8.50733C0.00562422 8.6131 0.0423852 8.7149 0.106091 8.79948C0.169797 8.88406 0.257496 8.94749 0.357766 8.98152L5.01505 10.5617L6.58452 14.3201C6.63148 14.4325 6.71594 14.5253 6.82353 14.5825C6.93113 14.6397 7.05523 14.6579 7.17473 14.634C7.30092 14.6086 7.41346 14.5379 7.49113 14.4352C7.49234 14.4336 7.49377 14.4321 7.49524 14.4303L9.2851 12.0086L11.474 12.7522V20.7903C11.474 22.9282 13.1203 24.6877 15.2115 24.8706V25.5749C15.2115 26.3606 15.8509 27 16.6366 27C17.4225 27 18.0617 26.3606 18.0617 25.5749V24.8873H20.412V25.5749C20.412 26.3606 21.0512 27 21.8371 27C22.6228 27 23.2622 26.3606 23.2622 25.5749V24.8706C25.3534 24.6877 26.9997 22.9281 26.9997 20.7903V17.7196C26.9997 17.4283 26.7636 17.1922 26.4724 17.1922C26.1811 17.1922 25.945 17.4283 25.945 17.7196V20.7903C25.945 22.4679 24.5803 23.8326 22.9027 23.8326H15.571C13.8934 23.8326 12.5287 22.4677 12.5287 20.7904V13.1104L13.3492 13.3894C13.4285 13.4163 13.5132 13.4239 13.5961 13.4116C13.679 13.3993 13.7577 13.3675 13.8259 13.3187C13.894 13.2699 13.9495 13.2055 13.9878 13.1309C14.026 13.0564 14.046 12.9738 14.046 12.89V7.61802C14.5093 7.3494 15.0354 7.20811 15.571 7.20849H22.9028C24.5804 7.20849 25.9451 8.57325 25.9451 10.2508V13.5854C25.9451 13.8767 26.1812 14.1128 26.4724 14.1128C26.7637 14.1128 26.9998 13.8767 26.9998 13.5854V10.2508C26.9998 7.9917 25.1619 6.1538 22.9028 6.1538L22.9027 6.15386ZM22.2075 24.8873V25.5747C22.2074 25.6729 22.1684 25.7671 22.0989 25.8365C22.0295 25.906 21.9353 25.945 21.8371 25.9451C21.7389 25.945 21.6448 25.9059 21.5753 25.8365C21.5059 25.7671 21.4668 25.6729 21.4667 25.5747V24.8873H22.2075ZM17.007 24.8873V25.5747C17.007 25.7791 16.8409 25.9451 16.6366 25.9451C16.4322 25.9451 16.2662 25.7791 16.2662 25.5747V24.8873H17.007ZM6.54376 10.6993V11.4856L6.03867 10.2755L8.71472 7.79969L6.6593 10.3701C6.58449 10.4635 6.54374 10.5796 6.54376 10.6993ZM7.59844 12.5161V11.4355L8.23679 11.6524L7.59844 12.5161ZM12.9913 12.1538L9.26469 10.8878C9.26348 10.8871 9.26226 10.8869 9.26121 10.8865L7.95234 10.4418L12.9913 4.14046V12.1538ZM15.9335 1.6022C15.9335 1.30019 16.1793 1.05466 16.4811 1.05466H21.9926C22.2946 1.05466 22.5402 1.30019 22.5402 1.6022V1.91529H15.9335V1.6022ZM17.0509 2.97002H21.4228V6.15386H17.0509V2.97002Z" />
                            <path d="M13.8583 15.6875V19.7184C13.8583 21.1721 15.0411 22.3551 16.495 22.3551H21.9794C23.4332 22.3551 24.6161 21.1721 24.6161 19.7184V15.6875C24.6161 14.8151 23.9064 14.1054 23.034 14.1054H15.4403C14.5679 14.1054 13.8583 14.8151 13.8583 15.6875ZM21.9794 21.3004H16.495C15.6226 21.3004 14.9129 20.5906 14.9129 19.7184V17.7363H20.7246V18.2303C20.7246 18.5214 20.9607 18.7576 21.252 18.7576C21.5432 18.7576 21.7793 18.5214 21.7793 18.2303V17.7363H23.5614V19.7184C23.5614 20.5906 22.8517 21.3004 21.9794 21.3004ZM23.5614 15.6875V16.6816H14.9129V15.6875C14.9129 15.3966 15.1496 15.1601 15.4403 15.1601H23.034C23.3249 15.1601 23.5614 15.3966 23.5614 15.6875ZM5.93329 6.57761C6.07214 6.57761 6.20803 6.52118 6.30612 6.42309C6.4046 6.32394 6.4601 6.19001 6.46063 6.05026C6.46063 5.91104 6.4042 5.77488 6.30612 5.6768C6.20694 5.57842 6.07297 5.52313 5.93329 5.52292C5.79361 5.52321 5.65967 5.57849 5.56045 5.6768C5.46182 5.77611 5.4063 5.91029 5.40594 6.05026C5.40594 6.18895 5.46237 6.32485 5.56045 6.42309C5.65961 6.52157 5.79354 6.57708 5.93329 6.57761ZM5.82882 15.0018C5.22591 15.6047 4.42434 15.9367 3.57179 15.9367C3.42323 15.9367 3.27637 15.9267 3.13156 15.9069C3.07719 15.1414 2.75873 14.3916 2.17654 13.8068C2.09807 13.7246 1.72028 13.3585 1.19463 13.3706C0.953157 13.3756 0.596409 13.4629 0.268612 13.8521C-0.232365 14.4468 0.0731782 15.2516 0.568776 15.7474C0.988594 16.1672 1.48071 16.4884 2.01713 16.6991C1.91796 17.0938 1.71339 17.4541 1.42529 17.7415C1.1408 18.0264 0.785255 18.2299 0.395543 18.331C0.113731 18.4039 -0.0560211 18.6915 0.0169106 18.9735C0.0782934 19.2112 0.292553 19.369 0.527168 19.369C0.571778 19.369 0.616212 19.3634 0.659426 19.3524C1.23145 19.2039 1.7534 18.9053 2.17122 18.4873C2.60875 18.0497 2.89816 17.5191 3.03922 16.9587C3.21588 16.9806 3.39372 16.9915 3.57174 16.9914C4.70595 16.9914 5.7726 16.5498 6.57475 15.7476C6.78052 15.5417 6.78052 15.2077 6.57475 15.0018C6.36877 14.7959 6.0348 14.7959 5.82882 15.0018ZM1.3147 15.0019C1.18819 14.875 1.02219 14.5949 1.07555 14.5315C1.12971 14.467 1.18308 14.4264 1.21477 14.4252H1.21725C1.27162 14.4252 1.36454 14.4859 1.41089 14.5323C1.41727 14.5395 1.41669 14.5384 1.42529 14.5471C1.69724 14.8183 1.89506 15.1548 1.99983 15.5244C1.749 15.3818 1.51855 15.2061 1.3147 15.0019ZM21.1993 10.9161C21.1993 9.83417 20.3191 8.95398 19.2372 8.95398C18.1553 8.95398 17.2751 9.83417 17.2751 10.9161C17.2751 11.998 18.1553 12.8782 19.2372 12.8782C20.3191 12.8782 21.1993 11.998 21.1993 10.9161ZM18.3298 10.9161C18.3298 10.4157 18.7368 10.0087 19.2372 10.0087C19.7375 10.0087 20.1446 10.4157 20.1446 10.9161C20.1446 11.4164 19.7375 11.8235 19.2372 11.8235C18.7368 11.8235 18.3298 11.4164 18.3298 10.9161Z" />
                          </g>
                        </svg>
                      </div>
                      <div className="searchbox-input">
                        <label>Visa Type</label>
                        <div className="custom-select-dropdown">
                          <div className="select-input">
                            <input type="text" placeholder="Tourist" />
                            <i className="bi bi-chevron-down" />
                          </div>
                          <div className="custom-select-wrap two no-scroll">
                            <ul className="option-list">
                              <li className="single-item">
                                <h6>Tourist</h6>
                              </li>
                              <li className="single-item">
                                <h6>Medical</h6>
                              </li>
                              <li className="single-item">
                                <h6>Diplomat</h6>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-md-6 d-flex justify-content-center divider">
                    <div className="single-search-box">
                      <div className="icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={23}
                          height={23}
                          viewBox="0 0 23 23"
                          fill="none"
                        >
                          <g clipPath="url(#clip0_2037_411)">
                            <path d="M15.5978 13.531L12.391 11.1259V6.22659C12.391 5.73397 11.9928 5.33578 11.5002 5.33578C11.0076 5.33578 10.6094 5.73397 10.6094 6.22659V11.5713C10.6094 11.8519 10.7412 12.1165 10.9657 12.2839L14.5288 14.9563C14.6826 15.0721 14.8699 15.1346 15.0624 15.1345C15.3341 15.1345 15.6013 15.0124 15.7759 14.7772C16.0717 14.3844 15.9916 13.8258 15.5978 13.531Z" />
                            <path d="M11.5 0C5.15851 0 0 5.15851 0 11.5C0 17.8415 5.15851 23 11.5 23C17.8415 23 23 17.8415 23 11.5C23 5.15851 17.8415 0 11.5 0ZM11.5 21.2184C6.14194 21.2184 1.78156 16.8581 1.78156 11.5C1.78156 6.14194 6.14194 1.78156 11.5 1.78156C16.859 1.78156 21.2184 6.14194 21.2184 11.5C21.2184 16.8581 16.8581 21.2184 11.5 21.2184Z" />
                          </g>
                        </svg>
                      </div>
                      <div className="searchbox-input">
                        <label>Nationality</label>
                        <div className="custom-select-dropdown">
                          <div className="select-input">
                            <input type="text" placeholder="Bangladeshi" />
                            <i className="bi bi-chevron-down" />
                          </div>
                          <div className="custom-select-wrap two no-scroll">
                            <ul className="option-list">
                              <li className="single-item">
                                <h6>Bangladeshi</h6>
                              </li>
                              <li className="single-item">
                                <h6>Indian</h6>
                              </li>
                              <li className="single-item">
                                <h6>Brazilian</h6>
                              </li>
                              <li className="single-item">
                                <h6>Australian</h6>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-md-6 d-flex justify-content-center">
                    <div className="single-search-box">
                      <div className="icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={27}
                          height={27}
                          viewBox="0 0 27 27"
                        >
                          <g clipPath="url(#clip0_273_1754)">
                            <path d="M13.3207 14.07C13.4615 14.163 13.6265 14.2126 13.7952 14.2127C14.0765 14.2127 14.3521 14.0761 14.5173 13.8238C14.7799 13.4251 14.6699 12.8893 14.2712 12.6268C12.4344 11.4175 11.4549 10.0781 11.189 8.413C11.0664 7.63051 11.2293 6.44276 11.8788 5.68373C12.3 5.19189 12.8555 4.95227 13.5776 4.95227C14.9937 4.95227 15.5731 5.95799 15.7926 6.55698C16.3228 8.00211 15.8852 9.80108 14.7761 10.7403C14.4116 11.0492 14.3666 11.5944 14.6745 11.958C14.9834 12.323 15.5281 12.3679 15.8922 12.0596C17.5541 10.6528 18.1943 8.0887 17.415 5.96263C16.787 4.2484 15.3522 3.22491 13.5775 3.22491C12.3552 3.22491 11.3134 3.6868 10.5651 4.56052C9.4864 5.82268 9.30716 7.56876 9.48218 8.68299C9.93995 11.5476 11.8924 13.1293 13.3207 14.07Z" />
                            <path d="M20.1255 22.0477H7.78708C7.81845 18.178 8.05759 17.0286 8.16475 16.7076C8.40062 16.0014 9.36979 15.275 10.2183 14.8006C10.9848 16.008 12.2021 16.7277 13.555 16.7277H13.5555C14.893 16.7272 16.0999 16.008 16.8628 14.801C17.7112 15.2756 18.679 16.0019 18.9144 16.7072C19.2186 17.6211 19.2013 18.9062 19.1873 19.9386C19.1845 20.1506 19.1816 20.3528 19.1816 20.5404C19.1816 21.0178 19.5682 21.4044 20.0455 21.4044C20.5229 21.4044 20.9095 21.0178 20.9095 20.5404C20.9095 20.3603 20.9123 20.166 20.915 19.962C20.9314 18.7991 20.9515 17.3521 20.5538 16.1601C19.9014 14.2048 17.1333 12.9862 16.8197 12.8538C16.714 12.8088 16.6003 12.7854 16.4853 12.7851C16.3704 12.7848 16.2565 12.8075 16.1505 12.8519C16.0445 12.8962 15.9485 12.9613 15.8679 13.0431C15.7873 13.125 15.7238 13.2221 15.6811 13.3287C15.2628 14.3747 14.4681 14.9995 13.5555 14.9995H13.5551C12.6378 14.9995 11.8123 14.3592 11.3995 13.3287C11.3568 13.2221 11.2933 13.125 11.2128 13.0431C11.1322 12.9613 11.0361 12.8963 10.9301 12.8519C10.8241 12.8076 10.7103 12.7849 10.5953 12.7853C10.4804 12.7856 10.3667 12.8089 10.2609 12.8538C9.94784 12.9862 7.17923 14.2044 6.52593 16.1606C6.21422 17.0965 6.05655 19.3681 6.05655 22.9113C6.05655 23.3886 6.44313 23.7752 6.92047 23.7752H20.1261C20.603 23.7752 20.9896 23.3891 20.9896 22.9118C20.9895 22.4343 20.6029 22.0477 20.1255 22.0477ZM5.3695 13.815C4.171 13.815 3.19618 12.5608 3.19618 11.0197C3.19618 9.48001 4.171 8.22724 5.3695 8.22724C5.98304 8.22724 6.59094 8.58197 6.95596 9.15243C7.22315 9.57034 7.58495 10.459 7.00463 11.7166C6.80478 12.1499 6.99387 12.6628 7.42723 12.8631C7.86106 13.0625 8.37352 12.8739 8.57332 12.4405C9.24909 10.9762 9.18966 9.43888 8.41048 8.22118C7.72069 7.14343 6.58393 6.49993 5.36903 6.49993C3.21817 6.49993 1.46835 8.52724 1.46835 11.0197C1.46835 13.5136 3.21817 15.5423 5.36903 15.5423C5.84636 15.5423 6.23342 15.1562 6.23342 14.6789C6.23337 14.2015 5.84684 13.815 5.3695 13.815ZM4.27767 21.2255H1.75991C1.7983 20.3701 1.87597 19.0981 2.01682 18.3503C2.19933 17.374 2.72444 16.8232 3.13296 16.533C3.52281 16.2569 3.61404 15.7178 3.33745 15.3289C3.06135 14.939 2.52268 14.8473 2.13331 15.1244C1.58578 15.5128 0.621729 16.4076 0.318939 18.0315C0.0680901 19.3639 0.00307088 21.9584 0.000223323 22.0679C-0.00239217 22.1831 0.0179889 22.2976 0.060174 22.4048C0.102359 22.512 0.165501 22.6097 0.245904 22.6922C0.326391 22.7746 0.422553 22.8401 0.528728 22.8848C0.634904 22.9294 0.748946 22.9524 0.86414 22.9524H4.27762C4.75496 22.9524 5.14154 22.5667 5.14154 22.0894C5.14159 21.6121 4.75501 21.2255 4.27767 21.2255ZM25.5327 11.0187C25.5327 8.52623 23.7829 6.49893 21.632 6.49893C20.4166 6.49893 19.2794 7.14195 18.5892 8.2197C17.81 9.43692 17.7501 10.9747 18.4249 12.439C18.6248 12.8719 19.1381 13.0619 19.571 12.8621C20.0039 12.6623 20.1939 12.1494 19.9941 11.716C19.4138 10.4581 19.7764 9.56986 20.0437 9.15191C20.4092 8.58144 21.0171 8.22671 21.6316 8.22671C22.8301 8.22671 23.8049 9.47953 23.8049 11.0192C23.8049 12.5602 22.8301 13.8145 21.6316 13.8145C21.1542 13.8145 20.7677 14.201 20.7677 14.6784C20.7677 15.1557 21.1542 15.5423 21.6316 15.5423C23.7819 15.5423 25.5322 13.5136 25.5327 11.0187ZM26.6811 18.0334C26.39 16.4624 25.4746 15.5769 24.9552 15.1894C24.5728 14.9049 24.0313 14.9825 23.7459 15.3649C23.4609 15.7473 23.5395 16.2892 23.9214 16.5742C24.3093 16.8634 24.8078 17.4053 24.9828 18.3511C25.1236 19.098 25.2013 20.3695 25.2397 21.2245H22.7215C22.2441 21.2245 21.8575 21.6111 21.8575 22.0885C21.8575 22.5658 22.2441 22.9524 22.7215 22.9524H26.1359C26.3685 22.9524 26.5912 22.8588 26.7545 22.6917C26.8349 22.6092 26.8979 22.5115 26.94 22.4043C26.9821 22.2971 27.0024 22.1826 26.9997 22.0674C26.997 21.9579 26.9324 19.3629 26.6811 18.0334Z" />
                          </g>
                        </svg>
                      </div>
                      <div className="searchbox-input">
                        <label>Traveler</label>
                        <QuantityCounter />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button type="submit">Search</button>
            </form>
          </div>
        </div>
      </div>
      <div className="visa-with-sidebar-section pt-120 mb-120">
        <div className="container">
          <div className="row g-lg-4 gy-5">
            <div className="col-lg-8">
              <div className="package-inner-title-section mb-40">
                <p>Showing 1–12 of 101 results</p>
                <div className="selector-and-grid">
                  <ul className="grid-view">
                    <li className="grid">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={14}
                        height={14}
                        viewBox="0 0 14 14"
                      >
                        <mask
                          id="mask0_1631_19"
                          style={{ maskType: "alpha" }}
                          maskUnits="userSpaceOnUse"
                          x={0}
                          y={0}
                          width={14}
                          height={14}
                        >
                          <rect width={14} height={14} fill="#D9D9D9" />
                        </mask>
                        <g mask="url(#mask0_1631_19)">
                          <path d="M5.47853 6.08726H0.608726C0.272536 6.08726 0 5.81472 0 5.47853V0.608726C0 0.272536 0.272536 0 0.608726 0H5.47853C5.81472 0 6.08726 0.272536 6.08726 0.608726V5.47853C6.08726 5.81472 5.81472 6.08726 5.47853 6.08726Z" />
                          <path d="M13.3911 6.08726H8.52132C8.18513 6.08726 7.9126 5.81472 7.9126 5.47853V0.608726C7.9126 0.272536 8.18513 0 8.52132 0H13.3911C13.7273 0 13.9999 0.272536 13.9999 0.608726V5.47853C13.9999 5.81472 13.7273 6.08726 13.3911 6.08726Z" />
                          <path d="M5.47853 14.0013H0.608726C0.272536 14.0013 0 13.7288 0 13.3926V8.52279C0 8.1866 0.272536 7.91406 0.608726 7.91406H5.47853C5.81472 7.91406 6.08726 8.1866 6.08726 8.52279V13.3926C6.08726 13.7288 5.81472 14.0013 5.47853 14.0013Z" />
                          <path d="M13.3916 14.0013H8.52181C8.18562 14.0013 7.91309 13.7288 7.91309 13.3926V8.52279C7.91309 8.1866 8.18562 7.91406 8.52181 7.91406H13.3916C13.7278 7.91406 14.0003 8.1866 14.0003 8.52279V13.3926C14.0003 13.7288 13.7278 14.0013 13.3916 14.0013Z" />
                        </g>
                      </svg>
                    </li>
                    <li className="lists active">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={14}
                        height={14}
                        viewBox="0 0 14 14"
                      >
                        <mask
                          id="mask0_1631_3"
                          style={{ maskType: "alpha" }}
                          maskUnits="userSpaceOnUse"
                          x={0}
                          y={0}
                          width={14}
                          height={14}
                        >
                          <rect width={14} height={14} fill="#D9D9D9" />
                        </mask>
                        <g mask="url(#mask0_1631_3)">
                          <path d="M1.21747 2C0.545203 2 0 2.55848 0 3.24765C0 3.93632 0.545203 4.49433 1.21747 4.49433C1.88974 4.49433 2.43494 3.93632 2.43494 3.24765C2.43494 2.55848 1.88974 2 1.21747 2Z" />
                          <path d="M1.21747 5.75195C0.545203 5.75195 0 6.30996 0 6.99913C0 7.68781 0.545203 8.24628 1.21747 8.24628C1.88974 8.24628 2.43494 7.68781 2.43494 6.99913C2.43494 6.30996 1.88974 5.75195 1.21747 5.75195Z" />
                          <path d="M1.21747 9.50586C0.545203 9.50586 0 10.0643 0 10.753C0 11.4417 0.545203 12.0002 1.21747 12.0002C1.88974 12.0002 2.43494 11.4417 2.43494 10.753C2.43494 10.0643 1.88974 9.50586 1.21747 9.50586Z" />
                          <path d="M13.0845 2.31055H4.42429C3.91874 2.31055 3.50879 2.7305 3.50879 3.24886C3.50879 3.76677 3.91871 4.1867 4.42429 4.1867H13.0845C13.59 4.1867 14 3.76677 14 3.24886C14 2.7305 13.59 2.31055 13.0845 2.31055Z" />
                          <path d="M13.0845 6.06055H4.42429C3.91874 6.06055 3.50879 6.48047 3.50879 6.99886C3.50879 7.51677 3.91871 7.9367 4.42429 7.9367H13.0845C13.59 7.9367 14 7.51677 14 6.99886C14 6.48047 13.59 6.06055 13.0845 6.06055Z" />
                          <path d="M13.0845 9.81348H4.42429C3.91874 9.81348 3.50879 10.2334 3.50879 10.7513C3.50879 11.2692 3.91871 11.6891 4.42429 11.6891H13.0845C13.59 11.6891 14 11.2692 14 10.7513C14 10.2334 13.59 9.81348 13.0845 9.81348Z" />
                        </g>
                      </svg>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="list-grid-product-wrap mb-70">
                <div className="row gy-4">
                  <div className="col-md-12 item">
                    <div className="package-card4 four">
                      <Link
                        href="/visas/visas-details"
                        className="package-card-img"
                      >
                        <img
                          src="/image/Link.png"
                          alt=""
                        />
                      </Link>
                      <div className="package-card-content">
                        <div className="card-content-top">
                          <h5>
                            Electronic Visa Adult with Fan with Insurance.
                          </h5>
                          <ul>
                            <li>
                              <span>Country :</span> New York
                            </li>
                            <li>
                              <span>Visa Type :</span> Tourist
                            </li>
                            <li>
                              <span>Visa Mode :</span> Electronic
                            </li>
                            <li>
                              <span>Validity :</span> 60 Days
                            </li>
                            <li>
                              <span>Processing Time :</span> 7-10 Working Day
                            </li>
                          </ul>
                        </div>
                        <div className="card-content-bottom">
                          <div className="price-area">
                            <span>Starting Form:</span>
                            <h6>
                              <strong>$</strong>3860 <span>Per Person</span>
                            </h6>
                          </div>
                          <Link href="/visas/visas-details" className="apply-btn">
                            Apply Now
                            <div className="arrow">
                              <i className="bi bi-arrow-right" />
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 item">
                    <div className="package-card4 four">
                      <Link
                        href="/visas/visas-details"
                        className="package-card-img"
                      >
                        <img
                          src="/image/Link.png"
                          alt=""
                        />
                      </Link>
                      <div className="package-card-content">
                        <div className="card-content-top">
                          <h5>Grown-up E-visa with Cooling and Assurance.</h5>
                          <ul>
                            <li>
                              <span>Country :</span> Egypt
                            </li>
                            <li>
                              <span>Visa Type :</span> Tourist
                            </li>
                            <li>
                              <span>Visa Mode :</span> Electronic
                            </li>
                            <li>
                              <span>Validity :</span> 50 Days
                            </li>
                            <li>
                              <span>Processing Time :</span> 7-10 Working Day
                            </li>
                          </ul>
                        </div>
                        <div className="card-content-bottom">
                          <div className="price-area">
                            <span>Starting Form:</span>
                            <h6>
                              <strong>$</strong>3500 <span>Per Person</span>
                            </h6>
                          </div>
                          <Link href="/visas/visas-details" className="apply-btn">
                            Apply Now
                            <div className="arrow">
                              <i className="bi bi-arrow-right" />
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 item">
                    <div className="package-card4 four">
                      <Link
                        href="/visas/visas-details"
                        className="package-card-img"
                      >
                        <img
                          src="/image/Link.png"
                          alt=""
                        />
                      </Link>
                      <div className="package-card-content">
                        <div className="card-content-top">
                          <h5>
                            Digital Visa for Adults with Admirer and Insurance
                          </h5>
                          <ul>
                            <li>
                              <span>Country :</span> Australia
                            </li>
                            <li>
                              <span>Visa Type :</span> Tourist
                            </li>
                            <li>
                              <span>Visa Mode :</span> Electronic
                            </li>
                            <li>
                              <span>Validity :</span> 60 Days
                            </li>
                            <li>
                              <span>Processing Time :</span> 7-10 Working Day
                            </li>
                          </ul>
                        </div>
                        <div className="card-content-bottom">
                          <div className="price-area">
                            <span>Starting Form:</span>
                            <h6>
                              <strong>$</strong>4500 <span>Per Person</span>
                            </h6>
                          </div>
                          <Link href="/visas/visas-details" className="apply-btn">
                            Apply Now
                            <div className="arrow">
                              <i className="bi bi-arrow-right" />
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 item">
                    <div className="package-card4 four">
                      <Link
                        href="/visas/visas-details"
                        className="package-card-img"
                      >
                        <img
                          src="/image/Link.png"
                          alt=""
                        />
                      </Link>
                      <div className="package-card-content">
                        <div className="card-content-top">
                          <h5>Electronic Visa for Individuals with Follower</h5>
                          <ul>
                            <li>
                              <span>Country :</span> Spain
                            </li>
                            <li>
                              <span>Visa Type :</span> Tourist
                            </li>
                            <li>
                              <span>Visa Mode :</span> Electronic
                            </li>
                            <li>
                              <span>Validity :</span> 40 Days
                            </li>
                            <li>
                              <span>Processing Time :</span> 7-10 Working Day
                            </li>
                          </ul>
                        </div>
                        <div className="card-content-bottom">
                          <div className="price-area">
                            <span>Starting Form:</span>
                            <h6>
                              <strong>$</strong>2500 <span>Per Person</span>
                            </h6>
                          </div>
                          <Link href="/visas/visas-details" className="apply-btn">
                            Apply Now
                            <div className="arrow">
                              <i className="bi bi-arrow-right" />
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 item">
                    <div className="package-card4 four">
                      <Link
                        href="/visas/visas-details"
                        className="package-card-img"
                      >
                        <img
                          src="/image/Link.png"
                          alt=""
                        />
                      </Link>
                      <div className="package-card-content">
                        <div className="card-content-top">
                          <h5>
                            E-Visa for Grown-Ups with Devotee and Assurance
                          </h5>
                          <ul>
                            <li>
                              <span>Country :</span> Turkey
                            </li>
                            <li>
                              <span>Visa Type :</span> Tourist
                            </li>
                            <li>
                              <span>Visa Mode :</span> Electronic
                            </li>
                            <li>
                              <span>Validity :</span> 40 Days
                            </li>
                            <li>
                              <span>Processing Time :</span> 7-10 Working Day
                            </li>
                          </ul>
                        </div>
                        <div className="card-content-bottom">
                          <div className="price-area">
                            <span>Starting Form:</span>
                            <h6>
                              <strong>$</strong>4200 <span>Per Person</span>
                            </h6>
                          </div>
                          <Link href="/visas/visas-details" className="apply-btn">
                            Apply Now
                            <div className="arrow">
                              <i className="bi bi-arrow-right" />
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 item">
                    <div className="package-card4 four">
                      <Link
                        href="/visas/visas-details"
                        className="package-card-img"
                      >
                        <img
                          src="/image/Link.png"
                          alt=""
                        />
                      </Link>
                      <div className="package-card-content">
                        <div className="card-content-top">
                          <h5>
                            Virtual Visa for Adults with Supporter and
                            Protection
                          </h5>
                          <ul>
                            <li>
                              <span>Country :</span> India
                            </li>
                            <li>
                              <span>Visa Type :</span> Tourist
                            </li>
                            <li>
                              <span>Visa Mode :</span> Electronic
                            </li>
                            <li>
                              <span>Validity :</span> 40 Days
                            </li>
                            <li>
                              <span>Processing Time :</span> 7-10 Working Day
                            </li>
                          </ul>
                        </div>
                        <div className="card-content-bottom">
                          <div className="price-area">
                            <span>Starting Form:</span>
                            <h6>
                              <strong>$</strong>2500 <span>Per Person</span>
                            </h6>
                          </div>
                          <Link href="/visas/visas-details" className="apply-btn">
                            Apply Now
                            <div className="arrow">
                              <i className="bi bi-arrow-right" />
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <nav className="inner-pagination-area">
                    <ul className="pagination-list">
                      <li>
                        <a href="#" className="shop-pagi-btn">
                          <i className="bi bi-chevron-left" />
                        </a>
                      </li>
                      <li>
                        <a href="#">1</a>
                      </li>
                      <li>
                        <a href="#" className="active">
                          2
                        </a>
                      </li>
                      <li>
                        <a href="#">3</a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="bi bi-three-dots" />
                        </a>
                      </li>
                      <li>
                        <a href="#">6</a>
                      </li>
                      <li>
                        <a href="#" className="shop-pagi-btn">
                          <i className="bi bi-chevron-right" />
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="sidebar-area">
              <div className="banner2-card mb-40">
                  <img src="/image/Group68.png" alt="" />
                  <div className="banner2-content-wrap">
                    <div className="banner2-content">
                      <div className="hotline-area">
                        <div className="icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={28}
                            height={28}
                            viewBox="0 0 28 28"
                          >
                            <path d="M27.2653 21.5995L21.598 17.8201C20.8788 17.3443 19.9147 17.5009 19.383 18.1798L17.7322 20.3024C17.6296 20.4377 17.4816 20.5314 17.3154 20.5664C17.1492 20.6014 16.9759 20.5752 16.8275 20.4928L16.5134 20.3196C15.4725 19.7522 14.1772 19.0458 11.5675 16.4352C8.95784 13.8246 8.25001 12.5284 7.6826 11.4893L7.51042 11.1753C7.42683 11.0269 7.39968 10.8532 7.43398 10.6864C7.46827 10.5195 7.56169 10.3707 7.69704 10.2673L9.81816 8.61693C10.4968 8.08517 10.6536 7.1214 10.1784 6.40198L6.39895 0.734676C5.91192 0.00208106 4.9348 -0.21784 4.18082 0.235398L1.81096 1.65898C1.06634 2.09672 0.520053 2.80571 0.286612 3.63733C-0.56677 6.74673 0.0752209 12.1131 7.98033 20.0191C14.2687 26.307 18.9501 27.9979 22.1677 27.9979C22.9083 28.0011 23.6459 27.9048 24.3608 27.7115C25.1925 27.4783 25.9016 26.932 26.3391 26.1871L27.7641 23.8187C28.218 23.0645 27.9982 22.0868 27.2653 21.5995ZM26.9601 23.3399L25.5384 25.7098C25.2242 26.2474 24.7142 26.6427 24.1152 26.8128C21.2447 27.6009 16.2298 26.9482 8.64053 19.3589C1.0513 11.7697 0.398595 6.75515 1.18669 3.88421C1.35709 3.28446 1.75283 2.77385 2.2911 2.45921L4.66096 1.03749C4.98811 0.840645 5.41221 0.93606 5.62354 1.25397L7.67659 4.3363L9.39976 6.92078C9.60612 7.23283 9.53831 7.65108 9.24392 7.88199L7.1223 9.53232C6.47665 10.026 6.29227 10.9193 6.68979 11.6283L6.85826 11.9344C7.45459 13.0281 8.19599 14.3887 10.9027 17.095C13.6095 19.8012 14.9696 20.5427 16.0628 21.139L16.3694 21.3079C17.0783 21.7053 17.9716 21.521 18.4653 20.8753L20.1157 18.7537C20.3466 18.4595 20.7647 18.3918 21.0769 18.5979L26.7437 22.3773C27.0618 22.5885 27.1572 23.0128 26.9601 23.3399ZM15.8658 4.66809C20.2446 4.67296 23.7931 8.22149 23.798 12.6003C23.798 12.858 24.0069 13.0669 24.2646 13.0669C24.5223 13.0669 24.7312 12.858 24.7312 12.6003C24.7257 7.7063 20.7598 3.74029 15.8658 3.73494C15.6081 3.73494 15.3992 3.94381 15.3992 4.20151C15.3992 4.45922 15.6081 4.66809 15.8658 4.66809Z" />
                            <path d="M15.865 7.46746C18.6983 7.4708 20.9943 9.76678 20.9976 12.6001C20.9976 12.7238 21.0468 12.8425 21.1343 12.93C21.2218 13.0175 21.3404 13.0666 21.4642 13.0666C21.5879 13.0666 21.7066 13.0175 21.7941 12.93C21.8816 12.8425 21.9308 12.7238 21.9308 12.6001C21.9269 9.2516 19.2134 6.53813 15.865 6.5343C15.6073 6.5343 15.3984 6.74318 15.3984 7.00088C15.3984 7.25859 15.6073 7.46746 15.865 7.46746Z" />
                            <path d="M15.865 10.267C17.1528 10.2686 18.1964 11.3122 18.198 12.6C18.198 12.7238 18.2472 12.8424 18.3347 12.9299C18.4222 13.0174 18.5409 13.0666 18.6646 13.0666C18.7883 13.0666 18.907 13.0174 18.9945 12.9299C19.082 12.8424 19.1312 12.7238 19.1312 12.6C19.1291 10.797 17.668 9.33589 15.865 9.33386C15.6073 9.33386 15.3984 9.54274 15.3984 9.80044C15.3984 10.0581 15.6073 10.267 15.865 10.267Z" />
                          </svg>
                        </div>
                        <div className="content">
                          <span>To More Inquiry</span>
                          <h6>
                            <a href="tel:+971-529745592">+971-529745592</a>
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <h5 className="widget-titled mb-30">
                  FAQ - General Visa Information:
                </h5>
                <div className="faq-content mb-50">
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
                          01. Can I fill in my visa application in a language
                          other than English?
                        </button>
                      </h2>
                      <div
                        id="travelcollapseOne"
                        className="accordion-collapse collapse show"
                        aria-labelledby="travelheadingOne"
                        data-bs-parent="#accordionTravel"
                      >
                        <div className="accordion-body">
                          No. At Present our online application system only
                          supports applications made in English.
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
                          02. Will I be able to access the online application
                          system using my computer?
                        </button>
                      </h2>
                      <div
                        id="travelcollapseTwo"
                        className="accordion-collapse collapse"
                        aria-labelledby="travelheadingTwo"
                        data-bs-parent="#accordionTravel"
                      >
                        <div className="accordion-body">
                          We are doing our best to support as many computers,
                          operating systems and internet browsers as possible
                          but due to the technologies we use for our online
                          application system, there are certain browsers we
                          exclude due to their age or design. Currently our site
                          is tested at IE 5.0 or later and Mozilla Firefox 3.5
                          or later.
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
                          03. Can I save my application mid-way through the
                          application process?
                        </button>
                      </h2>
                      <div
                        id="travelcollapseThree"
                        className="accordion-collapse collapse"
                        aria-labelledby="travelheadingThree"
                        data-bs-parent="#accordionTravel"
                      >
                        <div className="accordion-body">
                          Yes. You can save your online visa application
                          wherever you see the "Save &amp; Exit" icon. To login
                          again and complete your application, you will require
                          your unique "Visa Application Id". This number will
                          have been sent to the email address that you supplied
                          in your application security details.
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
                          04. I do not understand one of the questions. What can
                          I do?
                        </button>
                      </h2>
                      <div
                        id="travelcollapseFour"
                        className="accordion-collapse collapse"
                        aria-labelledby="travelheadingFour"
                        data-bs-parent="#accordionTravel"
                      >
                        <div className="accordion-body">
                          Throughout the online form we have added "More Info"
                          icons to some questions that might require further
                          guidance.
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
                          05. I made a mistake on one of my answers. Can I
                          change it?
                        </button>
                      </h2>
                      <div
                        id="travelcollapseFive"
                        className="accordion-collapse collapse"
                        aria-labelledby="travelheadingFive"
                        data-bs-parent="#accordionTravel"
                      >
                        <div className="accordion-body">
                          If you didn't submit your application finally you can
                          do the change. After submitting the application you
                          can't change it.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="travelheadingSix">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#travelcollapseSix"
                          aria-expanded="false"
                          aria-controls="travelcollapseSix"
                        >
                          06. The date I entered is not being accepted. What is
                          the correct format?
                        </button>
                      </h2>
                      <div
                        id="travelcollapseSix"
                        className="accordion-collapse collapse"
                        aria-labelledby="travelheadingSix"
                        data-bs-parent="#accordionTravel"
                      >
                        <div className="accordion-body">
                          All date fields in our forms are set up in the
                          following format: dd/mm/yyyy (for example 21/08/2011).
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="travelheadingSevene">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#travelcollapseSevene"
                          aria-expanded="false"
                          aria-controls="travelcollapseSevene"
                        >
                          07. I have not received my Completed Application
                          confirmation email. Can you resend it to me?
                        </button>
                      </h2>
                      <div
                        id="travelcollapseSevene"
                        className="accordion-collapse collapse"
                        aria-labelledby="travelheadingSevene"
                        data-bs-parent="#accordionTravel"
                      >
                        <div className="accordion-body">
                          Yes. But please check first that your inbox has not
                          treated our email confirmation as SPAM and that you
                          have given us the correct email address. If you have
                          not received your confirmation email after 24 hours
                          please contact us through Complain and Feedback link.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="travelheadingEight">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#travelcollapseEight"
                          aria-expanded="false"
                          aria-controls="travelcollapseEight"
                        >
                          08. I am unable to retrieve my application. What can I
                          do?
                        </button>
                      </h2>
                      <div
                        id="travelcollapseEight"
                        className="accordion-collapse collapse"
                        aria-labelledby="travelheadingEight"
                        data-bs-parent="#accordionTravel"
                      >
                        <div className="accordion-body">
                          This could be because you did not save your
                          application by selecting the "Save &amp; Exit" option
                          flagged by the following image on the application form
                          or your did not retrieve your application within 7
                          days of last saving it. If you are sure you saved your
                          application in the last seven days, empty your browser
                          cache(temporary internet files) and try again.
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
      <Footer />
    </>
  );
};

export default page;
