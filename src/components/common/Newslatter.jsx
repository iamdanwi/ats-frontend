import React from "react";

const Newslatter = () => {
  return (
    <>
      <div className="banner3-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="banner3-content">
                <h2>Join The Newsletter</h2>
                <p>To receive our best monthly deals</p>
                <form>
                  <div className="from-inner">
                    <input type="email" placeholder="Enter Your Gmail..." />
                    <button type="submit" className="from-arrow">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={18}
                        height={17}
                        viewBox="0 0 18 17"
                      >
                        <path
                          d="M7 1L16 8.5M16 8.5L7 16M16 8.5H0.5"
                          strokeWidth="1.5"
                        />
                      </svg>
                    </button>
                  </div>
                </form>
                <img
                  src="/assets/img/home1/banner3-vector1.png"
                  alt=""
                  className="vector1"
                />
                <img
                  src="/assets/img/home1/banner3-vector2.png"
                  alt=""
                  className="vector2"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Newslatter;
