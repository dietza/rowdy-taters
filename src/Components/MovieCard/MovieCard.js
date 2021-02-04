import React from 'react'

const MovieCard = ({ info }) => {
  const releaseYear = info.release_date.split('-')[0]
  const rating = info.average_rating.toFixed(1)

  return (
    <>
      <img
        className='poster'
        src={info.poster_path}
        alt={`${info.title} movie poster`}
      />
      <h2 className='movie-title'>
        {info.title}
      </h2>
      <p className='movie-release'>
        {releaseYear}
      </p>
      <p className='movie-rating'>
        {`Tater Rating: ${rating}`}
      </p>
    </>
  )
}

export default MovieCard