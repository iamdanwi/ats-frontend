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
import '../app/index2/style.css'

import '../components/stylebook/Home.css'
import '../components/stylebook/Exclusive.css'
import '../components/stylebook/Footer.css'
import '../components/stylebook/Comments.css'
import '../components/stylebook/Videos.css'
import '../components/stylebook/AboutSame.css'
import '../components/stylebook/Home2Blog.css'
import '../components/stylebook/home/Header.css'
import '../components/stylebook/home/Banner.css'
import '../components/stylebook/home/about.css'
import '../components/stylebook/home/countrydestination.css'
import '../components/stylebook/home/videocenter.css'
import '../components/stylebook/home/whychooseus.css'
import '../components/stylebook/home/thrillSection.css'
import '../components/stylebook/home/packages.css'
import '../components/stylebook/home/mostPopular.css'
import '../components/stylebook/home/testimonial.css'
import '../components/stylebook/home/activities.css'
import Header6 from "@/components/header/Header6";
import HomeBannerSlide from "@/components/destinationSlider/HomeBannerSlide";
import Home3Testimonial from "@/components/testimonial/Home3Testimonial";
import ExploreCities from "@/components/destinationSlider/ExploreCitites";

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
      {/* <div style={{
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        flexDirection:"column",
      }}> */}
<Home2ThrillingTour />
     <Home2About />
  <Home2Destinationslide />
      <HomeBannerSlide />
     <Home2Activities /> 
       {/* <div style={{
        alignSelf:"normal",
        justifySelf:"normal"
       }}> */}
  <ExploreCities />  
     {/* </div> */}
      <Home2VideoSection/>
       <Home2WhyChoose /> 

        {/* </div> */}
          <hr/>

    <Footer/> 
    </>
  );
};

export default page;

