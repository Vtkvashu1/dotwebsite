import React from "react";
import { useNavigate } from "react-router-dom";
import "../../../styles/ProgramsNew.css";
import jeeicon from "../../assets/icon1.png";
import neeticon from "../../assets/icon2.png";
import tenicon from "../../assets/icon3.png";

const ProgramsNew = () => {
  const navigate = useNavigate();

  const handleViewCourses = (category) => {
    navigate(`/courses?category=${category}`);
  };

  return (
    <div className="programsnew-wrapper">
      <div className="programsnew-title">Pick The Right Course For You</div>

      <div className="programsnew-container">
        <div className="programsnew-card">
          <div className="crash-ribbon">Crash Course Live!</div>
          <h3>JEE Courses</h3>
          <img src={jeeicon} alt="JEE" className="programsnew-icon" />
          <p className="programsnew-view-link" onClick={() => handleViewCourses("JEE")}>
            View Courses &gt;
          </p>
        </div>

        <div className="programsnew-card">
          <div className="crash-ribbon">Crash Course Live!</div>
          <h3>NEET Courses</h3>
          <img src={neeticon} alt="NEET" className="programsnew-icon" />
          <p className="programsnew-view-link" onClick={() => handleViewCourses("NEET")}>
            View Courses &gt;
          </p>
        </div>

        <div className="programsnew-card">
        <div className="crash-ribbon">Foundation Course Live!</div>
          <h3>Courses For Class 9 -10</h3>
          <img src={tenicon} alt="Class 8-10" className="programsnew-icon" />
          <p
            className="programsnew-view-link"
            onClick={() => handleViewCourses("Foundation")}
          >
            View Courses &gt;
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProgramsNew;