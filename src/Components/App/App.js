import React, { Component } from 'react';
import movieData from '../../movieData'
import Header from '../Header/Header';
import Movies from '../Movies/Movies';
import Details from '../Details/Details'

class App extends Component {
  constructor() {
    super()
    this.state = {
      allMovies: movieData.movies,
      isMovieSelected: false,
    }
  }

  toggleSeletion = () => {
    this.setState({ isMovieSelected: !this.state.isMovieSelected })
  }

  render() {
    return (
      <>
        <Header />
        {!this.state.isMovieSelected && 
        <Movies allMovies={this.state.allMovies} 
        showSelection={this.toggleSeletion}/>}
        {this.state.isMovieSelected && 
        <Details hideSelection={this.toggleSeletion}/>}
      </>
    )
  }
}

export default App;
