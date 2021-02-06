import React, { Component } from 'react';
// import movieData from '../../movieData'
import Header from '../Header/Header';
import Movies from '../Movies/Movies';
import Details from '../Details/Details'
import apiCalls from '../../apiCalls'

class App extends Component {
  constructor() {
    super()
    this.state = {
      allMovies: [],
      isMovieSelected: false,
      selectedMovieID: null,
      isLoading: true
    }
  }

  toggleSelection = (movieID) => {
    this.setState({
      isMovieSelected: !this.state.isMovieSelected, 
      selectedMovieID: movieID,
     })
  }

  componentDidMount = () => {
      apiCalls.fetchAllMovies()
      .then(movies => this.setState({ allMovies: movies.movies, isLoading: false }))
  }

  render() {
    return (
      <>
        <Header />
        {!this.state.isMovieSelected && !this.state.isLoading &&
        <Movies 
        allMovies={this.state.allMovies} 
        showSelection={this.toggleSelection}/>}
        {this.state.isMovieSelected && 
        <Details 
        selectedMovieID={this.state.selectedMovieID}
        hideSelection={this.toggleSelection}/>}
      </>
    )
  }
}

export default App;
