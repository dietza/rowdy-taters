import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import MovieCard from '../MovieCard/MovieCard'
import './Movies.css'

const Movies = ({ allMovies, showSelection }) => {
  const moviesToDisplay = allMovies.map(movie => {
    return (
      <Link 
        to={`/${movie.id}`} 
        key={movie.id} 
      >
        <MovieCard 
          info={movie} 
          showSelection={showSelection}
        />
      </Link>
    )
  })

  return (
    <section className='movie-card-container'>
      {moviesToDisplay}
    </section>
  )
}

Movies.propTypes = {
  allMovies: PropTypes.arrayOf(PropTypes.object),
  showSelection: PropTypes.func
}

export default Movies