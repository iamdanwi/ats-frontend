"use client";
import Link from "next/link";
import React from "react";
import DropdownCard from "./DropdownCard";

const Home3Destination = () => {
  const img = ["assets/img/home3/destination-dropdown-card-img1.png"];
  return (
    <>
      <div className="destination-dropdown-section mb-120">
        <img
          src="/assets/img/home3/vector/destination-vector1.svg"
          alt=""
          className="vector1"
        />
        <img
          src="/assets/img/home3/vector/destination-vector2.svg"
          alt=""
          className="vector2"
        />
        <div className="container-fluid">
          <div className="row mb-50">
            <div className="col-lg-12 d-flex align-items-center justify-content-between flex-wrap gap-3">
              <div className="section-title2 two">
                <h2>Leading Tour Location</h2>
                <p>
                  Etiam ac tortor id purus commodo vulputate. Vestibulum
                  porttitor erat felis and sed vehicula tortor malesuada
                  gravida. Mauris volutpat enim quis.
                </p>
              </div>
              <div className="section-btn">
                <Link href="/destination" className="primary-btn4 two">
                  <span>
                    All Destination
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
              </div>
            </div>
          </div>
          <div className="destination-dropdown-card-wrap">
            <div className="row g-lg-4 gy-5">
              <div className="col-lg-6 destination-column">
                <DropdownCard
                  img={"assets/img/home3/destination-dropdown-card-img1.png"}
                  title="Indonesia"
                  tourCount="18"
                />
              </div>
              <div className="col-lg-6 destination-column">
                <DropdownCard
                  img={"assets/img/home3/destination-dropdown-card-img2.png"}
                  title="Egypt"
                  tourCount="18"
                />
              </div>
              <div className="col-lg-6 destination-column">
                <DropdownCard
                  img={"assets/img/home3/destination-dropdown-card-img3.png"}
                  title="Switzerland"
                  tourCount="18"
                />
              </div>
              <div className="col-lg-6 destination-column">
                <DropdownCard
                  img={"assets/img/home3/destination-dropdown-card-img4.png"}
                  title="Bangladesh"
                  tourCount="18"
                />
              </div>
              <div className="col-lg-6 destination-column">
                <DropdownCard
                  img={"assets/img/home3/destination-dropdown-card-img5.png"}
                  title="Saudi Arab"
                  tourCount="18"
                />
              </div>
              <div className="col-lg-6 destination-column">
                <DropdownCard
                  img={"assets/img/home3/destination-dropdown-card-img6.png"}
                  title="India"
                  tourCount="18"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home3Destination;
