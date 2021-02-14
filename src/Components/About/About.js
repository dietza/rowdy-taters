import React from 'react';
import { Link } from 'react-router-dom'
import backArrow from '../../double-left-arrows.svg'


const About = () => {
  return (
    <>
    <Link to='/'>
      <button className='return-to-home-view-btn'>
        <img src={backArrow} alt='back arrow icon' className='details__back-arrow'/>
        All Movies
      </button>
    </Link>
    <h1>About Rowdy Taters</h1>
    <img src="" alt="BEAUTIFUL CAT"/>
    <p>info about the most perfect and rowdy cat there ever was, tater tot </p>
    </>
  )
}

export default About