import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      icon: 'fas fa-cloud',
      title: 'Cloud & Infrastructure',
      skills: ['AWS', 'AWS CDK', 'Terraform', 'Ansible']
    },
    {
      icon: 'fas fa-cogs',
      title: 'DevOps & CI/CD',
      skills: ['Docker', 'Kubernetes', 'Jenkins', 'GitHub Actions', 'GitLab CI', 'Argo CD']
    },
    {
      icon: 'fas fa-shield-alt',
      title: 'Security & Compliance',
      skills: ['OWASP', 'SonarQube', 'Trivy']
    },
    {
      icon: 'fas fa-chart-line',
      title: 'Monitoring & Observability',
      skills: ['Prometheus', 'Grafana', 'CloudWatch', 'SolarWinds']
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Technical Skills</h2>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className={`skill-category animate-float delay-${index}`}>
              <div className="skill-icon">
                <i className={category.icon}></i>
              </div>
              <h3>{category.title}</h3>
              <div className="skill-items">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;