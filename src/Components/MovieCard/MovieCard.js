import React from 'react'
import './MovieCard.css'

const MovieCard = ({ info }) => {
  const releaseYear = info.release_date.split('-')[0]
  const rating = info.average_rating.toFixed(1)

  return (
    <article className='movie-card'>
      <img
        className='poster'
        src={info.poster_path}
        alt={`${info.title} movie poster`}
      />
      <div className="movie-specs">
        <h2 className='movie-title'>
          {info.title}
        </h2>
        <p className='movie-release'>
          {releaseYear}
        </p>
        <p className='movie-rating'>
          {`Tater Rating: ${rating}`}
        </p>
      </div>
    </article>
  )
}

export default MovieCard