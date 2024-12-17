import Newslatter from "@/components/common/Newslatter";
import Footer from "@/components/footer/Footer3";
import Header from "@/components/header/Header";
import Topbar from "@/components/topbar/Topbar";
import React from "react";
import '@/components/stylebook/Footer.css'

export const metadata = {
  title: "ATS - tour & travel",
  description:
    "ATS is a Tour and Travel Agency",
  icons: {
    icon: "/assets/img/sm-logo.svg",
  },
};

const layout = ({ children }) => {
  return (
    <>
      <Topbar />
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default layout;
