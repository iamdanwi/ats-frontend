import Newslatter from "@/components/common/Newslatter";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import Topbar from "@/components/topbar/Topbar";
import React from "react";

const layout = ({ children }) => {
  return (
    <>
      <Topbar />
      <Header />
      {children}
      <Newslatter />
      <Footer />
    </>
  );
};

export default layout;
