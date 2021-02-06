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
      selectedMovieID: null,
    }
  }

  toggleSeletion = (movieID) => {
    this.setState({
      isMovieSelected: !this.state.isMovieSelected, 
      selectedMovieID: movieID,
     })
  }

  render() {
    return (
      <>
        <Header />
        {!this.state.isMovieSelected && 
        <Movies 
        allMovies={this.state.allMovies} 
        showSelection={this.toggleSeletion}/>}
        {this.state.isMovieSelected && 
        <Details 
        allMovies={this.state.allMovies}
        selectedMovieID={this.state.selectedMovieID}
        hideSelection={this.toggleSeletion}/>}
      </>
    )
  }
}

export default App;
