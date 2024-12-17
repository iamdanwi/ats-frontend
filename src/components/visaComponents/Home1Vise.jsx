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

const Home1Vise = () => {
  const settings = useMemo(() => {
    return {
      slidesPerView: "auto",
      speed: 1500,
      spaceBetween: 25,
      navigation: {
        nextEl: ".package-card2-next",
        prevEl: ".package-card2-prev",
      },

      breakpoints: {
        280: {
          slidesPerView: 1,
        },
        386: {
          slidesPerView: 1,
        },
        576: {
          slidesPerView: 1,
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
      },
    };
  }, []);
  return (
    <>
      <div className="visa-section mb-120">
        <img
          src="/assets/img/home1/section-vector2.png"
          alt=""
          className="section-vector2"
        />
        <div className="container">
          <div className="row">
            <div className="col-lg-12 d-flex align-items-center justify-content-between flex-wrap gap-3 mb-60">
              <div className="section-title">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={15}
                    height={16}
                    viewBox="0 0 15 16"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M1.92556 7.69046C2.35744 7.63298 2.78906 7.57563 3.21925 7.51077C4.14925 7.37065 5.08588 7.29138 6.01763 7.21249L6.01888 7.21243C6.15888 7.20055 6.29875 7.18874 6.43844 7.17668C7.50663 6.968 8.58732 6.89083 9.66644 6.94628C10.7733 7.06837 11.8592 7.41421 12.8857 7.97163L12.8857 8.23655C11.8592 8.79397 10.7733 9.13981 9.66644 9.26191C8.58732 9.31735 7.50663 9.24018 6.43844 9.03151C5.36831 8.93932 4.29813 8.82412 3.21925 8.69742C2.14031 8.57065 1.07012 8.42092 -6.78702e-07 8.23655L-7.01862e-07 7.97163C0.639938 7.86135 1.28306 7.77588 1.92556 7.69046ZM10.7633 15.8502C10.9332 15.4596 11.12 15.0855 11.3061 14.7127C11.389 14.5468 11.4717 14.3811 11.5527 14.2144C11.8159 13.6729 12.1141 13.1545 12.4299 12.6477C12.5448 12.4632 12.64 12.2604 12.7336 12.061C12.8972 11.7124 13.056 11.3741 13.3071 11.1616C13.7816 10.7768 14.3283 10.5734 14.886 10.574L15 10.7353C14.9945 11.4677 14.8235 12.1813 14.5088 12.7859C14.3311 13.1802 14.0336 13.4059 13.7358 13.6317C13.6073 13.7292 13.4787 13.8268 13.3597 13.9379C12.965 14.3066 12.5615 14.6637 12.1492 15.0093C11.7369 15.3549 11.3159 15.689 10.8685 16L10.7633 15.8502ZM11.7543 0.665536C11.4882 0.436859 11.2226 0.208798 10.9388 -1.5523e-06L10.816 0.149784C11.0528 0.725784 11.3072 1.27877 11.5703 1.82018C11.8335 2.3616 12.1142 2.89157 12.3949 3.40997C12.4795 3.56628 12.5538 3.73514 12.628 3.90394C12.8 4.29501 12.9718 4.68572 13.2721 4.91908C13.7312 5.33563 14.2754 5.56049 14.8334 5.56418L14.9562 5.4144C14.9651 4.68055 14.8095 3.95951 14.5089 3.3408C14.3471 3.01108 14.0894 2.80252 13.824 2.58763C13.6722 2.46474 13.5178 2.33975 13.3773 2.1888C12.9914 1.77409 12.6142 1.3824 12.1931 1.0368C12.0446 0.91489 11.8994 0.790152 11.7543 0.665536Z"
                    />
                  </svg>
                  Visa Services
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={15}
                    height={16}
                    viewBox="0 0 15 16"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M13.0744 8.30954C12.6426 8.36702 12.2109 8.42437 11.7807 8.48923C10.8507 8.62935 9.91412 8.70862 8.98237 8.78751L8.98112 8.78757C8.84112 8.79945 8.70125 8.81126 8.56156 8.82332C7.49337 9.032 6.41268 9.10917 5.33356 9.05372C4.22669 8.93163 3.14081 8.58578 2.11432 8.02837V7.76345C3.14081 7.20603 4.22669 6.86018 5.33356 6.73809C6.41268 6.68265 7.49337 6.75982 8.56156 6.96849C9.63169 7.06068 10.7019 7.17588 11.7807 7.30259C12.8597 7.42935 13.9299 7.57908 15 7.76345V8.02837C14.3601 8.13865 13.7169 8.22412 13.0744 8.30954ZM4.23673 0.14976C4.06677 0.540388 3.88 0.914468 3.69388 1.28726C3.61104 1.45317 3.52831 1.61887 3.44728 1.78561C3.18413 2.32705 2.88589 2.84546 2.57011 3.35234C2.45519 3.5368 2.36002 3.73958 2.26642 3.939C2.10282 4.28757 1.94402 4.62593 1.69294 4.83843C1.21844 5.2232 0.671682 5.42665 0.114031 5.42597L0 5.26468C0.00551875 4.53235 0.176481 3.81866 0.491219 3.2141C0.6689 2.81982 0.966407 2.59414 1.26418 2.36828C1.39271 2.27078 1.52129 2.17324 1.64031 2.06209C2.03504 1.69345 2.43853 1.33633 2.8508 0.990726C3.26307 0.645126 3.68411 0.31104 4.13147 0L4.23673 0.14976ZM3.24568 15.3345C3.51184 15.5631 3.77735 15.7912 4.06123 16L4.18404 15.8502C3.9472 15.2742 3.69281 14.7212 3.42966 14.1798C3.16651 13.6384 2.88581 13.1084 2.60511 12.59C2.52048 12.4337 2.44621 12.2649 2.37198 12.0961C2.19999 11.705 2.02816 11.3143 1.72794 11.0809C1.26879 10.6644 0.7246 10.4395 0.166563 10.4358L0.0437562 10.5856C0.0348937 11.3194 0.190456 12.0405 0.491113 12.6592C0.652919 12.9889 0.910556 13.1975 1.17597 13.4124C1.32782 13.5353 1.48222 13.6602 1.62268 13.8112C2.00863 14.2259 2.38582 14.6176 2.80686 14.9632C2.95538 15.0851 3.10063 15.2098 3.24568 15.3345Z"
                    />
                  </svg>
                </span>
                <h2>Visa Processing</h2>
              </div>
              <div className="slider-btn-grp2">
                <div className="slider-btn package-card2-prev">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={9}
                    height={17}
                    viewBox="0 0 9 17"
                  >
                    <path d="M8.83399 0.281832L8.72217 0.16683L0.500652 8.50016L8.72217 16.8335L8.83398 16.7185L8.83398 13.0602L4.33681 8.50016L8.83399 3.94016L8.83399 0.281832Z" />
                  </svg>
                </div>
                <div className="slider-btn package-card2-next">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={9}
                    height={17}
                    viewBox="0 0 9 17"
                    fill="none"
                  >
                    <path d="M0.166016 16.7182L0.277828 16.8332L8.49935 8.49984L0.277828 0.166504L0.166016 0.281504V3.93984L4.66319 8.49984L0.166016 13.0598V16.7182Z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <Swiper {...settings} className="swiper package-card2-slider">
                <div className="swiper-wrapper">
                  <SwiperSlide className="swiper-slide">
                    <div className="package-card2">
                      <Link href="/visas/visas-details">
                        <img
                          src="/assets/img/home1/package-card2-img1.png"
                          alt=""
                        />
                      </Link>
                      <div className="eg-tag">
                        <h4>
                          <Link href="/visas/visas-details">EGYPT</Link>
                        </h4>
                      </div>
                      <div className="package-card2-content">
                        <div className="title">
                          <h6>E-Visa - Only Processing</h6>
                        </div>
                        <div className="price-area">
                          <span>$5,978</span>
                          <p>TAXES INCL/PERS</p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="package-card2 style-2">
                      <Link href="/visas/visas-details">
                        <img
                          src="/assets/img/home1/package-card2-img2.png"
                          alt=""
                        />
                      </Link>
                      <div className="eg-tag">
                        <h4>
                          <Link href="/visas/visas-details">NEPAL</Link>
                        </h4>
                      </div>
                      <div className="package-card2-content">
                        <div className="title">
                          <h6>E-Visa - Only Processing</h6>
                        </div>
                        <div className="price-area">
                          <span>$4,618</span>
                          <p>TAXES INCL/PERS</p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="package-card2">
                      <Link href="/visas/visas-details">
                        <img
                          src="/assets/img/home1/package-card2-img3.png"
                          alt=""
                        />
                      </Link>
                      <div className="eg-tag">
                        <h4>
                          <Link href="/visas/visas-details">NEW YORK</Link>
                        </h4>
                      </div>
                      <div className="package-card2-content">
                        <div className="title">
                          <h6>E-Visa - Only Processing</h6>
                        </div>
                        <div className="price-area">
                          <span>$3,798</span>
                          <p>TAXES INCL/PERS</p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="package-card2 style-2">
                      <Link href="/visas/visas-details">
                        <img
                          src="/assets/img/home1/package-card2-img4.png"
                          alt=""
                        />
                      </Link>
                      <div className="eg-tag">
                        <h4>
                          <Link href="/visas/visas-details">India</Link>
                        </h4>
                      </div>
                      <div className="package-card2-content">
                        <div className="title">
                          <h6>E-Visa - Only Processing</h6>
                        </div>
                        <div className="price-area">
                          <span>$3,618</span>
                          <p>TAXES INCL/PERS</p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="package-card2">
                      <Link href="/visas/visas-details">
                        <img
                          src="/assets/img/home1/package-card2-img5.png"
                          alt=""
                        />
                      </Link>
                      <div className="eg-tag">
                        <h4>
                          <Link href="/visas/visas-details">Brazil</Link>
                        </h4>
                      </div>
                      <div className="package-card2-content">
                        <div className="title">
                          <h6>E-Visa - Only Processing</h6>
                        </div>
                        <div className="price-area">
                          <span>$8,798</span>
                          <p>TAXES INCL/PERS</p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                </div>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home1Vise;
