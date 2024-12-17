import Home6About from "@/components/about/Home6About";
import Home6Activities from "@/components/activities/Home6Activities";
import Banner6 from "@/components/banner/Banner6";
import Home6Banner2 from "@/components/banner/Home6Banner2";
import Home6Blog from "@/components/blog/Home6Blog";
import Home6Destinaiton from "@/components/destination/Home6Destinaiton";
import Home6DestinationSlide from "@/components/destinationSlider/Home6DestinationSlide";
import Home6Feature from "@/components/feature/Home6Feature";
import Footer from "@/components/footer/Footer";
import Header6 from "@/components/header/Header6";
import Home6Team from "@/components/team/Home6Team";
import Home6Testimonial from "@/components/testimonial/Home6Testimonial";
import Home6TourPackage from "@/components/tourPackage/Home6TourPackage";
import Home6Visa from "@/components/visaComponents/Home6Visa";
export const metadata = {
  title: "ATS - tour & travel",
  description:
    "ATS is a Tour and Travel Agency",
  icons: {
    icon: "/assets/img/sm-logo.svg",
  },
};

const Home6 = () => {
  return (
    <>
      <Header6 />
      <Banner6 />
      <Home6DestinationSlide />
      <Home6Destinaiton />
      <Home6About />
      <Home6TourPackage />
      <Home6Activities />
      <Home6Banner2 />
      <Home6Feature />
      <Home6Visa />
      <Home6Blog />
      <Home6Testimonial />
      <Home6Team />
      <Footer style="style-4" />
    </>
  );
};

export default Home6;
