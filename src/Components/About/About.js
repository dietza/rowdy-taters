import React from 'react';
import { Link } from 'react-router-dom'
import backArrow from '../../double-left-arrows.svg'
import tot from '../../tater_tot.jpg'

import './About.css'

const About = () => {
  return (
    <>
    <Link to='/' className="about__return-to-home-link">
      <button className='about__return-to-home-view-btn'>
        <img src={backArrow} alt='back arrow icon' className='about__back-arrow'/>
        All Movies
      </button>
    </Link>
    <section className="about-section">
      <div className="img-wrap">
        <img 
          src={tot} 
          alt="BEAUTIFUL CAT"
          className="tater-tot-img"/>
      </div>
      <article className="about-section-text">
        <h1 className="about-heading"> So why "Rowdy Taters"?</h1>
        <p className="about-text">When we think of an opinionated, rambunctious, irreverent movie critic, we think of Tater Tot the cat. His keen eye and practiced talent for judgement, paired with his innate couch potato tendencies, as well as his unique perspective as someone not of the human species, gives him an unparalleled view of the movies in question. <br/> <br/> 
        Though now that we think of it, maybe thats why Cats & Dogs 3 is one of the highest rated movies on the site...</p>
      </article>
    </section>
    </>
  )
}

export default About