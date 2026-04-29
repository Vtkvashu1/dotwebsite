import { useState, useEffect } from "react";
import "../../../styles/JeeResult.css";
import result1 from "../../assets/Result1.jpg";
import result2 from "../../assets/Results2.jpg";
import first from "../../assets/Results2.jpg";
import firt from "../../assets/Devansh.jpg";
import second from "../../assets/Madhur.jpg";
import third from "../../assets/dheeraj.jpg";
import fourth from "../../assets/Aryan.jpeg";
import fifth from "../../assets/deepan.jpg";
import sixth from "../../assets/Rajat.jpg";
import seventh from "../../assets/Rinku.jpg";
import eighth from "../../assets/saks.jpg";
import eleventh from "../../assets/Tanshi.jpeg";
import tenth from "../../assets/Aditya.jpg";
import ninth from "../../assets/Bharat.jpg";

const JeeResult = () => {
  const [videoIndex, setIndex] = useState(0);
  // const bannerImages = [
  //   first, firt, second, third, fourth, fifth, sixth, seventh, eighth, eleventh, tenth, ninth
  // ];
   const bannerImages = [
    result1,
    result2,
  ];

  const prevIndex = () => {
    setIndex(videoIndex === 0 ? bannerImages.length - 1 : videoIndex - 1);
  };

  const nextIndex = () => {
    setIndex(videoIndex === bannerImages.length - 1 ? 0 : videoIndex + 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextIndex();
    }, 4000);
    return () => clearInterval(interval);
  }, [videoIndex]);

  return (
    <div className="triumph-section">
      <div className="floating-shapes">
        <div className="float-shape shape-a"></div>
        <div className="float-shape shape-b"></div>
      </div>

      <div className="triumph-container">
        <div className="triumph-header">
          <span className="achievement-badge">🏆 Our Top Achievers</span>
          <div className="title-t">
            Producing <span className="highlight-gradient">TOP RESULTS</span><span> Every Year</span>
          </div>
          <p className="triumph-description">
            Celebrating our students' remarkable achievements and success stories
          </p>
          <div className="title-underline"></div>
        </div>

        <div className="image-container">
          <button className="slider-button left" onClick={prevIndex}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>

          <div className="image-frame">
            <img 
              src={bannerImages[videoIndex]} 
              alt="Achievement" 
              className="triumph-image"
              key={videoIndex}
            />
            <div className="frame-glow"></div>
            <div className="image-counter">
              <span>{videoIndex + 1} / {bannerImages.length}</span>
            </div>
          </div>

          <button className="slider-button right" onClick={nextIndex}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>

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
    </div>
  );
};

export default JeeResult;
