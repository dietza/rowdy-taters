import React, { Component } from 'react';
// import movieData from '../../movieData'
import Header from '../Header/Header';
import Movies from '../Movies/Movies';
import Details from '../Details/Details'
import { fetchAllMovies } from '../../apiCalls'
import tater from '../../rowdytater1.png'

class App extends Component {
  constructor() {
    super()
    this.state = {
      allMovies: [],
      isMovieSelected: false,
      selectedMovieID: null,
      isLoading: true,
      error: ""
    }
  }

  toggleSelection = (movieID) => {
    this.setState({
      isMovieSelected: !this.state.isMovieSelected, 
      selectedMovieID: movieID,
     })
  }

  componentDidMount = () => {
    fetchAllMovies()
      .then(movies => this.setState({ allMovies: movies.movies, isLoading: false }))
      .catch(error => this.setState({ error: "These taters got too rowdy - check back later!"}))
  }

  render() {
    return (
      <>
        <Header />
        {this.state.error !== "" && 
        <>
          <h2>{this.state.error}</h2>
          <img src={tater} alt="Angry Potato Icon"/>
        </>}

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
//conditional render for whole render chunk 
export default App;
