import Home4About from "@/components/about/Home4About";
import Home4activities from "@/components/activities/Home4activities";
import Home4Banner from "@/components/banner/Home4Banner";
import Home4Banner2 from "@/components/banner/Home4Banner2";
import Home4Banner3 from "@/components/banner/Home4Banner3";
import Home4Banner4 from "@/components/banner/Home4Banner4";
import Home4Blog from "@/components/blog/Home4Blog";
import Home4DestinationSlide from "@/components/destinationSlider/Home4DestinationSlide";
import Home4Facilities from "@/components/facilites/Home4Facilities";
import Home4Feature from "@/components/feature/Home4Feature";
import Footer3 from "@/components/footer/Footer3";
import Header4 from "@/components/header/Header4";
import Home4Team from "@/components/team/Home4Team";
import Home4Testimonail from "@/components/testimonial/Home4Testimonail";
import Home4Vissa from "@/components/visaComponents/Home4Vissa";
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
      <Header4 />
      <Home4Banner />
      <Home4DestinationSlide />
      <Home4About />
      <Home4Banner2 />
      <Home4Facilities />
      <Home4Banner3 />
      <Home4Banner4 />
      <Home4Feature />
      <Home4Vissa />
      <Home4Testimonail />
      <Home4Team />
      <Home4Blog />
      <Home4activities />
      <Footer3 />
    </>
  );
};

export default page;
