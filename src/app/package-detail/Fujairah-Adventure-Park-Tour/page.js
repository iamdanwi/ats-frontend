

"use client"
import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import Breadcrumb from '@/components/common/Breadcrumb'
import QuantityCounter from "@/uitils/QuantityCounter";
import Lightbox from "yet-another-react-lightbox";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Topbar from "@/components/topbar/Topbar";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer3";
import '@/components/stylebook/Footer.css'
import "./package-details-page.css"
import Newslatter from "@/components/common/Newslatter";
import "./activites-breadcrum.css"
import StarRating from "@/components/common/StarRating";
import { countryCodes, customLabels, sendEmail } from "@/hooks/CommonFunctions";
import ThankYouModal from "@/components/common/ThankYouModal";
import ReactFlagsSelect from "react-flags-select";
import Slider from "react-slick";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

const Page = () => {
  const [showModal, setShowModal] = useState(false)
  const [selected, setSelected] = useState("AE");
  const sliderSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: false, // Prevents slider from pausing on hover
    pauseOnFocus: false, // Prevents slider from pausing on focus
    pauseOnDotsHover: false, // Prevents slider from pausing when dots are hovered
    centerMode: true, // Enable center mode
    centerPadding: "0px", 
    arrows: false,
    nextArrow: (
      <ArrowForwardIosIcon
        sx={{
          fontSize: 20,
          color: '#006370',
          width: '35px',
          height: '35px',
          padding: '10px',
          borderRadius: '50%',
          backgroundColor: 'white',
          marginRight: '-10px',
          cursor: 'pointer', // Ensures pointer appears on hover
          '&:hover': { backgroundColor: '#f0f0f0',color:'#006370' }, // Optional hover effect
        }}
      />
    ),
    prevArrow: (
      <ArrowBackIosNewIcon
        sx={{
          fontSize: 20,
          color: '#006370',
          width: '35px',
          height: '35px',
          padding: '10px',
          borderRadius: '50%',
          backgroundColor: 'white',
          marginLeft: '-10px',
        
          cursor: 'pointer', // Ensures pointer appears on hover
          '&:hover': { backgroundColor: '#f0f0f0',color:'#006370' }, // Optional hover effect
        }}
      />
    ),
    responsive: [

      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          centerPadding: "0px", 

        }}
  
  
    ],
  };
  const [isOpenModalVideo, setOpenModalVideo] = useState(false);
  const [isOpenimg, setOpenimg] = useState({
    openingState: false,
    openingIndex: 0,
  });
  const images = [
    {
      id: 1,
      imageBig: "/assets/img/activities/banner.png",
    },
    {
      id: 2,
      imageBig: "/assets/img/innerpage/ski-touring-02.jpg",
    },
    {
      id: 3,
      imageBig: "/assets/img/innerpage/ski-touring-03.jpg",
    },
    {
      id: 4,
      imageBig: "/assets/img/innerpage/ski-touring-04.jpg",
    },
    {
      id: 5,
      imageBig: "/assets/img/innerpage/ski-touring-05.jpg",
    },
    {
      id: 6,
      imageBig: "/assets/img/innerpage/ski-touring-06.jpg",
    },
  ];
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    countryCode: "+1", // Default country code
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  // Handler for input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const validate = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full Name is required.";
    }

    if (!formData.phone.trim() || !/^\d{7,15}$/.test(formData.phone)) {
      newErrors.phone = "Valid phone number (7-15 digits) is required.";
    }
    else if (!formData.countryCode) {
      newErrors.phone = "Country code is required.";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message cannot be empty.";
    }
    return newErrors;
  };


  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length === 0) {
      sendEmail(formData?.fullName, formData?.email, formData?.countryCode + formData?.phone, "Fujairah Adventure Park Tour With Archery, Zip Lining & Kayaking", formData?.message)
      console.log("Form submitted successfully:", formData);
      setShowModal(true)

      // Reset form or handle the successful form submission
      setFormData({ fullName: "", email: "", countryCode: "+1", phone: "", message: "" });
      setErrors({});

    } else {
      setErrors(newErrors);
    }
  };
  return (
    <>
    <Topbar/>
    <Header/>
    <Breadcrumb pagename="Package Details" pagetitle="Package Details"/>
     <div className="package-details-area mb-120">
      <div className="container"> 
        <div className="row">
        <div className="co-lg-12">
              <div className="package-img-group" style={{
                marginBottom: "35px"
              }}>
                                     <Slider {...sliderSettings}  className="package-page-img-crousel">
        
                                     <div className="col-12">
                        <div className="gallery-img-wrap">
                          <img src="/assets/img/activities/inner-banner-1.png" alt="" />
                        </div>
                      </div>
                                     <div className="col-12">
                        <div className="gallery-img-wrap">
                          <img src="/assets/img/activities/inner-banner-2.png" alt="" />
                        </div>
                      </div>
                                     <div className="col-12">
                        <div className="gallery-img-wrap">
                          <img src="/assets/img/activities/inner-banner-3.png" alt="" />
                        </div>
                      </div>



</Slider>
                <div className="row align-items-center g-3 package-page-img-crousel-on-large">
                  <div className="col-lg-9" style={{
                    marginTop: "0rem",
                    padding: "0rem"

                  }}>
                    <div className="gallery-img-wrap first-wrap-image flip-image-check" style={{
                      marginTop: "0rem",
                      padding: "0rem"
                    }}>
                      <img src="/assets/img/activities/inner-banner-1.png" alt="" />
                    </div>
                  </div>
                  <div className="col-lg-3 h-100" style={{
                    marginTop: "0rem"
                  }}>
                    <div className="row g-3 h-100 ">
                      <div className="col-12">
                        <div className="gallery-img-wrap">
                          <img src="/assets/img/activities/inner-banner-2.png" alt="" />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="gallery-img-wrap">
                          <img src="/assets/img/activities/inner-banner-3.png" alt="" />
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
        <div className="others-image-wrap d-none">
          <a href="assets/img/innerpage/ski-touring-01.jpg" data-fancybox="images"><img src="/assets/img/innerpage/ski-touring-01.jpg" alt="" /></a>   
          <a href="assets/img/innerpage/ski-touring-02.jpg" data-fancybox="images"><img src="/assets/img/innerpage/ski-touring-02.jpg" alt="" /></a>   
          <a href="assets/img/innerpage/ski-touring-03.jpg" data-fancybox="images"><img src="/assets/img/innerpage/ski-touring-03.jpg" alt="" /></a>   
          <a href="assets/img/innerpage/ski-touring-04.jpg" data-fancybox="images"><img src="/assets/img/innerpage/ski-touring-04.jpg" alt="" /></a>   
          <a href="assets/img/innerpage/ski-touring-05.jpg" data-fancybox="images"><img src="/assets/img/innerpage/ski-touring-05.jpg" alt="" /></a>   
        </div> 
        <div className="row g-xl-4 gy-5 main-package-details-div">
          <div className="col-xl-8">
    
            <h2>Fujairah Adventure Park Tour With Archery, Zip Lining & Kayaking

            </h2>
            
            <ul className="tour-info-metalist">
              <li>
                <svg width={14} height={14} viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14 7C14 8.85652 13.2625 10.637 11.9497 11.9497C10.637 13.2625 8.85652 14 7 14C5.14348 14 3.36301 13.2625 2.05025 11.9497C0.737498 10.637 0 8.85652 0 7C0 5.14348 0.737498 3.36301 2.05025 2.05025C3.36301 0.737498 5.14348 0 7 0C8.85652 0 10.637 0.737498 11.9497 2.05025C13.2625 3.36301 14 5.14348 14 7ZM7 3.0625C7 2.94647 6.95391 2.83519 6.87186 2.75314C6.78981 2.67109 6.67853 2.625 6.5625 2.625C6.44647 2.625 6.33519 2.67109 6.25314 2.75314C6.17109 2.83519 6.125 2.94647 6.125 3.0625V7.875C6.12502 7.95212 6.14543 8.02785 6.18415 8.09454C6.22288 8.16123 6.27854 8.2165 6.3455 8.25475L9.408 10.0048C9.5085 10.0591 9.62626 10.0719 9.73611 10.0406C9.84596 10.0092 9.93919 9.93611 9.99587 9.83692C10.0525 9.73774 10.0682 9.62031 10.0394 9.50975C10.0107 9.39919 9.93982 9.30426 9.842 9.24525L7 7.62125V3.0625Z">
                  </path>
                </svg>
                8 Hours
              </li>
          
            </ul>
            <p className="para-activity">Experience an exhilarating day at Fujairah Adventure Park, where you can immerse yourself in a variety of thrilling activities. From the precision of archery to the adrenaline rush of zip lining, and the tranquillity of kayaking, this tour offers something for everyone. Perfect for adventure seekers and nature lovers alike, you'll enjoy a full day of excitement and scenic beauty. Our professional guides ensure a safe and enjoyable experience, making this an unforgettable adventure.




            </p>
           
            <div className="highlight-tour mb-20">
              <h4>Highlights of the Tour</h4>
              <ul>
                <li><span className="activity-back-icon"><i className="bi bi-check" /></span>Archery



                </li>
                <li><span className="activity-back-icon"><i className="bi bi-check" /></span> Zip Lining





                </li>
                <li><span className="activity-back-icon"><i className="bi bi-check" /></span> Kayaking



                </li>
                <li><span className="activity-back-icon"><i className="bi bi-check" /></span> Axe Throwing





                </li>
                <li><span className="activity-back-icon"><i className="bi bi-check" /></span>Bag Jumping




                </li>
                <li><span className="activity-back-icon"><i className="bi bi-check" /></span>Wall Climbing





                </li>
                <li><span className="activity-back-icon"><i className="bi bi-check" /></span> Pump Track






                </li>
                <li><span className="activity-back-icon"><i className="bi bi-check" /></span> Quick Flight






                </li>
                <li><span className="activity-back-icon"><i className="bi bi-check" /></span> Scenic Photo Stops







                </li>
              </ul>
            </div>
            <h4 className="para-highlight">Good To Know </h4>
            <div className="includ-and-exclud-area mb-20 good-to-know">
              <ul>
              <li><b className="bold-activity">Booking Confirmation:</b> We will reconfirm the pick-up time a few hours before the tour starts to ensure punctuality and convenience.
              </li><br/>
    <li><b className="bold-activity">Pet Policy:</b> Please note that pets are not allowed on this tour.
    </li><br/>
    <li><b className="bold-activity">Children Policy:</b> Children below 12 years are considered children. They are under adult responsibility during the tour. A child seat is not provided.
    </li><br/>
    <li><b className="bold-activity">Luggage Policy:</b> Due to space constraints in the vehicle, large luggage cannot be accommodated. We recommend bringing only small bags or backpacks to ensure your comfort and convenience throughout the tour.
    </li><br/>
    <li><b className="bold-activity">Personal Belongings:</b> Avoid carrying expensive items. Your belongings are your responsibility. ATS is not liable for any lost items, but we will assist in locating them if lost.
    </li><br/>
    <li><b className="bold-activity">Health Considerations:</b> Pregnant women and individuals with back or neck problems should evaluate their condition before participating in this tour.
    </li><br/>
    <li><b className="bold-activity">Liability And Insurance:</b>  ATS is not responsible for any damage, loss, accidents, sickness, injury, or death that may occur during the tour. Comprehensive travel and health insurance are advised. All personal effects are solely your responsibility during the activity.




    </li><br/>
    <li><b className="bold-activity">Participation Responsibility:</b>  Ensure you are mentally and physically prepared for the activities of the tour. You are responsible for assessing your capability to participate in these activities.





    </li><br/>

    <li><b className="bold-activity">Wheelchair Accessibility:</b> This tour is wheelchair accessible. However, it is required that another person accompanying the one in the wheelchair must assist and push the wheelchair throughout the tour. Guests must supply their own wheelchair. Should you need a wheelchair supplied by us, we can arrange for one at an additional cost, which can be discussed upon enquiry. We strive to make our tours as inclusive as possible and are here to accommodate your needs to the best of our ability in the UAE.





    </li><br/>
              </ul>
           
            </div>
            <h4 className="para-highlight">Included and Excluded </h4>
            <div className="includ-and-exclud-area mb-20">
              <ul>
                <li><i className="bi bi-check-lg" /> Pick-Up And Drop-Off From Your Accommodation
                </li>
                <li><i className="bi bi-check-lg" /> Clean And Air-Cooled Vehicle</li>
                <li><i className="bi bi-check-lg" /> Fresh Mineral Water For All Participants</li>
                <li><i className="bi bi-check-lg" /> Stop For Photos At Scenic Spots Throughout The Tour</li>
                <li><i className="bi bi-check-lg" /> A Professional And Licensed Tour Guide Throughout The Tour</li>
                <li><i className="bi bi-check-lg" /> Park Activities (Archery, Axe Throwing, Kayaking, Ziplining, Bag Jumping, Wall Climbing, Pump Track, Quick Flight) For All Participants


                </li>
                
                <li><i className="bi bi-x-lg" /> Any Extra Expenses Or Services Not Mentioned (E.g Food, Beverages)
                </li>
              </ul>
           
            </div>

            <h4>Itinerary</h4>
            <div className="accordion tour-plan" id="tourPlan">
            <li><b className="bold-activity">Pick-Up From Hotel Or Accommodation:</b> Begin your journey with a convenient pick-up from your hotel or accommodation. Our comfortable, air-conditioned vehicle and friendly driver are ready to transport you to an exciting day of exploration.
            </li>

            <div className="accordion-item">
  <h2 className="accordion-header" id="headingOne">
    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      <span style={{ minWidth: "180px" }}> 1st Activity</span> Fujairah Adventure Park:
    </button>
  </h2>
  <div id="collapseOne" className="accordion-collapse collapse show show-date-check" aria-labelledby="headingOne" data-bs-parent="#tourPlan">
    <div className="accordion-body">
      <ul>
        <li>Dive into a world of adventure with activities like archery, zip lining, kayaking, and more.</li>
      </ul>
    </div>
  </div>
</div>
<div className="accordion-item">
  <h2 className="accordion-header" id="headingTwo">
    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      <span style={{ minWidth: "180px" }}> 2nd Activity</span> Scenic Photo Spot:
    </button>
  </h2>
  <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#tourPlan">
    <div className="accordion-body">
      <ul>
        <li>Capture the beauty of Fujairah with a stop at a picturesque location perfect for photos.</li>
      </ul>
    </div>
  </div>
</div>
<div className="accordion-item">
  <h2 className="accordion-header" id="headingThree">
    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      <span style={{ minWidth: "180px" }}> 3rd Activity</span> Archery Range:
    </button>
  </h2>
  <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#tourPlan">
    <div className="accordion-body">
      <ul>
        <li>Test your aim and precision at the archery range.</li>
      </ul>
    </div>
  </div>
</div>
<div className="accordion-item">
  <h2 className="accordion-header" id="headingFour">
    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
      <span style={{ minWidth: "180px" }}> 4th Activity</span> Zip Line:
    </button>
  </h2>
  <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#tourPlan">
    <div className="accordion-body">
      <ul>
        <li>Experience the thrill of soaring through the air on a zip line.</li>
      </ul>
    </div>
  </div>
</div>
<div className="accordion-item">
  <h2 className="accordion-header" id="headingFive">
    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
      <span style={{ minWidth: "180px" }}> 5th Activity</span> Kayaking Area:
    </button>
  </h2>
  <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#tourPlan">
    <div className="accordion-body">
      <ul>
        <li>Enjoy a peaceful kayaking session on calm waters.</li>
      </ul>
    </div>
  </div>
</div>
<div className="accordion-item">
  <h2 className="accordion-header" id="headingSix">
    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
      <span style={{ minWidth: "180px" }}> 6th Activity</span> Axe Throwing:
    </button>
  </h2>
  <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#tourPlan">
    <div className="accordion-body">
      <ul>
        <li>Try your hand at axe throwing, a unique and exciting activity.</li>
      </ul>
    </div>
  </div>
</div>
<div className="accordion-item">
  <h2 className="accordion-header" id="headingSeven">
    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
      <span style={{ minWidth: "180px" }}> 7th Activity</span> Bag Jumping:
    </button>
  </h2>
  <div id="collapseSeven" className="accordion-collapse collapse" aria-labelledby="headingSeven" data-bs-parent="#tourPlan">
    <div className="accordion-body">
      <ul>
        <li>Feel the rush of free-falling onto a giant airbag.</li>
      </ul>
    </div>
  </div>
</div>
<div className="accordion-item">
  <h2 className="accordion-header" id="headingEight">
    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
      <span style={{ minWidth: "180px" }}> 8th Activity</span> Wall Climbing:
    </button>
  </h2>
  <div id="collapseEight" className="accordion-collapse collapse" aria-labelledby="headingEight" data-bs-parent="#tourPlan">
    <div className="accordion-body">
      <ul>
        <li>Challenge yourself with a wall climbing session.</li>
      </ul>
    </div>
  </div>
</div>
<div className="accordion-item">
  <h2 className="accordion-header" id="headingNine">
    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
      <span style={{ minWidth: "180px" }}> 9th Activity</span> Pump Track:
    </button>
  </h2>
  <div id="collapseNine" className="accordion-collapse collapse" aria-labelledby="headingNine" data-bs-parent="#tourPlan">
    <div className="accordion-body">
      <ul>
        <li>Navigate the twists and turns of the pump track.</li>
      </ul>
    </div>
  </div>
</div>
<div className="accordion-item">
  <h2 className="accordion-header" id="headingTen">
    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTen" aria-expanded="false" aria-controls="collapseTen">
      <span style={{ minWidth: "180px" }}> 10th Activity</span> Quick Flight:
    </button>
  </h2>
  <div id="collapseTen" className="accordion-collapse collapse" aria-labelledby="headingTen" data-bs-parent="#tourPlan">
    <div className="accordion-body">
      <ul>
        <li>End your adventure with a quick flight activity.</li>
      </ul>
    </div>
  </div>
</div>
<div className="accordion-item">
  <h2 className="accordion-header" id="headingEleven">
    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEleven" aria-expanded="false" aria-controls="collapseEleven">
      <span style={{ minWidth: "180px" }}>Drop-Off</span> To Hotel Or Accommodation:
    </button>
  </h2>
  <div id="collapseEleven" className="accordion-collapse collapse" aria-labelledby="headingEleven" data-bs-parent="#tourPlan">
    <div className="accordion-body">
      <ul>
        <li>Conclude your tour with a comfortable drop-off at your hotel or accommodation, bringing an end to a day filled with memorable sights and experiences.</li>
      </ul>
    </div>
  </div>
</div>

            </div>
 
            <div className="faq-content-wrap mb-80">
                <div className="faq-content-title mb-20">
                  <h4>Frequently Asked &amp; Question</h4>
                </div>
                <div className="faq-content">
                  <div className="accordion" id="accordionTravel">
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="travelheadingOne">
                        <button className="accordion-button btn-col-pop" type="button" data-bs-toggle="collapse" data-bs-target="#travelcollapseOne" aria-expanded="true" aria-controls="travelcollapseOne" style={{

                        }}>
                          01. What services does your travel website offer?
                        </button>
                      </h2>
                      <div id="travelcollapseOne" className="accordion-collapse collapse show" aria-labelledby="travelheadingOne" data-bs-parent="#accordionTravel">
                        <div className="accordion-body">
                        Our website offers a wide range of travel services to ensure a seamless experience for our customers. These include customized tour packages tailored to individuals, families, and groups, along with hotel bookings and flight reservations. We also provide travel insurance assistance, guided tours, local sightseeing arrangements, and visa assistance for international travel. To make your journey stress-free, we offer 24/7 customer support throughout your trip.

</div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="travelheadingTwo">
                        <button className="accordion-button btn-col-pop collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#travelcollapseTwo" aria-expanded="false" aria-controls="travelcollapseTwo">
                          02. Can I modify or cancel my booking after confirmation?
                        </button>
                      </h2>
                      <div id="travelcollapseTwo" className="accordion-collapse collapse" aria-labelledby="travelheadingTwo" data-bs-parent="#accordionTravel">
                        <div className="accordion-body">
                        Yes, you can modify or cancel your booking even after confirmation. However, it is important to note that changes or cancellations are subject to the terms and conditions set by the respective service providers, such as airlines and hotels. We recommend reviewing our detailed cancellation policy
                        </div>
                      </div>
                    </div>
                 
                  </div>
                </div>
              </div>
           <div className="review-section">
            <p className="first-ppreview">There are no reviews yet.</p>
            <h3>Be the first to review “Fujairah Adventure Park Tour With Archery, Zip Lining & Kayaking
            ”</h3>
            <p>Your email address will not be published.</p>
            <div className="rating-stars-on-page">
              <div>
                <p>Overall</p>
                <StarRating totalStars={5} onRatingChange={()=>{}} />
              </div>
              <div>
                <p>Transport</p>
                <StarRating totalStars={5} onRatingChange={()=>{}} />
              </div>
              <div>
                <p>Food</p>
                <StarRating totalStars={5} onRatingChange={()=>{}} />
              </div>
              <div>
                <p>Destination</p>
                <StarRating totalStars={5} onRatingChange={()=>{}} />
              </div>
              <div>
                <p>Hospitality</p>
                <StarRating totalStars={5} onRatingChange={()=>{}} />
              
              </div>
            </div>
           </div>
           <div className="review-form"
           
           
           >
            <input placeholder="Name"/>
            <input placeholder="Email"/>
            <input placeholder="Review Title"/>
            <textarea placeholder="Describe your review"></textarea>
            <div>
              <p>recommendation: </p>
              <div className="recommendation">
                <img src="/assets/img/activities/icons/happy.svg" />
                <img src="/assets/img/activities/icons/happy-2.svg" />
                <img src="/assets/img/activities/icons/happy-3.svg" />
              </div>
            </div>
<button className="primary-btn1 two book-now-activity submit-review-buttom">SUBMIT REVIEW</button>

           </div>
        </div>
        <div className="col-xl-4">
        <div className="banner2-card  mb-30" onClick={()=>{
          window.location.href = "tel:+971529745592"
        }}>
              <img src="/assets/img/activities/tele-cal.jpg" alt="" />
             
        </div>
        <div className="booking-form-wrap">
                <h4>Book Your Tour</h4>
                <p>Reserve your ideal Room early for a hassle-free
                  trip secure comfort and convenience!</p>
                {/* <div className="nav nav-pills mb-40" role="tablist">
                <button className="nav-link show active" id="v-pills-booking-tab" data-bs-toggle="pill" data-bs-target="#v-pills-booking" type="button" role="tab" aria-controls="v-pills-booking" aria-selected="true">Online Booking</button>
                <button className="nav-link" id="v-pills-contact-tab" data-bs-toggle="pill" data-bs-target="#v-pills-contact" type="button" role="tab" aria-controls="v-pills-contact" aria-selected="false">Inquiry Form</button>
              </div> */}
                <div className="tab-content" id="v-pills-tabContent2">
                  <div className="tab-pane fade" id="v-pills-booking" role="tabpanel" aria-labelledby="v-pills-booking-tab">
                    <div className="sidebar-booking-form">
                      <form>
                        <div className="tour-date-wrap mb-50">
                          <h6>Select Your Booking Date:</h6>
                          <div className="form-inner mb-20">
                            <div className="form-group">
                              <input type="date" name="inOut" placeholder="5 Jan, 2024" />

                            </div>
                          </div>
                        </div>
                        <div className="booking-form-item-type mb-45">
                          <div className="number-input-item adults">
                            <label className="number-input-lable">Adult:<span>
                            </span><span> $60 <del>$80</del></span></label>
                            <QuantityCounter incIcon="bx bx-plus" dcrIcon="bx bx-minus" />
                          </div>
                          <div className="number-input-item children">
                            <label className="number-input-lable">Children:<span>
                            </span><span>$15</span></label>
                            <QuantityCounter incIcon="bx bx-plus" dcrIcon="bx bx-minus" />
                          </div>
                        </div>
                        <div className="booking-form-item-type">
                          <h5>Other Extra Services</h5>
                          <div className="checkbox-container">
                            <label className="check-container">Home Pickup
                              <input type="checkbox" className="services_check" name="services_list[]" defaultValue={0} />
                              <span className="checkmark" />
                              <span className="price">$10 </span>
                            </label>
                            <label className="check-container">Night Food
                              <input type="checkbox" className="services_check" name="services_list[]" defaultValue={1} />
                              <span className="checkmark" />
                              <span className="price">$15 </span>
                            </label>
                            <label className="check-container">Seaplane Fyling
                              <input type="checkbox" className="services_check" name="services_list[]" defaultValue={2} />
                              <span className="checkmark" />
                              <span className="price">$20 </span>
                            </label>
                          </div>
                        </div>
                        <div className="booking-form-item-type">
                          <div className="single-total mb-30">
                            <span>Adult</span>
                            <ul>
                              <li><strong>$195</strong> PRICE</li>
                              <li><i className="bi bi-x-lg" /></li>
                              <li><strong>02</strong> QTY</li>
                              <li><i className="bi bi-x-lg" /></li>
                              <li><strong>04</strong> DAYS</li>
                            </ul>
                            <svg xmlns="http://www.w3.org/2000/svg" width={27} height={15} viewBox="0 0 27 15">
                              <path fillRule="evenodd" clipRule="evenodd" d="M23.999 5.44668L25.6991 7.4978L23.9991 9.54878H0V10.5743H23.1491L20.0135 14.3575L20.7834 14.9956L26.7334 7.81687L26.9979 7.4978L26.7334 7.17873L20.7834 0L20.0135 0.638141L23.149 4.42114H0V5.44668H23.999Z" />
                            </svg>
                            <div className="total">$390</div>
                          </div>
                          <div className="single-total mb-30">
                            <span>Children</span>
                            <ul>
                              <li><strong>$195</strong> PRICE</li>
                              <li><i className="bi bi-x-lg" /></li>
                              <li><strong>02</strong> QTY</li>
                              <li><i className="bi bi-x-lg" /></li>
                              <li><strong>04</strong> DAYS</li>
                            </ul>
                            <svg xmlns="http://www.w3.org/2000/svg" width={27} height={15} viewBox="0 0 27 15">
                              <path fillRule="evenodd" clipRule="evenodd" d="M23.999 5.44668L25.6991 7.4978L23.9991 9.54878H0V10.5743H23.1491L20.0135 14.3575L20.7834 14.9956L26.7334 7.81687L26.9979 7.4978L26.7334 7.17873L20.7834 0L20.0135 0.638141L23.149 4.42114H0V5.44668H23.999Z" />
                            </svg>
                            <div className="total">$390</div>
                          </div>
                        </div>
                        <div className="total-price"><span>Total Price:</span> $470</div>
                        <button type="submit" className="primary-btn1 two book-now-activity">Book Now</button>
                      </form>
                    </div>
                  </div>
                  <div className="tab-pane fade active show" id="v-pills-contact" role="tabpanel" aria-labelledby="v-pills-contact-tab">
                    <div className="sidebar-booking-form">
                      <form onSubmit={handleSubmit}>
                        <div className="form-inner mb-20">
                          <label>
                            Full Name <span>*</span>
                          </label>
                          <input
                            type="text"
                            name="fullName"
                            placeholder="Enter your full name"
                            value={formData.fullName}
                            onChange={handleChange}
                          />
                          {errors.fullName && <small style={{ color: "red", marginLeft: "0.7rem", marginTop: "0.4rem" }}>{errors.fullName}</small>}
                        </div>
                        <div className="form-inner mb-20">
                          <label>
                            Email Address
                          </label>
                          <input
                            type="email"
                            name="email"
                            placeholder="Enter your email address"
                            value={formData.email}
                            onChange={handleChange}
                          />
                          {errors.email && <small style={{ color: "red", marginLeft: "0.7rem", marginTop: "0.4rem" }}>{errors.email}</small>}
                        </div>
                        <div className="form-inner mb-20">
                          <label>
                            Phone Number <span>*</span>
                          </label>
                          <div style={{ display: "flex", gap: "10px" }}>
                            <ReactFlagsSelect
                              className="phone-react-thing"
                              selected={selected}
                              showSelectedLabel={false}
                              optionsSize={17}
                              customLabels={customLabels}
                              countries={Object.keys(customLabels)}
                              placeholder="+"
                              selectedSize={24}
                              onSelect={(code) => {
                                setFormData({ ...formData, countryCode: customLabels[code].secondary })
                                setSelected(code)
                              }
                              }

                            />

                            <input
                              type="text"
                              name="phone"
                              placeholder="Enter your phone number"
                              value={formData.phone}
                              onChange={handleChange}
                              style={{ flex: 1 }}
                            />
                          </div>
                          {errors.phone && <small style={{ color: "red", marginLeft: "0.7rem", marginTop: "0.4rem" }}>{errors.phone}</small>}
                        </div>
                        <div className="form-inner mb-30">
                          <label>
                            Write Your Message <span>*</span>
                          </label>
                          <textarea
                            name="message"
                            placeholder="Write your query"
                            value={formData.message}
                            onChange={handleChange}
                          />
                          {errors.message && <small style={{ color: "red", marginLeft: "0.7rem", marginTop: "0.4rem" }}>{errors.message}</small>}
                        </div>
                        <div className="form-inner">
                          <button type="submit" className="primary-btn1 two book-now-activity">Submit Now</button>
                        </div>                      </form>
                    </div>
                  </div>

                </div>
              </div>


              
     
      </div>
      </div>
      </div>
      <React.Fragment>
        <ModalVideo
          channel="youtube"
          onClick={() => setOpenModalVideo(true)}
          isOpen={isOpenModalVideo}
          animationSpeed="350"
          videoId="r4KpWiK08vM"
          ratio="16:9"
          onClose={() => setOpenModalVideo(false)}
        />
      </React.Fragment>
      <ThankYouModal showModal={showModal} setShowModal={setShowModal}/>

      {/* <Lightbox
        className="img-fluid"
        open={isOpenimg.openingState}
        plugins={[Fullscreen]}
        index={isOpenimg.openingIndex}
        close={() => setOpenimg(false)}
        styles={{ container: { backgroundColor: "rgba(0, 0, 0, .9)" } }}
        slides={images.map(function (elem) {
          return { src: elem.imageBig };
        })}
      /> */}
     </div>
     <hr/>


    <Footer/>
    </>
  )
}

export default Page
