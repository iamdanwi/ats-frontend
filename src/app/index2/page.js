import Home2About from "@/components/about/Home2About";
import Home2Activities from "@/components/activities/Home2Activities";
import Home2Banner from "@/components/banner/Home2Banner";
import Home2Banner2 from "@/components/banner/Home2Banner2";
import Home2Blog from "@/components/blog/Home2Blog";
import Home2Destinationslide from "@/components/destinationSlider/Home2Destinationslide";
import Footer from "@/components/footer/Footer3";
import Header2 from "@/components/header/Header2";
import Home2Team from "@/components/team/Home2Team";
import Home2Testimonial from "@/components/testimonial/Home2Testimonial";
import Home2ThrillingTour from "@/components/tourPackage/Home2ThrillingTour";
import Home2VideoSection from "@/components/videoSection/Home2VideoSection";
import Home2WhyChoose from "@/components/whyChoose/Home2WhyChoose";
import React from "react";
import '../../components/stylebook/Home.css'

import '../../components/stylebook/Exclusive.css'
import '../../components/stylebook/Footer.css'
import '../../components/stylebook/Comments.css'
import '../../components/stylebook/Videos.css'
import '../../components/stylebook/AboutSame.css'
import '../../components/stylebook/Home2Blog.css'
import './style.css'
import Header6 from "@/components/header/Header6";
import HomeBannerSlide from "@/components/destinationSlider/HomeBannerSlide";
export const metadata = {
  title: "ATS - tour & travel",
  description:
    "ATS is a Tour and Travel Agency",
  icons: {
    icon: "/assets/img/sm-logo.svg",
  },
};

const page = () => {
  return (
    <>
      <Header6 />
      <Home2Banner />
      
      <Home2ThrillingTour />


      <Home2About />
      <Home2Destinationslide />
      <HomeBannerSlide/>




      <Home2Activities />
      <Home2VideoSection/>
      <Home2WhyChoose />
      {/* <Home2Banner2 /> */}
      <Footer/>
    </>
  );
};

export default page;

