import React, { Component } from 'react'
import './Details.css'
import backArrow from './double-left-arrows.svg'
import apiCalls from '../../apiCalls'
import DetailsDisplay from '../DetailsDisplay/DetailsDisplay'

class Details extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedMovieID: props.selectedMovieID,
      movieToDisplay: {},
      isLoading: true,
    }
  }

  componentDidMount() {
    apiCalls.fetchMovieDetails(this.state.selectedMovieID)
    .then(movie => this.setState({ movieToDisplay: movie.movie, isLoading: false }))
  }
  
  clearID = () => {
    this.props.hideSelection(null)
  }
  
  render() {
    console.log(this.state.movieToDisplay, "MOVIE INFO")

    return (
      <section className='details__details-view'>
        <button className='return-to-home-view-btn' onClick={this.clearID}>
        <img src={backArrow} alt='back arrow icon' className='details__back-arrow'/>
        {'All Movies'}
      </button>

        {this.state.isLoading && 
        <h1>Loading...</h1>}

        {!this.state.isLoading && 
        <DetailsDisplay 
          key={this.state.selectedMovieID} 
          movieToDisplay={this.state.movieToDisplay}
        />}
      </section>
    )
  }
}

export default Details