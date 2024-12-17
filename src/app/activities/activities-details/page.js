"use client";
import React from "react";
import Footer from "@/components/footer/Footer3";
import Header from "@/components/header/Header";
import Topbar from "@/components/topbar/Topbar";
import Breadcrumb from "@/components/common/Breadcrumb";
import "@/components/stylebook/Footer.css";
import SelectComponent from "@/uitils/SelectComponent";
import "./activity-detail.css";

const ActivitiesDetails = () => {
  return (
    <>
      <Topbar />
      <Header />
      <Breadcrumb pagename="Activitis Details" pagetitle="Activities Details" />
      <div className="package-details-area pt-120 mb-120 act-dtl-ui">
        <div className="container">
          <div className="col-lg-12 mb-5">
            <div className="activities-details-block">
              <div className="act-block-header pt-3">
                <h3>Activities Rates</h3>
              </div>
              <div className="act-dtl-table">
                <div className="table-wrapper">
                  <table>
                    <thead>
                      <tr>
                        <th>Activity Name</th>
                        <th>Extra Services</th>
                        <th>Activity Date</th>
                        <th>Adult</th>
                        <th>Child</th>
                        <th>Infant</th>
                        <th>Total amount</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <div class="checkbox-wrapper-46">
                            <input
                              type="checkbox"
                              id="cbx-46"
                              class="inp-cbx"
                            />
                            <label for="cbx-46" class="cbx">
                              <span>
                                <svg
                                  viewBox="0 0 12 10"
                                  height="10px"
                                  width="12px"
                                >
                                  <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                                </svg>
                              </span>
                              <span>Zip Lining</span>
                            </label>
                          </div>
                        </td>
                        <td>
                          <SelectComponent
                            options={[
                              "Tourist",
                              "Business visa",
                              "Student visa",
                            ]}
                            placeholder={["Night Food"]}
                          />
                        </td>
                        <td>
                          <div className="act-date-ui">
                            <input type="date" value="2013-01-08"/>
                          </div>
                        </td>
                        <td>
                          <SelectComponent
                            options={["1", "2", "3"]}
                            placeholder={["1"]}
                          />
                        </td>
                        <td>
                          <SelectComponent
                            options={["1", "2", "3"]}
                            placeholder={["0"]}
                          />
                        </td>
                        <td>
                          <SelectComponent
                            options={["1", "2", "3"]}
                            placeholder={["0"]}
                          />
                        </td>
                        <td className="act-dtl-price">AED 99.00</td>
                      </tr>
                      <tr>
                        <td>
                          <div class="checkbox-wrapper-46">
                            <input
                              type="checkbox"
                              id="cbx-46"
                              class="inp-cbx"
                            />
                            <label for="cbx-46" class="cbx">
                              <span>
                                <svg
                                  viewBox="0 0 12 10"
                                  height="10px"
                                  width="12px"
                                >
                                  <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                                </svg>
                              </span>
                              <span>Zip Lining</span>
                            </label>
                          </div>
                        </td>
                        <td>
                          <SelectComponent
                            options={[
                              "Tourist",
                              "Business visa",
                              "Student visa",
                            ]}
                            placeholder={["Night Food"]}
                          />
                        </td>
                        <td>
                          <div className="act-date-ui">
                            <input type="date"  value="2013-01-08"/>
                          </div>
                        </td>
                        <td>
                          <SelectComponent
                            options={["1", "2", "3"]}
                            placeholder={["1"]}
                          />
                        </td>
                        <td>
                          <SelectComponent
                            options={["1", "2", "3"]}
                            placeholder={["0"]}
                          />
                        </td>
                        <td>
                          <SelectComponent
                            options={["1", "2", "3"]}
                            placeholder={["0"]}
                          />
                        </td>
                        <td className="act-dtl-price">AED 99.00</td>
                      </tr>
                      <tr>
                        <td>
                          <div class="checkbox-wrapper-46">
                            <input
                              type="checkbox"
                              id="cbx-46"
                              class="inp-cbx"
                            />
                            <label for="cbx-46" class="cbx">
                              <span>
                                <svg
                                  viewBox="0 0 12 10"
                                  height="10px"
                                  width="12px"
                                >
                                  <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                                </svg>
                              </span>
                              <span>Zip Lining</span>
                            </label>
                          </div>
                        </td>
                        <td>
                          <SelectComponent
                            options={[
                              "Tourist",
                              "Business visa",
                              "Student visa",
                            ]}
                            placeholder={["Night Food"]}
                          />
                        </td>
                        <td>
                          <div className="act-date-ui">
                            <input type="date" value="2013-01-08"/>
                          </div>
                        </td>
                        <td>
                          <SelectComponent
                            options={["1", "2", "3"]}
                            placeholder={["1"]}
                          />
                        </td>
                        <td>
                          <SelectComponent
                            options={["1", "2", "3"]}
                            placeholder={["0"]}
                          />
                        </td>
                        <td>
                          <SelectComponent
                            options={["1", "2", "3"]}
                            placeholder={["0"]}
                          />
                        </td>
                        <td className="act-dtl-price">AED 99.00</td>
                      </tr>
                      <tr>
                        <td>
                          <div class="checkbox-wrapper-46">
                            <input
                              type="checkbox"
                              id="cbx-46"
                              class="inp-cbx"
                            />
                            <label for="cbx-46" class="cbx">
                              <span>
                                <svg
                                  viewBox="0 0 12 10"
                                  height="10px"
                                  width="12px"
                                >
                                  <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                                </svg>
                              </span>
                              <span>Zip Lining</span>
                            </label>
                          </div>
                        </td>
                        <td>
                          <SelectComponent
                            options={[
                              "Tourist",
                              "Business visa",
                              "Student visa",
                            ]}
                            placeholder={["Night Food"]}
                          />
                        </td>
                        <td>
                          <div className="act-date-ui">
                            <input type="date" value="2013-01-08"/>
                          </div>
                        </td>
                        <td>
                          <SelectComponent
                            options={["1", "2", "3"]}
                            placeholder={["1"]}
                          />
                        </td>
                        <td>
                          <SelectComponent
                            options={["1", "2", "3"]}
                            placeholder={["0"]}
                          />
                        </td>
                        <td>
                          <SelectComponent
                            options={["1", "2", "3"]}
                            placeholder={["0"]}
                          />
                        </td>
                        <td className="act-dtl-price">AED 99.00</td>
                      </tr>
                      <tr>
                        <td>
                          <div class="checkbox-wrapper-46">
                            <input
                              type="checkbox"
                              id="cbx-46"
                              class="inp-cbx"
                            />
                            <label for="cbx-46" class="cbx">
                              <span>
                                <svg
                                  viewBox="0 0 12 10"
                                  height="10px"
                                  width="12px"
                                >
                                  <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                                </svg>
                              </span>
                              <span>Zip Lining</span>
                            </label>
                          </div>
                        </td>
                        <td>
                          <SelectComponent
                            options={[
                              "Tourist",
                              "Business visa",
                              "Student visa",
                            ]}
                            placeholder={["Night Food"]}
                          />
                        </td>
                        <td>
                          <div className="act-date-ui">
                            <input type="date" value="2013-01-08"/>
                          </div>
                        </td>
                        <td>
                          <SelectComponent
                            options={["1", "2", "3"]}
                            placeholder={["1"]}
                          />
                        </td>
                        <td>
                          <SelectComponent
                            options={["1", "2", "3"]}
                            placeholder={["0"]}
                          />
                        </td>
                        <td>
                          <SelectComponent
                            options={["1", "2", "3"]}
                            placeholder={["0"]}
                          />
                        </td>
                        <td className="act-dtl-price">AED 99.00</td>
                      </tr>
                    
                    </tbody>
                  </table>
                </div>
                <div className="act-table-ftr">
                    <span>More Activities</span>
                    <button>Book Now</button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-12 mb-5">
            <div className="activities-details-block">
              <div className="act-block-header">
                <h3>About The Ski Touring</h3>
              </div>
              <div className="act-block-cnt">
                <p>
                  Ski touring, also known as backcountry skiing, involves
                  traveling across snow-covered terrain using skis. It's a blend
                  of skiing and hiking, allowing access to remote areas not
                  reachable by ski lifts. Skiers ascend slopes using climbing
                  skins on their skis or specialized equipment like splitboards,
                  then descend using skis. This activity offers a unique
                  opportunity to explore untouched wilderness, experience serene
                  landscapes, and challenge oneself physically and mentally
                  while embracing the thrill of the mountains. Safety measures,
                  including avalanche awareness and carrying appropriate gear,
                  are paramount in ski touring due to the inherent risks of
                  backcountry environments.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-12 mb-5">
            <div className="activities-details-block">
              <div className="act-block-header">
                <h3>Highlights</h3>
              </div>
              <div className="act-block-cnt">
                <ul>
                  <li>
                    <svg
                      width="13"
                      height="13"
                      viewBox="0 0 13 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.9633 1.16969C11.1944 0.938577 11.4761 0.823021 11.8083 0.823021C12.1406 0.823021 12.4222 0.938577 12.6533 1.16969C12.8844 1.4008 13 1.67524 13 1.99302C13 2.3108 12.8844 2.58524 12.6533 2.81635L6.28333 10.7897C6.05222 11.0497 5.77056 11.1797 5.43833 11.1797C5.10611 11.1797 4.82444 11.0641 4.59333 10.833L0.346667 6.62969C0.115556 6.36969 0 6.0808 0 5.76302C0 5.44524 0.115556 5.16358 0.346667 4.91802C0.577778 4.67247 0.859444 4.54969 1.19167 4.54969C1.52389 4.54969 1.80556 4.67969 2.03667 4.93969L5.37333 8.27635L10.9633 1.16969Z"
                        fill="#F1871C"
                      />
                    </svg>
                    Immersion in breathtaking, untouched landscapes away from
                    crowded ski resorts.
                  </li>
                  <li>
                    <svg
                      width="13"
                      height="13"
                      viewBox="0 0 13 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.9633 1.16969C11.1944 0.938577 11.4761 0.823021 11.8083 0.823021C12.1406 0.823021 12.4222 0.938577 12.6533 1.16969C12.8844 1.4008 13 1.67524 13 1.99302C13 2.3108 12.8844 2.58524 12.6533 2.81635L6.28333 10.7897C6.05222 11.0497 5.77056 11.1797 5.43833 11.1797C5.10611 11.1797 4.82444 11.0641 4.59333 10.833L0.346667 6.62969C0.115556 6.36969 0 6.0808 0 5.76302C0 5.44524 0.115556 5.16358 0.346667 4.91802C0.577778 4.67247 0.859444 4.54969 1.19167 4.54969C1.52389 4.54969 1.80556 4.67969 2.03667 4.93969L5.37333 8.27635L10.9633 1.16969Z"
                        fill="#F1871C"
                      />
                    </svg>
                    Combining endurance and skill while exploring diverse
                    terrains.
                  </li>
                  <li>
                    <svg
                      width="13"
                      height="13"
                      viewBox="0 0 13 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.9633 1.16969C11.1944 0.938577 11.4761 0.823021 11.8083 0.823021C12.1406 0.823021 12.4222 0.938577 12.6533 1.16969C12.8844 1.4008 13 1.67524 13 1.99302C13 2.3108 12.8844 2.58524 12.6533 2.81635L6.28333 10.7897C6.05222 11.0497 5.77056 11.1797 5.43833 11.1797C5.10611 11.1797 4.82444 11.0641 4.59333 10.833L0.346667 6.62969C0.115556 6.36969 0 6.0808 0 5.76302C0 5.44524 0.115556 5.16358 0.346667 4.91802C0.577778 4.67247 0.859444 4.54969 1.19167 4.54969C1.52389 4.54969 1.80556 4.67969 2.03667 4.93969L5.37333 8.27635L10.9633 1.16969Z"
                        fill="#F1871C"
                      />
                    </svg>
                    Accessing pristine, less-traveled areas for a unique
                    adventure.
                  </li>
                  <li>
                    <svg
                      width="13"
                      height="13"
                      viewBox="0 0 13 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.9633 1.16969C11.1944 0.938577 11.4761 0.823021 11.8083 0.823021C12.1406 0.823021 12.4222 0.938577 12.6533 1.16969C12.8844 1.4008 13 1.67524 13 1.99302C13 2.3108 12.8844 2.58524 12.6533 2.81635L6.28333 10.7897C6.05222 11.0497 5.77056 11.1797 5.43833 11.1797C5.10611 11.1797 4.82444 11.0641 4.59333 10.833L0.346667 6.62969C0.115556 6.36969 0 6.0808 0 5.76302C0 5.44524 0.115556 5.16358 0.346667 4.91802C0.577778 4.67247 0.859444 4.54969 1.19167 4.54969C1.52389 4.54969 1.80556 4.67969 2.03667 4.93969L5.37333 8.27635L10.9633 1.16969Z"
                        fill="#F1871C"
                      />
                    </svg>
                    Strengthening camaraderie among fellow skiers in a shared
                    outdoor experience.
                  </li>
                  <li>
                    <svg
                      width="13"
                      height="13"
                      viewBox="0 0 13 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.9633 1.16969C11.1944 0.938577 11.4761 0.823021 11.8083 0.823021C12.1406 0.823021 12.4222 0.938577 12.6533 1.16969C12.8844 1.4008 13 1.67524 13 1.99302C13 2.3108 12.8844 2.58524 12.6533 2.81635L6.28333 10.7897C6.05222 11.0497 5.77056 11.1797 5.43833 11.1797C5.10611 11.1797 4.82444 11.0641 4.59333 10.833L0.346667 6.62969C0.115556 6.36969 0 6.0808 0 5.76302C0 5.44524 0.115556 5.16358 0.346667 4.91802C0.577778 4.67247 0.859444 4.54969 1.19167 4.54969C1.52389 4.54969 1.80556 4.67969 2.03667 4.93969L5.37333 8.27635L10.9633 1.16969Z"
                        fill="#F1871C"
                      />
                    </svg>
                    Accomplishing challenging ascents and thrilling descents in
                    natural settings.
                  </li>
                  <li>
                    <svg
                      width="13"
                      height="13"
                      viewBox="0 0 13 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.9633 1.16969C11.1944 0.938577 11.4761 0.823021 11.8083 0.823021C12.1406 0.823021 12.4222 0.938577 12.6533 1.16969C12.8844 1.4008 13 1.67524 13 1.99302C13 2.3108 12.8844 2.58524 12.6533 2.81635L6.28333 10.7897C6.05222 11.0497 5.77056 11.1797 5.43833 11.1797C5.10611 11.1797 4.82444 11.0641 4.59333 10.833L0.346667 6.62969C0.115556 6.36969 0 6.0808 0 5.76302C0 5.44524 0.115556 5.16358 0.346667 4.91802C0.577778 4.67247 0.859444 4.54969 1.19167 4.54969C1.52389 4.54969 1.80556 4.67969 2.03667 4.93969L5.37333 8.27635L10.9633 1.16969Z"
                        fill="#F1871C"
                      />
                    </svg>
                    Feeling the elements and connecting with the mountains in a
                    profound way.
                  </li>
                  <li>
                    <svg
                      width="13"
                      height="13"
                      viewBox="0 0 13 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.9633 1.16969C11.1944 0.938577 11.4761 0.823021 11.8083 0.823021C12.1406 0.823021 12.4222 0.938577 12.6533 1.16969C12.8844 1.4008 13 1.67524 13 1.99302C13 2.3108 12.8844 2.58524 12.6533 2.81635L6.28333 10.7897C6.05222 11.0497 5.77056 11.1797 5.43833 11.1797C5.10611 11.1797 4.82444 11.0641 4.59333 10.833L0.346667 6.62969C0.115556 6.36969 0 6.0808 0 5.76302C0 5.44524 0.115556 5.16358 0.346667 4.91802C0.577778 4.67247 0.859444 4.54969 1.19167 4.54969C1.52389 4.54969 1.80556 4.67969 2.03667 4.93969L5.37333 8.27635L10.9633 1.16969Z"
                        fill="#F1871C"
                      />
                    </svg>
                    Experiencing the freedom of traveling through snowy
                    wilderness on skis.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-12 mb-5">
            <div className="activities-details-block">
              <div className="act-block-header">
                <h3>Included and Excluded</h3>
              </div>
              <div className="act-block-cnt">
                <ul>
                  <li>
                    <svg
                      width="13"
                      height="13"
                      viewBox="0 0 13 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.9633 1.16969C11.1944 0.938577 11.4761 0.823021 11.8083 0.823021C12.1406 0.823021 12.4222 0.938577 12.6533 1.16969C12.8844 1.4008 13 1.67524 13 1.99302C13 2.3108 12.8844 2.58524 12.6533 2.81635L6.28333 10.7897C6.05222 11.0497 5.77056 11.1797 5.43833 11.1797C5.10611 11.1797 4.82444 11.0641 4.59333 10.833L0.346667 6.62969C0.115556 6.36969 0 6.0808 0 5.76302C0 5.44524 0.115556 5.16358 0.346667 4.91802C0.577778 4.67247 0.859444 4.54969 1.19167 4.54969C1.52389 4.54969 1.80556 4.67969 2.03667 4.93969L5.37333 8.27635L10.9633 1.16969Z"
                        fill="#F1871C"
                      />
                    </svg>
                    Ski touring involves exploring remote, off-piste terrains
                    away from ski resorts.
                  </li>
                  <li>
                    <svg
                      width="13"
                      height="13"
                      viewBox="0 0 13 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.9633 1.16969C11.1944 0.938577 11.4761 0.823021 11.8083 0.823021C12.1406 0.823021 12.4222 0.938577 12.6533 1.16969C12.8844 1.4008 13 1.67524 13 1.99302C13 2.3108 12.8844 2.58524 12.6533 2.81635L6.28333 10.7897C6.05222 11.0497 5.77056 11.1797 5.43833 11.1797C5.10611 11.1797 4.82444 11.0641 4.59333 10.833L0.346667 6.62969C0.115556 6.36969 0 6.0808 0 5.76302C0 5.44524 0.115556 5.16358 0.346667 4.91802C0.577778 4.67247 0.859444 4.54969 1.19167 4.54969C1.52389 4.54969 1.80556 4.67969 2.03667 4.93969L5.37333 8.27635L10.9633 1.16969Z"
                        fill="#F1871C"
                      />
                    </svg>
                    A full-body workout combining skiing, hiking, and endurance.
                  </li>
                  <li>
                    <svg
                      width="13"
                      height="13"
                      viewBox="0 0 13 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.9633 1.16969C11.1944 0.938577 11.4761 0.823021 11.8083 0.823021C12.1406 0.823021 12.4222 0.938577 12.6533 1.16969C12.8844 1.4008 13 1.67524 13 1.99302C13 2.3108 12.8844 2.58524 12.6533 2.81635L6.28333 10.7897C6.05222 11.0497 5.77056 11.1797 5.43833 11.1797C5.10611 11.1797 4.82444 11.0641 4.59333 10.833L0.346667 6.62969C0.115556 6.36969 0 6.0808 0 5.76302C0 5.44524 0.115556 5.16358 0.346667 4.91802C0.577778 4.67247 0.859444 4.54969 1.19167 4.54969C1.52389 4.54969 1.80556 4.67969 2.03667 4.93969L5.37333 8.27635L10.9633 1.16969Z"
                        fill="#F1871C"
                      />
                    </svg>
                    Engaging in challenging ascents and thrilling descents on
                    various terrains.
                  </li>
                  <li>
                    <svg
                      width="13"
                      height="13"
                      viewBox="0 0 13 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.9633 1.16969C11.1944 0.938577 11.4761 0.823021 11.8083 0.823021C12.1406 0.823021 12.4222 0.938577 12.6533 1.16969C12.8844 1.4008 13 1.67524 13 1.99302C13 2.3108 12.8844 2.58524 12.6533 2.81635L6.28333 10.7897C6.05222 11.0497 5.77056 11.1797 5.43833 11.1797C5.10611 11.1797 4.82444 11.0641 4.59333 10.833L0.346667 6.62969C0.115556 6.36969 0 6.0808 0 5.76302C0 5.44524 0.115556 5.16358 0.346667 4.91802C0.577778 4.67247 0.859444 4.54969 1.19167 4.54969C1.52389 4.54969 1.80556 4.67969 2.03667 4.93969L5.37333 8.27635L10.9633 1.16969Z"
                        fill="#F1871C"
                      />
                    </svg>
                    Enjoying pristine landscapes and serene natural
                    environments.
                  </li>
                  <li>
                    <svg
                      width="13"
                      height="13"
                      viewBox="0 0 13 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.9633 1.16969C11.1944 0.938577 11.4761 0.823021 11.8083 0.823021C12.1406 0.823021 12.4222 0.938577 12.6533 1.16969C12.8844 1.4008 13 1.67524 13 1.99302C13 2.3108 12.8844 2.58524 12.6533 2.81635L6.28333 10.7897C6.05222 11.0497 5.77056 11.1797 5.43833 11.1797C5.10611 11.1797 4.82444 11.0641 4.59333 10.833L0.346667 6.62969C0.115556 6.36969 0 6.0808 0 5.76302C0 5.44524 0.115556 5.16358 0.346667 4.91802C0.577778 4.67247 0.859444 4.54969 1.19167 4.54969C1.52389 4.54969 1.80556 4.67969 2.03667 4.93969L5.37333 8.27635L10.9633 1.16969Z"
                        fill="#F1871C"
                      />
                    </svg>
                    Carrying safety gear (avalanche transceivers, shovels,
                    probes) and knowledge of rescue procedures.
                  </li>
                  <li>
                    <svg
                      width="13"
                      height="14"
                      viewBox="0 0 13 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.04089 1.66021C1.21422 1.51576 1.40922 1.44354 1.62589 1.44354C1.84255 1.44354 2.03755 1.51576 2.21089 1.66021L6.50089 5.95021L10.7909 1.66021C10.9064 1.57354 11.0364 1.50854 11.1809 1.46521C11.3253 1.42188 11.4626 1.41465 11.5926 1.44354C11.7226 1.47243 11.8453 1.54465 11.9609 1.66021C12.0764 1.77576 12.1487 1.89854 12.1776 2.02854C12.2064 2.15854 12.1992 2.29576 12.1559 2.44021C12.1126 2.58465 12.0476 2.71465 11.9609 2.83021L7.67089 7.12021L11.9609 11.4102C12.1053 11.5835 12.1776 11.7785 12.1776 11.9952C12.1776 12.2119 12.0981 12.3997 11.9392 12.5585C11.7803 12.7174 11.5926 12.7969 11.3759 12.7969C11.1592 12.7969 10.9642 12.7247 10.7909 12.5802L6.50089 8.29021L2.21089 12.5802C2.03755 12.7247 1.84255 12.7969 1.62589 12.7969C1.40922 12.7969 1.22144 12.7174 1.06255 12.5585C0.903663 12.3997 0.824219 12.2119 0.824219 11.9952C0.824219 11.7785 0.896441 11.5835 1.04089 11.4102L5.33089 7.12021L1.04089 2.83021C0.896441 2.65687 0.824219 2.46187 0.824219 2.24521C0.824219 2.02854 0.896441 1.83354 1.04089 1.66021Z"
                        fill="#E35515"
                      />
                    </svg>
                    Ski touring typically avoids the amenities and maintained
                    slopes found in ski resorts.
                  </li>
                  <li>
                    <svg
                      width="13"
                      height="14"
                      viewBox="0 0 13 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.04089 1.66021C1.21422 1.51576 1.40922 1.44354 1.62589 1.44354C1.84255 1.44354 2.03755 1.51576 2.21089 1.66021L6.50089 5.95021L10.7909 1.66021C10.9064 1.57354 11.0364 1.50854 11.1809 1.46521C11.3253 1.42188 11.4626 1.41465 11.5926 1.44354C11.7226 1.47243 11.8453 1.54465 11.9609 1.66021C12.0764 1.77576 12.1487 1.89854 12.1776 2.02854C12.2064 2.15854 12.1992 2.29576 12.1559 2.44021C12.1126 2.58465 12.0476 2.71465 11.9609 2.83021L7.67089 7.12021L11.9609 11.4102C12.1053 11.5835 12.1776 11.7785 12.1776 11.9952C12.1776 12.2119 12.0981 12.3997 11.9392 12.5585C11.7803 12.7174 11.5926 12.7969 11.3759 12.7969C11.1592 12.7969 10.9642 12.7247 10.7909 12.5802L6.50089 8.29021L2.21089 12.5802C2.03755 12.7247 1.84255 12.7969 1.62589 12.7969C1.40922 12.7969 1.22144 12.7174 1.06255 12.5585C0.903663 12.3997 0.824219 12.2119 0.824219 11.9952C0.824219 11.7785 0.896441 11.5835 1.04089 11.4102L5.33089 7.12021L1.04089 2.83021C0.896441 2.65687 0.824219 2.46187 0.824219 2.24521C0.824219 2.02854 0.896441 1.83354 1.04089 1.66021Z"
                        fill="#E35515"
                      />
                    </svg>
                    It steers clear of crowded slopes and lift systems.
                  </li>
                  <li>
                    <svg
                      width="13"
                      height="14"
                      viewBox="0 0 13 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.04089 1.66021C1.21422 1.51576 1.40922 1.44354 1.62589 1.44354C1.84255 1.44354 2.03755 1.51576 2.21089 1.66021L6.50089 5.95021L10.7909 1.66021C10.9064 1.57354 11.0364 1.50854 11.1809 1.46521C11.3253 1.42188 11.4626 1.41465 11.5926 1.44354C11.7226 1.47243 11.8453 1.54465 11.9609 1.66021C12.0764 1.77576 12.1487 1.89854 12.1776 2.02854C12.2064 2.15854 12.1992 2.29576 12.1559 2.44021C12.1126 2.58465 12.0476 2.71465 11.9609 2.83021L7.67089 7.12021L11.9609 11.4102C12.1053 11.5835 12.1776 11.7785 12.1776 11.9952C12.1776 12.2119 12.0981 12.3997 11.9392 12.5585C11.7803 12.7174 11.5926 12.7969 11.3759 12.7969C11.1592 12.7969 10.9642 12.7247 10.7909 12.5802L6.50089 8.29021L2.21089 12.5802C2.03755 12.7247 1.84255 12.7969 1.62589 12.7969C1.40922 12.7969 1.22144 12.7174 1.06255 12.5585C0.903663 12.3997 0.824219 12.2119 0.824219 11.9952C0.824219 11.7785 0.896441 11.5835 1.04089 11.4102L5.33089 7.12021L1.04089 2.83021C0.896441 2.65687 0.824219 2.46187 0.824219 2.24521C0.824219 2.02854 0.896441 1.83354 1.04089 1.66021Z"
                        fill="#E35515"
                      />
                    </svg>
                    Ski touring often involves more challenging and varied
                    terrains, less suitable for beginners.
                  </li>
                  <li>
                    <svg
                      width="13"
                      height="14"
                      viewBox="0 0 13 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.04089 1.66021C1.21422 1.51576 1.40922 1.44354 1.62589 1.44354C1.84255 1.44354 2.03755 1.51576 2.21089 1.66021L6.50089 5.95021L10.7909 1.66021C10.9064 1.57354 11.0364 1.50854 11.1809 1.46521C11.3253 1.42188 11.4626 1.41465 11.5926 1.44354C11.7226 1.47243 11.8453 1.54465 11.9609 1.66021C12.0764 1.77576 12.1487 1.89854 12.1776 2.02854C12.2064 2.15854 12.1992 2.29576 12.1559 2.44021C12.1126 2.58465 12.0476 2.71465 11.9609 2.83021L7.67089 7.12021L11.9609 11.4102C12.1053 11.5835 12.1776 11.7785 12.1776 11.9952C12.1776 12.2119 12.0981 12.3997 11.9392 12.5585C11.7803 12.7174 11.5926 12.7969 11.3759 12.7969C11.1592 12.7969 10.9642 12.7247 10.7909 12.5802L6.50089 8.29021L2.21089 12.5802C2.03755 12.7247 1.84255 12.7969 1.62589 12.7969C1.40922 12.7969 1.22144 12.7174 1.06255 12.5585C0.903663 12.3997 0.824219 12.2119 0.824219 11.9952C0.824219 11.7785 0.896441 11.5835 1.04089 11.4102L5.33089 7.12021L1.04089 2.83021C0.896441 2.65687 0.824219 2.46187 0.824219 2.24521C0.824219 2.02854 0.896441 1.83354 1.04089 1.66021Z"
                        fill="#E35515"
                      />
                    </svg>
                    In case of emergencies, immediate assistance may not be
                    readily available compared to ski resorts.
                  </li>
                  <li>
                    <svg
                      width="13"
                      height="14"
                      viewBox="0 0 13 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.04089 1.66021C1.21422 1.51576 1.40922 1.44354 1.62589 1.44354C1.84255 1.44354 2.03755 1.51576 2.21089 1.66021L6.50089 5.95021L10.7909 1.66021C10.9064 1.57354 11.0364 1.50854 11.1809 1.46521C11.3253 1.42188 11.4626 1.41465 11.5926 1.44354C11.7226 1.47243 11.8453 1.54465 11.9609 1.66021C12.0764 1.77576 12.1487 1.89854 12.1776 2.02854C12.2064 2.15854 12.1992 2.29576 12.1559 2.44021C12.1126 2.58465 12.0476 2.71465 11.9609 2.83021L7.67089 7.12021L11.9609 11.4102C12.1053 11.5835 12.1776 11.7785 12.1776 11.9952C12.1776 12.2119 12.0981 12.3997 11.9392 12.5585C11.7803 12.7174 11.5926 12.7969 11.3759 12.7969C11.1592 12.7969 10.9642 12.7247 10.7909 12.5802L6.50089 8.29021L2.21089 12.5802C2.03755 12.7247 1.84255 12.7969 1.62589 12.7969C1.40922 12.7969 1.22144 12.7174 1.06255 12.5585C0.903663 12.3997 0.824219 12.2119 0.824219 11.9952C0.824219 11.7785 0.896441 11.5835 1.04089 11.4102L5.33089 7.12021L1.04089 2.83021C0.896441 2.65687 0.824219 2.46187 0.824219 2.24521C0.824219 2.02854 0.896441 1.83354 1.04089 1.66021Z"
                        fill="#E35515"
                      />
                    </svg>
                    Unlike ski resorts, conditions in backcountry areas can vary
                    significantly and may not be groomed or controlled.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-12 mb-5">
            <div className="activities-details-block">
              <div className="act-block-header">
                <h3>Activity Plan</h3>
              </div>
              <div className="act-block-cnt">
                <div className="accordion tour-plan" id="tourPlan">
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        <span>Day 01 :</span> Preparation and Departure
                      </button>
                    </h2>
                    <div
                      id="collapseOne"
                      className="accordion-collapse collapse show"
                      aria-labelledby="headingOne"
                      data-bs-parent="#tourPlan"
                    >
                      <div className="accordion-body">
                        <ul>
                          <li>
                            <i className="bi bi-check-lg" />
                            <strong>Morning:</strong> Final gear check and
                            packing.
                          </li>
                          <li>
                            <i className="bi bi-check-lg" />
                            <strong>Midday:</strong> Travel to the destination,
                            ensuring everyone has the necessary equipment and
                            provisions.
                          </li>
                          <li>
                            <i className="bi bi-check-lg" />
                            <strong>Afternoon/Evening:</strong> Set up camp or
                            accommodation, review safety protocols, and plan for
                            the following days.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        <span>Day 02 :</span> Warm-up and Exploration
                      </button>
                    </h2>
                    <div
                      id="collapseTwo"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#tourPlan"
                    >
                      <div className="accordion-body">
                        <ul>
                          <li>
                            <i className="bi bi-check-lg" />
                            <strong>Morning:</strong> Start with a relatively
                            easier route to warm up, familiarize with the
                            terrain.
                          </li>
                          <li>
                            <i className="bi bi-check-lg" />
                            <strong>Midday:</strong> Break for lunch and assess
                            conditions.
                          </li>
                          <li>
                            <i className="bi bi-check-lg" />
                            <strong>Afternoon:</strong> Continue exploring,
                            gradually increasing difficulty if the group is
                            comfortable.
                          </li>
                          <li>
                            <i className="bi bi-check-lg" />
                            <strong>Evening:</strong> Return to the base,
                            debrief, and plan for the next day.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        <span>Day 03 :</span> Advanced Touring
                      </button>
                    </h2>
                    <div
                      id="collapseThree"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingThree"
                      data-bs-parent="#tourPlan"
                    >
                      <div className="accordion-body">
                        <ul>
                          <li>
                            <i className="bi bi-check-lg" />
                            <strong>Morning:</strong> Tackle a more challenging
                            route, considering the group's capabilities and
                            weather conditions.
                          </li>
                          <li>
                            <i className="bi bi-check-lg" />
                            <strong>Midday:</strong> Evaluate progress, take
                            necessary breaks, and ensure safety measures are in
                            place.
                          </li>
                          <li>
                            <i className="bi bi-check-lg" />
                            <strong>Afternoon:</strong> Enjoy the terrain,
                            capturing the scenic beauty while advancing in skill
                            and terrain difficulty.
                          </li>
                          <li>
                            <i className="bi bi-check-lg" />
                            <strong>Evening:</strong> Reflect on the day's
                            experience, discuss any adjustments needed for the
                            final day.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFour">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFour"
                        aria-expanded="false"
                        aria-controls="collapseFour"
                      >
                        <span>Day 04 :</span> Summit Attempt and Departure
                      </button>
                    </h2>
                    <div
                      id="collapseFour"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingFour"
                      data-bs-parent="#tourPlan"
                    >
                      <div className="accordion-body">
                        <ul>
                          <li>
                            <i className="bi bi-check-lg" />
                            <strong>Morning:</strong> Summit Attempt and
                            Departure
                          </li>
                          <li>
                            <i className="bi bi-check-lg" />
                            <strong>Midday:</strong> Summit attempt or reach the
                            day's touring goal.
                          </li>
                          <li>
                            <i className="bi bi-check-lg" />
                            <strong>Afternoon:</strong> Begin descent, ensuring
                            safety and enjoyment.
                          </li>
                          <li>
                            <i className="bi bi-check-lg" />
                            <strong>Evening:</strong> Pack up, depart for home
                            or the next destination, debrief on the overall
                            experience, and celebrate the adventure
                          </li>
                        </ul>
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

export default ActivitiesDetails;
