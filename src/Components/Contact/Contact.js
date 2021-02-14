import React from 'react';
import { Link } from 'react-router-dom';
import backArrow from '../../double-left-arrows.svg';

const Contact = () => {
  return (
      <>
        <Link to='/'>
          <button className='return-to-home-view-btn'>
            <img src={backArrow} alt='back arrow icon' className='details__back-arrow'/>
            All Movies
          </button>
        </Link>
        <h1>Contact Us</h1>
        <img src="" alt="BEAUTIFUL ALLISON"/>
        <p>link to Allison's amazing github</p>
        <img src="" alt="BEAUTIFUL KB"/>
        <p>link to KB's amazing github</p>
      </>
  )
}

export default Contact