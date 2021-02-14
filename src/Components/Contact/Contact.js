import React from 'react';
import { Link } from 'react-router-dom';
import backArrow from '../../double-left-arrows.svg';
import './Contact.css'

const Contact = () => {
  return (
      <section className="contact-section">

        <Link to='/' className='return-to-home-link'>
          <button className='contact__return-to-home-view-btn'>
            <img src={backArrow} alt='back arrow icon' className='contact__back-arrow'/>
            All Movies
          </button>
        </Link>
        <h1>Contact Us</h1>
        <section className="contacts">
          <article>
            <img src="" alt="BEAUTIFUL ALLISON"/>
            <p>link to Allison's amazing github</p>
          </article>
          <article>
            <img src="" alt="BEAUTIFUL KB"/>
            <p>link to KB's amazing github</p>
          </article>
        </section>
      </section>
      
  )
}

export default Contact