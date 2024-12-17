import React from "react";
import Image from "next/image"; // Ensure you're using Next.js's Image component
import imagelogodate from "../../../public/image/image 5.png";
import starts from "../../../public/image/Star 7.png";
import location from "../../../public/image/location.png";
import image1 from "../../../public/image/image (12).png";
import image2 from "../../../public/image/image (13).png";
import image3 from "../../../public/image/image (14).png";
import image4 from "../../../public/image/image (15).png";
const Home2VideoSection = () => {
  const details = [
    {
      img: image2,
      title: "Mind2mind Connected In Dubai",
      date: "25 Dec 2024",
      location: "Dubai",
      price: "AED 400.00",
    },
    {
      img: image1,
      title: "Ruki Vverh Live In Dubai",
      date: "25 Dec 2024",
      location: "Dubai",
      price: "AED 400.00",
    },
    {
      img: image2,
      title: "Ruki Vverh Live In Dubai",
      date: "25 Dec 2024",
      location: "Dubai",
      price: "AED 400.00",
    },
    {
      img: image1,
      title: "World Tennis League In Abu Dhabi",
      date: "25 Dec 2024",
      location: "Dubai",
      price: "AED 400.00",
    },
  ];
  return (
    <div className="video-section-part margintop">
      <div className="center-heading-line text-center">
        <h2>Discover Most Popular Events in UAE</h2>
        <p>
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
          ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>
      </div>
      <div className="scrollable-boxes">
        {details.map((item, index) => (
          <div key={index} className="events-box">
            <div
              className="event-bg-box-img"
            >
                <Image src={item.img} alt="Date Logo" />
            </div>
            <div className="overlay-in-center">
              <div className="date-info">
                <Image src={imagelogodate} alt="Date Logo" />
                 <span >{item.date}</span>
              </div>
              <div className="stars flex">
                <Image src={starts} alt="Star Rating" />
                <Image src={starts} alt="Star Rating" />
                <Image src={starts} alt="Star Rating" />
                <Image src={starts} alt="Star Rating" />
                <Image src={starts} alt="Star Rating" />
                <Image src={starts} alt="Star Rating" />
                <Image src={starts} alt="Star Rating" />
              </div>
            </div>
            <div className="event-det-box">
              <h3>{item.title}</h3>
              <h4>
                <Image src={location} alt="Location" /> <span>{item.location}</span>
              </h4>
              <hr />
              <div className="price-info">
                <span>From</span>
                <h4>{item.price}</h4>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Home2VideoSection;