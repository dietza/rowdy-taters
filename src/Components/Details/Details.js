import React from 'react'
import './Details.css'
import backArrow from './double-left-arrows.svg'

const Details = ({ allMovies, selectedMovieID, hideSelection }) => {

  const movieToDisplay = allMovies.find(movie => {
    return movie.id === selectedMovieID
  })

  console.log('MOVIE >>> ', movieToDisplay)

  const releaseYear = movieToDisplay.release_date.split('-')[0]
  const rating = movieToDisplay.average_rating.toFixed(1)
  const genres = movieToDisplay.genres.map(genre => {
  return <p>{genre}</p>
  })

  const clearID = () => {
    hideSelection(null)
  }

  return (
    // <>
    <section className='details__details-view'>
      <button className='return-to-home-view-btn' onClick={clearID}>
        <img src={backArrow} alt='back arrow icon' className='details__back-arrow'/>
        {'All Movies'}
      </button>
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
          {releaseYear}
        </p>
        <p className='details__movie-runtime'>
          {`${movieToDisplay.runtime} mins`}
        </p>
        <p className='details__movie-overview'>
          {movieToDisplay.overview}
        </p>
        <div className='details__movie-genres'>
          {genres}
        </div>
      </article>
      {/* <p>{videos???}</p> */}
    </section>

    // </>
  )
}

export default Details