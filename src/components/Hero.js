import React, { useEffect, useRef, useState } from 'react';
import './Hero.css';

const Hero = () => {
  const titleRef = useRef(null);
  const heroRef = useRef(null);
  const animationFrameRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [typedName, setTypedName] = useState('');
  const [showCaret, setShowCaret] = useState(true);

  useEffect(() => {
    // Typing effect
    const text = 'Pratik Goswami';
    let i = 0;
    let timeoutId;

    const typeWriter = () => {
      if (i < text.length) {
        setTypedName(text.substring(0, i + 1));
        i += 1;
        timeoutId = setTimeout(typeWriter, 120);
      } else {
        timeoutId = setTimeout(() => {
          setShowCaret(false);
        }, 1000);
      }
    };

    timeoutId = setTimeout(typeWriter, 1000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  useEffect(() => {
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    
    const xPos = (clientX / innerWidth - 0.5) * 20;
    const yPos = (clientY / innerHeight - 0.5) * 20;

    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }

    animationFrameRef.current = requestAnimationFrame(() => {
      setMousePosition({ x: xPos, y: yPos });
    });
  };

  const handleMouseLeave = () => {
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }
    setMousePosition({ x: 0, y: 0 });
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section 
      id="home" 
      className="hero parallax-container"
      ref={heroRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="parallax-bg"></div>
      <div 
        className="hero-content"
        style={{
          transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
          transition: mousePosition.x === 0 ? 'transform 0.3s ease' : 'none'
        }}
      >
        <div className="hero-badge animate-fade-up">DevOps Engineer</div>
        <h1
          ref={titleRef}
          className={`animate-fade-up delay-1 ${showCaret ? 'typing-caret' : ''}`}
        >
          {typedName}
        </h1>
        <p className="animate-fade-up delay-2">2+ Years of Experience in Cloud Infrastructure & Automation</p>
        <div className="hero-location animate-fade-up delay-3">
          <i className="fas fa-map-marker-alt"></i>
          <span>Hyderabad, India</span>
        </div>
        <div className="hero-buttons animate-fade-up delay-4">
          <button onClick={() => scrollToSection('projects')} className="btn primary">
            View Projects
          </button>
          <a href="/resume.pdf" className="btn secondary" target="_blank" rel="noopener noreferrer">
            <i className="fas fa-download"></i> Download Resume
          </a>
          <button onClick={() => scrollToSection('contact')} className="btn secondary">
            Get In Touch
          </button>
        </div>
      </div>
      <div className="scroll-indicator">
        <div className="scroll-arrow"></div>
      </div>
    </section>
  );
};

export default Hero;
