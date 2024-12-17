"use client"; // Ensures client-side rendering for React
import React, { useMemo } from "react";
import Image from "next/image"; // Ensure you're using Next.js's Image component
import imagelogodate from "../../../public/image/image 5.png";
import starts from "../../../public/image/Star 7.png";
import location from "../../../public/image/location.png";
import image1 from "../../../public/image/event-1.png";
import image2 from "../../../public/image/event-2.png";
import image3 from "../../../public/image/event-3.png";
import image4 from "../../../public/image/event-4.png";
import { Swiper, SwiperSlide } from "swiper/react";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import Slider from "react-slick";

const Home2VideoSection = () => {
  const sliderSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: false, // Prevents slider from pausing on hover
    pauseOnFocus: false, // Prevents slider from pausing on focus
    pauseOnDotsHover: false, // Prevents slider from pausing when dots are hovered
    arrows: true,
    centerMode: true, // Enables centered mode
    centerPadding: "100px", // Adds padding to show half cards on sides

    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          centerPadding: "170px",
        },
      },
      {
        breakpoint: 1523,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          centerPadding: "120px",
        },
      },
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          centerPadding: "90px",
        },
      },
      {
        breakpoint: 1350,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          centerPadding: "40px",
        },
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          centerPadding: "20px",
        },
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          centerPadding: "40px",
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          centerPadding: "80px",
        },
      },
      {
        breakpoint: 557,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          centerPadding: "60px",
        },
      },
      {
        breakpoint: 503,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          centerPadding: "40px",
        },
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          centerPadding: "0px",
        },
      },

    ],
  };


  const details = [
    {
img: image1,
title: "Mind2mind Connected In Dubai",
date: "25 Dec 2024",
location: "Dubai",
price: "AED 400.00",
    },

    {
img: image2,
title: "Ravi Gupta Stand Up Comedy",
date: "25 Dec 2024",
location: "Dubai",
price: "AED 400.00",
    },
    {
img: image3,
title: "Ruki Vverh Live In Dubai",
date: "25 Dec 2024",
location: "Dubai",
price: "AED 400.00",
    },

    {
img: image4,
title: "World Tennis In Abu Dhabi",
date: "25 Dec 2024",
location: "Dubai",
price: "AED 400.00",
    },
  ];

  return (
    <div className="video-section-part video-container">
      <div className=" heading-for-all center-heading-line text-center Home2Blog-heading popular-heading-main">
        <h2>Discover Most Popular Events in UAE</h2>
        <span className="padding-for-para">
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </span>
      </div>
      <Slider {...sliderSettings}>
        {details.map((item, index) => (
          <div key={index} className="events-box" data-bs-toggle="modal"
          data-bs-target="#user-login">
        <div
          className="event-bg-box-img"
        >
            <Image src={item.img} alt="Date Logo" />
        </div>
        <div className="overlay-in-center">
          <div className="date-info">
            <Image src={imagelogodate} alt="Date Logo" />
             <span >{item.date}</span>
          </div>
          <div className="stars flex">
            <Image src={starts} alt="Star Rating" />
            <Image src={starts} alt="Star Rating" />
            <Image src={starts} alt="Star Rating" />
            <Image src={starts} alt="Star Rating" />
            <Image src={starts} alt="Star Rating" />
          </div>
        </div>
        <div className="event-det-box">
          <h3>{item.title}</h3>
          <h4>
            <Image src={location} alt="Location" /> <span>{item.location}</span>
          </h4>
          <hr />
          <div className="price-info">
            <span>From</span>
            <h4>{item.price}</h4>
          </div>
        </div>
      </div>
          ))}
      

        </Slider>
   


      </div>
  );
};
export default Home2VideoSection;