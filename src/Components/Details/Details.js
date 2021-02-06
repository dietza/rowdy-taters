import React, { Component } from 'react'
import apiCalls from '../../apiCalls'
import DetailsDisplay from '../DetailsDisplay/DetailsDisplay'
import backArrow from './double-left-arrows.svg'
import './Details.css'

class Details extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedMovieID: props.selectedMovieID,
      movieToDisplay: {},
      isLoading: true,
      error: ""
    }
  }

  componentDidMount() {
    apiCalls.fetchMovieDetails(this.state.selectedMovieID)
      .then(movie => this.setState({ movieToDisplay: movie.movie, isLoading: false }))
      .catch(error => this.setState({ error: "These taters got too rowdy - check back later!"}))
  }
  
  clearID = () => {
    this.props.hideSelection(null)
  }
  
  render() {
    return (
      <section className='details__details-view'>
        <button className='return-to-home-view-btn' onClick={this.clearID}>
        <img src={backArrow} alt='back arrow icon' className='details__back-arrow'/>
        {'All Movies'}
        </button>

        {this.state.error !== "" && <h2>{this.state.error}</h2>}

        {this.state.isLoading && 
        <h1>Loading...</h1>}

        {!this.state.isLoading && 
        <DetailsDisplay movieToDisplay={this.state.movieToDisplay} />}
      </section>
    )
  }
}

export default Details