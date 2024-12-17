"use client";
import React, { useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper";
SwiperCore.use([Autoplay, EffectFade, Navigation, Pagination]);
import box1img from "../../../public/image/image 19.png"; // Update the path if necessary
import box2img from "../../../public/image/image 19 (1).png"; // Update the path if necessary
import box3img from "../../../public/image/image 19 (2).png"; 
import Image from "next/image";


const Home3Testimonial = () => {
  const details = [
    {
      img: box1img,
      flightname: "International Flight",
      title: "Explore the world with discounted rates.",
      desc: "International flights starting @ just ₹4999",
    },
    {
      img: box1img,
      flightname: "International Flight",
      title: "Explore the world with discounted rates.",
      desc: "International flights starting @ just ₹4999",
    },
    {
      img: box1img,
      flightname: "Domestic Flight",
      title: "Explore the world with discounted rates.",
      desc: "International flights starting @ just ₹4999",
    },
    {
      img: box1img,
      flightname: "International Flight",
      title: "Explore the world with discounted rates.",
      desc: "International flights starting @ just ₹4999",
    },
  ];
  const settings = useMemo(() => {
    return {
      slidesPerView: "auto",
      speed: 2500,
      spaceBetween: 400,
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
        },
        386: {
          slidesPerView: 1,
        },
        576: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        992: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
        1400: {
          slidesPerView: 3,
        },
      },
    };
  }, []);
  return (
    <>
      <div className="home3-testimonial-section mb-120">
        <div className="row mb-50">
          <div className="col-lg-12 d-flex justify-content-center">
            <div className="section-title2 two text-center">
              <h2>Reviews by Travellers</h2>
              <p>
                Etiam ac tortor id purus commodo vulputate. Vestibulum porttitor
                erat felis and sed vehicula tortor malesuada gravida. Mauris
                volutpat enim quis.
              </p>
            </div>
          </div>
        </div>
 
      </div>
    </>
  );
};

export default Home3Testimonial;
