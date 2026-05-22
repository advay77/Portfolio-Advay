import "./styles/About.css";
import { config } from "../config";
import { FaCode, FaRocket, FaQuoteLeft } from "react-icons/fa";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-container section-container">
        <h3 className="about-heading-title">{config.about.title}</h3>
        
        <div className="about-bento-grid">
          {/* Card 1: Main Bio */}
          <div className="bento-card bento-bio">
            <div className="bento-card-header">
              <FaCode className="bento-icon" />
              <span>Who I Am</span>
            </div>
            <p className="bento-desc">
              Hi Everyone, I am <strong>Advay Anand</strong>, a passionate **Full Stack AI Developer** based in India. I specialize in building highly responsive, scalable, and intelligent digital systems that respect users and solve complex real-world challenges.
            </p>
            <p className="bento-subdesc">
              Whether it's orchestrating large language models, developing robust backend pipelines, or crafting smooth interactive client-side applications, my focus is always on clean architecture and absolute visual excellence.
            </p>
          </div>

          {/* Card 2: Stats Grid */}
          <div className="bento-card bento-stats">
            <div className="bento-card-header">
              <FaRocket className="bento-icon" />
              <span>Key Achievements</span>
            </div>
            <div className="stats-grid">
              <div className="stat-item">
                <span className="stat-number">4+</span>
                <span className="stat-label">Years Coding</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">10+</span>
                <span className="stat-label">Clients Served</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">5+</span>
                <span className="stat-label">AI Systems</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">100%</span>
                <span className="stat-label">Commitment</span>
              </div>
            </div>
          </div>

          {/* Card 3: Quote Card */}
          <div className="bento-card bento-quote">
            <FaQuoteLeft className="quote-giant-icon" />
            <div className="quote-content">
              <p className="quote-text">
                "Frustration makes you a better coder 😉🫱🏻‍🫲🏻"
              </p>
              <span className="quote-author">- Advay Anand</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
