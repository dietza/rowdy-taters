import React from 'react';
import { Link } from 'react-router-dom';
import backArrow from '../../assets/double-left-arrows.svg';
import AD from '../../assets/AD.jpg';
import KB from '../../assets/KB1.jpg';
import './Contact.css';

const Contact = () => {
  return (
      <section className="contact-section">

        <Link to='/' className='contact__return-to-home-link'>
          <button className='contact__return-to-home-view-btn'>
            <img src={backArrow} alt='back arrow icon' className='contact__back-arrow'/>
            All Movies
          </button>
        </Link>
        <h1>Contact Us</h1>
        <section className="contacts">
          <article className="contact-info AD">
            <div className="prof-pic-wrap">
            <img src={AD} alt="BEAUTIFUL ALLISON" className="prof-pic"/>
            </div>
            <a 
              href="https://github.com/dietza" 
              target="_blank" 
              className="github-link">Allison D</a>
          </article>
          <article className="contact-info KB">
            <div className="prof-pic-wrap">
              <img src={KB} alt="BEAUTIFUL KRISTEN" className="prof-pic"/>
            </div>
            <a 
              href="https://github.com/kristenmb" 
              target="_blank" 
              className="github-link">Kristen B</a>
          </article>
        </section>
      </section>
      
  )
}

export default Contact;