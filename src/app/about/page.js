import Breadcrumb from "@/components/common/Breadcrumb";
import Newslatter from "@/components/common/Newslatter";
import Footer from "@/components/footer/Footer3";
import Header from "@/components/header/Header";
import Topbar from "@/components/topbar/Topbar";
import Home2Activities from "@/components/activities/Home2Activities";
import Home2Team from "@/components/team/Home2Team";
import Home2Blog from "@/components/blog/Home2Blog";
import Home2WhyChoose from "@/components/whyChoose/Home2WhyChoose";
import Home2About from "@/components/about/Home2About";
import AboutTop from "@/components/about/AboutTop";
import AboutFeature from "@/components/about/AboutFeature";
import AboutActivities from "@/components/about/AboutActivities";
import AboutTeam from "@/components/about/AboutTeam";
import AboutBlog from "@/components/about/AboutBlog";
import "@/components/stylebook/Footer.css";
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
      <Topbar />
      <Header />
      <Breadcrumb pagename="About Us" pagetitle="About Us" />
      <AboutTop/>
      <AboutFeature/>
      <AboutActivities/>
      <AboutTeam/>
      <AboutBlog/>
      {/* <Home2About />
      <Home2WhyChoose />
      <Home2Activities />
      <Home2Team />
      <Home2Blog />
      <Newslatter /> */}
      <Footer />
    </>
  );
};

export default page;
