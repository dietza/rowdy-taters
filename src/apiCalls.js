const apiCalls = {
  fetchAllMovies() {
    return fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
      .then(response => response.json())
  },

  fetchMovieDetails(movieID) {
    return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${movieID}`)
      .then(response => response.json())
  }
}

export default apiCalls;