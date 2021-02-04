import React, { Component } from 'react';
import Header from '../Header/Header';
import Movies from '../Movies/Movies';
import movieData from '../../movieData'
import Details from '../Details/Details'

class App extends Component {
  constructor() {
    super()
    this.state = {
      allMovies: movieData.movies,
      isMovieSelected: false,
    }
  }

  render() {
    return (
      <>
        <Header />
        {!this.state.isMovieSelected && 
        <Movies allMovies={this.state.allMovies}/>}
        {this.state.isMovieSelected && 
        <Details />}
      </>
    )
  }
}

export default App;
