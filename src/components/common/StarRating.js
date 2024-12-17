import React, { useState } from "react";
import "./StarRating.css"; // Optional: Add CSS for styling

const StarRating = ({ totalStars = 5, onRatingChange }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const handleClick = (index) => {
    setRating(index);
    if (onRatingChange) onRatingChange(index); // Pass rating to parent if needed
  };

  const handleHover = (index) => setHover(index);

  const handleMouseLeave = () => setHover(0);

  return (
    <div className="star-rating">
      {[...Array(totalStars)].map((_, index) => {
        const starIndex = index + 1;
        return (
          <span
            key={starIndex}
            className={`star ${starIndex <= (hover || rating) ? "filled" : ""}`}
            onClick={() => handleClick(starIndex)}
            onMouseEnter={() => handleHover(starIndex)}
            onMouseLeave={handleMouseLeave}
          >
            &#9733;
          </span>
        );
      })}
    </div>
  );
};

export default StarRating;
