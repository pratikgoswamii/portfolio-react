import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      number: '01',
      title: 'DRSA - Digital Roadside Assistance',
      duration: 'May 2023 - May 2025',
      description: 'Deployed 7 Python-based microservices to ECS Fargate using ECR, with traffic management via NLB and ALB. Built CI/CD pipelines on Jenkins for automated deployment and implemented comprehensive AWS security.',
      technologies: ['AWS ECS', 'ECR', 'Jenkins', 'Docker', 'S3', 'RDS', 'Lambda', 'ALB', 'Route 53', 'CloudWatch']
    },
    {
      number: '02',
      title: 'Water ERP - Municipal Services',
      duration: 'May 2025 - Present',
      description: 'Spearheaded end-to-end DevOps for microservices-based water billing system. Managed 17 Dockerized services with GitHub Actions CI/CD, implementing GitOps practices and container security scanning.',
      technologies: ['GitHub Actions', 'Docker Compose', 'Kafka', 'Zookeeper', 'PostgreSQL', 'Trivy']
    },
    {
      number: '03',
      title: 'Global Network Device Integration',
      duration: 'Sep 2024 - Nov 2024',
      description: 'Integrated 1,200+ network devices into SolarWinds NMS across 72 global locations. Improved system efficiency by 30% and reduced response times by 2+ hours daily through optimization.',
      technologies: ['SolarWinds', 'Network Management', 'Cisco Devices', 'Monitoring']
    }
  ];

  return (
    <section id="projects" className="projects parallax-container">
      <div className="parallax-bg"></div>
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className={`project-card animate-slide-up delay-${index}`}>
              <div className="project-number">{project.number}</div>
              <div className="project-header">
                <h3>{project.title}</h3>
                <span className="project-duration">{project.duration}</span>
              </div>
              <p>{project.description}</p>
              <div className="project-tech">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex}>{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;