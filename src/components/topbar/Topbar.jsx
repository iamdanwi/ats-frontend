import Link from "next/link";
import React from "react";
import "./topbar.css"
const Topbar = () => {
  return (
    <>
      <div className="top-bar style-2">
        <div className="topbar-left">
        
        </div>
        <p>
          50% Off Your Next Trip. Hurry Up For your new Tour!{" "}
          <Link href="/package" style={{
            color:"white",
            marginLeft:"0.6rem"
          }}>Book Your Tour</Link>{" "}
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

export default Topbar;
