"use client"; // Add this if you're using Next.js Client Component

import React, { useRef, useState } from "react";
import Image from "next/image";
import image1 from "../../../public/image/count-1.png";
import image2 from "../../../public/image/count-2.png";
import image3 from "../../../public/image/count-3.png";
import image4 from "../../../public/image/count-4.png";
import leaf from "../../../public/image/leaf.svg";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import Slider from "react-slick";

const Home2Destinationslide = () => {
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
    <div>
      <div className="country-top-destination countries-conatiner">
        <img className="leaf-img" src={"assets/img/leaf.svg"} />

        <div className="heading-for-all heading-for-all-with-arrow">
          <div>
            <h2>Explore Other Countries</h2>
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
  );
};

export default Home2Destinationslide;
