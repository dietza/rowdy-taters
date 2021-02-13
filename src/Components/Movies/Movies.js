import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import MovieCard from '../MovieCard/MovieCard'
import './Movies.css'

const Movies = ({ allMovies, showSelection }) => {
  const moviesToDisplay = allMovies.map(movie => {
    return (
      <Link to={`/${movie.id}`}>
        <MovieCard 
          key={movie.id} 
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

export default Movies