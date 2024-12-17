import React from "react";

const Topbar2 = () => {
  return (
    <>
      <div className="top-bar style-2">
        <div className="topbar-left two">
          <div className="icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={27}
              height={27}
              viewBox="0 0 27 27"
            >
              <g>
                <path d="M9.84497 19.8136V25.0313C9.84583 25.2087 9.90247 25.3812 10.0069 25.5246C10.1112 25.6679 10.2581 25.7748 10.4266 25.8301C10.5951 25.8853 10.7767 25.8861 10.9457 25.8324C11.1147 25.7787 11.2625 25.6732 11.3682 25.5308L14.4203 21.3773L9.84497 19.8136ZM26.6468 0.156459C26.5201 0.0661815 26.3708 0.0127263 26.2155 0.00200482C26.0603 -0.00871662 25.9051 0.0237135 25.7671 0.0957086L0.454599 13.3145C0.308959 13.3914 0.188959 13.5092 0.109326 13.6535C0.0296936 13.7977 -0.00610776 13.962 0.00631628 14.1262C0.0187403 14.2905 0.0788492 14.4475 0.179266 14.5781C0.279683 14.7087 0.416039 14.8071 0.571599 14.8613L7.60847 17.2666L22.5946 4.45283L10.9981 18.4242L22.7915 22.4551C22.9085 22.4944 23.0327 22.5077 23.1554 22.4939C23.2781 22.4802 23.3963 22.4399 23.5017 22.3757C23.6072 22.3115 23.6973 22.225 23.7659 22.1223C23.8344 22.0196 23.8797 21.9032 23.8985 21.7812L26.9922 0.968709C27.0151 0.81464 26.995 0.657239 26.934 0.513898C26.8731 0.370556 26.7737 0.246854 26.6468 0.156459Z" />
              </g>
            </svg>
          </div>
          <div className="content">
            <span>Email:</span>
            <a href="mailto:ifo@example.com">info@example.com</a>
          </div>
        </div>
        <p>
          50% Off Your Next Trip. Hurry Up For your new Tour!{" "}
          <a href="#">Book Your Tour</a>{" "}
        </p>
        <div className="topbar-right">
          <div className="social-icon-area">
            <ul>
              <li>
                <a href="https://www.facebook.com/">
                  <i className="bx bxl-facebook" />
                </a>
              </li>
              <li>
                <a href="https://twitter.com/">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={10}
                    height={10}
                    fill="currentColor"
                    className="bi bi-twitter-x"
                    viewBox="0 0 16 16"
                  >
                    <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z" />
                  </svg>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/">
                  <i className="bx bxl-pinterest-alt" />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/">
                  <i className="bx bxl-instagram" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Topbar2;
