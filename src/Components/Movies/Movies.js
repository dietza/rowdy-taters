import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import MovieCard from '../MovieCard/MovieCard'
import './Movies.css'

const Movies = ({ allMovies, showSelection, filteredMovies }) => {

  let moviesToDisplay;

  const createMovieCards = (movies) => {
    moviesToDisplay = movies.map(movie => {
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
  }

  if (filteredMovies) {
    createMovieCards(filteredMovies)
  } else {
    createMovieCards(allMovies)
  }

  return (
    <section className='movie-card-container'>
      { moviesToDisplay.length === 0 && <h2>Sorry, no movies matched your search!</h2> }
      {moviesToDisplay}
    </section>
  )
}

Movies.propTypes = {
  allMovies: PropTypes.arrayOf(PropTypes.object),
  showSelection: PropTypes.func,
  filteredMovies: PropTypes.arrayOf(PropTypes.object)
}

export default Movies