"use client"; // Ensures client-side rendering for React

import React, { useMemo } from "react";
import Image from "next/image";
import box1img from "../../../public/image/offer1.png"; // Update the path if necessary
import box2img from "../../../public/image/offer2.png"; // Update the path if necessary
import box3img from "../../../public/image/offer3.png"; // Update the path if necessary
import Slider from "react-slick";

const Home2Destinationslide = () => {
  
  const details = [
    {
      img: box1img,
      flightname: "International Flight",
      title: "Huge savings on flight with trxvl.",
      desc: "International flights starting @ just ₹4999",
    },
    {
      img: box2img,
      flightname: "International Flight",
      title: "Enjoy upto 20% off on International Hotels",
      desc: "International flights starting @ just ₹4999",
    },
    {
      img: box3img,
      flightname: "Domestic Flight",
      title: "Explore the world with discounted rates.",
      desc: "International flights starting @ just ₹4999",
    },
    {
      img: box2img,
      flightname: "International Flight",
      title: "Explore the world with discounted rates.",
      desc: "International flights starting @ just ₹4999",
    },
    {
      img: box2img,
      flightname: "International Flight",
      title: "Explore the world with discounted rates.",
      desc: "International flights starting @ just ₹4999",
    },
    {
      img: box2img,
      flightname: "International Flight",
      title: "Explore the world with discounted rates.",
      desc: "International flights starting @ just ₹4999",
    },
    {
      img: box2img,
      flightname: "International Flight",
      title: "Explore the world with discounted rates.",
      desc: "International flights starting @ just ₹4999",
    },
  ];
  const settings = useMemo(() => {
    return {
      speed: 2500,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination5",
        clickable: true,
      },

      breakpoints: {
        280: {
          slidesPerView: 1,
          spaceBetween: 100,

        },
        386: {
          slidesPerView: 1,
          spaceBetween: 40,

        },
        400: {
          slidesPerView: 1,
          spaceBetween: 30,
        },
        534: {
          slidesPerView: 2,
          spaceBetween: 280,
        },
        576: {
          slidesPerView: 2,
          spaceBetween: 280,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 300,
        },
        992: {
          slidesPerView: 2,
          spaceBetween: 330,
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 650,
        },
        1300: {
          slidesPerView: 3,
          spaceBetween: 550,
        },
          1400: {
            slidesPerView: 3,
            spaceBetween: 430,


          },
          1600: {
            slidesPerView: 3,
            spaceBetween: 300,


          },
          1700: {
            slidesPerView: 3,
            spaceBetween: 130,

          },
          1900: {
            slidesPerView: 4,
            spaceBetween: 510,

          },
          2000: {
            slidesPerView: 4,
            spaceBetween: 330,

          },
          2200: {
            slidesPerView: 4,
            spaceBetween: 250,

          },
          2400: {
            slidesPerView: 4,
            spaceBetween: 200,

          },
      },
    };
  }, []);
  const sliderSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    pauseOnHover: false, // Prevents slider from pausing on hover
    pauseOnFocus: false, // Prevents slider from pausing on focus
    pauseOnDotsHover: false, // Prevents slider from pausing when dots are hovered
    centerMode: true, // Enable center mode
    centerPadding: "40px", 
    arrows: false,

    responsive: [
      {
        breakpoint: 1980,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          centerPadding: "0px", 

        },
      },
      {
        breakpoint: 1836,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          centerPadding: "250px", 

        },
      },
      {
        breakpoint: 1750,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          centerPadding: "220px", 

        },
      },
      {
        breakpoint: 1700,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          centerPadding: "220px", 

        },
      },
      {
        breakpoint: 1690,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          centerPadding: "180px", 

        },
      },
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          centerPadding: "140px", 

        },
      },
      {
        breakpoint: 1530,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          centerPadding: "100px", 

        },
      },
      {
        breakpoint: 1450,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          centerPadding: "70px", 

        },
      },
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          centerPadding: "30px", 

        },
      },
      {
        breakpoint: 1350,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          centerPadding: "20px", 

        },
      },
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          centerPadding: "0px", 

        },
      },
      {
        breakpoint: 1270,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          centerPadding: "-20px", 

        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          centerPadding: "-50px", 

        },
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          centerPadding: "-90px", 

        },
      },
      {
        breakpoint: 1040,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          centerPadding: "-90px", 

        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          centerPadding: "-90px", 

        },
      },
      {
        breakpoint: 966,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          centerPadding: "-120px", 

        },
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          centerPadding: "-120px", 

        },
      },
      {
        breakpoint: 798,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          centerPadding: "-130px", 

        },
      },
      {
        breakpoint: 772,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          centerPadding: "-80px", 

        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          centerPadding: "-110px", 

        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          centerPadding: "-90px", 

        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          centerPadding: "-110px", 

        },
      },
  
      {
        breakpoint: 556,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          centerPadding: "60px", 

        },
      },
      {
        breakpoint: 515,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          centerMode: true,
          centerPadding: "40px", 

        },
      },
      {
        breakpoint: 478,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          centerMode: true,
          centerPadding: "0px", 


        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          centerMode: true,
          centerPadding: "-40px", 


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

  return (
    <div className="margintop checkmail exlusive-top-main" >
  <div className="heading-for-all">
  <h2>Exclusive Offers</h2>
  <span>Select the offer that suits you best</span>
  </div>
  <div className="testimonial-card-slider-area">
    
                     <Slider {...sliderSettings} className="exclusive-offer-slick">
        
                     {details.map((detail, index) => (
                
                <div className="swiper-slide">
           <div className="exclusive-deal row">
                <div className="div-image-excluse col-6">
                  <Image src={detail.img} alt="" />
                </div>

                <div className="≥≥≥≥. col-6">
                  <p className="upper-head">{detail.flightname}</p>
                  <h3 className="medium-head">{detail.title}</h3>
                  <p className="lower-head">{detail.desc}</p>
                  <button className="primary-btn1 two d-xl-flex d-none home-button book-now-thrill" data-bs-toggle="modal"
            data-bs-target="#user-login">Book Now</button>
                </div>
           </div>
                </div>
                )
              )}
   
      

        </Slider>
            
             
         
           
       
        </div>
    </div>
  );
};

export default Home2Destinationslide;
