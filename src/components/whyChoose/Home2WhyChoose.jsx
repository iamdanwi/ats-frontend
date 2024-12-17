"use client"; // Ensures client-side rendering for React
import React from 'react';
import Image from 'next/image';
import starimg from '../../../public/image/Star 7.png';
import logoimg from '../../../public/image/image 8.png';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import Slider from "react-slick";

const Home2WhyChoose = () => {
  const userdetails = [
    {
      img: logoimg,
      starimg: starimg,
      name: 'Mark Daniel',
      comments: '“Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.”',
      date: new Date().toLocaleDateString(),
    },
    {
      img: logoimg,
      starimg: starimg,
      name: 'Jane Smith',
      comments: '“Great experience, highly recommend for everyone!”',
      date: new Date().toLocaleDateString(),
    },
    {
      img: logoimg,
      starimg: starimg,
      name: 'John Doe',
      comments: '“Memorable journey with top-notch services!”',
      date: new Date().toLocaleDateString(),
    }
  ];
  const sliderSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: false, // Prevents slider from pausing on hover
    pauseOnFocus: false, // Prevents slider from pausing on focus
    pauseOnDotsHover: false, // Prevents slider from pausing when dots are hovered
    arrows: false,

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
          centerMode: true, // Enables centering
          centerPadding: '0', // Removes side padding
          className: 'center-slide', // Add custom class for styling
        },
      },
  
  
    ],
  };
  
  return (
    <div className="banner-testimonials-check row" >
      <div className="heading-for-all banner-testimonials-check-box1 col-4">
        <h2>What our <br/>Travelers are Saying</h2>
        <span>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
      </div>
      <div className="footer-comments-boxes col-8">
        <Slider {...sliderSettings}>
        {userdetails.map((item, index) => (
            <div className="footer-comment-box" key={index} >
              <div className="footer-comment-box-header">
              
           <div>
           <div className="footer-comment-box-stars">
                  <Image src={item.starimg} alt="Star Rating" width={20} height={20} />
                  <Image src={item.starimg} alt="Star Rating" width={20} height={20} />
                  <Image src={item.starimg} alt="Star Rating" width={20} height={20} />
                  <Image src={item.starimg} alt="Star Rating" width={20} height={20} />
                  <Image src={item.starimg} alt="Star Rating" width={20} height={20} />
                </div>
              <br />
                  <h3>{item.name}</h3>

           </div>
              <div className="footer-comment-box-details">
                  <Image src={item.img} alt="User Logo" width={50} height={50} />
              </div>
                </div>
              <p className="footer-comment-box-comment">{item.comments}</p>
              <p className="footer-comment-box-date">{"5 Days Ago"}</p>
            </div>
          ))}
      

        </Slider>
        
      </div>
    </div>
  );
};

export default Home2WhyChoose;
