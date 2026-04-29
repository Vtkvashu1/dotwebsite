import { useNavigate } from "react-router-dom";
import "../../../styles/newhome.css";
import heroImage from "../../assets/websitenew.jpg";

const NewHomeUi = () => {
  const navigate = useNavigate();
  
  const handleViewCourses = () => {
    navigate("/courses", { state: { scrollToCourses: true } });
  };

  return (
    <section className="hero-section" style={{ backgroundImage: `url(${heroImage})` }}>
      
      {/* Animated Top Banner */}
      <div className="top-announcement" onClick={handleViewCourses}>
        <div className="announcement-content">
          <span className="announcement-icon">🚀</span>
          <span className="announcement-text">
            New Crash Courses Launched! Click to View
          </span>
          <span className="announcement-arrow">→</span>
        </div>
      </div>

      <div className="hero-overlay">
        <div className="hero-content">
          <h1>
            "More Than <span>Classes</span> – Confidence, Counselling & Care"
          </h1>
          <div className="hero-buttons">
            <button className="btn-primary " onClick={handleViewCourses}>
              View Courses

            </button>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="scroll-down">
        <div className="scroll-mouse"></div>
        <span>Scroll to explore</span>
      </div>
    </section>
  );
};

export default NewHomeUi;