import React, { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import "../../../styles/Programs.css";

const Programs = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const categoryFromUrl = searchParams.get("category") || "JEE";

  const [activeTab, setActiveTab] = useState("class11");
  const [selectedCategory, setSelectedCategory] = useState(categoryFromUrl);

  // ===== Course Data =====
  const jeeCourses = {
    class11: [
      { id: 1, title: "11th JEE Program", description: "Detailed JEE preparation for 11th graders.", duration: "12 Months" },
    ],
    class12: [
      { id: 3, title: "12th JEE Program", description: "Advanced JEE topics for 12th graders.", duration: "12 Months" },
    ],
    dropper: [
      { id: 5, title: "JEE Dropper Program", description: "Specialized JEE course for droppers.", duration: "10 Months" },
      { id: 7, title: "JEE Crash Course", description: "Quick revision and crash course for JEE.", duration: "3 Months" },
    ],
  };

  const neetCourses = {
    class11: [
      { id: 2, title: "11th NEET Program", description: "Comprehensive NEET syllabus for 11th students.", duration: "12 Months" },
    ],
    class12: [
      { id: 4, title: "12th NEET Program", description: "In-depth NEET syllabus for 12th students.", duration: "12 Months" },
    ],
    dropper: [
      { id: 6, title: "NEET Dropper Program", description: "Targeted NEET preparation for droppers.", duration: "10 Months" },
      { id: 8, title: "NEET Crash Course", description: "Fast-paced NEET preparation course.", duration: "3 Months" },
    ],
  };

  const foundationCourses = {
    // class8: [
    //   { id: 9, title: "Class 8 Foundation", description: "Strong base for JEE/NEET future preparation.", duration: "12 Months" },
    // ],
    class9: [
      { id: 10, title: "Class 9 Foundation", description: "Advanced concepts for future competitive exams.", duration: "12 Months" },
    ],
    class10: [
      { id: 11, title: "Class 10 Foundation", description: "Targeted preparation for NTSE and Olympiads.", duration: "12 Months" },
    ],
  };

  // ===== Choose which courses to show =====
  let courses;
  if (selectedCategory === "JEE") courses = jeeCourses;
  else if (selectedCategory === "NEET") courses = neetCourses;
  else courses = foundationCourses;

  // ===== Determine visible categories based on URL =====
  const showCategory = searchParams.get("category");
  let visibleCategories = ["JEE", "NEET", "Foundation"];
  if (showCategory === "JEE") visibleCategories = ["JEE"];
  if (showCategory === "NEET") visibleCategories = ["NEET"];
  if (showCategory === "Foundation") visibleCategories = ["Foundation"];

  // ===== Tabs =====
  const foundationTabs = [ "class9", "class10"];
  const regularTabs = ["class11", "class12", "dropper"];
  const tabsToShow = selectedCategory === "Foundation" ? foundationTabs : regularTabs;

  // PDF download handlers
  const handleDownloadJEEPlanner = () => {
    const link = document.createElement('a');
    link.href = '/pdfs/jee-crash-course-planner.pdf';
    link.download = 'JEE-Crash-Course-Planner.pdf';
    link.click();
  };

  const handleDownloadJEETestPlanner = () => {
    const link = document.createElement('a');
    link.href = '/pdfs/jee-main-crash-course-test-planner.pdf';
    link.download = 'JEE-Main-Test-Planner.pdf';
    link.click();
  };

  const handleDownloadNEETPlanner = () => {
    const link = document.createElement('a');
    link.href = '/pdfs/neet-crash-course-planner.pdf';
    link.download = 'NEET-Crash-Course-Planner.pdf';
    link.click();
  };

  const handleDownloadNEETTestPlanner = () => {
    const link = document.createElement('a');
    link.href = '/pdfs/neet-crash-course-test-planner.pdf';
    link.download = 'NEET-Test-Planner.pdf';
    link.click();
  };

  return (
    <div className="courses-view-wrapper">
      {/* Animated Background Elements */}
      <div className="bg-decoration">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="blob blob-3"></div>
      </div>

      {/* Header with Back Button and Category Pills */}
      <div className="header-section-program">
        <button className="back-btn" onClick={() => navigate("/")}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M12.5 15L7.5 10L12.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Back to Home
        </button>

        {/* Category Pills */}
        <div className="category-pills">
          {visibleCategories.includes("JEE") && (
            <button
              className={`pill-btn ${selectedCategory === "JEE" ? "active jee-active" : ""}`}
              onClick={() => setSelectedCategory("JEE")}
            >
              <span className="pill-icon">🎯</span>
              JEE
            </button>
          )}
          {visibleCategories.includes("NEET") && (
            <button
              className={`pill-btn ${selectedCategory === "NEET" ? "active neet-active" : ""}`}
              onClick={() => setSelectedCategory("NEET")}
            >
              <span className="pill-icon">⚕️</span>
              NEET
            </button>
          )}
          {visibleCategories.includes("Foundation") && (
            <button
              className={`pill-btn ${selectedCategory === "Foundation" ? "active foundation-active" : ""}`}
              onClick={() => setSelectedCategory("Foundation")}
            >
              <span className="pill-icon">📚</span>
              Foundation
            </button>
          )}
        </div>
      </div>

      {/* ===== CRASH COURSE HERO SECTION ===== */}
     {/* ===== CRASH COURSE HERO SECTION ===== */}
      <div className={`crash-hero ${
        selectedCategory === "JEE" ? "jee-gradient" : 
        selectedCategory === "NEET" ? "neet-gradient" : 
        "foundation-gradient"
      }`}>
        <div className="crash-hero-content">
          <div className="hero-left">
            <div className="new-badge">
              <span className="badge-dot"></span>
              {selectedCategory === "Foundation" ? "BUILD YOUR FOUNDATION" : "NEW LAUNCH 2025"}
            </div>
            <div className="hero-title-program">
              {selectedCategory === "Foundation" ? "Foundation Programs" : `${selectedCategory} Crash Course`}
            </div>
            <p className="hero-description">
              {selectedCategory === "Foundation" 
                ? "Start your competitive exam journey early with our comprehensive foundation courses designed for Classes 8, 9, and 10."
                : "Accelerate your exam prep with our intensive crash course. Get exam-ready in just 3 months with expert guidance."
              }
            </p>

            {/* Feature Highlights */}
            <div className="hero-features">
              {selectedCategory === "Foundation" ? (
                <>
                  <div className="hero-feature">
                    <div className="feature-icon-box">🧠</div>
                    <div>
                      <h4>Concept Building</h4>
                      <p>Strong fundamentals for future success</p>
                    </div>
                  </div>
                  <div className="hero-feature">
                    <div className="feature-icon-box">🏆</div>
                    <div>
                      <h4>Olympiad Prep</h4>
                      <p>NTSE, Olympiads & School exams</p>
                    </div>
                  </div>
                  <div className="hero-feature">
                    <div className="feature-icon-box">🎓</div>
                    <div>
                      <h4>Early Advantage</h4>
                      <p>Head start for JEE/NEET preparation</p>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="hero-feature">
                    <div className="feature-icon-box">📝</div>
                    <div>
                      <h4>Test Series</h4>
                      <p>Weekly mocks & analysis</p>
                    </div>
                  </div>
                  <div className="hero-feature">
                    <div className="feature-icon-box">👨‍🏫</div>
                    <div>
                      <h4>Mentorship</h4>
                      <p>1-on-1 expert guidance</p>
                    </div>
                  </div>
                  <div className="hero-feature">
                    <div className="feature-icon-box">📚</div>
                    <div>
                      <h4>Smart Revision</h4>
                      <p>Complete topic coverage</p>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>

          <div className="hero-right">
            {selectedCategory === "Foundation" ? (
              <div className="download-card">
                <h3>🎯 Why Start Early?</h3>
                <p>Benefits of foundation courses</p>
                <div className="download-grid">
                  <div className="benefit-item">
                    <div className="benefit-icon">✨</div>
                    <div className="benefit-text">
                      <span>Strong Base</span>
                      <small>Build concepts from scratch</small>
                    </div>
                  </div>
                  <div className="benefit-item">
                    <div className="benefit-icon">⚡</div>
                    <div className="benefit-text">
                      <span>Competitive Edge</span>
                      <small>Excel in school & beyond</small>
                    </div>
                  </div>
                  <div className="benefit-item">
                    <div className="benefit-icon">🎯</div>
                    <div className="benefit-text">
                      <span>Future Ready</span>
                      <small>Smooth transition to JEE/NEET</small>
                    </div>
                  </div>
                  <div className="benefit-item">
                    <div className="benefit-icon">📈</div>
                    <div className="benefit-text">
                      <span>Progressive Learning</span>
                      <small>Age-appropriate curriculum</small>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="download-card">
                <h3>📥 Download Resources</h3>
                <p>Get your complete course & test planners</p>
                <div className="download-grid">
                  <button 
                    className="resource-btn"
                    onClick={selectedCategory === "JEE" ? handleDownloadJEEPlanner : handleDownloadNEETPlanner}
                  >
                    <div className="resource-icon">📄</div>
                    <div className="resource-text">
                      <span>Course Planner</span>
                      <small>Complete syllabus</small>
                    </div>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M10 12.5L6.25 8.75L7.5 7.5L9.375 9.375V2.5H10.625V9.375L12.5 7.5L13.75 8.75L10 12.5ZM5 17.5C4.65833 17.5 4.36458 17.3787 4.11875 17.1362C3.87292 16.8937 3.75 16.6 3.75 16.25V13.125H5V16.25H15V13.125H16.25V16.25C16.25 16.5917 16.1287 16.8854 15.8862 17.1312C15.6437 17.3771 15.35 17.5 15 17.5H5Z"/>
                    </svg>
                  </button>
                  <button 
                    className="resource-btn"
                    onClick={selectedCategory === "JEE" ? handleDownloadJEETestPlanner : handleDownloadNEETTestPlanner}
                  >
                    <div className="resource-icon">📊</div>
                    <div className="resource-text">
                      <span>Test Planner</span>
                      <small>Mock schedule</small>
                    </div>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M10 12.5L6.25 8.75L7.5 7.5L9.375 9.375V2.5H10.625V9.375L12.5 7.5L13.75 8.75L10 12.5ZM5 17.5C4.65833 17.5 4.36458 17.3787 4.11875 17.1362C3.87292 16.8937 3.75 16.6 3.75 16.25V13.125H5V16.25H15V13.125H16.25V16.25C16.25 16.5917 16.1287 16.8854 15.8862 17.1312C15.6437 17.3771 15.35 17.5 15 17.5H5Z"/>
                    </svg>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ===== ALL COURSES SECTION ===== */}
      <div className="courses-section">
        <div className="section-header">
          <div>
            <h2 className="section-title">
              All {selectedCategory} {selectedCategory === "Foundation" ? "" : "Programs"}
            </h2>
            <p className="section-subtitle">
              Choose the perfect program for your preparation journey
            </p>
          </div>
        </div>

        {/* Modern Tabs */}
        <div className="modern-tabs">
          {tabsToShow.map((tab) => (
            <button
              key={tab}
              className={`modern-tab ${activeTab === tab ? "tab-active" : ""}`}
              onClick={() => setActiveTab(tab)}
            >
              <span className="tab-text">
                {tab === "class9" && "Class 9"}
                {tab === "class10" && "Class 10"}
                {tab === "class11" && "Class 11"}
                {tab === "class12" && "Class 12"}
                {tab === "dropper" && "Dropper & Crash"}
              </span>
            </button>
          ))}
        </div>

        {/* Courses Grid */}
        <div className="courses-grid-modern">
          {courses[activeTab]?.map((course, index) => (
            <div 
              key={course.id} 
              className="course-card-new"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="card-shine"></div>
              <div className="card-content">
                <div className="course-badge">{course.duration}</div>
                <h3 className="course-title-program">{course.title}</h3>
                <p className="course-description-program">{course.description}</p>
                
                <button
                  className="cta-button"
                  onClick={() => navigate(`/programs/${course.id}`)}
                >
                  <span>Explore Program</span>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Programs;