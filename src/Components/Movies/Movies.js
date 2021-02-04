import React from 'react';
import MovieCard from '../MovieCard/MovieCard'

const Movies = ({ allMovies }) => {
  const moviesToDisplay = allMovies.map(movie => {
    return (
      <MovieCard info={movie}/>
    )
  })

  return (
    <>
      {moviesToDisplay}
    </>
  )
}

export default Movies