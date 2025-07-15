import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p className="animate-slide-right">
              2+ years experienced Cloud & DevOps Engineer at Softforce Consultants, operated solo for the company, 
              handling end-to-end automation on cloud (AWS) using CI/CD, containerization, monitoring and logging, 
              and database management.
            </p>
            <p className="animate-slide-right delay-1">
              Successfully architected scalable and highly available infrastructure, and built on-premise web and 
              database servers to cut costs. Specialized in microservices deployment and GitOps practices.
            </p>
          </div>
          <div className="about-stats">
            <div className="stat animate-scale delay-2">
              <h3>2+</h3>
              <p>Years Experience</p>
            </div>
            <div className="stat animate-scale delay-3">
              <h3>25+</h3>
              <p>Projects</p>
            </div>
            <div className="stat animate-scale delay-4">
              <h3>1200+</h3>
              <p>Devices Managed</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;