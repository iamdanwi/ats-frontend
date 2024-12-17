import Breadcrumb from "@/components/common/Breadcrumb";
import Footer from "@/components/footer/Footer3";
import Header from "@/components/header/Header";
import Topbar from "@/components/topbar/Topbar";
import '@/components/stylebook/Footer.css'

import React from "react";

const layout = ({ children }) => {
  return (
    <>
      <Topbar />
      <Header />
      <Breadcrumb pagename="Contact Us" pagetitle="Contact Us" />
      {children}
      <div className="hr-contact-div">
      <hr className="contact-hr-line"/>
      </div>
      <Footer />
    </>
  );
};

export default layout;
