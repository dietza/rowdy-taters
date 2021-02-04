import React from 'react';
import MovieCard from '../MovieCard/MovieCard'
import './Movies.css'

const Movies = ({ allMovies, showSelection }) => {
  const moviesToDisplay = allMovies.map(movie => {
    return (
      <MovieCard 
        key={movie.id} 
        info={movie} 
        showSelection={showSelection}
      />
    )
  })

  return (
    <section className='movie-card-container'>
      {moviesToDisplay}
    </section>
  )
}

export default Movies