import React, { useState, useEffect, useRef } from "react";

const QuantityCounter = ({ onCountChange }) => {
  const [count, setCount] = useState(0);

  const handleIncrement = (event) => {
    event.stopPropagation(); // Prevent the event from propagating to the parent div
    setCount(count + 1);
    onCountChange && onCountChange(count + 1);
  };

  const handleDecrement = (event) => {
    event.stopPropagation(); // Prevent the event from propagating to the parent div
    if (count > 0) {
      setCount(count - 1);
      onCountChange && onCountChange(count - 1);
    }
  };

  return (
    <div className="quantity-counter">
      <a
        data-type="adult"
        onClick={handleDecrement}
        style={{ cursor: "pointer" }}
        className="guest-quantity__minus"
      >
        <i className="bi bi-dash" />
      </a>
      <input
        name="adult_quantity"
        value={count}
        style={{ cursor: "pointer" }}
        type="text"
        readOnly
        className="quantity__input"
      />
      <a
        data-type="adult"
        onClick={handleIncrement}
        className="guest-quantity__plus"
      >
        <i className="bi bi-plus" />
      </a>
    </div>
  );
};

const GuestDropdown = ({style,noScroll}) => {
  const [isActive, setIsActive] = useState(false);
  const [adultCount, setAdultCount] = useState(1);
  const [childCount, setChildCount] = useState(0);

  const dropdownRef = useRef(null);

  const handleToggleActive = () => {
    setIsActive(!isActive);
  };

  const handleAdultCountChange = (count) => {
    setAdultCount(count);
  };

  const handleChildCountChange = (count) => {
    setChildCount(count);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsActive(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <div className={`searchbox-input`} ref={dropdownRef}>
      <label>Guest</label>
      <div className={`custom-select-dropdown ${style}`} onClick={handleToggleActive}>
        <div className={`select-input`}>
          <h6>
            <span id="adult-qty">{adultCount}</span> Adults,{" "}
            <span id="child-qty">{childCount}</span> Child
          </h6>
          <i className="bi bi-chevron-down" />
        </div>
        <div
          className={`custom-select-wrap ${noScroll} ${
            isActive ? "active" : ""
          }`}
        >
          <ul className="guest-count">
            <li className="single-item">
              <div className="title">
                <h6>Adult</h6>
                <span>17 years+</span>
              </div>
              <QuantityCounter onCountChange={handleAdultCountChange} />
            </li>
            <li className="single-item">
              <div className="title">
                <h6>Children</h6>
                <span>0-17 years</span>
              </div>
              <QuantityCounter onCountChange={handleChildCountChange} />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default GuestDropdown;
