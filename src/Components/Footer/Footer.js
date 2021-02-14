import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
    <Link to="/about" >
      <h3 className="about-link">About</h3>
    </Link>
    <Link to="/contact-us">
      <h3 className="contact-link">Contact Us</h3>
    </Link>
    </footer>
  )
}

export default Footer