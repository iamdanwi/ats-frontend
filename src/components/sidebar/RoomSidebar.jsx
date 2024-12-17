import React from "react";
import "./widgetFilter.css"

const RoomSidebar = () => {
  return (
    <>
      <div className="sidebar-area">
        <div className="single-widget mb-30">
          <h5 className="widget-title">Search Here</h5>
          <form>
            <div className="search-box">
              <input type="text" placeholder="Search Here" />
              <button type="submit">
                <i className="bx bx-search" />
              </button>
            </div>
          </form>
        </div>
        <div className="single-widget mb-30">
          <h5 className="widget-title padding-popular-title">Popular Filters <img src="/assets/img/room/filter.svg"/></h5>
          <div className="checkbox-container">
            <ul>
              <li>
                <label className="containerss">
                  <input type="checkbox" />
                  <span className="checkmark" />
                  <span className="text">Book without credit card</span>
                  <span className="qty">250</span>
                </label>
              </li>
              <li>
                <label className="containerss">
                  <input type="checkbox" />
                  <span className="checkmark" />
                  <span className="text">Free cancellation</span>
                  <span className="qty">90</span>
                </label>
              </li>
              <li>
                <label className="containerss">
                  <input type="checkbox" />
                  <span className="checkmark" />
                  <span className="text">Breakfast Included</span>
                  <span className="qty">35</span>
                </label>
              </li>
              <li>
                <label className="containerss">
                  <input type="checkbox" />
                  <span className="checkmark" />
                  <span className="text">No prepayment</span>
                  <span className="qty">28</span>
                </label>
              </li>
              <li>
                <label className="containerss">
                  <input type="checkbox" />
                  <span className="checkmark" />
                  <span className="text">Romantic</span>
                  <span className="qty">12</span>
                </label>
              </li>
            </ul>
          </div>
        </div>

        <div className="single-widget mb-30">
          <h5 className="widget-title padding-popular-title">Facilities </h5>
          <div className="checkbox-container">
            <ul>
              <li>
                <label className="containerss">
                  <input type="checkbox" />
                  <span className="checkmark" />
                  <span className="text">Airport shuttle</span>
                  <span className="qty">30</span>
                </label>
              </li>
              <li>
                <label className="containerss">
                  <input type="checkbox" />
                  <span className="checkmark" />
                  <span className="text">Locker</span>
                  <span className="qty">90</span>
                </label>
              </li>
              <li>
                <label className="containerss">
                  <input type="checkbox" />
                  <span className="checkmark" />
                  <span className="text">Gym</span>
                  <span className="qty">35</span>
                </label>
              </li>
              <li>
                <label className="containerss">
                  <input type="checkbox" />
                  <span className="checkmark" />
                  <span className="text">Spa</span>
                  <span className="qty">28</span>
                </label>
              </li>
              <li>
                <label className="containerss">
                  <input type="checkbox" />
                  <span className="checkmark" />
                  <span className="text">Parking</span>
                  <span className="qty">70</span>
                </label>
              </li>
              <li>
                <label className="containerss">
                  <input type="checkbox" />
                  <span className="checkmark" />
                  <span className="text">Restaurant</span>
                  <span className="qty">120</span>
                </label>
              </li>
              <li>
                <label className="containerss">
                  <input type="checkbox" />
                  <span className="checkmark" />
                  <span className="text">Swimming pool</span>
                  <span className="qty">36</span>
                </label>
              </li>
              <li>
                <label className="containerss">
                  <input type="checkbox" />
                  <span className="checkmark" />
                  <span className="text">Pet friendly</span>
                  <span className="qty">10</span>
                </label>
              </li>
            </ul>
          </div>
        </div>

        <div className="single-widget mb-30">
          <h5 className="widget-title padding-popular-title">Room Accessibility </h5>
          <div className="checkbox-container">
            <ul>
              <li>
                <label className="containerss">
                  <input type="checkbox" />
                  <span className="checkmark" />
                  <span className="text">Adapted bath</span>
                  <span className="qty">250</span>
                </label>
              </li>
              <li>
                <label className="containerss">
                  <input type="checkbox" />
                  <span className="checkmark" />
                  <span className="text">Roll-in shower</span>
                  <span className="qty">90</span>
                </label>
              </li>
              <li>
                <label className="containerss">
                  <input type="checkbox" />
                  <span className="checkmark" />
                  <span className="text">Raised toilet</span>
                  <span className="qty">35</span>
                </label>
              </li>
              <li>
                <label className="containerss">
                  <input type="checkbox" />
                  <span className="checkmark" />
                  <span className="text">Emergency cord in bathroom</span>
                  <span className="qty">28</span>
                </label>
              </li>
              <li>
                <label className="containerss">
                  <input type="checkbox" />
                  <span className="checkmark" />
                  <span className="text">Shower chair</span>
                  <span className="qty">12</span>
                </label>
              </li>
            </ul>
          </div>
        </div>
        <div className="single-widget ">
          <h5 className="widget-title padding-popular-title">Star Rating </h5>
          <div className="checkbox-container">
            <ul>
              <li>
                <label className="containerss">
                  <input type="checkbox" />
                  <span className="checkmark" />
                  <span className="stars">
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <a href="#" className="review-no">
                      (5)
                    </a>
                  </span>
                </label>
              </li>
              <li>
                <label className="containerss">
                  <input type="checkbox" />
                  <span className="checkmark" />
                  <span className="stars">
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-half" />
                    <a href="#" className="review-no">
                      (4.5)
                    </a>
                  </span>
                </label>
              </li>
              <li>
                <label className="containerss">
                  <input type="checkbox" />
                  <span className="checkmark" />
                  <span className="stars">
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <a href="#" className="review-no">
                      (4.0)
                    </a>
                  </span>
                </label>
              </li>
              <li>
                <label className="containerss">
                  <input type="checkbox" />
                  <span className="checkmark" />
                  <span className="stars">
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-half" />
                    <a href="#" className="review-no">
                      (3.5)
                    </a>
                  </span>
                </label>
              </li>
              <li>
                <label className="containerss">
                  <input type="checkbox" />
                  <span className="checkmark" />
                  <span className="stars">
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <a href="#" className="review-no">
                      (3.0)
                    </a>
                  </span>
                </label>
              </li>
              <li>
                <label className="containerss">
                  <input type="checkbox" />
                  <span className="checkmark" />
                  <span className="stars">
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-half" />
                    <a href="#" className="review-no">
                      (2.5)
                    </a>
                  </span>
                </label>
              </li>
              <li>
                <label className="containerss">
                  <input type="checkbox" />
                  <span className="checkmark" />
                  <span className="stars">
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <a href="#" className="review-no">
                      (2.0)
                    </a>
                  </span>
                </label>
              </li>
              <li>
                <label className="containerss">
                  <input type="checkbox" />
                  <span className="checkmark" />
                  <span className="stars">
                    <i className="bi bi-star-fill" />
                    <a href="#" className="review-no">
                      (1.0)
                    </a>
                  </span>
                </label>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default RoomSidebar;
