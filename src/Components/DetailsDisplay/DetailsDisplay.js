import React from 'react';
import ReactPlayer from 'react-player';
import PropTypes from 'prop-types';
import './DetailsDisplay.css';

const DetailsDisplay = ({ movieToDisplay, trailersToDisplay }) => {
  const releaseYear = movieToDisplay.release_date.split('-')[0]
  const rating = movieToDisplay.average_rating.toFixed(1)
  const genres = movieToDisplay.genres.map(genre => {
    return <p key={genre} className='details__each-genre'>{genre}</p>
  })

  return (
    <>
    <article className='details__backdrop'>
      <img 
        className='details__backdrop-img'
        src={movieToDisplay.backdrop_path}
        alt={`${movieToDisplay.title} movie backdrop`}
        />
        <h1 className='details__movie-title'>{movieToDisplay.title}</h1>
      </article>
      <article className='details__movie-specs'>
        <p className='details__movie-rating'>
          {`Tater Rating: ${rating}`}
        </p>
        <p className='details__movie-release'>
          {`${releaseYear} | ${movieToDisplay.runtime} mins`}
        </p>
        <p className='details__movie-overview'>
          {movieToDisplay.overview}
        </p>
          {!genres && 
          <div> No Genres to display
          </div>}
          {genres && 
          <div className='details__movie-genres'>
          Genre: {genres}
          </div>}
        {trailersToDisplay.length > 0 && 
        <ReactPlayer url={`https://www.youtube.com/watch?v=${trailersToDisplay[0].key}`} />}
    </article> 
    </>
  )
}

DetailsDisplay.propTypes = {
  movieToDisplay: PropTypes.object.isRequired,
  trailersToDisplay: PropTypes.array.isRequired
}
export default DetailsDisplay