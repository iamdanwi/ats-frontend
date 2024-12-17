 
 "use client"
import React, { useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, EffectFade, Navigation, Pagination } from "swiper";
SwiperCore.use([ Autoplay, EffectFade, Navigation, Pagination]);

const Home5Team = () => {
     
 const settings = useMemo(()=>{
        return {
            slidesPerView: "auto",
		speed: 1500,
		spaceBetween: 25,
		// autoplay: {
		// 	delay: 2500, // Autoplay duration in milliseconds
		// 	disableOnInteraction: false,
		// },
		pagination: {
			el: ".teams-pagination",
			clickable: true,
		},

		breakpoints: {
			280: {
				slidesPerView: 1,
			},
			386: {
				slidesPerView: 1,
			},
			576: {
				slidesPerView: 2,
				spaceBetween: 15,
			},
			768: {
				slidesPerView: 2,
				spaceBetween: 15,
			},
			992: {
				slidesPerView: 3,
				spaceBetween: 15,
			},
			1200: {
				slidesPerView: 3,
				spaceBetween: 15,
			},
			1400: {
				slidesPerView: 3,
			},
		}
          }
        },[])
  return (
    <>
     <div className="home5-teams-section mb-120">
  <div className="container">
    <div className="row mb-50">
      <div className="col-lg-12">
        <div className="section-title4 text-center">
          <div className="eg-section-tag">
            <span>Our Guide</span>
          </div>
          <h2>Local Tour Guides</h2>
        </div>
      </div>
    </div>
    <div className="teams-slider-area mb-40">
      <div className="row mb-60">
        <div className="col-lg-12">
          <Swiper {...settings} className="swiper home5-teams-card-slider">
            <div className="swiper-wrapper">
              <SwiperSlide className="swiper-slide">
                <div className="teams-card2 style-3">
                  <div className="teams-img">
                    <img src="/assets/img/home3/teams-card2-img1.png" alt="" />
                    <ul className="social-list">
                      <li>
                        <a href="https://www.instagram.com/"><i className="bx bxl-instagram" /></a>
                      </li>
                      <li>
                        <a href="https://www.pinterest.com/"><i className="bx bxl-pinterest-alt" /></a>
                      </li>
                      <li>
                        <a href="https://twitter.com/"><svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-twitter-x" viewBox="0 0 16 16">
                            <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z" />
                          </svg></a>
                      </li>
                      <li>
                        <a href="https://www.facebook.com/"><i className="bx bxl-facebook" /></a>
                      </li> 
                    </ul>
                  </div>
                  <div className="teams-content">
                    <h4>Asher Samuel</h4>
                    <span>Tour Guide</span>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="teams-card2 style-3">
                  <div className="teams-img">
                    <img src="/assets/img/home3/teams-card2-img5.png" alt="" />
                    <ul className="social-list">
                      <li>
                        <a href="https://www.instagram.com/"><i className="bx bxl-instagram" /></a>
                      </li>
                      <li>
                        <a href="https://www.pinterest.com/"><i className="bx bxl-pinterest-alt" /></a>
                      </li>
                      <li>
                        <a href="https://twitter.com/"><svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-twitter-x" viewBox="0 0 16 16">
                            <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z" />
                          </svg></a>
                      </li>
                      <li>
                        <a href="https://www.facebook.com/"><i className="bx bxl-facebook" /></a>
                      </li> 
                    </ul>
                  </div>
                  <div className="teams-content">
                    <h4>Dani Alves</h4>
                    <span>Tour Guide</span>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="teams-card2 style-3">
                  <div className="teams-img">
                    <img src="/assets/img/home3/teams-card2-img3.png" alt="" />
                    <ul className="social-list">
                      <li>
                        <a href="https://www.instagram.com/"><i className="bx bxl-instagram" /></a>
                      </li>
                      <li>
                        <a href="https://www.pinterest.com/"><i className="bx bxl-pinterest-alt" /></a>
                      </li>
                      <li>
                        <a href="https://twitter.com/"><svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-twitter-x" viewBox="0 0 16 16">
                            <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z" />
                          </svg></a>
                      </li>
                      <li>
                        <a href="https://www.facebook.com/"><i className="bx bxl-facebook" /></a>
                      </li> 
                    </ul>
                  </div>
                  <div className="teams-content">
                    <h4>Lucas Mora</h4>
                    <span>Tour Guide</span>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="teams-card2 style-3">
                  <div className="teams-img">
                    <img src="/assets/img/home3/teams-card2-img4.png" alt="" />
                    <ul className="social-list">
                      <li>
                        <a href="https://www.instagram.com/"><i className="bx bxl-instagram" /></a>
                      </li>
                      <li>
                        <a href="https://www.pinterest.com/"><i className="bx bxl-pinterest-alt" /></a>
                      </li>
                      <li>
                        <a href="https://twitter.com/"><svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-twitter-x" viewBox="0 0 16 16">
                            <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z" />
                          </svg></a>
                      </li>
                      <li>
                        <a href="https://www.facebook.com/"><i className="bx bxl-facebook" /></a>
                      </li> 
                    </ul>
                  </div>
                  <div className="teams-content">
                    <h4>Mason Ezra</h4>
                    <span>Tour Guide</span>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="teams-card2 style-3">
                  <div className="teams-img">
                    <img src="/assets/img/home3/teams-card2-img2.png" alt="" />
                    <ul className="social-list">
                      <li>
                        <a href="https://www.instagram.com/"><i className="bx bxl-instagram" /></a>
                      </li>
                      <li>
                        <a href="https://www.pinterest.com/"><i className="bx bxl-pinterest-alt" /></a>
                      </li>
                      <li>
                        <a href="https://twitter.com/"><svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-twitter-x" viewBox="0 0 16 16">
                            <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z" />
                          </svg></a>
                      </li>
                      <li>
                        <a href="https://www.facebook.com/"><i className="bx bxl-facebook" /></a>
                      </li> 
                    </ul>
                  </div>
                  <div className="teams-content">
                    <h4>Ethan James</h4>
                    <span>Tour Guide</span>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="teams-card2 style-3">
                  <div className="teams-img">
                    <img src="/assets/img/home3/teams-card2-img6.png" alt="" />
                    <ul className="social-list">
                      <li>
                        <a href="https://www.instagram.com/"><i className="bx bxl-instagram" /></a>
                      </li>
                      <li>
                        <a href="https://www.pinterest.com/"><i className="bx bxl-pinterest-alt" /></a>
                      </li>
                      <li>
                        <a href="https://twitter.com/"><svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-twitter-x" viewBox="0 0 16 16">
                            <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z" />
                          </svg></a>
                      </li>
                      <li>
                        <a href="https://www.facebook.com/"><i className="bx bxl-facebook" /></a>
                      </li> 
                    </ul>
                  </div>
                  <div className="teams-content">
                    <h4>Oliver Jameson</h4>
                    <span>Tour Guide</span>
                  </div>
                </div>
              </SwiperSlide>
            </div>
          </Swiper>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-lg-12 d-flex justify-content-center">
        <div className="teams-pagination-area">
          <div className="teams-pagination" />
        </div>
      </div>
    </div>
  </div>
</div>
 
    </>
  )
}

export default Home5Team
