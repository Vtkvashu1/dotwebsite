import { useState, useEffect } from "react";
import "../../../styles/JeeResult.css";

// Import JEE Advanced images
import adv1 from "../../assets/jeeadv1.jpg";
import adv2 from "../../assets/jeeadv2.jpg";
import adv3 from "../../assets/jeeadv3.jpg";
import adv4 from "../../assets/jeeadv4.jpg";

import adv5 from "../../assets/jeeadvan5.jpg";
import adv6 from "../../assets/jeeadv6.jpg";
import adv7 from "../../assets/jeeadv7.jpg";
import adv8 from "../../assets/jeeadvan8.jpg";
import adv9 from "../../assets/jeeadv9.jpg";
import adv10 from "../../assets/jeeadvanceall.jpg";
const AdvanceResult = () => {
  const [videoIndex, setIndex] = useState(0);
  const bannerImages = [adv1, adv2, adv3, adv4,adv5,adv6,adv7,adv8,adv9,adv10]; // Add all Advanced images here

  const prevIndex = () => {
    setIndex(videoIndex === 0 ? bannerImages.length - 1 : videoIndex - 1);
  };

  const nextIndex = () => {
    setIndex(videoIndex === bannerImages.length - 1 ? 0 : videoIndex + 1);
  };

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      nextIndex();
    }, 3000);

    return () => clearInterval(interval);
  }, [videoIndex]);

  return (
    <div className="triumph-section">
      <h1 className="title-t">EXCELLENCE IN JEE ADVANCED</h1>
      <div className="image-container">
        <button className="slider-button left" onClick={prevIndex}>
          &#10094;
        </button>
        <div className="image-frame">
          <img
            src={bannerImages[videoIndex]}
            alt="JEE Advanced Triumph"
            className="triumph-image2"
          />
        </div>
        <button className="slider-button right" onClick={nextIndex}>
          &#10095;
        </button>
      </div>

      {/* Dots Indicator */}
      <div className="dots-container">
        {bannerImages.map((_, index) => (
          <span
            key={index}
            className={`dot ${videoIndex === index ? "active" : ""}`}
            onClick={() => setIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default AdvanceResult;
