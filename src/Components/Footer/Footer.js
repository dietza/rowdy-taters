import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
    <Link to="/about" className="about">
      <h2 className="about-link">About</h2>
    </Link>
    <Link to="/contact-us" className="contact">
      <h2 className="contact-link">Contact Us</h2>
    </Link>
    </footer>
  )
}

export default Footer;