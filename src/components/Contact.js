import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (formData.name && formData.email && formData.message) {
      setSubmitStatus('sending');
      
      // EmailJS configuration
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: 'pratikgoswami1322@gmail.com'
      };
      
      // Send email using EmailJS
      emailjs.send(
        'service_1322', // Replace with your EmailJS service ID
        'template_u9khrf8', // Replace with your EmailJS template ID
        templateParams,
        '77O-J_wXzeiDV4rOz' // Replace with your EmailJS public key
      )
      .then(() => {
        setSubmitStatus('sent');
        setFormData({ name: '', email: '', message: '' });
        
        // Reset status
        setTimeout(() => {
          setSubmitStatus('');
        }, 3000);
      })
      .catch((error) => {
        console.error('EmailJS Error:', error);
        setSubmitStatus('error');
        setTimeout(() => {
          setSubmitStatus('');
        }, 3000);
      });
    } else {
      setSubmitStatus('error');
      setTimeout(() => {
        setSubmitStatus('');
      }, 2000);
    }
  };

  const contactInfo = [
    {
      icon: 'fas fa-envelope',
      text: 'pratikgoswami1322@gmail.com',
      link: 'mailto:pratikgoswami1322@gmail.com'
    },
    {
      icon: 'fas fa-phone',
      text: '+91-8712452036',
      link: null
    },
    {
      icon: 'fab fa-linkedin',
      text: 'linkedin.com/in/pratik-goswamii',
      link: 'https://www.linkedin.com/in/pratik-goswamii/'
    },
    {
      icon: 'fab fa-github',
      text: 'github.com/pratikgoswamii',
      link: 'https://github.com/pratikgoswamii'
    },
    {
      icon: 'fas fa-file-pdf',
      text: 'Download Resume',
      link: '/resume.pdf'
    }
  ];

  return (
    <section id="contact" className="contact parallax-container">
      <div className="parallax-bg"></div>
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-content">
          <div className="contact-info animate-slide-left">
            {contactInfo.map((item, index) => (
              <div key={index} className="contact-item">
                <div className="contact-icon">
                  <i className={item.icon}></i>
                </div>
                {item.link ? (
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    {item.text}
                  </a>
                ) : (
                  <span>{item.text}</span>
                )}
              </div>
            ))}
          </div>
          <form className="contact-form animate-slide-right" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button 
              type="submit" 
              className={`btn primary ${submitStatus}`}
            >
              {submitStatus === 'sending' ? 'Sending...' : 
               submitStatus === 'sent' ? 'Message Sent!' :
               submitStatus === 'error' ? 'Please fill all fields' : 
               'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;