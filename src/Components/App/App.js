import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
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

  render() {
    return (
      <>
        <Header />
        {this.state.error !== "" && <h2 className='error-message'>{this.state.error}</h2>}

        <Switch >
          <Route exact path='/' 
            render={ () => { 
              return <Movies 
              allMovies={this.state.allMovies} 
              showSelection={this.toggleSelection}/>
            }}/>
          
          <Route path='/about' component={ About }/>

          <Route path='/contact-us' component={ Contact }/>

          <Route path='/:id' 
            render={( {match} ) => { 
              console.log('MATCH in Route', match)
              
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
