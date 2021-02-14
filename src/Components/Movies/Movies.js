import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import MovieCard from '../MovieCard/MovieCard'
import './Movies.css'

const Movies = ({ allMovies, showSelection, filteredMovies }) => {

  let moviesToDisplay;

  // if (filteredMovies) {
  //   createMovieCards(filteredMovies)
  // } else {
  //   createMovieCards(allMovies)
  // }

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

    return moviesToDisplay
  }

  if (filteredMovies.length > 0) {
    createMovieCards(filteredMovies)
  } else {
    createMovieCards(allMovies)
  }

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