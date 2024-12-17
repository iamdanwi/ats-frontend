import React from "react";

const Home5Banner3 = () => {
  return (
    <>
      <div className="home5-banner3-section">
        <div className="home5-banner3-content">
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
        </div>
      </div>
    </>
  );
};

export default Home5Banner3;
