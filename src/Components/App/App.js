import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Movies from '../Movies/Movies';
import Details from '../Details/Details'
import About from '../About/About'
import Contact from '../Contact/Contact'
import { fetchAllMovies } from '../../apiCalls'
import './App.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      allMovies: [],
      filteredMovies: null,
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
      .catch(error => this.setState({ error: 'These taters got too rowdy - check back later!'}))
  }

  filterMoviesDisplay = (searchTerms) => {
    const allMovies = this.state.allMovies;
    const filteredMovies = allMovies.filter(movie => {
      const searchTitle = movie.title.toLowerCase()
      return searchTitle.includes(searchTerms.toLowerCase())
    })
    
    this.setState({
      filteredMovies: filteredMovies,
    })
  }

  render() {
    return (
      <>
        <Header filterMoviesDisplay={ this.filterMoviesDisplay }/>
      
        {this.state.error !== "" && <h2 className='error-message'>{this.state.error}</h2>}

        <Switch >
          <Route exact path='/' 
            render={ () => { 
              return <Movies 
              allMovies={this.state.allMovies} 
              showSelection={this.toggleSelection}
              filteredMovies={this.state.filteredMovies}/>
            }}/>
          
          <Route path='/about' component={ About }/>

          <Route path='/contact-us' component={ Contact }/>

          <Route path='/:id' 
            render={( {match} ) => { 
              return <Details 
              selectedMovieID={match.params.id}
              hideSelection={this.toggleSelection}/>
            }}/>
    
          </Switch>
    
        <Footer />
      </>
    )
  }
}

export default App;
