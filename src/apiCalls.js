export const fetchAllMovies = () => {
  return fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
    .then(response => response.json())
  }

export const fetchMovieDetails = (movieID) => {
  return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${movieID}`)
    .then(response => response.json())
}

export const fetchMovieVideos = (movieID) => {
  return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${movieID}/videos`)
    .then(response => response.json())
}
