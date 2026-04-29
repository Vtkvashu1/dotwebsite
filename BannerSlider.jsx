import { useState, useEffect } from 'react';  
import "../../../styles/BannerSlider.css";
// import bannerbg1 from "../../assets/Webheader.jpg";
import bannerbg2 from "../../assets/websitnew.jpg";
import bannerbg3 from "../../assets/bannerbg3.jpg";
import bannerbg4 from "../../assets/bannerbg4.jpg";
import bannerbg1 from "../../assets/bannerbg1.jpg";

import bannerbg5 from "../../assets/webbanner.jpg";
const BannerSlider = () => {
  const images = [bannerbg1,bannerbg5];

  const interval = 4000; // Interval time in milliseconds

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="slideshow-container">
      {images.map((image, index) => (
        <div
          key={index}
          className={`slide ${index === currentIndex ? 'active' : ''}`}
        >
          <img src={image} alt={`Banner ${index + 1}`} />
        </div>
      ))}
      <div className="dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
      {/* Scroll Down Indicator */}
      <div className="scroll-down">
        <div className="scroll-mouse"></div>
        <span>Scroll to explore</span>
      </div>
    </div>
  );
};

export default BannerSlider;

