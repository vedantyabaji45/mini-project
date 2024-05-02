import React from 'react';
import './FooterStyles.css';
import { FaHome, FaPhone, FaMailBulk, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: '#000', marginRight: '2rem' }} />
            <div>
              <p>G - 308 VIT Mens Hostels</p>
              <p>Tamilnadu.</p>
            </div>
          </div>
          <div className="phone">
            <h4>
              <FaPhone size={20} style={{ color: '#000', marginRight: '2rem' }} />
              +91 133 434 3423
            </h4>
          </div>
          <div className="email">
            <h4>
              <FaMailBulk size={20} style={{ color: '#000', marginRight: '2rem' }} />
              laxman@gmail.com
            </h4>
          </div>
        </div>
        <div className="right">
          <h4> About the Company</h4>
          <p> This is me laxman . I enjoy discussing new projects and design challenges.</p>
          <div className="socials">
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={30} style={{ color: '#000', marginRight: '1rem' }} />
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
              <FaTwitter size={30} style={{ color: '#000', marginRight: '1rem' }} />
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={30} style={{ color: '#000', marginRight: '1rem' }} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
