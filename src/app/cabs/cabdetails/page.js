"use client";
import React from "react";
import Header from "@/components/header/Header";
import Topbar from "@/components/topbar/Topbar";
import Footer from "@/components/footer/Footer3";
import Breadcrumb from "@/components/common/Breadcrumb";
import car1 from "@/../public/image/car1.png";
import car2 from "@/../public/image/car2.png";
import car3 from "@/../public/image/car3.png";
import Image from "next/image";
import "@/app/cabs/cabdetails/page.css";
import "@/components/stylebook/Footer.css";
import "@/app/activities/activities-details/activity-detail.css";
import SelectComponent from "@/uitils/SelectComponent";
import { useState } from "react";
const CabDetail = () => {
  const [currData, newData] = useState();
  function onChange() {
    // onchage function for Input
  }
  return (
    <>
      <Topbar />
      <Header />
      <Breadcrumb pagename="Cab Detail" pagetitle="Cab Detail" />

      <div className="car-grid container pt-10">
        <Image src={car3} className="big-car car" />
        <Image src={car1} className="car" />
        <Image src={car2} className="yellow car" />
      </div>

      <div className="container">
        <div className="cuscard mt-10">
          <p className="title">Airport Transfers From Dubai to Abu Dhabi</p>
          <p className="review">52 Reviews</p>

          <p className="floater">
            <div className="review">
              from:
              <h5 className="price">AED 474.00</h5>
            </div>
            <button>Book Now</button>
          </p>
        </div>
      </div>

      <div className="container col-lg-12 mb-5">
        <div className="activities-details-block">
          <div className="act-block-header pt-3">
            <h3>Airport Transfers From Dubai to Abu Dhabi Price & Offers</h3>
          </div>
          <div className="act-dtl-table">
            <div className="table-wrapper">
              <table>
                <thead>
                  <tr>
                    <th>Tour Option</th>
                    <th>Extra Services</th>
                    <th>Tour Date</th>
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
                        <input type="checkbox" id="cbx-46" class="inp-cbx" />
                        <label for="cbx-46" class="cbx">
                          <span>
                            <svg viewBox="0 0 12 10" height="10px" width="12px">
                              <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                            </svg>
                          </span>
                          <span>Dubai Airport To Abu Dhabi City Hotels</span>
                        </label>
                      </div>
                    </td>
                    <td>
                      <SelectComponent
                        options={["Tourist", "Business visa", "Student visa"]}
                        placeholder={["Night Food"]}
                      />
                    </td>
                    <td>
                      <div className="act-date-ui">
                        <input type="date" value="2013-01-08" />
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
                        <input type="checkbox" id="cbx-46" class="inp-cbx" />
                        <label for="cbx-46" class="cbx">
                          <span>
                            <svg viewBox="0 0 12 10" height="10px" width="12px">
                              <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                            </svg>
                          </span>
                          <span>Abu Dhabi City Hotels to Dubai Airport</span>
                        </label>
                      </div>
                    </td>
                    <td>
                      <SelectComponent
                        options={["Tourist", "Business visa", "Student visa"]}
                        placeholder={["Night Food"]}
                      />
                    </td>
                    <td>
                      <div className="act-date-ui">
                        <input type="date" value="2013-01-08" />
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
                        <input type="checkbox" id="cbx-46" class="inp-cbx" />
                        <label for="cbx-46" class="cbx">
                          <span>
                            <svg viewBox="0 0 12 10" height="10px" width="12px">
                              <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                            </svg>
                          </span>
                          <span>Dubai Airport To Abu Dhabi City Hotels</span>
                        </label>
                      </div>
                    </td>
                    <td>
                      <SelectComponent
                        options={["Tourist", "Business visa", "Student visa"]}
                        placeholder={["Night Food"]}
                      />
                    </td>
                    <td>
                      <div className="act-date-ui">
                        <input type="date" value="2013-01-08" />
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
                        <input type="checkbox" id="cbx-46" class="inp-cbx" />
                        <label for="cbx-46" class="cbx">
                          <span>
                            <svg viewBox="0 0 12 10" height="10px" width="12px">
                              <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                            </svg>
                          </span>
                          <span>Dubai Airport To Abu Dhabi City Hotels</span>
                        </label>
                      </div>
                    </td>
                    <td>
                      <SelectComponent
                        options={["Tourist", "Business visa", "Student visa"]}
                        placeholder={["Night Food"]}
                      />
                    </td>
                    <td>
                      <div className="act-date-ui">
                        <input type="date" value="2013-01-08" />
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
            <div className="act-table-ftr container mb-4">
              <span>More Activities</span>
              <button>Book Now</button>
            </div>
          </div>
        </div>
      </div>

      <div className="col-lg-12 mb-5 container">
        <div className="activities-details-block">
          <div className="act-block-header">
            <h3>Airport Transfers From Dubai to Abu Dhabi Overview</h3>
          </div>
          <div className="act-block-cnt">
            <p>
              It’s totally stress-free to travel between Dubai Airport and Abu
              Dhabi. Simply reserve our roundtrip airport transfers to avoid all
              tensions of hiring a cab! At Rayna Tours, we provide the most
              convenient and cost-effective transport options to and from Dubai
              International Airport to your Abu Dhabi hotel, allowing you to
              start and end your Abu Dhabi trip in the most unworried way. To
              cater to all your airport arrival and departure needs, we have a
              brand new fleet of comfortable, large and luxury vehicles, all
              maneuvered by a team of highly friendly and professional drivers.
              Get in touch with us for more details.
            </p>
          </div>
        </div>
      </div>

      <div className="col-lg-12 mb-5 container">
        <div className="activities-details-block">
          <div className="act-block-header">
            <h3>Airport Transfers From Dubai to Abu Dhabi Inclusions</h3>
          </div>
          <div className="act-block-cnt">
            <p>
              Pick up from Dubai Airport and Drop off at Abu Dhabi (If option
              selected)
            </p>
            <p>Transfers in a well-maintained air-conditioned vehicle.</p>
            <p>
              Pick up from Abu Dubai and Drop off at the Dubai Airport (If
              option selected)
            </p>
          </div>
        </div>
      </div>

      <div className="col-lg-12 mb-5 container">
        <div className="activities-details-block">
          <div className="act-block-header">
            <h3>
              Airport Transfers From Dubai to Abu Dhabi Important Information
            </h3>
          </div>
          <div className="act-block-cnt">
            <p>
              Please carry a valid Id/Passport along with you during the
              transfer.
            </p>
            <p>Please arrive 30 mins prior to the pick up time.</p>
            <p>
              Your service will be executed according to your Booking selection.
              You can select both the options if you wish to avail a 2-way
              transfer (Pick up & Drop off)
            </p>
            <p>
              Kindly schedule your transfers keeping in mind the traffic
              conditions and your flight timings
            </p>
            <p>
              Kindly provide detailed information about your flight timings to
              ensure a smooth pickup or drop-off.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};
export default CabDetail;
