import Home5About from "@/components/about/Home5About";
import Home5Activities from "@/components/activities/Home5Activities";
import Home5Banner from "@/components/banner/Home5Banner";
import Home5Banner2 from "@/components/banner/Home5Banner2";
import Home5Banner3 from "@/components/banner/Home5Banner3";
import Home5Blog from "@/components/blog/Home5Blog";
import Home5DestinationSlider from "@/components/destinationSlider/Home5DestinationSlider";
import Home5Facilities from "@/components/facilites/Home5Facilities";
import Footer from "@/components/footer/Footer";
import Header5 from "@/components/header/Header5";
import Home5Team from "@/components/team/Home5Team";
import Home5Testimonial from "@/components/testimonial/Home5Testimonial";
import Topbar6 from "@/components/topbar/Topbar6";
import Home5Visa from "@/components/visaComponents/Home5Visa";
import Home5WhyChoose from "@/components/whyChoose/Home5WhyChoose";
import React from "react";
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
      <Topbar6 />
      <Header5 />
      <Home5Banner />
      <Home5Activities />
      <Home5About />
      <Home5DestinationSlider />
      <Home5Facilities />
      <Home5WhyChoose />
      <Home5Banner2 />
      <Home5Testimonial />
      <Home5Visa />
      <Home5Team />
      <Home5Blog />
      <Home5Banner3 />
      <Footer style="style-2" />
    </>
  );
};

export default page;
