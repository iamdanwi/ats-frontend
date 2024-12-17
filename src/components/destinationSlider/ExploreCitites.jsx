"use client"; // Add this if you're using Next.js Client Component

import React, { useRef, useState } from 'react';
import Image from 'next/image';
import image1 from '../../../public/image/emigated/img-1.jpg';
import image2 from '../../../public/image/emigated/img-2.jpg';
import image3 from '../../../public/image/emigated/img-3.jpg';
import image4 from '../../../public/image/emigated/img-4.jpg';
import image5 from '../../../public/image/emigated/img-5.jpg';
import image6 from '../../../public/image/emigated/img-6.jpg';
import image7 from '../../../public/image/emigated/img-7.jpg';

import leaf from '../../../public/image/leaf.svg';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import Slider from "react-slick";

const ExploreCities = () => {
  const details = [
    {
      img: image1,
      title: "Abu Dhabi",
      desc: "Abu Dhabi is the capital of the UAE, known for its modern architecture and cultural landmarks.",
    },
    {
      img: image2,
      title: "Dubai",
      desc: "Dubai is famous for its futuristic skyline, luxurious shopping, and vibrant nightlife scene.",
    },
    {
      img: image3,
      title: "Sharjah",
      desc: "Sharjah is known for its cultural and historical attractions, museums, and art galleries.",
    },
    {
      img: image4,
      title: "Ajman",
      desc: "Ajman is the smallest emirate, known for its beautiful beaches and quiet lifestyle.",
    },
    {
      img: image5,
      title: "Umm Al-Quwain",
      desc: "Umm Al-Quwain is known for its peaceful environment, beaches, and the famous Dreamland Aqua Park.",
    },
    {
      img: image6,
      title: "Fujairah",
      desc: "Fujairah is the only emirate located on the east coast of the UAE, famous for its beaches and mountains.",
    },
    {
      img: image7,
      title: "Ras Al Khaimah",
      desc: "Ras Al Khaimah is known for its natural beauty, mountains, and outdoor adventure activities.",
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
          centerPadding: "30px", 


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
      <div className="country-top countries-conatiner">
        <img className="leaf-img" src={"assets/img/leaf.svg"}/>
   
        <div className="heading-for-all heading-for-all-with-arrow">
        <div >
          <h2>Top Cities to Visit</h2>
          <span>Uncover secret wonders and celebrated attractions in top travel spots worldwide - your next escapade awaits!</span>
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

    
        <Slider {...sliderSettings} ref={sliderRef}>
        {details.map((item, index) => (
            <div
            data-bs-toggle="modal"
              data-bs-target="#user-login"
              key={index}
              className={`tour-box ${index % 2 === 0 ? "up" : "down-box" } country-check-box`} 
            >
              <div className="country-box-img">
                <Image src={item.img} alt={item.title} layout="fill" objectFit="cover" />
                <div className="overlay">
                  <h3>{item.title}</h3>
                  <p style={{
                    color:"white"
                  }}>{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
      

        </Slider>

      </div>
    </div>
  );
};

export default ExploreCities;
