"use client";
import React, { useRef, useState } from 'react';

import Image from 'next/image';
import image1 from '../../../public/assets/img/home1/image/image-1.jpg';
import image2 from '../../../public/assets/img/home1/image/image-2.jpg';
import image3 from '../../../public/assets/img/home1/image/image-3.jpg';
import image4 from '../../../public/assets/img/home1/image/image-4.jpg';
import image5 from '../../../public/assets/img/home1/image/image-5.jpg';
import image6 from '../../../public/assets/img/home1/image/image-6.jpg';
import image7 from '../../../public/assets/img/home1/image/image-7.jpg';
import image8 from '../../../public/assets/img/home1/image/image-8.jpg';
import image9 from '../../../public/assets/img/home1/image/image-9.jpg';
import image10 from '../../../public/assets/img/home1/image/image-10.jpg';
import "./change-bar-section.css"
import Link from 'next/link';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import Slider from "react-slick";
import {
  Box,
  Typography,
  
  useMediaQuery,
  Modal,

} from "@mui/material";

const Home2Blog = () => {


  const handleRedirect = (link) => {
    if (link) {
      window.location.href = link; // Navigate to the link
    }
  };
  const [selectedOne, setSelectOne] = useState(1)
  const sliderRef = useRef(null);
  const [toChange, setToChange] = useState(true)

  const sliderSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: false,
    pauseOnHover: false, // Prevents slider from pausing on hover
    pauseOnFocus: false, // Prevents slider from pausing on focus
    pauseOnDotsHover: false, // Prevents slider from pausing when dots are hovered
    arrows: false,

    nextArrow: (
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
      />
    ),
    prevArrow: (
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
    ),
    responsive: [
      {
        breakpoint: 1350,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
  
  
    ],
    afterChange: (current) => {
      if(toChange){

        console.log(current)
        setSelectOne(current); // Update the current slide index in state
      }
    },
  };
  const data1=[
    {
      title:"Private Full Day Khor Fakkan Tour",
      image:image1,
      duration:"Personal",
      link:"package-detail/Private-Khorfakkan-Full-Day-Tour"
    },
    {
      title:"Sun-Rise Experience with Adventure",
      image:image2,
      duration:"Personal",
      link:"package-detail/Exclusive-Sun-Rise-Experience"


    },
    {
      title:"Blue Mosque, Dubai Frame, Dubai Mall",
      image:image3,
      duration:"3 days",
      link:"package-detail/Dubai-Frame-Dubai-Mall"


    },
  ]
  const data2=[
    {
      title:"Abu Dhabi Tour With Ferrari",
      image:image4,
      duration:"8 Hours",
      link:"package-detail/Dhabi-tour-With-Ferrari"
    },
    {
      title:"Abu Dhabi Tour With Heritage ",
      image:image5,
      duration:"8 Hours",
      link:"package-detail/Abu-Dhabi-Tour-With-Heritage"


    },
    {
      title:"Dubai City Tour With AYA",
      image:image6,
      duration:"8 Hours",
      link:"package-detail/Dubai-City-Tour-With-AYA"
    },
  ]
  const data3=[
    {
      title:"Dubai City Tour With Dubai ",
      image:image7,
      duration:"5 Hours",
      link:"package-detail/Dubai-City-Tour-With-Dubai"
    },
    {
      title:"Dubai Tour With Global ",
      image:image8,
      duration:"10 Hours",
      link:"package-detail/Dubai-Tour-With-Global"


    },
    {
      title:"Fujairah Adventure Park",
      image:image9,
      duration:"8 Hours",
      link:"package-detail/Fujairah-Adventure-Park-Tour"


    },
  ]
  const data4=[
    {
      title:"Desert Safari With BBQ",
      image:image10,
      duration:"7 Hours",
      link:"package-detail/Sunset-Dubai-Desert-Safari-With-BBQ"
    },

  ]
  const mergedData = [...data1, ...data2, ...data3, ...data4];

  const goToSlide = (slideIndex) => {
    sliderRef.current.slickGoTo(slideIndex); // Navigate to the desired slide
  };

  return (
    <div className="Home2Blog">
      <div className="Home2Blog-heading heading-for-all">
        <h2>Discover Our Hottest Packages</h2>
        <span className='mb-4'>Select a service that suits you best</span>
      </div>
             <Slider ref={sliderRef} {...sliderSettings}>
        {
           mergedData.map((item, index) => 
            <div className="Home2Blog-box" key={index} onClick={() => handleRedirect(item.link)} >
              <div className="image-wrapper">
                <Image
                  src={item.image}
                  alt="Luxury Staycation Tour"
                  layout="responsive"
                  objectFit="cover"
                  className="Home2Blog-image"
                
                />
                <div className="overlay-of-image">
                  <div className='content-check'>
                  <div className="overlay-content">
                    <h3>{item.title}</h3>
                    <h1>{item.duration}</h1>
                  </div>
                  <a 
                  href={item.link}
                  style={{
                     alignSelf: "self-end"
                  }}
                  className="primary-btn1 two d-xl-flex d-none home-button"><span style={{
                    fontWeight:500,
                   
                  }}>Book Now</span></a>
                  </div>
                </div>
              </div>
            </div>
           )
          }
        
      

        </Slider>

      <div className='aligning-in-center'>
      <div className='change-section-bar'>
<a className={`${selectedOne <= 3 && selectedOne >= 0 && "check-dar-active"}`} onClick={()=>{
  setToChange(false)
 goToSlide(0)
  setSelectOne(0)
}} >{" "}</a>
<a className={`${selectedOne <= 6 && selectedOne >= 4 && "check-dar-active"}`} onClick={()=>{
    setToChange(false)

 goToSlide(3)
 setSelectOne(4)}}>{" "}</a>
<a className={`${selectedOne <= 9 && selectedOne >= 7 && "check-dar-active"}`} onClick={()=>{
    setToChange(false)

 goToSlide(6)
 setSelectOne(9)}}>{" "}</a>
      </div>
      </div>
    </div>
  );
};

export default Home2Blog;
