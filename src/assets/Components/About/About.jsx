import React from "react";
import { Link } from "react-router-dom";
import "./about.css";
import Navbar from "../../Components/Navbar/Navbar";

import "./about.css";
// Import mini carousel
import MiniCarousel from "../../Components/Carousel/MiniCarousel";

import {
  FaUsers,
  FaCogs,
  FaFire,
  FaTools,
  FaLightbulb,
  FaHandshake,
  FaBalanceScale,
} from "react-icons/fa";

const About = () => {
  return (
    <div className="about-page">
      <Navbar />

      <main>
        {/* About Us Section */}
        <section className="background content-section animate-slide-up">
          <div className="content-grid">
            <div className="content-text">
              <div className="section-header">
                <h2>About Us</h2>
                <div className="divider"></div>
              </div>
              <p>
                HAF IMPORT AND SUPPLY TRADE Company is established during the
                year of 2017 under Addis Ababa City Administration Trade and
                Industry Development Bureau, with an aim to import, supply and
                distributes different machines, equipment’s and materials. Our
                company has successfully completed various supplies with whole
                dedication and commitments within our short journey related to
                supply and installation of different machines and equipment’s to
                governmental and non-governmental organizations.
              </p>
              <div className="stats-container">
                <div className="stat-item">
                  <div className="stat-number">6+</div>
                  <div className="stat-label">Years in Business</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">50+</div>
                  <div className="stat-label">Happy Clients</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">100+</div>
                  <div className="stat-label">Products</div>
                </div>
              </div>
            </div>

            {/* Carousel on the right */}
            <div className="content-image">
              <MiniCarousel />
            </div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <div className="mission-vision-container">
          <section className="mission content-section animate-slide-up">
            <div className="section-header">
              <div className="icon-container">
                <FaCogs className="section-icon" />
              </div>
              <h2>Our Mission</h2>
            </div>
            <div className="content-card">
              <p>
                Provide high-quality products and services to customers at
                competitive prices; ensure professional and economic development
                and job security of employees; ensure continual growth and
                significant competitiveness of the company; support social
                responsibility and play a constructive role in the development
                of the country.
              </p>
              <div className="pattern-dots"></div>
            </div>
          </section>

          <section className="vision content-section animate-slide-up">
            <div className="section-header">
              <div className="icon-container">
                <FaFire className="section-icon" />
              </div>
              <h2>Our Vision</h2>
            </div>
            <div className="content-card">
              <p>
                To be the leading one-stop service provider for imports,
                supplies, and distribution needs in Ethiopia and to gain a major
                market share in the country and become among the market leaders
                in the businesses we participate in by 2025.
              </p>
              <div className="pattern-lines"></div>
            </div>
          </section>
        </div>

        {/* Core Values Section */}
        <section className="values content-section animate-slide-up">
          <div className="section-header">
            <h2>Our Core Values</h2>
            <div className="divider"></div>
          </div>
          <div className="values-list">
            <div className="value-item animate-pop">
              <div className="value-icon"><FaUsers /></div>
              <div className="value-content">
                <strong>Belief in Growth</strong>
                <p>We believe in growing with our clients using a win-win principle.</p>
              </div>
            </div>
            <div className="value-item animate-pop">
              <div className="value-icon"><FaCogs /></div>
              <div className="value-content">
                <strong>Skill Development</strong>
                <p>Our skills are developed to exceed our clients' interests and requirements.</p>
              </div>
            </div>
            <div className="value-item animate-pop">
              <div className="value-icon"><FaFire /></div>
              <div className="value-content">
                <strong>Passion and Desire</strong>
                <p>We are fueled by our desire and passion towards a clear objective.</p>
              </div>
            </div>
            <div className="value-item animate-pop">
              <div className="value-icon"><FaLightbulb /></div>
              <div className="value-content">
                <strong>Knowledge from Clients</strong>
                <p>We believe our clients are the main source of knowledge.</p>
              </div>
            </div>
            <div className="value-item animate-pop">
              <div className="value-icon"><FaHandshake /></div>
              <div className="value-content">
                <strong>Long-term Partnerships</strong>
                <p>We believe our clients and suppliers are our long-term partners.</p>
              </div>
            </div>
            <div className="value-item animate-pop">
              <div className="value-icon"><FaTools /></div>
              <div className="value-content">
                <strong>Client-Centric Solutions</strong>
                <p>We deploy solutions based on our clients' needs, not ours.</p>
              </div>
            </div>
            <div className="value-item animate-pop">
              <div className="value-icon"><FaBalanceScale /></div>
              <div className="value-content">
                <strong>Respect and Fairness</strong>
                <p>Respect customers, fairness, transparency, teamwork, and social responsibility.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;
