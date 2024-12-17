"use client";
import React, { useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper";
import Link from "next/link";
SwiperCore.use([Autoplay, EffectFade, Navigation, Pagination]);

const Home5Banner2 = () => {
  const settings = useMemo(() => {
    return {
      slidesPerView: "auto",
      speed: 1500,
      spaceBetween: 25,
      effect: "fade", // Use the fade effect
      fadeEffect: {
        crossFade: true, // Enable cross-fade transition
      },
      autoplay: {
        delay: 2500, // Autoplay duration in milliseconds
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination5",
        clickable: true,
      },
    };
  }, []);
  return (
    <>
      <div className="home5-banner2-section mb-120">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <Swiper {...settings} className="swiper home5-banner2-slider">
                <div className="swiper-wrapper">
                  <SwiperSlide className="swiper-slide">
                    <div
                      className="home5-banner2-wrapper"
                      style={{
                        backgroundImage:
                          "linear-gradient(89deg, rgba(246, 236, 226, 0.98) 40.04%, rgba(246, 236, 226, 0.90) 43%, rgba(246, 236, 226, 0.78) 46.55%, rgba(246, 236, 226, 0.69) 49.27%, rgba(246, 236, 226, 0.58) 51.76%, rgba(246, 236, 226, 0.00) 64.69%), url(assets/img/home5/home5-banner2-img1.jpg)",
                      }}
                    >
                      <div className="home5-banner2-content">
                        <span>Let’s Travel</span>
                        <h2>
                          Honeymoon Tour <br /> <strong>25% Off</strong>
                        </h2>
                        <p>
                          Whatever your summer looks like, bring yourown heat
                          with up to 35% off Lumin Brand.
                        </p>
                        <Link href="/package" className="primary-btn5">
                          <span>Book a Trip</span>
                        </Link>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div
                      className="home5-banner2-wrapper"
                      style={{
                        backgroundImage:
                          "linear-gradient(90deg, rgba(212, 235, 216, 0.98) 45.04%, rgba(212, 235, 216, 0.90) 47.27%, rgba(212, 235, 216, 0.78) 49.93%, rgba(212, 235, 216, 0.69) 51.98%, rgba(212, 235, 216, 0.58) 53.85%, rgba(212, 235, 216, 0.00) 63.58%), url(assets/img/home5/home5-banner2-img2.jpg)",
                      }}
                    >
                      <div className="home5-banner2-content">
                        <span>Let’s Travel</span>
                        <h2>
                          Refreshment Tour <br /> <strong>35% Off</strong>
                        </h2>
                        <p>
                          Whatever your summer looks like, bring yourown heat
                          with up to 35% off Lumin Brand.
                        </p>
                        <Link href="/package" className="primary-btn5">
                          <span>Book a Trip</span>
                        </Link>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div
                      className="home5-banner2-wrapper"
                      style={{
                        backgroundImage:
                          "linear-gradient(90deg, rgba(251, 226, 192, 0.98) 45.04%, rgba(251, 226, 192, 0.90) 47.27%, rgba(251, 226, 192, 0.78) 49.93%, rgba(251, 226, 192, 0.69) 51.98%, rgba(251, 226, 192, 0.58) 55.85%, rgba(251, 226, 192, 0.00) 70.58%), url(assets/img/home5/home5-banner2-img3.jpg)",
                      }}
                    >
                      <div className="home5-banner2-content">
                        <span>Let’s Travel</span>
                        <h2>
                          Family Tour <br /> <strong>35% Off</strong>
                        </h2>
                        <p>
                          Whatever your summer looks like, bring yourown heat
                          with up to 35% off Lumin Brand.
                        </p>
                        <Link href="/package" className="primary-btn5">
                          <span>Book a Trip</span>
                        </Link>
                      </div>
                    </div>
                  </SwiperSlide>
                </div>
                <div className="swiper-pagination5 pagination1" />
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home5Banner2;
