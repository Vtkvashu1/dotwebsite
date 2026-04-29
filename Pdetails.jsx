import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import "../../../styles/Pdetails.css";

const programDetails = {
    1: { category: "JEE", youtubePodcast: ["https://www.youtube.com/embed/UcqFdpc9q9Q"], result: "Last year, 15+ students secured 95+ percentile in JEE!" },
    2: { category: "NEET", youtubePodcast: ["https://www.youtube.com/embed/UcqFdpc9q9Q"], result: "Last year, 30+ students cracked NEET with excellent scores!" },
    3: { category: "NEET", youtubePodcast: ["https://www.youtube.com/embed/UcqFdpc9q9Q"], result: "Last year, 30+ students cracked NEET with excellent scores!" },
    4: { category: "JEE", youtubePodcast: ["https://www.youtube.com/embed/UcqFdpc9q9Q"], result: "Last year, 15+ students secured 95+ percentile in JEE!" },
    5: { category: "NEET", youtubePodcast: ["https://www.youtube.com/embed/UcqFdpc9q9Q"], result: "Last year, 30+ students cracked NEET with excellent scores!" },
    6: { category: "JEE", youtubePodcast: ["https://www.youtube.com/embed/UcqFdpc9q9Q"], result: "Last year, 15+ students secured 95+ percentile in JEE!" },
    7: { category: "JEE", youtubePodcast: ["https://www.youtube.com/embed/UcqFdpc9q9Q"], result: "Last year, 15+ students secured 95+ percentile in JEE!" },
    8: { category: "NEET", youtubePodcast: ["https://www.youtube.com/embed/UcqFdpc9q9Q"], result: "Last year, 30+ students cracked NEET with excellent scores!" },

    // Foundation Courses
    9: { 
        isFoundation: true,
        class: "8th",
        category: "Foundation",
        highlights: [
            "Strong conceptual foundation in Math & Science",
            "Interactive learning with doubt-solving sessions",
            "Regular assessments and progress tracking",
            "Preparation for competitive exams from early stage"
        ],
        achievement: "100% students showed significant improvement in academics!"
    },
    10: { 
        isFoundation: true,
        class: "9th",
        category: "Foundation",
        highlights: [
            "Bridge the gap between school and competitive level",
            "Focus on JEE/NEET foundation topics",
            "Weekly mock tests and performance analysis",
            "Experienced faculty with personalized attention"
        ],
        achievement: "100% students showed significant improvement in academics!"
    },
    11: { 
        isFoundation: true,
        class: "10th",
        category: "Foundation",
        highlights: [
            "Dual preparation: Board exams + JEE/NEET foundation",
            "Advanced problem-solving techniques",
            "Comprehensive study material and test series",
            "Career counseling and exam strategy sessions"
        ],
        achievement: "100% students qualified for JEE/NEET coaching with scholarship!"
    },
};

const Pdetails = () => {
    const { id } = useParams();
    const details = programDetails[id];
    const [index, setIndex] = useState(0);

    if (!details) {
        return <h2 className="not-found">Program Details Not Available</h2>;
    }

    const isFoundation = details.isFoundation;
    const category = details.category || "Courses"; // default category if not specified

    const prevIndex = () => setIndex(index === 0 ? details.youtubePodcast.length - 1 : index - 1);
    const nextIndex = () => setIndex(index === details.youtubePodcast.length - 1 ? 0 : index + 1);

    return (
        <div className="program-details">
            {/* YouTube Podcast Section for JEE/NEET */}
            {!isFoundation && details.youtubePodcast && (
                <div className="details-section">
                    <h3>📺 YouTube Podcast</h3>
                    <div className="video-container">
                        <button className="arrowbutton left" onClick={prevIndex}>&#11164;</button>
                        <iframe 
                            className="youtube-video" 
                            src={details.youtubePodcast[index]} 
                            title="YouTube Podcast" 
                            frameBorder="0" 
                            allowFullScreen
                        ></iframe>
                        <button className="arrowbutton right" onClick={nextIndex}>&#11166;</button>
                    </div>
                </div>
            )}

            {/* Foundation Course Highlights */}
         {/* Foundation Course Highlights (for IDs 9, 10, 11) */}
            {details.isFoundation && (
                <div className="foundation-section">
                    <h3>🎯 Class {details.class} Foundation Course Highlights</h3>
                    <div className="highlights-grid">
                        {details.highlights.map((highlight, idx) => (
                            <div key={idx} className="highlight-card">
                                <span className="highlight-icon">✓</span>
                                <span className="highlight-text">{highlight}</span>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Result / Achievement Section */}
            <div className="result-section">
                <h3>🏆 {isFoundation ? 'Achievement' : 'Results'}</h3>
                <p>{isFoundation ? details.achievement : details.result}</p>
                {!isFoundation && (
                    <Link to="/result" className="view-result">View Full Results</Link>
                )}
            </div>

            {/* Back to Programs with dynamic category */}
            <Link to={`/courses?category=${category}`} className="back-button">← Back to {category}</Link>
        </div>
    );
};

export default Pdetails;
