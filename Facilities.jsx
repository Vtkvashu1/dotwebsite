import "../../../styles/Facilities.css";
import expertEducatorsImage from "../../assets/1a.jpg"; 
import assessmentsImage from "../../assets/support.jpg";
import facultySupportImage from "../../assets/assessment.jpg"; 

const Facilities = () => {
    return (
        <section className="facilities-section">
            <div className="animated-background">
                <div className="floating-shape shape-1"></div>
                <div className="floating-shape shape-2"></div>
                <div className="floating-shape shape-3"></div>
                <div className="floating-shape shape-4"></div>
            </div>
            
            <div className="facilities-container">
                <div className="header-wrapper">
                    <span className="super-badge">🎓 Our Premium Facilities</span>
                    <h2 className="mega-title">
                        Expert Coaching <span className="gradient-text">Facilities</span>
                    </h2>
                    <p className="mega-subtitle">
                        Empowering students with world-class education and personalized support
                    </p>
                    <div className="decorative-line"></div>
                </div>
                
                <div className="cards-wrapper">
                    <div className="glass-card">
                        <div className="card-shine"></div>
                        <div className="badge-corner">⭐ Premium</div>
                        <div className="image-box">
                            <img src={facultySupportImage} alt="Expert Faculty Support" />
                            <div className="image-gradient"></div>
                        </div>
                        <div className="content-box">
                            <div className="icon-float">
                                <div className="icon-circle">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                                        <circle cx="9" cy="7" r="4"></circle>
                                        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                                        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                                    </svg>
                                </div>
                            </div>
                            <h3>Expert Faculty Support</h3>
                            <p>Our experienced faculty members are always ready to assist students in addressing any academic challenges throughout their learning journey.</p>
                            <div className="card-footer">
                                <span className="feature-count">24/7 Support</span>
                            </div>
                        </div>
                    </div>

                    <div className="glass-card featured">
                        <div className="card-shine"></div>
                        <div className="badge-corner featured-corner">🔥 Most Popular</div>
                        <div className="image-box">
                            <img src={expertEducatorsImage} alt="Qualified Expert Teachers" />
                            <div className="image-gradient"></div>
                        </div>
                        <div className="content-box">
                            <div className="icon-float">
                                <div className="icon-circle featured-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                        <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                                        <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
                                    </svg>
                                </div>
                            </div>
                            <h3>Qualified Expert Teachers</h3>
                            <p>At The DOT, we have a distinguished team of IITian faculty members, offering students world-class education grounded in latest practices.</p>
                            <div className="card-footer">
                                <span className="feature-count">IIT Graduates</span>
                            </div>
                        </div>
                    </div>

                    <div className="glass-card">
                        <div className="card-shine"></div>
                        <div className="badge-corner">💎 Excellence</div>
                        <div className="image-box">
                            <img src={assessmentsImage} alt="Frequent Quiz & Test" />
                            <div className="image-gradient"></div>
                        </div>
                        <div className="content-box">
                            <div className="icon-float">
                                <div className="icon-circle">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                                        <polyline points="14 2 14 8 20 8"></polyline>
                                        <line x1="16" y1="13" x2="8" y2="13"></line>
                                        <line x1="16" y1="17" x2="8" y2="17"></line>
                                    </svg>
                                </div>
                            </div>
                            <h3>Frequent Quiz & Test</h3>
                            <p>We believe in continuous evaluation to track progress and ensure thorough understanding. Our assessments build skills for effective time management.</p>
                            <div className="card-footer">
                                <span className="feature-count">Weekly Tests</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Facilities;
