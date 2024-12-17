"use client"; // Add this if you're using Next.js Client Component

import React, { useRef, useState } from 'react';
import Image from 'next/image';
import image1 from '../../../public/image/service1.png';
import image2 from '../../../public/image/service2.png';
import image3 from '../../../public/image/service3.png';
import image4 from '../../../public/image/service4.jpeg';
import image5 from '../../../public/image/service5.jpeg';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import Slider from "react-slick";
import {
  Box,
  Typography,
  
  useMediaQuery,
  Modal,

} from "@mui/material";

const Home2about = () => {
  const details = [
    {
      img: image4,
      title: "Holiday Packages",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      img: image2,
      title: "flight booking",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      img: image3,
      title: "umrah",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      img: image1,
      title: "hotel booking",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      img: image5,
      title: "activities",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
  
  ];
  const sliderSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: false,
    pauseOnHover: false, // Prevents slider from pausing on hover
    pauseOnFocus: false, // Prevents slider from pausing on focus
    pauseOnDotsHover: false, // Prevents slider from pausing when dots are hovered
    centerMode: true, // Enable center mode
    centerPadding: "10px", 
    arrows: false,

    responsive: [
      {
        breakpoint: 1980,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
          infinite: true,
          centerPadding: "20px", 

        },
      },
      {
        breakpoint: 1750,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
          centerPadding: "0px", 

        },
      },
      {
        breakpoint: 1700,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
          centerPadding: "100px", 

        },
      },
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
          centerPadding: "50px", 

        },
      },
      {
        breakpoint: 1530,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
          centerPadding: "0px", 

        },
      },
      {
        breakpoint: 1450,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
          centerPadding: "-10px", 

        },
      },
      {
        breakpoint: 1350,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
          centerPadding: "-50px", 

        },
      },
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
          centerPadding: "-80px", 

        },
      },
      {
        breakpoint: 1270,
        settings: {
          slidesToShow: 5,
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
        breakpoint: 1100,
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
        breakpoint: 850,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
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
          centerPadding: "30px", 

        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          centerMode: true,
          centerPadding: "-10px", 


        },
      },
      {
        breakpoint: 390,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          centerMode: true,
          centerPadding: "0px", 


        },
      },

  
    ],
  };
  const sliderRef = useRef(null);
  const [selectedOne, setSelectOne] = useState(1)

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
      <div className="height-above">
      <div className="heading-for-all heading-for-all-with-arrow" id="arrow-check-padd">
        <div>
          <h2>With our Top Experience</h2>
          <span>Select the offer that suits you best</span>
          </div>
          <div style={{
            display:"flex",
            alignItems:"center",
            justifyContent:"center"
          }}>
            <button onClick={()=>{
goToNextSlide()
}}>    
            <ArrowBackIosNewIcon
        sx={{
          fontSize: 20,
          color: '#006370',
          width: '35px',
          height: '35px',
          padding: '10px',
          borderRadius: '50%',
          backgroundColor: 'white',
          marginLeft: '-10px',
        
          cursor: 'pointer', // Ensures pointer appears on hover
          '&:hover': { backgroundColor: '#f0f0f0',color:'#006370' }, // Optional hover effect
        }}
      />
      </button>
            <button onClick={()=>{
goToPreviousSlide()
}}>     
 <ArrowForwardIosIcon
        sx={{
          fontSize: 20,
          color: '#006370',
          width: '35px',
          height: '35px',
          padding: '10px',
          borderRadius: '50%',
          backgroundColor: 'white',
          marginRight: '-10px',
          cursor: 'pointer', // Ensures pointer appears on hover
          '&:hover': { backgroundColor: '#f0f0f0',color:'#006370' }, // Optional hover effect
        }}
      /></button>
          </div>
        </div>
        <Slider {...sliderSettings} ref={sliderRef} className="exclusive-offer-slick">
          {details.map((item, index) => (

<div
key={index}
data-bs-toggle="modal"
data-bs-target="#user-login"
className={`tour-box ${index % 2 === 0 ? "up" : "down"}`} // Staggered effect
>
<div className="tour-box-img">
  <Image src={item.img} alt={item.title} layout="fill" objectFit="cover" />
  <div className="overlay">
    <h3>{item.title}</h3>
    <p style={{
      color:"white",


    }}>{item.desc}</p>
  </div>
</div>
</div>
        
            ))}
      

        </Slider>
        {/* <div className="tour-boxes">
          {details.map((item, index) => (
            <div
              key={index}
              data-bs-toggle="modal"
              data-bs-target="#user-login"
              className={`tour-box ${index % 2 === 0 ? "up" : "down"}`} // Staggered effect
            >
              <div className="tour-box-img">
                <Image src={item.img} alt={item.title} layout="fill" objectFit="cover" />
                <div className="overlay">
                  <h3>{item.title}</h3>
                  <p style={{
                    color:"white",


                  }}>{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default Home2about;
