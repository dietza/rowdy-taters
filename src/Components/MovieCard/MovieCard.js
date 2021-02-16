import React from 'react';
import PropTypes from 'prop-types';
import './MovieCard.css';

const MovieCard = ({ info, showSelection }) => {
  const releaseYear = info.release_date.split('-')[0]
  const rating = info.average_rating.toFixed(1)

  const getID = () => {
    const movieID = info.id
    showSelection(movieID)
  }

  return (
    <article className='movie-card' onClick={getID} id={info.id}>
      <img
        className='poster'
        src={info.poster_path}
        alt={`${info.title} movie poster`}
      />
      <div className='movie-specs'>
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

MovieCard.propTypes = {
  info: PropTypes.object,
  showSelection: PropTypes.func
}

export default MovieCard;