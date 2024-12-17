"use client";
import Breadcrumb from "@/components/common/Breadcrumb";
import DropdownCard from "@/components/destination/DropdownCard";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <>
      <Breadcrumb pagename="Destination" pagetitle="Destination" />
      <div className="destination-section pt-120 mb-120">
        <div className="container">
          <div className="row g-lg-4 gy-5 mb-70">
            <div className="col-lg-6 destination-column">
              <DropdownCard
                img={"/assets/img/home3/destination-dropdown-card-img1.png"}
                title="Indonesia"
                tourCount="10"
              />
            </div>
            <div className="col-lg-6 destination-column">
              <DropdownCard
                img={"/assets/img/home3/destination-dropdown-card-img2.png"}
                title="Egypt"
                tourCount="10"
              />
            </div>
            <div className="col-lg-6 destination-column">
              <DropdownCard
                img={"/assets/img/home3/destination-dropdown-card-img3.png"}
                title="Switzerland"
                tourCount="10"
              />
            </div>
            <div className="col-lg-6 destination-column">
              <DropdownCard
                img={"/assets/img/home3/destination-dropdown-card-img4.png"}
                title="Bangladesh"
                tourCount="10"
              />
            </div>
            <div className="col-lg-6 destination-column">
              <DropdownCard
                img={"/assets/img/home3/destination-dropdown-card-img5.png"}
                title="Saudi Arab"
                tourCount="10"
              />
            </div>
            <div className="col-lg-6 destination-column">
              <DropdownCard
                img={"/assets/img/home3/destination-dropdown-card-img6.png"}
                title="India"
                tourCount="10"
              />
            </div>
            <div className="col-lg-6 destination-column">
              <DropdownCard
                img={"/assets/img/innerpage/destination3-img1.jpg"}
                title="Nepal"
                tourCount="10"
              />
            </div>
            <div className="col-lg-6 destination-column">
              <DropdownCard
                img={"/assets/img/innerpage/destination3-img2.jpg"}
                title="Japan"
                tourCount="10"
              />
            </div>
            <div className="col-lg-6 destination-column">
              <DropdownCard
                img={"/assets/img/innerpage/destination3-img3.jpg"}
                title="Spain"
                tourCount="10"
              />
            </div>
            <div className="col-lg-6 destination-column">
              <DropdownCard
                img={"/assets/img/innerpage/destination3-img4.jpg"}
                title="France"
                tourCount="10"
              />
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
      </div>
    </>
  );
};

export default page;
