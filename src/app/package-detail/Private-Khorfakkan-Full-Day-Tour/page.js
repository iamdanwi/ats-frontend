

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
  const [isOpenModalVideo, setOpenModalVideo] = useState(false);
  const [selected, setSelected] = useState("AE");

  const [isOpenimg, setOpenimg] = useState({
    openingState: false,
    openingIndex: 0,
  });
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
      sendEmail(formData?.fullName, formData?.email, formData?.countryCode + formData?.phone, "Private Full Day Khor Fakkan Tour", formData?.message)
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
      <Topbar />
      <Header />
      <Breadcrumb pagename="Package Details" pagetitle="Package Details" />
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

              <h2>Private Full Day Khor Fakkan Tour</h2>
             
              <p className="para-activity">This Khorfakkan tour offers a mix of outdoor adventure, Heritage, cultural exploration, and relaxation, allowing you to experience the best of Khor Fakkan in a single day.</p>

              <div className="highlight-tour mb-20">
                <h4>Highlights of the Tour</h4>
                <ul>
                  <li><span className="activity-back-icon"><i className="bi bi-check" /></span> Visit to Sheikh Zayed Grand Mosque</li>
                  <li><span className="activity-back-icon"><i className="bi bi-check" /></span> Visit to Fujairah Museum</li>
                  <li><span className="activity-back-icon"><i className="bi bi-check" /></span> Khor Fakkan Waterfall</li>
                  <li><span className="activity-back-icon"><i className="bi bi-check" /></span> Al Suhub Rest area</li>
                  <li><span className="activity-back-icon"><i className="bi bi-check" /></span> Dibba Local Souk Market</li>
                </ul>
              </div>
              <h4 className="para-highlight">Full Description </h4>
            <div className="includ-and-exclud-area mb-20 good-to-know">
              <ul>
              <li>Let's start with the convenience of being picked up directly from your hotel or chosen location. Settle into an air-conditioned vehicle as you prepare to discover the Khorfakkan city of the UAE. Your initial destination is the breathtaking Sheikh Zayed Grand Mosque Fujairah.
              </li>
    <br/>

    <li><b className="bold-activity">Sheikh Zayed Grand Mosque Fujairah:</b> An architectural masterpiece known for its stunning design and intricate details. You'll have the opportunity to admire the mosque's grandeur and learn about Islamic traditions and culture. Beyond its religious significance, the Sheikh Zayed Mosque in Fujairah serves as a cultural hub for the community. It hosts various events, educational programs, and exhibitions, promoting interfaith dialogue and cultural understanding.
    </li>
    <br/>

    <li><b className="bold-activity">Fujairah Museum:</b> Fujairah Museum exhibits the cultural and traditional history of the local people and the land. With unique spaces designated for antiquities and a dedicated space for heritage pieces, the museum gives visitors a closer look at rock art found in the region and ancient weapons, tools and artefacts discovered from four main sites. Throughout the tour, knowledgeable guides provide fascinating insights and anecdotes about past, present, and future.
    </li>
    <br/>

    <li><b className="bold-activity">Fujairah Fort:</b> Fujairah Fort, one of the oldest and largest forts in the UAE, dates back to the 16th century. This historic fortress, built from mud, rock, and gypsum, served as a defensive stronghold and a residence for the ruling family. Located on a hill, it offers panoramic views of the surrounding area. The fort's distinctive architecture, with its round and square towers, highlights its strategic importance. Today, Fujairah Fort stands as a testament to the region's rich history, attracting visitors keen to explore its past and the nearby heritage village.
    </li>
    <br/>

    <li><b className="bold-activity">Khorfakkan Waterfalls:</b> Beside the amphitheater stands a majestic waterfall, soaring an impressive 45 meters in height. Crafted from natural rock formations, this breathtaking cascade, though man-made, retains an organic allure. Particularly enchanting during the night, the waterfall is often adorned with illuminations, adding to its mesmerizing charm.
    </li>
    <br/>

    <li><b className="bold-activity">Al Suhub:</b> The highest point in Khorfakkan offers a charming panoramic view of the city. A unique way to explore Khorfakkan's mountains, Cloud lounge is a recently built mountain-side rest stop that lies 600 meters above sea level, offering panoramic views across Khorfakkan.
    </li>
    <br/>

    <li><b className="bold-activity">Dibba Market:</b> Dibba Market retains a traditional souk atmosphere, with bustling alleyways filled with vendors selling a variety of goods. Visitors can explore stalls offering everything from spices and textiles to handicrafts and souvenirs.
    </li>
    <br/>
    <li><b className="bold-activity">Drop Off:</b> Whether exploring the opulent cityscape, immersing oneself in the rich history and traditions, or marveling at the architectural marvels, Khorfakkan tour offers an unforgettable experience that blends luxury, heritage, and forward-thinking vision.
    </li>
              </ul>
           
            </div>
              <h4 className="para-highlight">Included and Excluded </h4>
              <div className="includ-and-exclud-area mb-20">
                <ul>
                  <li><i className="bi bi-check-lg" /> Pick-Up And Drop-Off from Your Accommodation                </li>
                  <li><i className="bi bi-check-lg" /> Clean And Air-Cooled Vehicle</li>
                  <li><i className="bi bi-check-lg" /> A Professional and Licensed Tour Guide Throughout the Tour</li>
                  <li><i className="bi bi-check-lg" /> Fresh Mineral Water</li>
                  <li><i className="bi bi-check-lg" /> Stop For Photos at Scenic Spots Throughout the Tour</li>
                  <li><i className="bi bi-check-lg" /> Sheikh Zayed Grand Mosque Fujairah Entry Admission                </li>
                  <li><i className="bi bi-check-lg" /> Fujairah Museum Entry Admission                </li>
                  <li><i className="bi bi-check-lg" /> Khorfakkan Waterfalls
                  </li>
                  <li><i className="bi bi-check-lg" /> Al Suhub Mountain
                  </li>
                  <li><i className="bi bi-check-lg" /> Dibba Local Souq
                  </li>
                  <li><i className="bi bi-check-lg" /> Any Extra Expenses or Services Not Mentioned (E.g. Food, Beverages)

                  </li>
                </ul>

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
                <h3>Be the first to review “Private Full Day Khor Fakkan Tour”</h3>
                <p>Your email address will not be published.</p>
                <div className="rating-stars-on-page">
                  <div>
                    <p>Overall</p>
                    <StarRating totalStars={5} onRatingChange={() => { }} />
                  </div>
                  <div>
                    <p>Transport</p>
                    <StarRating totalStars={5} onRatingChange={() => { }} />
                  </div>
                  <div>
                    <p>Food</p>
                    <StarRating totalStars={5} onRatingChange={() => { }} />
                  </div>
                  <div>
                    <p>Destination</p>
                    <StarRating totalStars={5} onRatingChange={() => { }} />
                  </div>
                  <div>
                    <p>Hospitality</p>
                    <StarRating totalStars={5} onRatingChange={() => { }} />

                  </div>
                </div>
              </div>
              <div className="review-form"


              >
                <input placeholder="Name" />
                <input placeholder="Email" />
                <input placeholder="Review Title" />
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
      <hr />


      <Footer />
    </>
  )
}

export default Page
