import React from 'react';
import ReactPlayer from 'react-player';
import PropTypes from 'prop-types';

const DetailsDisplay = ({ movieToDisplay, trailersToDisplay }) => {
  const releaseYear = movieToDisplay.release_date.split('-')[0]
  const runtime = movieToDisplay.runtime
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

        {releaseYear && runtime !== 0 && <p className='details__movie-release'>
          {`${releaseYear} | ${runtime} mins`}
        </p>}
        {releaseYear && runtime === 0 && <p className='details__movie-release'>
          {`${releaseYear}`}
        </p>}
        {!releaseYear && runtime !== 0 && <p className='details__movie-release'>
          {`${runtime} mins`}
        </p>}
        
        {movieToDisplay.overview && <p className='details__movie-overview'> {movieToDisplay.overview} </p>}
        {!movieToDisplay.overview && <p>No synopsis provided</p>}

        {!genres && 
        <div> No Genres to display
        </div>}
        {genres && 
        <div className='details__movie-genres'>
        Genre: {genres}
        </div>}

        {trailersToDisplay.length > 0 && 
        <ReactPlayer 
          key={ trailersToDisplay.id }
          width={ '50vw' }
          url={`https://www.youtube.com/watch?v=${trailersToDisplay[0].key}`} 
        />}

    </article> 
    </>
  )
}

DetailsDisplay.propTypes = {
  movieToDisplay: PropTypes.object.isRequired,
  trailersToDisplay: PropTypes.arrayOf(PropTypes.object)
}

export default DetailsDisplay