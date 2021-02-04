import React, { Component } from 'react';
import Header from '../Header/Header';
import Movies from '../Movies/Movies';
import movieData from '../../movieData'

class App extends Component {
  constructor() {
    super()
    this.state = {
      allMovies: movieData.movies
    }
  }

  render() {
    console.log(this.state.allMovies)
    return (
      <>
        <Header />
        <Movies />
      </>
    )
  }
}

export default App;
