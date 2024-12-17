"use client";
import React, { useRef, useState } from "react";
import Footer from "@/components/footer/Footer3";
import Header from "@/components/header/Header";
import Topbar from "@/components/topbar/Topbar";
import Breadcrumb from "@/components/common/Breadcrumb";
import "@/components/stylebook/Footer.css";
import "./activity-mainpage.css";
import Image from "next/image";
import image1 from "../../../../public/image/count-1.png";
import image2 from "../../../../public/image/count-2.png";
import image3 from "../../../../public/image/count-3.png";
import image4 from "../../../../public/image/count-4.png";

import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import Slider from "react-slick";
import "@/components/stylebook/home/countrydestination.css";
import img1 from "@/../public/image/activity/img1.png";
import img2 from "@/../public/image/activity/img2.png";
import img3 from "@/../public/image/activity/img3.png";
import img4 from "@/../public/image/activity/img4.png";
const ActivitiesMainPage = () => {
  const ads = [
    {
      img: image1,
      title: "Zip Lining",
    },
    {
      img: image2,
      title: "Bungee Jumping",
    },
    {
      img: image3,
      title: "Para Gliding",
    },
    {
      img: image4,
      title: "Surfing",
    },
    {
      img: image1,
      title: "Zip Lining",
    },
    {
      img: image2,
      title: "Bungee Jumping",
    },
    {
      img: image3,
      title: "Para Gliding",
    },
    {
      img: image4,
      title: "Surfing",
    },
    {
      img: image1,
      title: "Zip Lining",
    },
    {
      img: image2,
      title: "Bungee Jumping",
    },
    {
      img: image3,
      title: "Para Gliding",
    },
    {
      img: image4,
      title: "Surfing",
    },
    {
      img: image1,
      title: "Zip Lining",
    },
    {
      img: image2,
      title: "Bungee Jumping",
    },
    {
      img: image3,
      title: "Para Gliding",
    },
    {
      img: image4,
      title: "Surfing",
    },
  ];
  const details = [
    {
      img: image1,
      title: "spain",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      img: image2,
      title: "italy",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      img: image3,
      title: "usa",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      img: image4,
      title: "japan",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
  ];

  const sliderSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    pauseOnHover: false, // Prevents slider from pausing on hover
    pauseOnFocus: false, // Prevents slider from pausing on focus
    pauseOnDotsHover: false, // Prevents slider from pausing when dots are hovered
    centerPadding: "10px",
    arrows: false,

    responsive: [
      {
        breakpoint: 1980,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
          centerPadding: "-10px",
        },
      },
      {
        breakpoint: 1720,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          centerPadding: "-100px",
        },
      },
      {
        breakpoint: 1700,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          centerPadding: "100px",
        },
      },
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          centerPadding: "50px",
        },
      },
      {
        breakpoint: 1530,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          centerPadding: "0px",
        },
      },
      {
        breakpoint: 1450,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          centerPadding: "-10px",
        },
      },
      {
        breakpoint: 1350,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          centerPadding: "-50px",
        },
      },
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          centerPadding: "-80px",
        },
      },
      {
        breakpoint: 1270,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          centerPadding: "-100px",
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          centerPadding: "0px",
        },
      },

      {
        breakpoint: 1104,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          centerPadding: "-30px",
        },
      },
      {
        breakpoint: 1040,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          centerPadding: "-70px",
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          centerPadding: "-90px",
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          centerPadding: "-50px",
        },
      },
      {
        breakpoint: 798,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          centerPadding: "-20px",
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          centerPadding: "60px",
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          centerPadding: "50px",
        },
      },

      {
        breakpoint: 556,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          centerPadding: "30px",
        },
      },
      {
        breakpoint: 515,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          centerMode: true,
        },
      },
    ],
  };

  const sliderRef = useRef(null);
  const [selectedOne, setSelectOne] = useState(1);

  const goToSlide = (slideIndex) => {
    sliderRef.current.slickGoTo(slideIndex); // Navigate to the desired slide
  };
  const goToNextSlide = () => {
    sliderRef.current.slickPrev(); // Navigate to the previous slide
  };

  const goToPreviousSlide = () => {
    sliderRef.current.slickNext(); // Navigate to the next slide
  };
  return (
    <>
      <Topbar />
      <Header />
      <Breadcrumb pagename="Activitis Details" pagetitle="Activities Details" />
      <div>
        <div
          className="country-top-destination countries-conatiner"
          style={{ background: "white" }}
        >
          <div
            className="heading-for-all heading-for-all-with-arrow"
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <div>
              <h2>Top Cities to Visit</h2>
              <span>
                Uncover secret wonders and celebrated attractions in top travel
                spots worldwide - your next escapade awaits!
              </span>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <button
                onClick={() => {
                  goToNextSlide();
                }}
              >
                <ArrowBackIosNewIcon
                  sx={{
                    fontSize: 20,
                    color: "#006370",
                    width: "35px",
                    height: "35px",
                    padding: "10px",
                    borderRadius: "50%",
                    backgroundColor: "white",
                    marginLeft: "-10px",

                    cursor: "pointer", // Ensures pointer appears on hover
                    "&:hover": { backgroundColor: "#f0f0f0", color: "#006370" }, // Optional hover effect
                  }}
                />
              </button>
              <button
                onClick={() => {
                  goToPreviousSlide();
                }}
              >
                <ArrowForwardIosIcon
                  sx={{
                    fontSize: 20,
                    color: "#006370",
                    width: "35px",
                    height: "35px",
                    padding: "10px",
                    borderRadius: "50%",
                    backgroundColor: "white",
                    marginRight: "-10px",
                    cursor: "pointer", // Ensures pointer appears on hover
                    "&:hover": { backgroundColor: "#f0f0f0", color: "#006370" }, // Optional hover effect
                  }}
                />
              </button>
            </div>
          </div>

          {/* <div className="tour-boxes tour-boxes-countries "> */}
          <Slider {...sliderSettings} ref={sliderRef}>
            {details.map((item, index) => (
              <div
                key={index}
                data-bs-toggle="modal"
                data-bs-target="#user-login"
                className={`tour-box ${
                  index % 2 === 0 ? "up" : "down-box"
                } country-check-box`}
              >
                <div className="country-box-img">
                  <Image
                    src={item.img}
                    alt={item.title}
                    layout="fill"
                    objectFit="cover"
                  />
                  <div className="overlay">
                    <h3>{item.title}</h3>
                    <p
                      style={{
                        color: "white",
                      }}
                    >
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>

          {/* </div> */}
        </div>
      </div>

      <div>
        <div
          className="country-top-destination countries-conatiner"
          style={{ background: "white" }}
        >
          <div
            className="heading-for-all heading-for-all-with-arrow"
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <div>
              <h2>Discover Most Popular Activities in UAE</h2>
              <span>
                Experiences! Dive into the best of local culture, festivals, and
                entertainment.
              </span>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <button
                onClick={() => {
                  goToNextSlide();
                }}
              >
                <ArrowBackIosNewIcon
                  sx={{
                    fontSize: 20,
                    color: "#006370",
                    width: "35px",
                    height: "35px",
                    padding: "10px",
                    borderRadius: "50%",
                    backgroundColor: "white",
                    marginLeft: "-10px",

                    cursor: "pointer", // Ensures pointer appears on hover
                    "&:hover": { backgroundColor: "#f0f0f0", color: "#006370" }, // Optional hover effect
                  }}
                />
              </button>
              <button
                onClick={() => {
                  goToPreviousSlide();
                }}
              >
                <ArrowForwardIosIcon
                  sx={{
                    fontSize: 20,
                    color: "#006370",
                    width: "35px",
                    height: "35px",
                    padding: "10px",
                    borderRadius: "50%",
                    backgroundColor: "white",
                    marginRight: "-10px",
                    cursor: "pointer", // Ensures pointer appears on hover
                    "&:hover": { backgroundColor: "#f0f0f0", color: "#006370" }, // Optional hover effect
                  }}
                />
              </button>
            </div>
          </div>

          {/* <div className="tour-boxes tour-boxes-countries "> */}
          <Slider {...sliderSettings} ref={sliderRef}>
            {details.map((item, index) => (
              <div className="p-2 mt-5" key={index}>
                <div className="card">
                  <Image src={item.img} objectFit="cover" className="image" />
                  <div className="card-body">
                    <h5 className="card-title flex">
                      {item.title}
                      <p>4+ Rating</p>
                    </h5>
                    <div className="d-flex justify-content-between align-items-center">
                      <div>{item.rating}</div>
                    </div>
                    <div className="d-flex">
                      <div>
                        <div>Starting From:</div>
                        <div>
                          <div className="text-success">$2898</div>
                          <div className="text-muted text-decoration-line-through">
                            $3000
                          </div>
                        </div>
                        <div />
                        <div className="text-muted mt-2">TAXES INCL/PERS</div>
                      </div>
                      <button className="btn btn-primary">View Details</button>
                    </div>
                  </div>
                  <div className="floater"> 3 DAYS/4 NIGHT</div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      <div>
        <div
          className="country-top-destination countries-conatiner"
          style={{ background: "white" }}
        >
          <div
            className="heading-for-all heading-for-all-with-arrow"
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <div>
              <h2>Most Popular Activities in Dubai</h2>
              <span>
                Culture, nature, thrills, and record-breaking experiences—Dubai
                is the place to seek out everything you imagine and beyond
              </span>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <button
                onClick={() => {
                  goToNextSlide();
                }}
              >
                <ArrowBackIosNewIcon
                  sx={{
                    fontSize: 20,
                    color: "#006370",
                    width: "35px",
                    height: "35px",
                    padding: "10px",
                    borderRadius: "50%",
                    backgroundColor: "white",
                    marginLeft: "-10px",

                    cursor: "pointer", // Ensures pointer appears on hover
                    "&:hover": { backgroundColor: "#f0f0f0", color: "#006370" }, // Optional hover effect
                  }}
                />
              </button>
              <button
                onClick={() => {
                  goToPreviousSlide();
                }}
              >
                <ArrowForwardIosIcon
                  sx={{
                    fontSize: 20,
                    color: "#006370",
                    width: "35px",
                    height: "35px",
                    padding: "10px",
                    borderRadius: "50%",
                    backgroundColor: "white",
                    marginRight: "-10px",
                    cursor: "pointer", // Ensures pointer appears on hover
                    "&:hover": { backgroundColor: "#f0f0f0", color: "#006370" }, // Optional hover effect
                  }}
                />
              </button>
            </div>
          </div>

          {/* <div className="tour-boxes tour-boxes-countries "> */}
          <Slider {...sliderSettings} ref={sliderRef}>
            {details.map((item, index) => (
              <div className="p-2 mt-5" key={index}>
                <div className="card">
                  <Image src={item.img} objectFit="cover" className="image" />
                  <div className="card-body">
                    <h5 className="card-title flex">
                      {item.title}
                      <p>4+ Rating</p>
                    </h5>
                    <div className="d-flex justify-content-between align-items-center">
                      <div>{item.rating}</div>
                    </div>
                    <div className="d-flex">
                      <div>
                        <div>Starting From:</div>
                        <div>
                          <div className="text-success">$2898</div>
                          <div className="text-muted text-decoration-line-through">
                            $3000
                          </div>
                        </div>
                        <div />
                        <div className="text-muted mt-2">TAXES INCL/PERS</div>
                      </div>
                      <button className="btn btn-primary">View Details</button>
                    </div>
                  </div>
                  <div className="floater"> 3 DAYS/4 NIGHT</div>
                </div>
              </div>
            ))}
          </Slider>

          {/* </div> */}
        </div>
      </div>

      <div>
        <div
          className="country-top-destination countries-conatiner"
          style={{ background: "white" }}
        >
          <div
            className="heading-for-all heading-for-all-with-arrow"
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <div>
              <h2>Top Experiences in Abu Dhabi</h2>
              <span>
                Discover the best attractions and activities that the UAE's
                capital city has to offer.
              </span>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <button
                onClick={() => {
                  goToNextSlide();
                }}
              >
                <ArrowBackIosNewIcon
                  sx={{
                    fontSize: 20,
                    color: "#006370",
                    width: "35px",
                    height: "35px",
                    padding: "10px",
                    borderRadius: "50%",
                    backgroundColor: "white",
                    marginLeft: "-10px",

                    cursor: "pointer", // Ensures pointer appears on hover
                    "&:hover": { backgroundColor: "#f0f0f0", color: "#006370" }, // Optional hover effect
                  }}
                />
              </button>
              <button
                onClick={() => {
                  goToPreviousSlide();
                }}
              >
                <ArrowForwardIosIcon
                  sx={{
                    fontSize: 20,
                    color: "#006370",
                    width: "35px",
                    height: "35px",
                    padding: "10px",
                    borderRadius: "50%",
                    backgroundColor: "white",
                    marginRight: "-10px",
                    cursor: "pointer", // Ensures pointer appears on hover
                    "&:hover": { backgroundColor: "#f0f0f0", color: "#006370" }, // Optional hover effect
                  }}
                />
              </button>
            </div>
          </div>

          {/* <div className="tour-boxes tour-boxes-countries "> */}
          <Slider {...sliderSettings} ref={sliderRef}>
            {details.map((item, index) => (
              <div className="p-2 mt-5" key={index}>
                <div className="card">
                  <Image src={item.img} objectFit="cover" className="image" />
                  <div className="card-body">
                    <h5 className="card-title flex">
                      {item.title}
                      <p>4+ Rating</p>
                    </h5>
                    <div className="d-flex justify-content-between align-items-center">
                      <div>{item.rating}</div>
                    </div>
                    <div className="d-flex">
                      <div>
                        <div>Starting From:</div>
                        <div>
                          <div className="text-success">$2898</div>
                          <div className="text-muted text-decoration-line-through">
                            $3000
                          </div>
                        </div>
                        <div />
                        <div className="text-muted mt-2">TAXES INCL/PERS</div>
                      </div>
                      <button className="btn btn-primary">View Details</button>
                    </div>
                  </div>
                  <div className="floater"> 3 DAYS/4 NIGHT</div>
                </div>
              </div>
            ))}
          </Slider>

          {/* </div> */}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ActivitiesMainPage;
